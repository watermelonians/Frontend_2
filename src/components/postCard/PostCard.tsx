"use client";

import { NextPage } from "next";
import { useState } from "react";
import { FaRegThumbsUp, FaThumbsUp  } from "react-icons/fa";

import Tag from "../Tags/Tag";

export interface PostCardProps {
  isUpvoted?: boolean;
  text?: boolean;
  postTitle: string;
  postDate: string;
  postContent: string;
  authorName: string;
  authorRole: string;
  authorAvatarSrc: string;
  upvoteCount: number;
  feedbackCount: number;
  attachmentCount: number;
  tags: string[]; // Array of tag strings
}

const PostCard: NextPage<PostCardProps> = ({
  isUpvoted,
  text,
  postTitle,
  postDate,
  postContent,
  authorName,
  authorRole,
  authorAvatarSrc,
  upvoteCount,
  feedbackCount,
  attachmentCount,
  tags,
}) => {
    const [upvote, handleUpVote] = useState(upvoteCount);
    const [isUp, setIsUpvoted] = useState(isUpvoted);

    const handleUpVoteClick = () => {
      if (isUp) {
        handleUpVote(prevCount => prevCount - 1);
        setIsUpvoted(false);
      } else {
        handleUpVote(prevCount => prevCount + 1);
        setIsUpvoted(true);
      }
    };

  return (
    <div className="rounded-radius-md [background:linear-gradient(92.14deg,_rgba(11,_107,_203,_0.01),_rgba(11,_107,_203,_0.05)_99.18%),_#e3effb] max-w-full flex flex-col items-start justify-start p-2 box-border gap-[8px] text-left text-xs text-neutral-soft-bg font-components-buttons-lg self-stretch w-full">
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px] text-warning-plain-color1">
        {/* Render tags */}
        {/* Render tags using the Tag component */}
        {tags.map((tag, index) => (
          <Tag key={index} name={tag} />
        ))}

      </div>
      <div className="self-stretch flex flex-row items-start justify-between text-xl">
        <div className="relative leading-[155%] font-semibold">
          {postTitle}
        </div>
        <div className="relative text-xs leading-[166%] font-semibold text-text-tertiary1 text-center">
          {postDate}
        </div>
      </div>
      <div className="self-stretch h-[22px] overflow-hidden shrink-0 flex flex-row items-start justify-start text-sm text-text-secondary">
        <div className="flex-1 relative leading-[142%] inline-block h-[27px]">
          {postContent}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between text-center">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <div className="w-5 rounded-81xl h-5 overflow-hidden shrink-0 flex flex-col items-center justify-center">
            <img
              className="w-5 relative rounded-[50%] h-5 object-cover"
              alt=""
              src={authorAvatarSrc}
            />
            <div className="w-5 relative h-5 overflow-hidden shrink-0 mt-[-32px]" />
          </div>
          <div className="relative leading-[166%] font-semibold">
            {authorName} / {authorRole}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[16px] text-left text-sm text-text-secondary">
          <div className="flex flex-row items-center justify-start gap-[4px] text-primary-solid-bg">
            <button className="flex flex-row items-center justify-start gap-[4px]" onClick={handleUpVoteClick}>
                {isUp? <FaThumbsUp /> : <FaRegThumbsUp />}
            </button>
            <img
              className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
              alt=""
              src="/upvote-filled.svg"
            />
            <div className="relative leading-[142%]">{upvote}</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <img
              className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
              alt=""
              src="/feedback1.svg"
            />
            <div className="relative leading-[142%]">{feedbackCount}</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[4px]">
            <img
              className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
              alt=""
              src="/attachment.svg"
            />
            <div className="relative leading-[142%]">{attachmentCount}</div>
          </div>
          <img
            className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
            alt=""
            src="/removeredeyefilled.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default PostCard;