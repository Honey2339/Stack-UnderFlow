"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CreatePost from "~/app/_components/create-post";

export default function Ask() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/");
    },
  });
  if (status === "loading") {
    return "Loading";
  }
  return (
    <div className="h-screen bg-gray-100">
      <CreatePost />
    </div>
  );
}
