"use server";

import { google } from "@/utils/arctic";
import { generateState, generateCodeVerifier } from "arctic";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginGoogleAction() {
  //   generate state and code
  const state = generateState();
  const codeVerifier = generateCodeVerifier();

  //   save code to cookies
  cookies().set("codeVerifier", codeVerifier);

  //   create auth URL
  const url = await google.createAuthorizationURL(state, codeVerifier, {
    scopes: ["email", "profile"],
  });

  redirect(url.href);
}
