"use client";
import { NextPage } from "next";
import { useState } from "react";
import { FaRegThumbsUp, FaThumbsUp, FaEye } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { MdFeedback } from "react-icons/md";
import Tag from "../Tags/Tag";
import { getTagTextColor } from 'utils/getTagTextColor';
import { getTagColor } from 'utils/getTagColor';
import { FeedbackCardProps } from "../Feedback_/Feedback_";


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
  comments: FeedbackCardProps[];
  onClick?: () => void;
}


const PostCard: React.FC<PostCardProps> = ({
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
  onClick,
}) => {
  const [upvote, handleUpVote] = useState<number>(upvoteCount);
  const [isUp, setIsUpvoted] = useState<boolean>(isUpvoted);

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
    <div className="rounded-md dark:bg-[#0A274440] bg-[#E3EFFB] bg-gradient-to-r from-[#0B6BCB04] to-[#0B6BCB13] flex flex-col items-start justify-start p-2 box-border gap-[8px] text-left text-xs text-neutral-soft-bg font-components-buttons-lg self-stretch w-full md:w-[90]" onClick={onClick}>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px] text-warning-plain-color1">
        {/* Render tags */}
        {/* Render tags using the Tag component */}
        {tags.map((tag, index) => (
          <span key={index} className={`px-2 py-1 leading-tight inline-flex items-center rounded-lg mr-1 font-semibold text-xs ${getTagTextColor(tag)} ${getTagColor(tag)}`}>
            #{tag}
          </span>
        ))}
      </div>
      <div className="self-stretch flex flex-row items-start justify-between text-xl">
        <div className="relative leading-[155%] font-semibold text-[#171A1C] dark:text-[#F0F4F8]">
          {postTitle}
        </div>
        <div className="relative text-xs leading-[166%] font-semibold text-text-tertiary1 text-center pr-5">
          {postDate}
        </div>
      </div>
      <div className="self-stretch h-[22px]  overflow-hidden shrink-0 flex flex-row items-start justify-start text-sm text-text-secondary">
        <div className="flex-1 relative leading-[142%] inline-block h-[27px] dark:text-[#636B74] text-[#636B74] truncate ...">
          <p className="truncate ...">{postContent}</p>
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
          <div className="relative leading-[166%] font-semibold text-[#171A1C] dark:text-[#F0F4F8]">
            {authorName} / {authorRole}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[16px] text-left text-sm text-text-secondary">
          <div className="flex flex-row items-center justify-start gap-[4px] text-primary-solid-bg">
            <button className="flex flex-row items-center justify-start gap-[4px]" onClick={handleUpVoteClick}>
              {isUp ? <FaThumbsUp /> : <FaRegThumbsUp />}
            </button>
            <div className="relative leading-[142%]">{upvote}</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <div className="w-[px] relative h-[18px] overflow-hidden shrink-0"><MdFeedback /></div>
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
  );
};
export default PostCard;
