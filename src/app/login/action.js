"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

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

  return {
    status: "success",
    message: "Login success!",
  };
}
