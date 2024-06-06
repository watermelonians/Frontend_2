import React, { useState, useEffect, useRef } from 'react';
import { AiFillAudio, AiFillFileExcel, AiFillFilePdf, AiFillFilePpt, AiFillFileText, AiFillFileWord, AiFillFileZip, AiFillHtml5, AiFillPicture, AiFillVideoCamera, AiOutlineClose, AiOutlineLink, AiOutlinePlus } from 'react-icons/ai';
import { MemberTooltip} from '../animated-tooltip/roletooltip';
import { getAuth } from "firebase/auth";
import { parseCookies, setCookie } from "nookies"; // Assuming you are using 'nookies' for managing cookies
import { useRouter } from "next/navigation";
import DropDownMembers from '../CategoryCard/dropdownMembers';
import DropDownRole from '../CategoryCard/dropdownRole';
import DropDownTags from '../CategoryCard/dropdownTags';

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

const AddSuggestion = ({ showModal, setShowModal, addCard, avatarSrc, name, role }) => {
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
    <div className={`fixed inset-50 z-50 ${showModal ? '' : 'hidden'}`}>
      <div className="fixed inset-0 dark:bg-[#050C28] bg-[#EDF5FD] opacity-80"></div>
      <div ref={modalRef} className="flex flex-col dark:bg-[#050C28] bg-[#EDF5FD] bg-gradient-to-r from-[#0B6BCB06] to-[#0B6BCB20] rounded-lg p-8 m-4 max-w-xl max-h-100 mx-auto relative z-50 shadow-1 dark:shadow-[#EDF5FD] shadow-[#050C28]">
        <div className="relative mt-1 flex items-center gap-x-4 mb-4">
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
            <p className="text-[#636B74] font-normal">{role}</p>
            </div>
        </div>
        <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Add description here'
              className="flex flex-grow mr-4 rounded-md border-gray-300 shadow-sm dark:text-[#F0F4F8] text-[#171A1C] dark:bg-[#0A274440] bg-[#E3EFFB] dark:placeholder:text-[#F0F4F8] placeholder:text-[#171A1C] placeholder:text-sm p-3 focus:outline focus:outline-[#636B7429] max-h-20 min-h-10"
        ></textarea>
        <div className='flex flex-row justify-end mt-4'>
            <button className='flex h-fit justify-end rounded dark:text-[#FFFFFF] text-[#FFFFFF] text-xs font-semibold dark:bg-[#1F7A1F] bg-[#1F7A1F] px-3 py-2'>Add suggestion</button>
        </div>
        
      </div>
    </div>
  );
};

export default AddSuggestion;
