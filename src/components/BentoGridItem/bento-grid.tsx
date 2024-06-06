"use client";
import Tag from "@/components/Tags/Tag";
import { cn } from "../../../utils/cn";
import { Children, Key, useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { MdFeedback } from "react-icons/md";
import { FaEye, FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import Link from "next/link";

export const BentoGridItem = ({
    className,
    id,
    isUp_,
    title,
    avatarSrc,
    username,
    date,
    time,
    Tags,
    cluster,
    archive,
    follow,
    upvote_,
    like,
    feedbackCount,
    myVote,
    priority,
    description,
    attachments,
    solved,
}: {
    className?: string;
    id?: number;
    isUp_?: boolean;
    title: string;
    avatarSrc: string;
    username: string;
    date: string;
    time: string;
    Tags: string[];
    cluster: string;
    archive: boolean;
    follow: boolean;
    upvote_: number;
    like: boolean;
    feedbackCount: number;
    myVote: boolean;
    priority: number;
    description: string;
    attachments: {};
    solved: boolean;
}) => {
  const [upvote, handleUpVote] = useState<number>(upvote_ || 0);
  const [isUp, setIsUpvoted] = useState<boolean>(isUp_ || false);

  const handleUpVoteClick = () => {
    if (isUp) {
      handleUpVote((prevCount) => prevCount - 1);
      setIsUpvoted(false);
    } else {
      handleUpVote((prevCount) => prevCount + 1);
      setIsUpvoted(true);
    }
  };

  const queryParams = new URLSearchParams({
    id: id.toString(),
    title,
    avatarSrc,
    username,
    date,
    time,
    Tags: Tags.join(","),
    cluster,
    archive: archive.toString(),
    follow: follow.toString(),
    upvote_: upvote_.toString(),
    like: like.toString(),
    feedbackCount: feedbackCount.toString(),
    myVote: myVote.toString(),
    priority: priority.toString(),
    description,
    attachments: JSON.stringify(attachments),
    solved: solved.toString(),
  });
  return (
    <>
      <Link href={`/DiscussionSpace/${id}?${queryParams.toString()}`}>
        <div
          className={cn(
            "group/bento shadow-input col-span-1 flex flex-col w-full justify-between space-y-1 rounded-xl border-transparent p-4 shadow-xl transition duration-200 hover:shadow-xl dark:bg-black dark:shadow-none",
            className,
          )}
        >
          <div className="transition duration-200 group-hover/bento:translate-x-2">
            <div className="font- mb-2 mt-2 overflow-hidden font-bold text-neutral-600 dark:text-neutral-200">
              <div
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {title}
              </div>
            </div>
            <div className="text-warning-plain-color1 flex flex-row flex-wrap items-start justify-start gap-[20px] self-stretch">
              {/* Render Tags using the Tag component */}
              {Array.isArray(Tags) &&
                Tags.map((tag: string, index: Key | null | undefined) => (
                  <Tag key={index} name={tag} />
                ))}
            </div>

            <div className="text-text-secondary mt-[10px] flex flex-row items-center justify-start gap-[16px] text-left text-sm">
              <div className="text-primary-solid-bg flex flex-row items-center justify-start gap-[4px]">
                <button
                  className="flex flex-row items-center justify-start gap-[4px]"
                  onClick={handleUpVoteClick}
                >
                  {isUp ? <FaThumbsUp /> : <FaRegThumbsUp />}
                </button>
                <div className="relative leading-[142%]">{upvote}</div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="relative h-[18px] w-[px] shrink-0 overflow-hidden">
                  <MdFeedback />
                </div>
                <div className="relative leading-[142%] ">{feedbackCount}</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <GrAttachment />
                <div className="p">{Object.keys(attachments).length}</div>
              </div>
              <FaEye />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
