import { Auth } from "@/libs/auth";
import { redirect } from "next/navigation";

export default function Layout({ children }) {
  const user = Auth();
  console.log(user);

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex p-5">
      <aside className="w-[240px] bg-slate-200">
        <ul>
          <li>Home</li>
          <li>Archieve</li>
          <li>Assignment</li>
          <li>Certificate</li>
        </ul>
      </aside>
      <main>{children}</main>
    </div>
  );
}
