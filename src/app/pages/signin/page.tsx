"use client";
import { Button } from "@/shadui/ui/button";
import { Input } from "@/shadui/ui/input";
import Image from "next/image";
import GithubPic from "./github.png";
import {
  FcDecision,
  FcAdvertising,
  FcAddDatabase,
  FcPlus,
} from "react-icons/fc";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const result = api.signup.signup.useMutation();
  const router = useRouter();
  const handleSignup = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (password.length > 10) {
      result.mutate({ email, username, password });
      router.push("/pages/login");
    } else {
      return (
        <h1>
          password must contain number and atleast should have 10 character
        </h1>
      );
    }
  };
  const handleGithub = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signIn("github").catch((err) => {
      console.log(err);
    });
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gray-200">
      <div className="flex space-x-10">
        <div className="max-xl:hidden">
          <h3 className="mb-4 mt-10 text-3xl font-bold">
            Join the Community Today
          </h3>
          <p className="mb-10 text-gray-700">
            Participate in discussions, ask questions, and connect with other
            developers.
          </p>
          <div className="mb-5 flex items-center space-x-2">
            <FcDecision size={30} />
            <p>Get unstuck — ask a question</p>
          </div>
          <div className="mb-5 flex items-center space-x-2">
            <FcAdvertising size={30} />
            <p>Unlock new privileges like voting and commenting</p>
          </div>
          <div className="mb-5 flex items-center space-x-2">
            <FcAddDatabase size={30} />
            <p className="max-w-[400px]">
              Save your favorite questions, answers, watch tags, and more
            </p>
          </div>
          <div className="mb-5 flex items-center space-x-2">
            <FcPlus size={30} />
            <p className="max-w-[400px]">Earn reputation and badges</p>
          </div>
        </div>

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
            <h3 className="font-bold">Email</h3>
            <Input
              className="rounded border-2 border-blue-400 px-2 py-2 "
              placeholder="Your Name"
              onChange={(e) => {
                setEmail(e.target.value);
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
              <p className="text-sm text-gray-400">
                password must contain number and atleast should have 10
                character
              </p>
            </div>
            <Button
              className="rounded-lg bg-blue-400 text-lg font-medium text-white"
              onClick={handleSignup}
              variant="secondary"
            >
              SignIn
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
