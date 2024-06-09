"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { getAuth } from "firebase/auth";
import { parseCookies } from "nookies";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SwitcherOne from "@/components/Switchers/SwitcherOne";
import SwitcherTwo from "@/components/Switchers/SwitcherTwo";
import SwitcherThree from "@/components/Switchers/SwitcherThree";
import SwitcherFour from "@/components/Switchers/SwitcherFour";
import Switch1 from "@/components/Switchers/Switch1";
import Switch2 from "@/components/Switchers/Switch2";
import Switch3 from "@/components/Switchers/Switch3";
import Switch4 from "@/components/Switchers/Switch4";
import Switch5 from "@/components/Switchers/Switch5";


const Profile = () => {

  const router = useRouter();

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
        } else {
          // TODO
          router.push("/");
        }
      }
    } catch (e: any) {
      console.log("There was an error with the backend.");
    }
  }, [router]);
  return (
    <>
      <div className="flex w-full justify-center items-center">
        <div className="overflow-hidden w-full rounded-sm shadow-default">
          <div className="relative flex z-20 h-35 md:h-65 w-full justify-center">
            <Image
              src={"/images/cover/Background.png"}
              alt="profile cover"
              className="h-full w-full rounded-tl-sm rounded-tr-sm object-center"
              width={900}
              height={260}
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </div>
          <div className="px-4 pb-6 text-start w-full lg:pb-8 xl:pb-11.5 flex flex-col justify-start ">
            <div className="relative z-30 h-full w-full -mt-11 rounded-xl dark:bg-[#0A274440] bg-[#E3EFFB] p-1 backdrop-blur sm:p-3">
              <div className="relative drop-shadow-2 flex flex-row">
                <div className="flex-col">
                <Image
                  src={photoURL}
                  width={70}
                  height={70}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  alt="profile"
                  className="rounded-full"
                />
                <label
                  htmlFor="profile"
                  className="absolute bottom-0 top-8 left-10 flex h-6.5 w-6.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2"
                >
                  <svg
                    className="fill-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                      fill=""
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.00004 5.83329C6.03354 5.83329 5.25004 6.61679 5.25004 7.58329C5.25004 8.54979 6.03354 9.33329 7.00004 9.33329C7.96654 9.33329 8.75004 8.54979 8.75004 7.58329C8.75004 6.61679 7.96654 5.83329 7.00004 5.83329ZM4.08337 7.58329C4.08337 5.97246 5.38921 4.66663 7.00004 4.66663C8.61087 4.66663 9.91671 5.97246 9.91671 7.58329C9.91671 9.19412 8.61087 10.5 7.00004 10.5C5.38921 10.5 4.08337 9.19412 4.08337 7.58329Z"
                      fill=""
                    />
                  </svg>
                  <input
                    type="file"
                    name="profile"
                    id="profile"
                    className="sr-only"
                  />
                </label>
                </div>
                <div className="flex flex-col ml-6 items-center justify-center">
                  <span className="hidden text-left lg:block">
                    <span className="block text-xl font-medium text-black dark:text-white">
                      {displayName}
                    </span>
                    <span className="block text-xs">{email}</span>
                  </span>
                </div>
                <div className="flex flex-grow"></div>
                <div className="flex justify-center items-center flex-row gap-2 mr-4">
                  <button className="flex flex-row justify-center items-center gap-2 dark:bg-[#0A2744] bg-[#C7DFF7] rounded-lg h-fit px-2 py-1">
                    <div className="dark:text-[#C7DFF7] text-[#12467B]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 0.666992C4.4 0.666992 0.666667 4.40033 0.666667 9.00033C0.666667 13.6003 4.4 17.3337 9 17.3337C13.6 17.3337 17.3333 13.6003 17.3333 9.00033C17.3333 4.40033 13.6 0.666992 9 0.666992ZM9 3.16699C10.3833 3.16699 11.5 4.28366 11.5 5.66699C11.5 7.05033 10.3833 8.16699 9 8.16699C7.61667 8.16699 6.5 7.05033 6.5 5.66699C6.5 4.28366 7.61667 3.16699 9 3.16699ZM9 15.0003C6.91667 15.0003 5.075 13.9337 4 12.317C4.025 10.6587 7.33333 9.75033 9 9.75033C10.6583 9.75033 13.975 10.6587 14 12.317C12.925 13.9337 11.0833 15.0003 9 15.0003Z" fill="CurrentColor"/>
                    </svg></div>
                    <span className="text-sm font-semibold dark:text-[#C7DFF7] text-[#12467B]">Overview</span>
                  </button>
                  <button className="flex flex-row justify-center items-center gap-2 dark:bg-[#12467B] bg-[#E3EFFB] rounded-lg h-fit px-2 py-1">
                    <div className="dark:text-[#C7DFF7] text-[#12467B]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.00001 0.666992C4.40001 0.666992 0.666672 4.40033 0.666672 9.00033C0.666672 13.6003 4.40001 17.3337 9.00001 17.3337C13.6 17.3337 17.3333 13.6003 17.3333 9.00033C17.3333 4.40033 13.6 0.666992 9.00001 0.666992ZM7.33334 13.167L3.16667 9.00033L4.34167 7.82533L7.33334 10.8087L13.6583 4.48366L14.8333 5.66699L7.33334 13.167Z" fill="currentColor"/>
                    </svg></div>
                    <span className="text-sm font-semibold dark:text-[#C7DFF7]">Solved</span>
                  </button>
                  <button className="flex flex-row justify-center items-center gap-2 dark:bg-[#12467B] bg-[#E3EFFB] rounded-lg h-fit px-2 py-1">
                    <div className="dark:text-[#C7DFF7] text-[#12467B]">
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.125 5.36634C15.5583 2.49134 13.0333 0.333008 10 0.333008C7.59167 0.333008 5.5 1.69967 4.45833 3.69967C1.95 3.96634 0 6.09134 0 8.66634C0 11.4247 2.24167 13.6663 5 13.6663H15.8333C18.1333 13.6663 20 11.7997 20 9.49967C20 7.29967 18.2917 5.51634 16.125 5.36634Z" fill="currentColor"/>
                    </svg></div>
                    <span className="text-sm font-semibold dark:text-[#C7DFF7]">Archive</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-row gap-3">
              <div className="w-7/12 rounded dark:bg-[#050C28] bg-gradient-to-r from-[#0B6BCB06] to-[#0B6BCB20] p-2 px-4">
                <p className="dark:text-[#F0F4F8]">My Problems/feedbacks</p>
                <div className="flex flex-col mt-4 gap-2">
                  <div className="flex flex-row justify-center items-center">
                    <p className="text-sm dark:text-[#F0F4F8]">Problem title here</p>
                    <div className="flex flex-grow"></div>
                    <p className="text-xs font-semibold dark:text-[#636B74] mr-2">12 - 12 - 2012</p>
                    <a href="/DiscussionSpace">
                    <button className='rounded dark:text-[#FFFFFF] text-[#FFFFFF] text-xs font-semibold dark:bg-[#0B6BCB] bg-[#0B6BCB] px-2 py-1'>Go To Problem</button>
                    </a>                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <p className="text-sm dark:text-[#F0F4F8]">Problem title here</p>
                    <div className="flex flex-grow"></div>
                    <p className="text-xs font-semibold dark:text-[#636B74] mr-2">12 - 12 - 2012</p>
                    <a href="/DiscussionSpace">
                    <button className='rounded dark:text-[#FFFFFF] text-[#FFFFFF] text-xs font-semibold dark:bg-[#0B6BCB] bg-[#0B6BCB] px-2 py-1'>Go To Problem</button>
                    </a>                  
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <p className="text-sm dark:text-[#F0F4F8]">Problem title here</p>
                    <div className="flex flex-grow"></div>
                    <p className="text-xs font-semibold dark:text-[#636B74] mr-2">12 - 12 - 2012</p>
                    <a href="/DiscussionSpace">
                    <button className='rounded dark:text-[#FFFFFF] text-[#FFFFFF] text-xs font-semibold dark:bg-[#0B6BCB] bg-[#0B6BCB] px-2 py-1'>Go To Problem</button>
                    </a>                  
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <p className="text-sm dark:text-[#F0F4F8]">Problem title here</p>
                    <div className="flex flex-grow"></div>
                    <p className="text-xs font-semibold dark:text-[#636B74] mr-2">12 - 12 - 2012</p>
                    <a href="/DiscussionSpace">
                    <button className='rounded dark:text-[#FFFFFF] text-[#FFFFFF] text-xs font-semibold dark:bg-[#0B6BCB] bg-[#0B6BCB] px-2 py-1'>Go To Problem</button>
                    </a>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <p className="text-sm dark:text-[#F0F4F8]">Problem title here</p>
                    <div className="flex flex-grow"></div>
                    <p className="text-xs font-semibold dark:text-[#636B74] mr-2">12 - 12 - 2012</p>
                    <a href="/DiscussionSpace">
                    <button className='rounded dark:text-[#FFFFFF] text-[#FFFFFF] text-xs font-semibold dark:bg-[#0B6BCB] bg-[#0B6BCB] px-2 py-1'>Go To Problem</button>
                    </a>                  
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <p className="text-sm dark:text-[#F0F4F8]">Problem title here</p>
                    <div className="flex flex-grow"></div>
                    <p className="text-xs font-semibold dark:text-[#636B74] mr-2">12 - 12 - 2012</p>
                    <a href="/DiscussionSpace">
                    <button className='rounded dark:text-[#FFFFFF] text-[#FFFFFF] text-xs font-semibold dark:bg-[#0B6BCB] bg-[#0B6BCB] px-2 py-1'>Go To Problem</button>
                    </a>                  
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-5/12 rounded dark:bg-[#050C28] bg-gradient-to-r from-[#0B6BCB06] to-[#0B6BCB20] items-start justify-center p-2 px-4">
                <p className=" dark:text-[#F0F4F8]">Email Settings</p>
                <div className="flex flex-col mt-4 gap-2">
                  <div className="flex flex-row gap-4">
                    <Switch1 />
                    <p className="text-sm dark:text-[#F0F4F8]">Email me when someone shares a problem</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Switch2 />
                    <p className="text-sm dark:text-[#F0F4F8]">Email me when someone shares a suggestion on my problems</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Switch3 />
                    <p className="text-sm dark:text-[#F0F4F8]">Email me when someone shares a suggestion on problems that concerns me</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Switch4 />
                    <p className="text-sm dark:text-[#F0F4F8]">Email me when someone reply on my suggestions </p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Switch5 />
                    <p className="text-sm dark:text-[#F0F4F8]">Email me when new announcement is shared</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
