"use client";

import { Button } from "@/components/button";
import { useActionState } from "react";
import { LoginAction } from "./action";

export default function Home() {
  const [state, formAction, pending] = useActionState(LoginAction, null);

  return (
    <main className="min-h-screen flex justify-center items-center flex-col gap-1">
      <form className="flex flex-col gap-2" action={formAction}>
        <InputTemplate name="email" type="email" value={state?.data?.email} />
        <InputTemplate
          name="password"
          type="password"
          value={state?.data?.password}
        />
        <Button disabled={pending}>Login</Button>
      </form>
      <section>
        {state?.status === "success" ? (
          <div className="text-green-500 text-center">{state.message}</div>
        ) : null}
        {state?.status === "error" ? (
          <div className="text-red-500 text-center">{state.message}</div>
        ) : null}
      </section>
    </main>
  );
}

const InputTemplate = ({ name, type, value }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={name}
      className="outline-indigo-300 border border-slate-400 px-2 py-1 rounded-md"
      defaultValue={value}
    />
  );
};
