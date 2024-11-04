import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import Image from "next/image";
import { GitHubLogin, GoogleLogin, Logout } from "./Buttons";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav className="flex px-10 justify-between items-center fixed top-0 left-0 w-full h-[60px] bg-black text-white z-20">
      <h1 className="text-black text-3xl font-bold text-white">
        MurMur<span className="text-teal-500"> Matrix</span>
      </h1>

      {session ? (
        <div className="flex items-center ">
          <Image
            src={session.user?.image as string}
            alt="user profile photo"
            className="size-12 rounded-full mr-3"
            width={50}
            height={50}
          />
          <Logout />
        </div>
      ) : (
        <div className="flex items-center justify-between gap-2 md:gap-4">
          <GitHubLogin />
          <GoogleLogin />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
