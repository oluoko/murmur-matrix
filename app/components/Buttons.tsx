"use client";

import { GithubIcon } from "lucide-react";
import { signIn, signOut } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

export function Logout() {
  return (
    <button
      onClick={() => signOut()}
      className="flex items-center justify-center gap-2 rounded-lg bg-red-500 text-white px-2 md:px-4 py-1 md:py-2 text-center text-sm font-semibold  ring-red-300 transition duration-100 hover:bg-red-600 md:text-base"
    >
      Logout
    </button>
  );
}

export function GitHubLogin() {
  return (
    <button
      onClick={() => signIn("github")}
      className="flex items-center justify-center gap-2 rounded-lg bg-blue-500 text-white px-2 md:px-4 py-1 md:py-2 text-center text-sm font-semibold  ring-blue-300 transition duration-100 hover:bg-blue-600 md:text-base"
    >
      Login
      <GithubIcon className="size-4" />
    </button>
  );
}

export function GoogleLogin() {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center justify-center gap-2 rounded-lg bg-red-500 text-white px-2 md:px-4 py-1 md:py-2 text-center text-sm font-semibold  ring-red-300 transition duration-100 hover:bg-red-600 md:text-base"
    >
      Login <FaGoogle className="size-4" />
    </button>
  );
}

export function MainGithubLogin() {
  return (
    <button
      onClick={() => signIn("github")}
      className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-500 text-white px-2 md:px-4 py-1 md:py-2 text-center text-sm font-semibold  ring-blue-300 transition duration-100 hover:bg-blue-600 md:text-base"
    >
      Login with GitHub <GithubIcon className="size-8" />
    </button>
  );
}

export function MainGoogleLogin() {
  return (
    <button
      onClick={() => signIn("google")}
      className="w-full flex items-center justify-center gap-2 rounded-lg bg-red-500 text-white px-2 md:px-4 py-1 md:py-2 text-center text-sm font-semibold  ring-red-300 transition duration-100 hover:bg-red-600 md:text-base my-2"
    >
      Login with Google <FaGoogle className="size-8" />
    </button>
  );
}
