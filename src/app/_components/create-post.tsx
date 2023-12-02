"use client";

import { Button } from "@/shadui/ui/button";
import { Input } from "@/shadui/ui/input";
import { Textarea } from "@/shadui/ui/textarea";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { api } from "~/trpc/react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const result = api.post.CreatePost.useMutation();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setTitle("");
    setDescription("");
    result.mutate({ title, description });
    router.push("/pages/content");
  };
  return (
    <div className="flex flex-col">
      <div className="ml-72 max-w-3xl p-16">
        <h1 className="text-left text-2xl font-bold">Ask a public question</h1>
        <div className="w-xl mt-24 border bg-white p-8">
          <h3 className="font-bold text-gray-800">Title</h3>
          <p className="mb-2 text-sm text-gray-500">
            Be specific and imagine you’re asking a question to another person.
          </p>
          <Input
            className="w-2xl border-2 border-blue-200 max-lg:max-w-sm"
            placeholder="eg: Is javascript single threaded?"
            size={80}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="w-xl mt-2 border bg-white p-8">
          <h3 className="font-bold text-gray-800">Description</h3>
          <p className="mb-2 text-sm text-gray-500">
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </p>
          <Textarea
            className="h-[120px] w-full resize-none border-2 border-blue-200 max-lg:max-w-sm"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          />
        </div>
        <Button className="mt-2 bg-blue-400 text-white" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}
