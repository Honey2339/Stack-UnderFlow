"use client";

import { Button } from "@/shadui/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Questions from "~/app/_components/questions";
import Sidebar from "~/app/_components/sidebar";

export default function Content() {
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
    <div className="flex h-screen">
      <Sidebar />
      <div className="ml-5 w-[0.5px] bg-gray-400"></div>
      <div className="flex flex-col">
        <div className="ml-6 mt-3 flex h-[100px] items-center space-x-96 px-8 ">
          <h3 className="text-2xl">Top Questions</h3>
          <Link href="/pages/ask">
            <Button className="mt-2 bg-blue-500 text-sm font-light text-white transition duration-0 hover:bg-blue-600">
              Ask Question
            </Button>
          </Link>
        </div>
        <Questions />
      </div>
    </div>
  );
}
