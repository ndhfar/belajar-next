import { Button } from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 space-x-2 font-semibold ">
      <LinkTemplate direct="/props-drilling" fileName="Props Drilling" />
      <LinkTemplate direct="/crud" fileName="CRUD" />
      <LinkTemplate direct="/server-actions" fileName="Server Actions" />
      <LinkTemplate direct="/belajar-database" fileName="Database" />
      <LinkTemplate direct="/register" fileName="Register" />
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
