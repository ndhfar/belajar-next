import { Button } from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 space-x-2 font-semibold ">
      <LinkTemplate direct="/props-drilling" fileName="Props Drilling" />
      <LinkTemplate direct="/crud" fileName="CRUD" />
    </div>
  );
}

const LinkTemplate = ({ direct, fileName }) => {
  return (
    <Link href={direct}>
      <Button>{fileName}</Button>
    </Link>
  );
};
