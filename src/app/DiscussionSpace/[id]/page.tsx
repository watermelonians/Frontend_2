"use client";

import FollowSwitch from '@/components/CategoryCard/followSwitch';
import SuggestionCard from '@/components/SuggestionCard/SuggestionCard';
import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react';
import cluster from 'cluster';
import { time } from 'console';
import { useSearchParams } from 'next/navigation';
import { title } from 'process';
import React, { useState } from 'react'
import { AiFillAudio, AiFillCaretDown, AiFillCaretLeft, AiFillFileExcel, AiFillFilePdf, AiFillFilePpt, AiFillFileText, AiFillFileWord, AiFillFileZip, AiFillHtml5, AiFillLike, AiFillPicture, AiFillVideoCamera, AiOutlineAlignLeft, AiOutlineArrowLeft, AiOutlineClose, AiOutlineLeft, AiOutlineLink } from 'react-icons/ai';


const getTagColor = (tagName) => {
  switch (tagName) {
    case "Tag1":
      return 'dark:bg-[#492B08] bg-[#FCE1C2]';
    case "Tag2":
      return 'dark:bg-[#7D1212] bg-[#F7C5C5]';
    case "Tag3":
      return 'dark:bg-[#0A470A] bg-[#C7F7C7]';
    case "Tag4":
      return 'dark:bg-[#0B6BCB] bg-[#C7DFF7]';
    default:
      return 'dark:bg-[#636B74] bg-[#DDE7EE]'; // Default color
  }
};

const getTagTextColor = (tagName) => {
  switch (tagName) {
    case "Tag1":
      return 'text-[#9A5B13] dark:text-[#F3C896]';
    case "Tag2":
      return 'text-[#C41C1C] dark:text-[#F09898]';
    case "Tag3":
      return 'text-[#1F7A1F] dark:text-[#A1E8A1]';
    case "Tag4":
      return 'text-[#12467B] dark:text-[#97C3F0]';
    default:
      return 'text-[#32383E] dark:text-[#CDD7E1]'; // Default color
  }
};

