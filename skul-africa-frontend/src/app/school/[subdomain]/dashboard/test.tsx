"use client";

import { useParams } from "next/navigation";

export default function Test() {
  const { subdomain } = useParams();
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl font-bold mb-4">Test Page Works!</h1>
      <p className="text-neutral-400">Subdomain: {subdomain}</p>
      <p className="text-neutral-400">Route: /school/{subdomain}/dashboard/test</p>
    </div>
  );
}