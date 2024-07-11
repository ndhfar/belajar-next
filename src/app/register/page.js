"use client";

import { Button } from "@/components/button";
import { RegisterAction } from "./action";
import { useActionState } from "react";

export default function Home() {
  const [state, formAction, pending] = useActionState(RegisterAction, null);

  return (
    <main className="min-h-screen flex justify-center items-center flex-col gap-1">
      <form className="flex flex-col gap-2" action={formAction}>
        <InputTemplate name="username" type="text" />
        <InputTemplate name="email" type="email" />
        <InputTemplate name="password" type="password" />
        <Button disabled={pending}>Register</Button>
      </form>
      <section>
        {state?.status === "success" ? (
          <div className="text-green-500 text-center">{state.message}</div>
        ) : null}
      </section>
    </main>
  );
}

const InputTemplate = ({ name, type }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={name}
      className="outline-indigo-300 border border-slate-400 px-2 py-1 rounded-md"
    />
  );
};
