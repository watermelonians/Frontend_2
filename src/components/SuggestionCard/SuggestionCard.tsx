import { button } from "@nextui-org/react";
import React from "react";
import { AiOutlineComment, AiOutlineMessage, AiTwotoneMessage } from "react-icons/ai";
import { FaComment, FaCommentAlt, FaCommentDollar, FaRegComment, FaRegCommentAlt, FaRegCommentDots, FaRegComments } from "react-icons/fa";

interface SuggestionCardProps {
    avatarSrc: string | null;
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
  commentCount,
}) => {
  return (
    
    <div className="flex flex-col col-span-1 h-full rounded-lg bg-gradient-to-r from-[#0B6BCB06] to-[#0B6BCB20] p-3 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
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
        <div className="flex flex-grow"></div>
        <div className="flex items-end justify-end">
          <svg width="18" height="16" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 3.75C0.5 1.67893 2.17894 0 4.25 0H17.75C19.8211 0 21.5 1.67893 21.5 3.75V11.25C21.5 13.321 19.8211 15 17.75 15H12.0318L7.43799 19.0195C6.48752 19.8513 5 19.1763 5 17.9133V15H4.25C2.17894 15 0.5 13.321 0.5 11.25V3.75ZM4.25 1.5C3.00735 1.5 2 2.50735 2 3.75V11.25C2 12.4926 3.00735 13.5 4.25 13.5H6.5V17.8471L11.4682 13.5H17.75C18.9926 13.5 20 12.4926 20 11.25V3.75C20 2.50735 18.9926 1.5 17.75 1.5H4.25Z" fill="#636B74"/>
          </svg>
          <p className="text-[#555E68] font-semibold text-sm ml-2 mr-4">{commentCount}</p>
          <svg width="18" height="16" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8966 4.09938C13.8379 4.0292 13.7644 3.97274 13.6815 3.93398C13.5986 3.89522 13.5082 3.87509 13.4166 3.875H9.66663V1.375C9.66663 1.20924 9.60078 1.05027 9.48357 0.933058C9.36636 0.815848 9.20739 0.75 9.04163 0.75H7.16663C6.91663 0.75 6.69038 0.89875 6.59225 1.12875L4.87975 5.125H4.66663C4.66663 4.95924 4.60078 4.80027 4.48357 4.68306C4.36636 4.56585 4.20739 4.5 4.04163 4.5H1.54163C1.37587 4.5 1.21689 4.56585 1.09968 4.68306C0.982474 4.80027 0.916626 4.95924 0.916626 5.125V11.375C0.916626 11.5408 0.982474 11.6997 1.09968 11.8169C1.21689 11.9342 1.37587 12 1.54163 12H4.04163C4.20739 12 4.36636 11.9342 4.48357 11.8169C4.60078 11.6997 4.66663 11.5408 4.66663 11.375V11.0487L6.93413 11.9556C7.0085 11.985 7.08725 12 7.16663 12H12.1666C12.4685 12 12.7273 11.7838 12.7816 11.4869L14.0316 4.61188C14.048 4.52178 14.0445 4.42917 14.0211 4.34061C13.9978 4.25204 13.9553 4.16969 13.8966 4.09938ZM3.41663 10.75H2.16663V5.75H3.41663V10.75ZM11.6454 10.75H7.28725L4.66663 9.70187V6.375H5.29163C5.54163 6.375 5.76788 6.22625 5.866 5.99625L7.5785 2H8.41663V4.5C8.41663 4.66576 8.48247 4.82473 8.59968 4.94194C8.71689 5.05915 8.87587 5.125 9.04163 5.125H12.6679L11.6454 10.75Z" fill="#555E68"/>
          </svg>
          <p className="text-[#555E68] font-semibold text-sm ml-2 mr-4">{likeCount}</p>
        </div>
    </div>
  );
};

export default SuggestionCard;