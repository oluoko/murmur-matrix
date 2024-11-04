import Image from "next/image";
import { MainGithubLogin, MainGoogleLogin } from "./components/Buttons";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/chat");
  }
  return (
    <div className="max-w-xl mx-auto border rounded-lg p-10 mt-32 h-full">
      <h1 className="text-lg md:text-2xl font-semibold text-center">
        Login to use the chat app, MurMur Matrix.
      </h1>

      <div className="mt-8">
        <MainGithubLogin />
        <MainGoogleLogin />
      </div>
    </div>
  );
}
