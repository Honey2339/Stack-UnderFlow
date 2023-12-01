"use client";
import { FcLike, FcServices } from "react-icons/fc";
import { Button } from "@/shadui/ui/button";
import { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import PricingCards from "./_components/pricingcards";
import Image from "next/image";
import stackpic from "./bluestack.png";
import Earth from "../../public/earth.svg";
import Teams from "../../public/teams.svg";
import RandomText from "./_components/randomtext";
import { useSession } from "next-auth/react";

const textSet = ["Developer", "Programmer", "Learner", "Coder"];

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textSet.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(textSet[index], {
    from: { opacity: 0, transform: "translate3d(0, -20px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  });

  return (
    <section className="mt-10 flex flex-col items-center">
      <div className="flex h-[900px] w-[1800px] flex-col items-center rounded-xl bg-[#202227] p-4">
        <div className="mt-10 flex space-x-20">
          <div className="flex h-auto w-[400px] flex-col items-center space-y-5 rounded-lg bg-[#FBDAC0] px-10 py-10">
            <FcLike size={60} />
            <p className="text-center text-[19px] ">
              Find the best answer to your technical question, help others
              answer theirs
            </p>
            <Button className="rounded-lg bg-[#E6700C] px-8 py-3 text-[15px] text-white">
              Join Community
            </Button>
          </div>
          <div className="flex h-auto w-[400px] flex-col items-center space-y-5 rounded-lg bg-[#D7E9FA] px-10 py-10">
            <FcServices size={60} />
            <p className="text-center text-[19px] ">
              Want a secure, private space for your technical knowledge?
            </p>
            <Button className="rounded-lg bg-[#1B75D0] px-8 py-3 text-[15px] text-white">
              Discover Teams
            </Button>
          </div>
        </div>
        <div className="mt-20 text-center ">
          <div className="flex gap-3 text-5xl font-bold text-white">
            Every
            {transitions((style, item) => (
              <animated.p style={style}>
                <span className="text-[#E6700C]">"{item}"</span>
              </animated.p>
            ))}
            has a
          </div>
          <p className="mt-2 flex gap-3 text-5xl font-bold text-white">
            tab open for Stack Outflow
          </p>
        </div>
        <div className="mb-16 mt-16 h-[7px] w-16 rounded-lg bg-gray-500"></div>
        <RandomText />
      </div>
      <div className="mt-10 flex h-[730px] space-x-10">
        <div className="h-[700px] w-[450px] rounded-md border-[0.5px] border-gray-300 bg-gradient-to-b from-white to-orange-300 shadow-lg">
          <div className=" mt-10 flex flex-col items-center justify-center">
            <h3 className="flex items-center text-xl">
              <Image src={stackpic} width={50} alt="stackpic" />
              stack<h3 className="font-bold">Outflow</h3>
            </h3>
            <Image className="mt-5" src={Earth} width={500} alt="earth" />
            <p className="mt-5 max-w-[380px] text-center text-xl font-medium">
              A public platform building the definitive collection of coding
              questions & answers
            </p>
            <p className="mt-3 max-w-[400px] text-center text-[15px] text-gray-600">
              A community-based space to find and contribute answers to
              technical challenges, and one of the most popular websites in the
              world.
            </p>
            <Button className="mt-8 rounded-lg bg-[#E6700C] px-8 py-3 text-[15px] text-white">
              Join Community
            </Button>
          </div>
        </div>
        <div className="h-[700px] w-[450px] rounded-md border-[0.5px] border-gray-300 bg-gradient-to-b from-white to-blue-300 shadow-lg">
          <div className=" mt-10 flex flex-col items-center justify-center">
            <div className="flex items-center">
              <Image src={stackpic} width={50} alt="stackpic" />
              <h3 className="flex text-xl font-bold">FOR TEAMS</h3>
            </div>
            <Image className="mt-5" src={Teams} width={500} alt="earth" />
            <p className="mt-5 max-w-[380px] text-center text-xl font-medium">
              A private collaboration & knowledge sharing SaaS platform for
              companies
            </p>
            <p className="mt-3 max-w-[400px] text-center text-[15px] text-gray-600">
              A web-based platform to increase productivity, decrease cycle
              times, accelerate time to market, and protect institutional
              knowledge.
            </p>
            <Button className="mt-8 rounded-lg bg-[#1B75D0] px-8 py-3 text-[15px] text-white">
              Discover Teams
            </Button>
          </div>
        </div>
      </div>
      <div className="flex h-[900px] w-[1800px] flex-col items-center rounded-xl bg-[#202227] p-4">
        <PricingCards />
      </div>
    </section>
  );
}
