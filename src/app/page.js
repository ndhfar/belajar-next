import { Button } from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <Link href="/props-drilling">
        <Button>Props Drilling</Button>
      </Link>
    </div>
  );
}
