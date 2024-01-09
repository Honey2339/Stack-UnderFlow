import Image from "next/image";
import stackpic from "./bluestack.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Input } from "@/shadui/ui/input";
import { Button } from "@/shadui/ui/button";
import { getServerSession } from "next-auth/next";
import Link from "next/link";

import SignOutBtn from "./signoutbtn";
import { authOptions } from "~/server/auth";

export default async function navbar() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex h-[50px] max-h-[50px] items-center space-x-12 bg-white shadow-md max-xl:space-x-[100px]">
      <RxHamburgerMenu
        className="ml-40 cursor-pointer px-4 transition duration-0 hover:bg-slate-200 max-2xl:ml-10 max-xl:hidden"
        size={50}
      />
      <Link href="/">
        <div className="flex cursor-pointer items-center pr-3 transition duration-0 hover:bg-slate-200">
          <Image className="" src={stackpic} width={50} alt="bluestack" />
          <h2 className="flex text-xl">
            stack<span className="pr-2 font-bold">underflow</span>
          </h2>
        </div>
      </Link>
      <div className="flex items-center space-x-10 text-gray-600 max-xl:hidden">
        <p className="rounded-lg px-3 py-1 transition duration-0 hover:bg-slate-200">
          About
        </p>
        <p className="rounded-lg px-3 py-1 transition duration-0 hover:bg-slate-200">
          Products
        </p>
        <p className="mr-20 rounded-lg px-3 py-1 transition duration-0 hover:bg-slate-200 ">
          For Teams
        </p>
      </div>
      <Input
        className="w-[500px] rounded border-2 border-gray-400 max-2xl:w-[200px] max-xl:w-[500px]"
        placeholder="Search.."
      />
      {session ? (
        <div className="flex items-center space-x-10 whitespace-nowrap">
          <p className="text-center">Logged In As : {session.user.name}</p>
          <SignOutBtn />
        </div>
      ) : (
        <>
          <a href="/pages/login">
            <Button
              variant="secondary"
              className="rounded-lg border-[0.5px] border-blue-700 text-blue-600 transition duration-0 hover:bg-blue-100"
            >
              Login
            </Button>
          </a>
          <a href="/pages/signin">
            <Button
              variant="secondary"
              className="rounded-lg border-[0.5px] border-black bg-black text-white transition duration-0 hover:bg-white hover:text-black"
            >
              SignUp
            </Button>
          </a>
        </>
      )}
    </div>
  );
}
