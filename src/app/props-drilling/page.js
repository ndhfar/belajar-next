"use client";

import { Header } from "@/components/header";
import { createContext } from "react";

export const UserContext = createContext();

export default function Home() {
  const username = "Ayasha";

  return (
    <UserContext.Provider value={{ username }}>
      <Header />
    </UserContext.Provider>
  );
}
