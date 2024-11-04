import Form from "@/app/components/Form";
import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Chat() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="h-[calc(100vh-120px)] bg-gray-200 flex flex-col relative overflow-hidden">
      <Form />
    </div>
  );
}
