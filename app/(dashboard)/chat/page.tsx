import ChatComponent from "@/app/components/Chat";
import Form from "@/app/components/Form";
import { authOptions } from "@/app/lib/auth";
import { prisma } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function getData() {
  const data = await prisma.message.findMany({
    select: {
      message: true,
      id: true,
      createdAt: true,
      User: {
        select: {
          name: true,
          image: true,
        },
      },
    },
    orderBy: {
      createdAt: "asc",
    },
    take: 50,
  });

  return data;
}

export const dynamic = "force-dynamic";

export default async function Chat() {
  const session = await getServerSession(authOptions);
  const data = await getData();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="h-[calc(100vh-120px)] bg-gray-200 flex flex-col relative overflow-hidden">
      <ChatComponent data={data as any} />
      <Form />
    </div>
  );
}
