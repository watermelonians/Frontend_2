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
  title,
  Tags,
  header,
  isUp_,
  upvote_,
  feedbackCount,
  attachmentCount,
}: {
  className?: string;
  id?: number | string;
  title?: string | React.ReactNode;
  Tags?: string[] | React.ReactNode;
  header?: React.ReactNode;
  isUp_?: boolean;
  upvote_?: number;
  feedbackCount?: number;
  attachmentCount?: number;
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

  return (
    <>
      <Link href={`/DiscussionSpace/${id}`}>
        <div
          className={cn(
            "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border-transparent p-4 shadow-xl transition duration-200 hover:shadow-xl dark:bg-black dark:shadow-none",
            className,
          )}
        >
          {header}
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
                <div className="p">{attachmentCount}</div>
              </div>
              <FaEye />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
