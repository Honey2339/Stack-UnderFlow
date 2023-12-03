"use client";
import { marked } from "marked";
import { useParams } from "next/navigation";
import Sidebar from "~/app/_components/sidebar";
import { api } from "~/trpc/react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { Textarea } from "@/shadui/ui/textarea";
import { Button } from "@/shadui/ui/button";
import { useState } from "react";

const QuestionDetail = () => {
  const params = useParams();
  const id = parseInt(params.questionid as string, 10);
  const result = api.post.getQuestionById.useQuery({ id });
  const createdAtString = result.data?.createdAt?.toLocaleString();

  const increaseVoteMutate = api.voting.increaseVote.useMutation();
  const decreaseVoteMutate = api.voting.decreaseVote.useMutation();

  const createAnswer = api.answer.createAnswer.useMutation();
  const allAnswer = api.answer.getAnswersByPostId.useQuery({ postId: id });

  const [answer, setAnswer] = useState("");

  const handleUpVote = () => {
    increaseVoteMutate.mutate(
      { id },
      {
        onSuccess: () => {
          result.refetch().catch((err) => {
            console.log(err);
          });
        },
      },
    );
  };
  const handleDownVote = () => {
    decreaseVoteMutate.mutate(
      { id },
      {
        onSuccess: () => {
          result.refetch().catch((err) => {
            console.log(err);
          });
        },
      },
    );
  };

  const handleAnswerSubmit = () => {
    createAnswer.mutate(
      { postId: id, content: answer },
      {
        onSuccess: () => {
          window.location.reload();
        },
      },
    );
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="ml-5 w-[0.5px] bg-gray-400"></div>
      <div className="mt-10">
        <h1 className="ml-5 text-3xl text-gray-500">{result.data?.question}</h1>
        <p className="ml-5 mt-2 text-gray-400">Asked at : {createdAtString}</p>
        <div className="ml-5 mt-8 h-[0.5px] w-[700px] bg-gray-400"></div>
        <div className="ml-6 mt-7 flex px-2">
          <div className="flex flex-col space-y-2">
            <BiSolidUpArrow
              onClick={handleUpVote}
              size={40}
              className="cursor-pointer rounded-full border p-2 text-gray-600 transition duration-0 hover:bg-orange-100"
            />
            <p className="text-center font-bold">{result.data?.votes}</p>
            <BiSolidDownArrow
              onClick={handleDownVote}
              size={40}
              className="cursor-pointer rounded-full border p-2 text-gray-600 transition duration-0 hover:bg-orange-100"
            />
          </div>
          <h3 className="ml-4 mt-3 max-w-xl text-[16px]">
            {result.data?.description}
          </h3>
        </div>

        <div className="flex flex-col">
          <div>
            <div className="ml-5 mt-8 h-[0.5px] w-[700px] bg-gray-400"></div>
            <h3 className="ml-6 mt-5 text-xl font-bold">All Answers</h3>
            {allAnswer.data?.map((answers) => (
              <div key={answers.id} className="flex flex-col">
                <h3
                  className="ml-10 mt-10 max-w-xl whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: marked(answers.content) }}
                ></h3>
                <h3 className="ml-10 mt-2 text-right">
                  By : {answers.author.name}
                </h3>
                <div className="ml-5 mt-8 h-[0.5px] w-[700px] bg-gray-400"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="ml-10 mt-20 flex flex-col">
          <h2 className="text-xl">Your Answer</h2>
          <Textarea
            value={answer}
            className="mt-5 h-[100px] resize-none border-2 border-gray-400"
            placeholder="......"
            onChange={(e) => setAnswer(e.target.value)}
          />
          <Button
            onClick={handleAnswerSubmit}
            className="mt-2 max-w-[80px] bg-blue-400 text-white"
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
