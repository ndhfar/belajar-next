"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function LoginAction(_, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const findUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!findUser) {
    return {
      status: "error",
      message: "user not found",
      data: {
        email,
        password,
      },
    };
  }

  const isPassword = await bcrypt.compare(password, findUser.password);
  if (!isPassword) {
    return {
      status: "error",
      message: "credential invalid",
      data: {
        email,
        password,
      },
    };
  }

  const payload = {
    id: findUser.id,
    name: findUser.username,
    email: findUser.email,
  };

  const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "20s",
  });
  cookies().set("token", jwtToken, { httpOnly: true });

  console.log(jwtToken);
  // return {
  //   status: "success",
  //   message: "Login success!",
  // };

  redirect("/dashboard");
}
