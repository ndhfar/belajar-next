import { Button } from "@/components/button";
import { createNotesAction } from "./action";

export default function Home() {
  return (
    <main className="p-10">
      <form
        className="flex justify-between items-start gap-3"
        action={createNotesAction}
      >
        <textarea
          className="w-full px-2 py-1 border border-slate-200 outline-indigo-100"
          placeholder="Enter your notes..."
          rows="5"
          name="notes"
        ></textarea>
        <Button>Add</Button>
      </form>
    </main>
  );
}
