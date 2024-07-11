import { prisma } from "@/utils/prisma";

export default async function Home() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      userId: true,
      user: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  });

  return (
    <main className="p-10">
      {products.map((product) => {
        return <div>{product.name}</div>;
      })}
    </main>
  );
}
