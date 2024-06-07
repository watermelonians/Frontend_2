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
  Date
}) => {
  return (
    <div className="flex flex-row gap-2 dark:bg-[#0A274440] p-3 border-b-2 border-b-[#636B7429]">
      <img
          src={avatarSrc}
          alt=""
          className="h-10 w-10 rounded-full bg-gray-50 mr-2"
        />
      <div className="flex flex-col w-full">
        <div className="flex flex-row gap-2">
          <p className="font-semibold text-sm text-[#636B74]">
            <a href="#">
              <span className="absolute inset-0" />
              {name}
            </a>
          </p>
          <span className={`bg-[#C7DFF7] dark:bg-[#0A2744] text-[#12467B] dark:text-[#C7DFF7] mr-1 px-2 py-0.5 flex items-center text-xs font-semibold rounded `}>
            <p className=''>{role}</p>
          </span>
          <div className="flex flex-grow"></div>
          <div className="flex flex-grow text-sm dark:text-[#555E68] justify-end">
            {Date}
          </div>
        </div>
        <div className="flex">
          <p className="text-sm dark:text-[#F0F4F8] text-[#171A1C] mt-2 ">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;