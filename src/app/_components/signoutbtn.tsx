"use client";

import { Button } from "@/shadui/ui/button";
import { signOut } from "next-auth/react";

export default function SignOutBtn() {
  return (
    <Button
      onClick={() => {
        signOut();
      }}
      variant="secondary"
      className="rounded-lg border-[0.5px] border-blue-700 text-blue-600 transition duration-0 hover:bg-blue-100"
    >
      SignOut
    </Button>
  );
}
