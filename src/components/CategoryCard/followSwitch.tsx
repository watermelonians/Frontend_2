import React, { useState } from 'react';

const FollowButton = ({ follow, onFollowChange }) => {
  const [isFollowing, setIsFollowing] = useState(follow); // Initial state from prop

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
    onFollowChange && onFollowChange(!isFollowing); // Optional callback for parent handling
  };

  return (
    <button
      type="button"
      className={`mt-1 flex items-center px-0.5 py-2 rounded-2xl transition-all duration-300 ease-in-out justify-center ${
        isFollowing
          ? 'dark:bg-[#1F7A1F99] bg-[#1F7A1F99] text-[#FFFFFF] hover:bg-[#C7F7C799] focus:outline-none'
          : 'dark:bg-[#C7F7C797] bg-[#C7F7C797] text-[#FFFFFF] hover:bg-[#0A470A99] focus:outline-none'
      }`}
      onClick={handleFollowClick}
    >
      {isFollowing ? (
        <>
          <svg
            className="h-4 w-5 fill-current text-white"
            viewBox="-5 -5 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z"
              clipRule="evenodd"
            />
          </svg>
          <span className='px-1'>Followed</span>
        </>
      ) : (
        <>
          <span className='px-1'>Follow</span>
          <svg
            className="flex h-4 w-5 fill-current text-white justify-end items-end"
            viewBox="-5 -5 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z"
              clipRule="evenodd"
            />
          </svg>
        </>
      )}
    </button>
  );
};

export default FollowButton;
