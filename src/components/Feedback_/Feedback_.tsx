import React from "react";

interface FeedbackCardProps {
    avatarSrc: string;
    name: string;
    role: string;
    content: string;
    Date: string
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  avatarSrc,
  name,
  role,
  content,
}) => {
  return (
    <div className="flex-col rounded-md bg-black p-2 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
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
      <div><p className="text-sm text-gray-600 mt-2 pl-5">{content}</p></div>
      
      <div className="flex items-center justify-end gap-x-4 mt-4">
      </div>
    </div>
  );
};

export default FeedbackCard;