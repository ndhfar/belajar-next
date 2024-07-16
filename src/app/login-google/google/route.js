import { google } from "@/utils/arctic";
import { cookies } from "next/headers";
import { prisma } from "@/utils/prisma";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export async function GET(req) {
  // get the code
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const codeVerifier = cookies().get("codeVerifier").value;

  // code === codeVerifier - Validation
  const tokens = await google.validateAuthorizationCode(code, codeVerifier);

  // use token to get user info resource
  const res = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
    headers: {
      Authorization: `Bearer ${tokens.accessToken}`,
    },
  });
  const user = await res.json();
  console.log(user);

  //   find user
  const findUser = await prisma.user.findFirst({
    where: {
      email: user.email,
    },
  });

  //   check if exist
  if (!findUser) {
    const newUser = await prisma.user.create({
      data: {
        username: user.name,
        email: user.email,
      },
    });

    const payload = {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
    };

    const jwtToken = jwt.sign(payload, process.env.JWT_SECRET);
    cookies().set("token", jwtToken);

    redirect("/dashboard");
  }

  const payload = {
    id: findUser.id,
    username: findUser.username,
    email: findUser.email,
  };

  const jwtToken = jwt.sign(payload, process.env.JWT_SECRET);
  cookies().set("token", jwtToken);

  redirect("/dashboard");
}
