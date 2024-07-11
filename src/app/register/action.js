"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function RegisterAction(_, formData) {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password: hashPassword,
    },
  });

  return {
    status: "success",
    message: "Register success!",
  };
}
