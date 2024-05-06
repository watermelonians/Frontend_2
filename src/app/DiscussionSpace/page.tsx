import React from "react";
import { BentoGridItem } from "@/components/BentoGridItem/bento-grid";
import Image from "next/image";
import cards_05 from "public/images/cards/cards_05.png";
import { cn } from "utils/cn";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Discussion Space",
  description: "Discussion of Problems and Solutions",
};

export type Problem = {
  id: string | number;
  title: string;
};

export default async function DiscussionSpace() {
  async function getProblems() {
    const response = await fetch(
      process.env.FRONTEND_HOST + "/api/getMyProblems",
      {
        cache: "no-cache",
        headers: {
          Cookie: cookies().toString(),
        },
      },
    );
    const data = await response.json();
    return data.body;
  }
  let problems: Problem[] = await getProblems();

  return (
    <div
      className={cn(
        "mx-auto grid h-screen max-w-4xl grid-cols-4 gap-4 md:auto-rows-[18rem] md:grid-cols-3 sm:grid-cols-1 ",
      )}
    >
      {problems.map((item: any, i: number) => (
        <>
          <BentoGridItem
            key={i}
            id={i}
            title={item.title}
            Tags={["Tag1", "Tag2", "Tag3"]}
            header=<Skeleton />
            upvote_={item.upvoteCount}
            feedbackCount={item.feedbackCount}
            attachmentCount={item.attachmentCount}
            className="h-full"
          />
        </>
      ))}
    </div>
  );
}

const Skeleton = () => (
  <Image src={cards_05} alt="Problem Image" loading="lazy"></Image>
);
const items = [
  {
    title: "The Dawn of Innovation",
    Tags: ["Tag1", "Tag2", "Tag3"],
    header: <Skeleton />,
    upvoteCount: 110,
    feedbackCount: 5,
    attachmentCount: 2,
  },
  {
    title: "The Digital Revolution",
    Tags: ["Tag1", "Tag2", "Tag3"],
    header: <Skeleton />,
    upvoteCount: 110,
    feedbackCount: 5,
    attachmentCount: 2,
  },
  {
    title: "The Art of Design",
    Tags: ["Tag1", "Tag2", "Tag3"],
    header: <Skeleton />,
    upvoteCount: 110,
    feedbackCount: 5,
    attachmentCount: 2,
  },
  {
    title: "No WATER in the residence area of the city",
    Tags: ["Tag1", "Tag2", "Tag3"],
    header: <Skeleton />,
    upvoteCount: 110,
    feedbackCount: 5,
    attachmentCount: 2,
  },
  {
    title: "The Pursuit of Knowledge",
    Tags: ["Tag1", "Tag2", "Tag3"],
    header: <Skeleton />,
    upvoteCount: 110,
    feedbackCount: 5,
    attachmentCount: 2,
  },
  {
    title: "The Joy of Creation",
    Tags: ["Tag1", "Tag2", "Tag3"],
    header: <Skeleton />,
    upvoteCount: 110,
    feedbackCount: 5,
    attachmentCount: 2,
  },
  {
    title: "The Spirit of Adventure",
    Tags: ["Tag1", "Tag2", "Tag3"],
    header: <Skeleton />,
    upvoteCount: 110,
    feedbackCount: 5,
    attachmentCount: 2,
  },
];
