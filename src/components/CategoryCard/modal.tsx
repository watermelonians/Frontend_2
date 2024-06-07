import React, { useState, useEffect, useRef } from 'react';
import { AiFillAudio, AiFillFileExcel, AiFillFilePdf, AiFillFilePpt, AiFillFileText, AiFillFileWord, AiFillFileZip, AiFillHtml5, AiFillPicture, AiFillVideoCamera, AiOutlineClose, AiOutlineLink, AiOutlinePlus } from 'react-icons/ai';
import { MemberTooltip} from '../animated-tooltip/roletooltip';
import DropDownMembers from './dropdownMembers';
import DropDownTags from './dropdownTags';
import DropDownRole from './dropdownRole';
import { getAuth } from "firebase/auth";
import { parseCookies, setCookie } from "nookies"; // Assuming you are using 'nookies' for managing cookies
import { useRouter } from "next/navigation";

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

const Members = [
  { id: 1, name: "Google", designation: "Software Engineer", image: "/images/brand/brand-01.svg" },
  { id: 2, name: "Twitter", designation: "Product Manager", image: "/images/brand/brand-02.svg" },
  { id: 3, name: "Github", designation: "Data Scientist", image: "/images/brand/brand-03.svg" },
  { id: 4, name: "Vimeo", designation: "UX Designer", image: "/images/brand/brand-04.svg" },
  { id: 5, name: "Facebook", designation: "Soap Developer", image: "/images/brand/brand-05.svg" },
  { id: 6, name: "Google", designation: "The Explorer", image: "/images/brand/brand-01.svg" }
];

const Tags = [
  { id: 1, tag: "Tag1"},
  { id: 2, tag: "Tag2"},
  { id: 3, tag: "Tag3"},
  { id: 4, tag: "Tag4"},
  { id: 5, tag: "Tag5"},
];

const Role = [
  { id: 1, role: "Role 1001101"},
  { id: 2, role: "Role2"},
  { id: 3, role: "Role3"},
  { id: 4, role: "Role4"},
  { id: 5, role: "Role5"}
];