function ProblemDetailsDisc() {
  const searchParams = useSearchParams();
  
  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const avatarSrc = searchParams.get('avatarSrc');
  const username = searchParams.get('username');
  const date = searchParams.get('date');
  const time = searchParams.get('time');
  const Tags = searchParams.get('Tags')?.split(',') || [];
  const cluster = searchParams.get('cluster');
  const archive = searchParams.get('archive') === 'true';
  const follow = searchParams.get('follow') === 'true';
  const upvote_ = parseInt(searchParams.get('upvote_'), 10);
  const like = searchParams.get('like') === 'true';
  const feedbackCount = parseInt(searchParams.get('feedbackCount'), 10);
  const myVote = searchParams.get('myVote') === 'true';
  const priority = parseInt(searchParams.get('priority'), 10);
  const description = searchParams.get('description');
  const attachments = JSON.parse(searchParams.get('attachments') || '[]');
  const solved = searchParams.get('solved') === 'true';

  const [upvote, handleUpVote] = useState<number>(upvote_ || 0);
  const [isUp, setIsUpvoted] = useState<boolean>(like || false);
  const [isChecked, setIsChecked] = useState(myVote);
  const allClusters = Array.from({ length: 7 }, (_, i) => `Cluster 0${i + 1}`);
  const [visibleClusters, setVisibleClusters] = useState(5);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleShow = () => {
    setVisibleClusters(visibleClusters === 5 ? allClusters.length : 5);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleUpVoteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (isUp) {
      handleUpVote((prevCount) => prevCount - 1);
      setIsUpvoted(false);
    } else {
      handleUpVote((prevCount) => prevCount + 1);
      setIsUpvoted(true);
    }
  };

  const [isFollowing, setIsFollowing] = useState(false); // Example initial state

  const handleFollowChange = (newFollowState) => {
    setIsFollowing(newFollowState);
    // Perform additional actions in the parent component if needed (e.g., API calls, data updates)
  };

  type GetImageIconFunction = (props: { url: string }) => JSX.Element;

  // Define getImageIcon function
  const getImageIcon: GetImageIconFunction = ({ url }) => {
      // Extract file extension from URL
      const extension = url.split('.').pop()?.toLowerCase() ?? '';

      // Define icons for different file types
      const fileIcons: { [key: string]: JSX.Element } = {
          'zip': <AiFillFileZip className=' h-8 w-8 text-[#ffb11f]' />,
          'pdf': <AiFillFilePdf className=' h-8 w-8 text-[#E5252A]' />,
          'docx': <AiFillFileWord className='h-8 w-8 text-[#0263d1]' />,
          'doc': <AiFillFileWord className='h-8 w-8 text-[#0263d1]' />,
          'odt': <AiFillFileWord className='h-8 w-8 text-[#0263d1]' />,
          'xls': <AiFillFileExcel className='h-8 w-8 text-[#00733b]' />,
          'xlsx': <AiFillFileExcel className='h-8 w-8 text-[#00733b]' />,
          'pptx': <AiFillFilePpt className='h-8 w-8 text-[#e03303]' />,
          'ppt': <AiFillFilePpt className='h-8 w-8 text-[#e03303]' />,
          'txt': <AiFillFileText className='h-8 w-8 text-[#251d36]' />,
          'mp3': <AiFillAudio className='h-8 w-8 text-[#9900cc]' />,
          'wav': <AiFillAudio className='h-8 w-8 text-[#9900cc]' />,
          'mp4': <AiFillVideoCamera className='h-8 w-8 text-[#fa0000]' />,
          'avi': <AiFillVideoCamera className='h-8 w-8 text-[#fa0000]' />,
          'mov': <AiFillVideoCamera className='h-8 w-8 text-[#fa0000]' />,
          'ogg': <AiFillVideoCamera className='h-8 w-8 text-[#fa0000]' />,
          'png': <AiFillPicture className='h-8 w-8 text-[#0ac963]' />,
          'jpg': <AiFillPicture className='h-8 w-8 text-[#0ac963]' />,
          'jpeg': <AiFillPicture className='h-8 w-8 text-[#0ac963]' />,
          'gif': <AiFillPicture className='h-8 w-8 text-[#0ac963]' />,
          'svg': <AiFillPicture className='h-8 w-8 text-[#0ac963]' />,
          'html': <AiFillHtml5 className='h-8 w-8 text-[#00a1e0]' />,
          // Add more file types and corresponding icons as needed
      };

      // Check if the extension exists in the fileIcons object
      if (fileIcons.hasOwnProperty(extension)) {
          return fileIcons[extension];
      } else {
          // If the extension is not found, return a default icon or handle it as per your requirements
          return <AiOutlineLink className='h-8 w-8 text-white dark:text-black' />; // You can change this to any default icon you prefer
      }
  };

  

  const getBackgroundColor = (priority: number): string => {
    switch (priority) {
      case 1:
        return "red";
      case 2:
        return "orange";
      case 3:
        return "green";
      // Add more cases for other sales values as needed...
      default:
        return "gray";
    }
  };

  const TagsArray = Array.from(Tags.values());
  const showmoreTags = TagsArray.length > 3;
  
  return (
    <div className='flex w-full flex-row overflow-hidden overflow-y-hidden'>
      <div className="flex flex-col dark:bg-[#0A274440] bg-[#E3EFFB] rounded-tl-xl rounded-bl-xl p-4 h-full min-h-150 mr-2 w-full max-w-280 overflow-y-auto">
        <div className='flex flex-row justify-start mb-4'>
          <button 
            className='flex items-center dark:bg-[#171A1C] bg-[#F0F4F8] h-8 w-8 justify-center rounded'
          >
            <AiOutlineArrowLeft className='h-3 w-3 dark:text-[#DDE7EE] text-[#32383E]' />
          </button>
          <div className='flex justify-items-center p-1 ml-4 flex-col dark:text-[#F0F4F8] text-[#171A1C]'>
            <p className='font-bold'>{title}</p>
            <div className='text-xs'>
              {date} : {time}
            </div>
          </div>
          <div className='flex flex-grow'></div>
          <div className='flex flex-col justify-end items-end'>
            <div className='flex select-none dark:text-[#636B74] text-[#636B74] font-normal text-xs'>
              <div className="relative">
                {
                  solved ? <div className={`mr-2 flex h-4 w-4 items-center justify-center rounded border border-[#1F7A1F] bg-[#1F7A1F] dark:bg-[#1F7A1F] dark:border-[#1F7A1F]`}></div> 
                  : <div className={`mr-2 flex h-4 w-4 items-center justify-center rounded border bg-[#C41C1C] border-[#C41C1C] dark:bg-[#C41C1C] dark:border-[#C41C1C]`}></div>
                }
              </div>
              {solved ? "Mark as Solved" : "Mark as Unsolved"}
            </div>
            <div className='text-xs font-semibold mt-2'>
              <FollowSwitch follow={follow} onFollowChange={handleFollowChange }/>
            </div>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col justify-start items-center mr-5'>
            <span>
              <img className="h-10 w-10 rounded-full" src={avatarSrc} alt="avatar" />
            </span>
            <div className='ml-1 font-bold text-sm dark:text-[#F0F4F8] text-[#171A1C] mt-2'>
              {username}
            </div>
          </div>
          <div className='flex flex-col w-full'>
            <div className='flex flex-row justify-between w-full'>
              <div className='flex text-xs font-semibold dark:text-[#636B74] text-[#636B74]'>Description</div>
              <button className='flex h-fit justify-end rounded dark:text-[#C7DFF7] text-[#12467B] text-xs font-semibold dark:bg-[#0A2744] bg-[#E3EFFB] px-2 py-1'>Edit</button>
            </div>
            <div className={`flex overflow-hidden ${showFullDescription ? '' : 'max-h-20'}`}>
              <p className='whitespace-pre-line flex dark:text-[#F0F4F8] text-[#171A1C] font-normal text-xs'>
                {description.split('.').join('.\n')}
              </p>
            </div>
            <div onClick={toggleDescription} className='cursor-pointer'>
              <p className='dark:text-[#636B74] text-[#636B74] font-semibold text-xs'>
                {showFullDescription ? 'Show Less ...' : 'Show More ...'}
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col text-xs font-semibold'>
            <div className='flex dark:text-[#636B74] text-[#636B74]'>Tags</div>
            <div className='mt-2 flex flex-row'>
              {TagsArray.slice(0, 3).map((tag, index) => (
                <span key={index} className={`px-2 py-1 leading-tight inline-flex items-center rounded-lg mr-1 font-semibold text-xs ${getTagTextColor(tag)} ${getTagColor(tag)}`}>
                  #{tag}
                </span>
              ))}
              {showmoreTags && (
                <div className="relative">
                  {/* This div will display the remaining roles count as a tooltip */}
                  <div className={`px-2 py-1 leading-tight inline-flex items-center rounded-lg mr-1 font-semibold text-xs dark:bg-[#636B74] bg-[#DDE7EE] text-[#32383E] dark:text-[#CDD7E1]`}>
                    +{TagsArray.length - 3}
                  </div>
                </div>
              )}
            </div>
            <div className='dark:text-[#636B74] text-[#636B74] mt-2'>Importance</div>
            <div className='flex flex-row mt-2 '>
              <AiFillLike className="text-[#C41C1C] items-center justify-center h-4 w-4"/>
              <div className='ml-2 dark:text-[#F09898] text-[#C41C1C] text-xs text-center items-center justify-center'>{upvote}</div>
            </div>
            <div className='flex flex-row text-xs font-normal mt-2'>
              <label
                htmlFor="checkboxLabelTwo"
                className="flex cursor-pointer select-none items-center dark:text-[#636B74] text-[#171A1C] font-normal text-xs mt-1"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id="checkboxLabelTwo"
                    className="sr-only"
                    value={myVote}
                    onChange={() => {
                      setIsChecked(!isChecked);
                    }}
                  />
                  <div
                    className={`mr-2 flex h-4 w-4 items-center justify-center rounded border ${
                      isChecked && "dark:border-[#12467B] border-[#97C3F0]"
                    }`}
                  >
                    <span className={`opacity-0 ${isChecked && "!opacity-100"}`}>
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="#0B6BCB"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                          fill="#0B6BCB"
                          stroke="#0B6BCB"
                          strokeWidth="0.4"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                add my vote
              </label>
            </div>
            <div className='col-span-1 text-xs font-semibold dark:text-[#636B74] text-[#636B74] mt-2'>
              Priority
              <div className="mt-2 rounded-full w-4 h-4 justify-center items-center" style={{ backgroundColor: getBackgroundColor(priority) }}>
                <p className="flex text-[#FFFFFF] items-center justify-center text-xs text-center">{priority}</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col ml-4 w-full'>
            <div className='flex flex-row justify-between w-full'>
              <div className='flex text-xs font-semibold dark:text-[#636B74] text-[#636B74]'>Attachements</div>
              <div className='flex flex-grow'></div>
              <button className='flex h-fit justify-end rounded dark:text-[#C7DFF7] text-[#12467B] text-xs font-semibold dark:bg-[#0A2744] bg-[#E3EFFB] px-2 py-1'>Add</button>
            </div>
            <div className='flex flex-col max-h-50 overflow-auto'>
              {attachments.map((attachment, index) => (
                <div key={index} className='flex flex-col mb-3'>
                  <a href={attachment.url} className='flex flex-row'>
                    <div className='flex h-15 w-20 dark:bg-[#F5F7FA40] bg-[#12141640] items-center justify-center mr-4'>
                      {getImageIcon({ url: attachment.url })}
                    </div>
                    <div className='flex flex-col text-xs font-normal dark:text-[#F0F4F8] text-[#171A1C]'>
                      <p className='font-bold'>{attachment.title}</p>
                      <div className='flex flex-row'>
                        <p className='mr-1'>Added on</p>
                        <p>{attachment.date} : {attachment.time} by {attachment.username}</p>
                      </div>
                      <p className=' w-114 truncate ...'>{attachment.description}</p>
                    </div>
                  </a>
                  <button className='ml-25 rounded dark:text-[#C7DFF7] text-[#12467B] text-xs font-semibold dark:bg-[#0A2744] bg-[#E3EFFB] px-2 py-1 w-20'>remove</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <div className='flex flex-row justify-between w-full'>
            <div className='flex text-2xl font-bold dark:text-[#97C3F0] text-[#0B6BCB]'>Discussion</div>
            <div className='flex flex-grow'></div>
            <button className='flex h-fit justify-end rounded dark:text-[#FFFFFF] text-[#FFFFFF] text-xs font-semibold dark:bg-[#1F7A1F] bg-[#1F7A1F] px-3 py-2'>Add suggestion</button>
          </div>
          <div className='grid  gap-4 mt-4 grid-cols-3'>
            <SuggestionCard avatarSrc={avatarSrc} name={username} role={'Role Here'} content={'Loremm kfjkefz kefjkzlkejzlf  ejfekekf ekfjkejzkje ekfjzkjflkjfez ekjzfkez'} likeCount={56} commentCount={49}/>
            <SuggestionCard avatarSrc={avatarSrc} name={username} role={''} content={'Loremm kfjkefz kefjkzlkejzlf ekjzfkez'} likeCount={12} commentCount={19}/>
            <SuggestionCard avatarSrc={avatarSrc} name={username} role={''} content={'Loremm kfjkefz kefjkzlkejzlf ekjzfkez'} likeCount={160} commentCount={8}/>
            <SuggestionCard avatarSrc={avatarSrc} name={username} role={''} content={'Loremm kfjkefz kefjkzlkejzlf ekjzfkez'} likeCount={140} commentCount={54}/>
            <SuggestionCard avatarSrc={avatarSrc} name={username} role={''} content={'Loremm kfjkefz kefjkzlkejzlf ekjzfkez'} likeCount={20} commentCount={30}/>
            <SuggestionCard avatarSrc={avatarSrc} name={username} role={''} content={'Loremm kfjkefz kefjkzlkejzlf ekjzfkez'} likeCount={79} commentCount={10}/>
          </div>
        </div>
      </div>
      <div className='flex flex-grow'></div>
      <div className='fixed right-2 max-w-35 h-150 flex flex-col overflow-auto bg-gradient-to-b from-[#0B6BCB06] to-[#0B6BCB20] rounded-br-xl box-border'>
        {allClusters.slice(0, visibleClusters).map((cluster, index) => (
          <div key={index} className='flex w-30 dark:bg-[#7D1212] bg-[#FCE4E4] p-1.5 m-2 rounded justify-center items-center'>
            <AiOutlineLeft className='mr-2 dark:text-[#F7C5C5] text-[#7D1212]'/>
            <p className='dark:text-[#F7C5C5] text-[#7D1212] font-semibold text-xs truncate'>{cluster}</p>
          </div>
        ))}
        <div onClick={handleToggleShow} className='flex w-30 p-1 m-2 mt-4 rounded justify-center items-center cursor-pointer'>
          <p className='dark:text-[#0B6BCB] text-[#0B6BCB] font-semibold text-xs truncate'>{visibleClusters === 5 ? 'Show More' : 'Show Less'}</p>
          <AiFillCaretDown className={`h-3 w-3 dark:text-[#0B6BCB] text-[#0B6BCB] transform ml-1 ${visibleClusters === 5 ? 'rotate-0' : 'rotate-180'}`} />
        </div>
      </div>
    </div>
  )
}


export default ProblemDetailsDisc;
