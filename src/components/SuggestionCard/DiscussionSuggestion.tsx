import React from "react";

interface DiscussionSuggestionCardProps {
    avatarSrc: string | null;
    name: string;
    role: string;
    content: string;
}

const DiscussionSuggestionCard: React.FC<DiscussionSuggestionCardProps> = ({
  avatarSrc,
  name,
  role,
  content,
}) => {
  return (
    
    <div className="flex flex-col col-span-1 h-full rounded-lg p-3 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
        <div className="relative mt-1 flex items-center gap-x-4">
          <img
            src={avatarSrc}
            alt=""
            className="h-10 w-10 rounded-full bg-gray-50"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-[#171A1C] dark:text-[#F0F4F8]">
              <a href="#">
                <span className="absolute inset-0" />
                {name}
              </a>
            </p>
            <p className="text-[#636B74] font-normal">{role}</p>
          </div>
        </div>
        <p className="text-sm text-[#171A1C] dark:text-[#F0F4F8] mt-2">{content}</p>
    </div>
  );
};

export default DiscussionSuggestionCard;