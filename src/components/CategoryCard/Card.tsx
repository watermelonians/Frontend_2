// Card.js
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, button, useDisclosure } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { AiOutlineLike, AiOutlineComment, AiOutlinePaperClip, AiOutlineEye, AiOutlineAlignLeft, AiFillLike, AiFillFileWord, AiFillFilePdf, AiFillAudio, AiFillFileText, AiFillVideoCamera, AiFillChrome, AiFillFile, AiFillGoogleCircle, AiOutlineLink, AiFillPicture, AiFillMessage, AiFillFileExcel, AiFillFilePpt, AiFillFileZip, AiFillHtml5 } from 'react-icons/ai';
import FollowSwitch from './followSwitch';
import Image from 'next/image';
import { FaThumbsUp, FaRegThumbsUp } from 'react-icons/fa';

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

  export interface CardProps {
    title: string;
    avatarSrc: string;
    username: string;
    date: string;
    time: string;
    category: string[];
    cluster: string;
    archive: boolean;
    follow: boolean;
    likes: number;
    like: boolean;
    comments: number;
    myVote: boolean;
    priority: number;
    description: string;
    attachments: [];
    solved: boolean;
  }
  
  const Card: React.FC<CardProps> = ({ title, avatarSrc, username, date, time, category, cluster, archive, follow, likes, like, comments, myVote, priority, description, attachments, solved }) => {
  
  const [backdrop, setBackdrop] = useState('blur');
  const [isChecked, setIsChecked] = useState(myVote);


  const handleOpen = (backdrop) => {
    setBackdrop(backdrop)
    onOpen();
  }

  const [upvote, handleUpVote] = useState<number>(likes || 0);
  const [isUp, setIsUpvoted] = useState<boolean>(like || false);

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
          // eslint-disable-next-line @next/next/no-img-element
          'png': <Image src={url} alt={""} width={20} height={15} />,
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

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
    return (
      <><li className="mt-3 cursor-pointer">
        <div onClick={() => handleOpen(backdrop)} className="block p-5 dark:bg-[#050C28] bg-[#EDF5FD] rounded-xl shadow">
          <div className="flex justify-between">
            <p className="text-sm font-bold leading-snug dark:text-[#F0F4F8] text-[#171A1C] text-left">{title}</p>
          </div>
          <div className="flex justify-between items-baseline">
            <div className="mt-2">
              {category.map((tag, index) => (
                <span key={index} className={`px-2 py-1 leading-tight inline-flex items-center rounded-lg mr-1 font-semibold text-xs ${getTagTextColor(tag)} ${getTagColor(tag)}`}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-start mt-2">
            <button onClick={handleUpVoteClick} className=' cursor-pointer'>
              {isUp ? (
                <AiFillLike className="mr-1 text-[#0B6BCB] cursor-pointer hover:text-[#0B6BCB] transform hover:scale-125 transition duration-300" title='You should click on the card for more information'/>
              ) : (
                <AiOutlineLike className="mr-1 dark:text-[#9FA6AD] text-[#636B74] cursor-pointer hover:text-[#636B74] dark:hover:text-[#9FA6AD] transform hover:scale-125 transition duration-300" title='You should click on the card for more information'/>
              )}
            </button>       
            <p className='mr-2 text-xs font-normal'>{upvote}</p>               
            <AiOutlineAlignLeft className="mr-2 dark:text-[#9FA6AD] text-[#636B74] cursor-pointer hover:text-[#636B74] dark:hover:text-[#9FA6AD] transform hover:scale-125 transition duration-300" title='You should click on the card for more information' />
            {comments !== 0 && (
              <>
                <AiOutlineComment className="mr-1 dark:text-[#9FA6AD] text-[#636B74] cursor-pointer hover:text-[#636B74] dark:hover:text-[#9FA6AD] transform hover:scale-125 transition duration-300" title='You should click on the card for more information' />
                <p className='mr-2 text-xs font-normal'>{comments}</p>
              </>
            )}            
            {attachments.length !== 0 && (
              <>
                <AiOutlinePaperClip className="mr-1 dark:text-[#9FA6AD] text-[#636B74] cursor-pointer hover:text-[#636B74] dark:hover:text-[#9FA6AD] transform hover:scale-125 transition duration-300" title='You should click on the card for more information' />
                <p className='mr-2 text-xs font-normal'>{attachments.length}</p>
              </>
            )}            
            <AiOutlineEye className="dark:text-[#9FA6AD] text-[#636B74] cursor-pointer hover:text-[#636B74] dark:hover:text-[#9FA6AD] transform hover:scale-125 transition duration-300" title='You should click on the card for more information' />
            <div className='flex-grow'></div>
            <span>
              <img className="h-4 w-4 rounded-full" src={avatarSrc} alt="avatar" />
            </span>
          </div>
        </div>
      </li><Modal aria-hidden="true" isOpen={isOpen} onOpenChange={onOpenChange} backdrop={backdrop} scrollBehavior={'inside'} className='mt-20 w-150 h-150 dark:bg-[#050C28] bg-[#EDF5FD] rounded-lg shadow-2xl shadow-[#000000BF] dark:shadow-[#EDF5FD]'>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  <p className='dark:text-[#F0F4F8] text-[#171A1C]'>{title}</p>
                  <div className='flex flex-row'>
                    <p className='font-normal dark:text-[#636B74] text-[#636B74]'>{cluster}</p>
                    <div className='flex flex-grow'></div>
                    <div className='flex select-none dark:text-[#636B74] text-[#636B74] font-normal text-xs'>
                      <div className="relative">
                        {
                          solved ? <div className={`mr-2 flex h-4 w-4 items-center justify-center rounded border border-[#1F7A1F] bg-[#1F7A1F] dark:bg-[#1F7A1F] dark:border-[#1F7A1F]`}></div> 
                          : <div className={`mr-2 flex h-4 w-4 items-center justify-center rounded border bg-[#C41C1C] border-[#C41C1C] dark:bg-[#C41C1C] dark:border-[#C41C1C]`}></div>
                        }
                      </div>
                      {solved ? "Mark as Solved" : "Mark as Unsolved"}
                    </div>
                  </div>
                  <div className='flex flex-row mt-4'>
                    <span>
                      <img className="h-10 w-10 rounded-full" src={avatarSrc} alt="avatar" />
                    </span>
                    <div className='ml-4 flex flex-col dark:text-[#F0F4F8] text-[#171A1C] font-normal text-sm'>
                      <div className='flex flex-row'>
                        This problem was added by
                        <div className='ml-1 font-bold'>
                        {username}
                        </div>
                      </div>
                      <div className='text-xs'>
                        {date} : {time}
                      </div>
                    </div>
                    <div className='flex flex-grow'></div>
                    <button className='w-25 h-8 items-center justify-center dark:bg-[#430A0A] bg-[#FCE4E4] dark:text-[#F7C5C5] text-[#7D1212] rounded text-xs font-semibold'>Archive Card</button>
                  </div>
                  <div className='flex flex-row'>
                    <div className='grid grid-cols-10 gap-4'>
                      <div className='col-span-5 text-xs font-semibold'>
                        <div className='flex flex-col'>
                          <div className='dark:text-[#636B74] text-[#636B74]'>Tags</div>
                          <div className='mt-2 flex flex-row'>
                            {category.map((tag, index) => (
                              <span key={index} className={`px-2 py-1 leading-tight inline-flex items-center rounded-lg mr-1 font-semibold text-xs ${getTagTextColor(tag)} ${getTagColor(tag)}`}>
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className='col-span-2 text-xs font-semibold'>
                        <div className='flex flex-col'>
                          <div className='dark:text-[#636B74] text-[#636B74]'>Notification</div>
                          <FollowSwitch follow={follow} onFollowChange={handleFollowChange }/>
                        </div>
                      </div>
                      <div className='col-span-2 text-xs font-semibold'>
                        <div className='flex flex-col'>
                          <div className='dark:text-[#636B74] text-[#636B74]'>Importance</div>
                          <div className='flex flex-row mt-2 '>
                            <AiFillLike className="text-[#C41C1C] items-center justify-center h-4 w-4"/>
                            <div className='ml-2 dark:text-[#F09898] text-[#C41C1C] text-xs text-center items-center justify-center'>{upvote}</div>
                          </div>
                          <div className='flex flex-row text-xs font-normal'>
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
                        </div>
                      </div>
                      <div className='col-span-1 text-xs font-semibold dark:text-[#636B74] text-[#636B74]'>
                        Priority
                        <div className="mt-2 rounded-full w-4 h-4 justify-center items-center" style={{ backgroundColor: getBackgroundColor(priority) }}>
                          <p className="flex text-[#FFFFFF] items-center justify-center text-xs text-center">{priority}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ModalHeader>
                <ModalHeader>
                  <div className='flex flex-row'>
                    <div className=' mr-115 text-xs font-semibold dark:text-[#636B74] text-[#636B74]'>Description</div>
                    <div className='flex flex-grow'></div>
                    <button className='rounded dark:text-[#C7DFF7] text-[#12467B] text-xs font-semibold dark:bg-[#0A2744] bg-[#E3EFFB] px-2 py-1'>Edit</button>
                  </div>
                </ModalHeader>
                <ModalBody>
                  <p className='whitespace-pre-line flex dark:text-[#F0F4F8] text-[#171A1C] font-normal text-sm'>
                    {description.split('.').join('.\n')}
                  </p>
                </ModalBody>
                <ModalHeader>
                  <div className='flex flex-row'>
                    <div className=' mr-114 text-xs font-semibold dark:text-[#636B74] text-[#636B74]'>Attachements</div>
                    <div className='flex flex-grow'></div>
                    <button className='rounded dark:text-[#C7DFF7] text-[#12467B] text-xs font-semibold dark:bg-[#0A2744] bg-[#E3EFFB] px-2 py-1'>Add</button>
                  </div>
                </ModalHeader>
                <ModalBody>
                  <div className='flex flex-col'>
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
                </ModalBody>
                <div className='pt-6 pl-6 pb-4 flex flex-row bottom-0'>
                  <button className='mt-1'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#1F7A1F" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 2H4.01001C2.91001 2 2.01001 2.9 2.01001 4V22L6.00001 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM13 14H11V12H13V14ZM13 9C13 9.55 12.55 10 12 10C11.45 10 11 9.55 11 9V7C11 6.45 11.45 6 12 6C12.55 6 13 6.45 13 7V9Z" fill="#1F7A1F"/>
                    </svg>
                  </button>
                  <p className='ml-2 flex justify-start items-start text-start font-bold text-xl dark:text-[#A1E8A1] text-[#1F7A1F] mr-10'>{comments}</p>
                  <a href="/DiscussionSpace">
                    <button className='rounded dark:text-[#FFFFFF] text-[#FFFFFF] text-sm font-semibold dark:bg-[#0B6BCB] bg-[#0B6BCB] px-2 py-1'>Go see discusion section</button>
                  </a>
                </div>
              </>
            )}
          </ModalContent>
        </Modal></>
    );
  };
  
  export default Card;
  