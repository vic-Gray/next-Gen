"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 overflow-hidden">
      
      {/* Subtle blurred background shapes */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/2 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-3xl"></div>

      {/* 404 Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-9xl font-extrabold mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Oops! Page not found</h2>
        <p className="text-gray-400 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
