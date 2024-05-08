"use client";
import { NextPage } from "next";
import { Key, useState } from "react";
import { FaRegThumbsUp, FaThumbsUp, FaEye } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { MdFeedback } from "react-icons/md";
import Card from "../CategoryCard/Card"
import Tag from "../Tags/Tag";
import FeedbackCard from "../Feedback/Feedback";

const item = {
    title: "Add discount code to checkout page",
    avatarSrc: "https://i.pravatar.cc/100",
    username: "Username",
    date: "2019-09-14",
    time: "12:12",
    category: ["Tag1", "Tag2", "Tag3", "Tag4"],
    cluster: "Problem",
    archive: false,
    follow: true,
    likes: 214,
    comments: 5,
    myVote: true,
    priority: 2,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",
    attachments: [
        {
            title: "Displayed text here", 
            date: "2019-09-14",
            time: "12:12",
            username: "Username",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            url: "https://i.pravatar.cc/100",
          },
          {
            title: "Displayed text here", 
            date: "2019-09-14",
            time: "12:12",
            username: "Username",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            url: "https://i.pravatar.cc/100",
          },
    ],
    solved: false,
  }

export interface PostDetailsProps {
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
  onClick?: () => void;
  problemId: string;
  image: string;
  comments: string[];
}


const PostDetails: React.FC<PostDetailsProps> = ({
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
  problemId,
  image,
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
  <div className="flex-col rounded-lg bg-red p-5 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
    <div className="self-stretch flex flex-row items-start justify-between text-xl">
        <div className="relative leading-[155%] pb-4  font-semibold">
          {postTitle}
        </div>
        <div className="relative text-xs leading-[166%] font-semibold pt-2 ">
          {postDate}
        </div>
    </div>
  <div className="pb-4 self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px] text-warning-plain-color1">
        {/* Render tags */}
        {/* Render tags using the Tag component */}
        {tags.map((tag: string, index: Key | null | undefined) => (
          <Tag key={index} name={tag} />
        ))}
      </div>
  <div className="relative mt-1 flex items-center gap-x-4">
    <img
      src={image}
      alt=""
      className="h-10 w-10 rounded-full bg-gray-50"
    />
    <div className="text-sm leading-6">
      <p className="font-semibold text-gray-900">
        <a href="#">
          <span className="absolute inset-0" />
          {authorName}
        </a>
      </p>
      <p className="text-gray-600">{authorRole}</p>
    </div>
  </div>
  <p className="text-sm text-gray-600 mt-2 pl-2">{postContent}</p>
  <Card {...item} />
  <div className="bg-slate-700 h-0.5 m-4 "></div>  
</div>


);

};
export default PostDetails;
