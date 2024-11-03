"use client";

import { signIn, signOut } from "next-auth/react";

export function Logout() {
  return (
    <button
      onClick={() => signOut}
      className="flex items-center justify-center gap-2 rounded-lg bg-red-500 text-white px-3 md:px-5 py-1 md:py-3 text-center text-sm font-semibold  ring-red-300 transition duration-100 hover:bg-red-600 md:text-base"
    >
      Logout
    </button>
  );
}

export function GitHubLogin() {
  return (
    <button
      onClick={() => signIn("github")}
      className="flex items-center justify-center gap-2 rounded-lg bg-blue-500 text-white px-3 md:px-5 py-1 md:py-3 text-center text-sm font-semibold  ring-blue-300 transition duration-100 hover:bg-blue-600 md:text-base"
    >
      Login with GitHub
    </button>
  );
}

export function GoogleLogin() {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center justify-center gap-2 rounded-lg bg-red-500 text-white px-3 md:px-5 py-1 md:py-3 text-center text-sm font-semibold  ring-red-300 transition duration-100 hover:bg-red-600 md:text-base"
    >
      Login with Google
    </button>
  );
}
