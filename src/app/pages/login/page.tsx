"use client";
import { Button } from "@/shadui/ui/button";
import { Input } from "@/shadui/ui/input";
import Image from "next/image";
import GithubPic from "./github.svg";
import {
  FcDecision,
  FcAdvertising,
  FcAddDatabase,
  FcPlus,
} from "react-icons/fc";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e: any) => {
    e.preventDefault();
    signIn("credentials", {
      username,
      password,
      callbackUrl: "/pages/content",
    });
  };
  const handleGithub = (e: any) => {
    e.preventDefault();
    signIn("github", { callbackUrl: "/pages/content" });
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gray-200">
      <div className="flex space-x-10">
        {/* Left Column */}

        <div className="rounded-lg bg-white p-5 py-8 shadow-md">
          <div className="flex max-w-[250px] flex-col justify-center space-y-2">
            <h3 className="font-bold">Username</h3>
            <Input
              className="rounded border-2 border-blue-400 px-2 py-2 "
              placeholder="Your Name"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <div className="flex flex-col">
              <h3 className="mb-2 font-bold">Password</h3>
              <Input
                className="rounded border-2 border-blue-400 px-2 py-2 "
                placeholder="Your Name"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <Button
              className="rounded-lg bg-blue-400 text-lg font-medium text-white"
              onClick={handleLogin}
              variant="secondary"
            >
              Login
            </Button>
            <div className="h-[2px] rounded-xl bg-gray-400"></div>
            <Button
              onClick={handleGithub}
              className=" flex w-[250px] rounded-lg bg-[#181717] text-sm font-medium text-white"
            >
              <Image className="mr-2" src={GithubPic} width={25} alt="gpic" />
              Sign In With Github
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
