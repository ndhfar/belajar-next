"use server";

import { AddNotes } from "@/components/addNotes";
import { CardNotes } from "@/components/cardNotes";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/lEEwI88dPgSd", {
    cache: "no-store",
  });
  const { data } = await res.json();

  return (
    <main className="min-h-screen w-screen flex flex-col p-10 gap-2">
      <AddNotes />
      <section className="space-y-3">
        {data.map((item) => {
          return <CardNotes item={item} key={item._id} />;
        })}
      </section>
    </main>
  );
}
