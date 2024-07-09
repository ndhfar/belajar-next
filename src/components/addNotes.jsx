"use client";

import { useState } from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

export const AddNotes = () => {
  const router = useRouter();
  const [notes, setNotes] = useState("");

  async function handleCreateNote() {
    await fetch("https://v1.appbackend.io/v1/rows/lEEwI88dPgSd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ notes }]),
    });

    router.refresh();
    setNotes("");
  }

  return (
    <form className="flex justify-between items-start gap-3">
      <textarea
        className="w-full px-2 py-1 border border-slate-200 outline-indigo-100"
        placeholder="Enter your notes..."
        rows="5"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>
      <Button onClick={handleCreateNote}>Add</Button>
    </form>
  );
};