const AddCardModal = ({ showModal, setShowModal, addCard }) => {
  const [title, setTitle] = useState('');
  const [selectedTags, setSelectedTags] = useState<Map<number, any>>(new Map());
  const [selectedMembers, setSelectedMembers] = useState(new Map());
  const [selectedRoles, setSelectedRoles] = useState<Map<number, any>>(new Map());
  const [description, setDescription] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const modalRef = useRef(null);
  const inputRef = useRef(null);

  const router = useRouter();
  const trigger = useRef<any>(null);

  const [displayName, setDiplayName] = useState("First Name Last Name");
  const [email, setEmail] = useState("emailaddress@ensia.edu.dz");
  const [photoURL, setPhotoURL] = useState(`/images/user/default-A.png`);

  const checkCookie = (): boolean => {
    const cookies = parseCookies();
    return !!cookies.email && !!cookies.displayName && !!cookies.photoURL;
  };

  useEffect(() => {
    try {
      if (checkCookie()) {
        const cookies = parseCookies();
        setDiplayName(cookies.displayName);
        setEmail(cookies.email);
        setPhotoURL(cookies.photoURL);
      } else {
        const user = getAuth().currentUser;
        if (user) {
          let userDisplayName = user.displayName ?? "First Name Last Name";
          let userEmail = user.email ?? "emailaddress@ensia.edu.dz";
          let userPhotoURL =
            user.photoURL ??
            `/images/user/default-${userEmail.charAt(0).toUpperCase()}.png`;

          setDiplayName(userDisplayName);
          setEmail(userEmail);
          setPhotoURL(userPhotoURL);

          setCookie(null, "displayName", userDisplayName, {
            maxAge: 30 * 24 * 60 * 60, // Expires in 30 days
            path: "/", // The cookie is available for the entire domain
          });
          setCookie(null, "email", userEmail, {
            maxAge: 30 * 24 * 60 * 60, // Expires in 30 days
            path: "/",
          });
          setCookie(null, "photoURL", userPhotoURL, {
            maxAge: 30 * 24 * 60 * 60, // Expires in 30 days
            path: "/",
          });
        } else {
          // TODO
          router.push("/");
        }
      }
    } catch (e: any) {
      console.log("There was an error with the backend.");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal, setShowModal]);


  const handleSelectedMembersChange = (updatedSelectedMembers) => {
    setSelectedMembers(updatedSelectedMembers);
  };

  const handleSelectedTagsChange = (selectedTagsMap) => {
    setSelectedTags(selectedTagsMap);
  };

  const handleSelectedRolesChange = (selectedRolesMap) => {
    setSelectedRoles(selectedRolesMap);
  };


  const handleFileChange = (event, username) => {
    // Collect the uploaded files
    const files = Array.from(event.target.files);
    // Create new attachments with initial data
    const newAttachments = files.map(file => ({
      file: file,
      title: file.name,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      username: username // Pass the username here
    }));
    // Add new attachments to the existing list
    setAttachments([...attachments, ...newAttachments]);
  };

  const handleRemoveAttachment = (index) => {
    const updatedAttachments = [...attachments];
    updatedAttachments.splice(index, 1);
    setAttachments(updatedAttachments);
  };
  

  const handleSubmit = () => {
    addCard({ title, selectedTags, selectedMembers, selectedRoles, description, attachments });
    setShowModal(false);
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
          // eslint-disable-next-line react/jsx-no-undef
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

  const selectedRolesArray = Array.from(selectedRoles.values());
  const showMoreRoles = selectedRolesArray.length > 2;

  return (
    <div className={`fixed inset-20 z-50 ${showModal ? '' : 'hidden'}`}>
      <div className="fixed inset-0 dark:bg-[#050C28] bg-[#EDF5FD] opacity-80"></div>
      <div ref={modalRef} className="flex flex-col dark:bg-[#050C28] bg-[#EDF5FD] rounded-lg p-8 m-4 max-w-3xl max-h-150 mx-auto relative z-50 shadow-1 dark:shadow-[#EDF5FD] shadow-[#050C28]">
        <div className="mb-4">
          <div className='flex flex-row'>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Enter the title here'
              className="flex flex-grow p-3 mr-4 w-full rounded-md shadow-sm dark:text-[#F0F4F8] text-[#171A1C] font-bold dark:bg-[#0A274440] bg-[#E3EFFB] dark:placeholder:text-white placeholder:text-[#171A1C] placeholder:font-bold placeholder:text-xl focus:outline focus:outline-[#636B7429]"
            />
            <button 
              onClick={() => setShowModal(false)} 
              className='flex items-center dark:bg-[#171A1C] bg-[#F0F4F8] h-8 w-8 justify-center'
            >
              <AiOutlineClose className='h-3 w-3 dark:text-white text-[#32383E]' />
            </button>  
          </div>
          <div className='text-[#636B74]'>in cluster (name cluster here)</div>
        </div>
        <div className=" flex flex-row">
          <div className="flex flex-col mr-2">
            <div className='text-[#636B74] mb-2 font-bold text-sm'>Tags</div>
            <div className='flex flex-row'>
              <div className='flex flex-row gap-1'>
                {Array.from(selectedTags.values()).map((tag, index) => (
                  <span key={index} className={`${getTagColor(tag.tag)} ${getTagTextColor(tag.tag)} mr-1 px-2 flex items-center text-sm font-semibold rounded`}>
                    {tag.tag}
                  </span>
                ))}
              </div>
              <DropDownTags people={Tags} onSelectedTagsChange={handleSelectedTagsChange}/>
            </div>
          </div>
          <div className='flex flex-grow'></div>
          <div className="flex flex-col ml-2">
            <div className='text-[#636B74] mb-2 font-bold text-sm'>Access settings</div>
            <DropDownMembers people={Members} onSelectedMembersChange={handleSelectedMembersChange} />
            <div className='flex flex-row mt-2'>
              <MemberTooltip items={Array.from(selectedMembers.values())} />
            </div>
          </div>
        </div>
        <div className="mb-4 flex flex-col">
          <label className="text-[#636B74] mb-1 font-bold text-sm">Description</label>
          <div className='flex flex-row'>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Add description here'
              className="flex flex-grow mr-4 rounded-md border-gray-300 shadow-sm dark:text-[#F0F4F8] text-[#171A1C] dark:bg-[#0A274440] bg-[#E3EFFB] dark:placeholder:text-[#F0F4F8] placeholder:text-[#171A1C] placeholder:text-sm p-3 focus:outline focus:outline-[#636B7429] max-h-20 min-h-10"
            ></textarea>
            <div className='flex flex-col items-end'>
              <DropDownRole people={Role} onSelectedRolesChange={handleSelectedRolesChange} />
              <div className='flex flex-row mt-4'>
              {selectedRolesArray.slice(0, 2).map((role, index) => (
                <span key={index} className={`bg-[#C7DFF7] dark:bg-[#0A2744] text-[#12467B] dark:text-[#C7DFF7] mr-1 px-2 py-1 flex items-center text-xs font-semibold rounded max-w-15`}>
                  <p className='truncate'>{role.role}</p>
                </span>
              ))}
              {showMoreRoles && (
                <div className="relative">
                  {/* This div will display the remaining roles count as a tooltip */}
                  <div className={`bg-[#C7DFF7] text-[#12467B] px-2 py-1 flex items-center text-xs font-semibold rounded`}>
                    +{selectedRolesArray.length - 2}
                  </div>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className='flex flex-row'>
            <label className="text-[#636B74] mb-2 font-bold text-sm flex flex-grow">Attachments</label>
            <button 
              className="dark:bg-[#0A2744] bg-[#E3EFFB] dark:text-[#C7DFF7] text-[#12467B] p-2 rounded text-xs font-semibold flex justify-end mr-35"
              onClick={() => inputRef.current.click()}
            >
              Add
            </button>
            <input 
              type="file"
              ref={inputRef} 
              onChange={(event) => handleFileChange(event, displayName)}
              multiple 
              className="hidden"
            />
          </div>
        </div>
        <div className='flex flex-col max-h-40 overflow-auto'>
          {attachments.map((attachment, index) => (
            <div key={index} className='flex flex-col mb-3'>
              <a href={attachment.url} className='flex flex-row'>
                <div className='flex h-15 w-20 dark:bg-[#F5F7FA40] bg-[#12141640] items-center justify-center mr-4'>
                  <AiOutlineLink className='h-8 w-8 text-white dark:text-black' />
                </div>
                <div className='flex flex-col text-xs font-normal dark:text-[#F0F4F8] text-[#171A1C]'>
                  <p className='font-bold'>{attachment.title}</p>
                  <div className='flex flex-row'>
                    <p className='mr-1'>Added on</p>
                    <p>{attachment.date} : {attachment.time} by {attachment.username}</p>
                  </div>
                  <p className=' w-114 truncate'>{attachment.description}</p>
                </div>
              </a>
              <button className='ml-25 rounded dark:text-[#C7DFF7] text-[#12467B] text-xs font-semibold dark:bg-[#0A2744] bg-[#E3EFFB] px-2 py-1 w-20' onClick={() => handleRemoveAttachment(index)}>remove</button>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-[#1F7A1F] text-white font-semibold px-4 py-2 text-sm rounded"
          >
            Share problem/Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCardModal;
