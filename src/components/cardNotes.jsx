"use client";

import { Button } from "./button";
import { useRouter } from "next/navigation";

export const CardNotes = ({ item }) => {
  const router = useRouter();

  async function handleDeleteNotes() {
    await fetch("https://v1.appbackend.io/v1/rows/lEEwI88dPgSd", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([item._id]),
    });

    router.refresh();
  }

  return (
    <div className="bg-blue-100 p-2 rounded-md space-y-3">
      <p>{item.notes}</p>
      <Button onClick={handleDeleteNotes}>Delete</Button>
    </div>
  );
};
