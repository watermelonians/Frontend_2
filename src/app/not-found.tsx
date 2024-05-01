import Link from "next/link";
import React from "react";

export default function Notfound() {
  return (
    <div className="bg-white dark:bg-indigo-950">
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-gray-800 text-8xl font-bold">404</h1>
        <p className="text-gray-800 text-4xl font-medium">Page Not Found</p>
        <Link href="/" className="mt-4 text-xl text-blue-600 hover:underline">
          Go back home
        </Link>
      </div>
    </div>
  );
}
