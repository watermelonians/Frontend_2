import React from "react";

interface SuggestionCardProps {
    avatarSrc: string;
    name: string;
    role: string;
    content: string;
    likeCount: number;
    commentCount: number;
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({
  avatarSrc,
  name,
  role,
  content,
  likeCount,
  commentCount
}) => {
  return (
    <div className="flex-col rounded-lg bg-red p-3 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
      <div className="relative mt-1 flex items-center gap-x-4">
        <img
          src={avatarSrc}
          alt=""
          className="h-10 w-10 rounded-full bg-gray-50"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href="#">
              <span className="absolute inset-0" />
              {name}
            </a>
          </p>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-2">{content}</p>
      <div className="flex items-center justify-end gap-x-4 mt-4">
        <button className="text-primary font-semibold">Like {likeCount}</button>
        <button className="text-primary font-semibold">Comment {commentCount}</button>
      </div>
    </div>
  );
};

export default SuggestionCard;