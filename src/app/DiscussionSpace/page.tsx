import React from "react";
import { BentoGridItem } from "@/components/BentoGridItem/bento-grid";
import Image from "next/image";
import cards_05 from "public/images/cards/cards_05.png";
import { cn } from "utils/cn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discussion Space",
  description: "Discussion of Problems and Solutions",
};

export default async function DiscussionSpace() {
  async function getUser() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    const data = await response.json();
    return data;
  }
  //const { id, name } = (await getUser()) as User;

  return (
    <div
      className={cn(
        "mx-auto grid max-w-4xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
      )}
    >
      {items.map((item, i) => (
        <>
          <BentoGridItem
            key={i}
            id= {i}
            title={item.title}
            Tags={item.Tags}
            header={item.header}
            upvote_={item.upvoteCount}
            feedbackCount={item.feedbackCount}
            attachmentCount={item.attachmentCount}
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
