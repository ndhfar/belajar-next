"use client";

import { Avatar } from "./avatar";
import { UserContext } from "@/app/props-drilling/page";
import { useContext } from "react";

export const User = () => {
  const { username } = useContext(UserContext);
  return (
    <div className="flex flex-row-reverse gap-1 items-center">
      <Avatar username={username} />
      <h1 className="text-xl">{username}</h1>
    </div>
  );
};
