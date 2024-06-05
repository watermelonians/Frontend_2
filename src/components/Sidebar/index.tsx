"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { useUserAuth } from "@/context/AuthContext";
import { getAuth } from "firebase/auth";
import { destroyCookie } from "nookies";
import { AiFillCaretDown, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  const router = useRouter();

  //////
  const { user, googleSignIn, logOut } = useUserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
      console.log("signed out");
      const auth = getAuth();
      console.log(auth.currentUser);

      destroyCookie(null, "email", { path: "/" });
      destroyCookie(null, "photoURL", { path: "/" });
      destroyCookie(null, "displayName", { path: "/" });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <aside
      ref={sidebar}
      className={`absolute rounded-2xl m-2 left-0 top-0 z-9999 shadow-2xl flex h-auto w-fit flex-col overflow-y-hidden overflow-x-hidden bg-gradient-to-b from-[#0B6BCB06] to-[#0B6BCB20] duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="m-2">
          <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
            {/* <!-- Sidebar My Spaces --> */}
            <nav className="mt-2 px-1 lg:mt-3 lg:px-4">
              {/* <!-- My Spaces Group --> */}
              <div>
                <div className="mb-2 font-bold text-lg text-black-2 dark:text-bodydark1">
                  My Spaces
                </div>
                <ul className="mb-6 flex flex-col gap-1.5">
                  {/* <!-- My Spaces Item Dashboard --> */}
                  <li>
                    <Link
                      href="/Overview"
                      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-1 font-medium text-black-2 dark:text-bodydark1 duration-300 ease-in-out active:bg-sky-400 focus:bg-sky-400 hover:bg-sky-400 dark:hover:bg-sky-400 ${
                        pathname.includes("/Overview") && 
                        "bg-sky-400 dark:bg-[#12467B]"
                      }`}
                    >
                      <div className="flex items-center gap-4 p-1.5 w-6 h-6 bg-blue-500 rounded-md">
                        <svg 
                          width="20" 
                          height="13" 
                          viewBox="0 0 15 15" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            d="M6.5 13V8.5H9.5V13H13.25V7H15.5L8 0.25L0.5 7H2.75V13H6.5Z" 
                            fill="white"
                          />
                        </svg>
                      </div>
                      Overview
                    </Link>
                  </li>
                  {/* <!-- My Spaces Item Dashboard --> */}

                  {/* <!-- My Spaces Item Discussion Space --> */}
                  <li>
                    <Link
                      href="/DiscussionSpace"
                      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-1 font-medium text-black-2 dark:text-bodydark1 duration-300 ease-in-out active:bg-sky-400 focus:bg-sky-400 hover:bg-sky-400 dark:hover:bg-sky-400 ${
                        pathname.includes("DiscussionSpace") &&
                        "bg-sky-400 dark:bg-[#12467B]"
                      }`}
                    >
                      <div className="flex items-center gap-4 p-1.5 w-6 h-6 bg-blue-500 rounded-md">
                      <svg 
                        width="14" 
                        height="14" 
                        viewBox="0 0 14 14" 
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M6.25 13.75H1.75C0.925 13.75 0.25 13.075 0.25 12.25V1.75C0.25 0.925 0.925 0.25 1.75 0.25H6.25V13.75ZM7.75 13.75H12.25C13.075 13.75 13.75 13.075 13.75 12.25V7H7.75V13.75ZM13.75 5.5V1.75C13.75 0.925 13.075 0.25 12.25 0.25H7.75V5.5H13.75Z" 
                          fill="white"
                        />
                      </svg>
                      </div>
                      Discussion Space
                    </Link>
                  </li>
                  {/* <!-- My Spaces Item Discussion Space --> */}

                  {/* <!-- My Spaces Item Feedback Board --> */}
                  <li>
                    <Link
                      href="/FeedbackBoard"
                      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-1 font-medium text-black-2 dark:text-bodydark1 duration-300 ease-in-out active:bg-sky-400 focus:bg-sky-400 hover:bg-sky-400 dark:hover:bg-sky-400 ${
                        pathname.includes("FeedbackBoard") &&
                        "bg-sky-400 dark:bg-[#12467B]"
                      }`}
                    >
                      <div className="flex items-center gap-4 p-1.5 w-6 h-6 bg-blue-500 rounded-md">
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M13.9999 0.5H2.00745C1.18245 0.5 0.507446 1.175 0.507446 2V15.5L3.49995 12.5H13.9999C14.8249 12.5 15.4999 11.825 15.4999 11V2C15.4999 1.175 14.8249 0.5 13.9999 0.5ZM8.74995 9.5H7.24995V8H8.74995V9.5ZM8.74995 5.75C8.74995 6.1625 8.41245 6.5 7.99995 6.5C7.58745 6.5 7.24995 6.1625 7.24995 5.75V4.25C7.24995 3.8375 7.58745 3.5 7.99995 3.5C8.41245 3.5 8.74995 3.8375 8.74995 4.25V5.75Z" 
                          fill="white"/>
                      </svg>
                      </div>
                      Feedback Board
                    </Link>
                  </li>
                  {/* <!-- My Spaces Item Feedback Board --> */}
                </ul>
              </div>
              <div className="mt-10 mb-10"></div>
              {/* <!-- Community Space Group --> */}
              <div>
                <div className="mb-2 font-bold text-lg text-black-2 dark:text-bodydark1">
                  Community Space
                </div>
                <ul className="mb-6 flex flex-col gap-1.5">
                  {/* <!-- Community Space Item Public Space --> */}
                  <li>
                    <Link
                      href="/PublicSpace"
                      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-1 font-medium text-black-2 dark:text-bodydark1 duration-300 ease-in-out active:bg-sky-400 focus:bg-sky-400 hover:bg-sky-400 dark:hover:bg-sky-400 ${
                        pathname.includes("PublicSpace") &&
                        "bg-sky-400 dark:bg-[#12467B]"
                      }`}
                    >
                      <div className="flex items-center gap-4 p-1.5 w-6 h-6 bg-blue-500 rounded-md">
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M6.50677 15.5873C4.50708 15.1981 2.78284 14.0293 1.65573 12.4297H4.47895C4.96146 13.8535 5.67022 14.9745 6.50677 15.5873ZM3.8006 8.33401C3.82714 9.5469 3.99413 10.7071 4.27134 11.7442H1.22665C0.661689 10.7246 0.319619 9.56448 0.266709 8.33401H3.8006ZM7.64847 8.33401V11.7442H5.05779C4.78445 10.7246 4.61781 9.56448 4.59161 8.33401H7.64847ZM5.26821 12.4297H7.64848V15.3411C6.68167 15.1362 5.82632 14.0469 5.26821 12.4297ZM1.23192 4.23831H4.2696C3.99169 5.25784 3.82505 6.418 3.80009 7.66604H0.266357C0.318389 6.418 0.662568 5.25784 1.23192 4.23831ZM7.64847 4.23831V7.66604H4.5911C4.61571 6.418 4.782 5.24026 5.05605 4.23831H7.64847ZM4.47685 3.55276H1.66241C2.78425 1.95315 4.49442 0.804421 6.47776 0.410496C5.65265 1.02837 4.95392 2.12893 4.47685 3.55276ZM7.64847 0.604505V3.55276H5.26593C5.82403 1.918 6.68167 0.809818 7.64847 0.604505ZM8.33401 12.4297H10.7111C10.1576 14.0293 9.30081 15.1181 8.33401 15.336V12.4297ZM11.3877 8.33401C11.3615 9.56448 11.1948 10.7246 10.9215 11.7442H8.33401V8.33401H11.3877ZM10.9233 4.23831C11.1973 5.24026 11.3636 6.418 11.3882 7.66604H8.33401V4.23831H10.9233ZM10.7134 3.55276H8.33401V0.609603C9.31839 0.827923 10.1597 1.93557 10.7134 3.55276ZM14.3246 3.55276H11.5025C11.0249 2.12893 10.3251 1.02608 9.4989 0.408386C11.4866 0.800378 13.2009 1.95315 14.3246 3.55276ZM15.7207 7.66604H12.1792C12.1543 6.418 11.9876 5.25784 11.7097 4.23831H14.7551C15.3245 5.25784 15.6686 6.418 15.7207 7.66604ZM11.5003 12.4297H14.3313C13.2021 14.0293 11.4738 15.2021 9.46954 15.5894C10.3073 14.9771 11.0173 13.8535 11.5003 12.4297ZM15.7203 8.33401C15.6674 9.56448 15.3253 10.7246 14.7604 11.7442H11.7079C11.9852 10.7071 12.1522 9.5469 12.1787 8.33401H15.7203Z" 
                          fill="white"/>
                      </svg>
                      </div>
                      Public Space
                    </Link>
                  </li>
                  {/* <!-- Community Space Item Public Space --> */}

                  {/* <!-- Community Space Item Analytics --> */}
                  <SidebarLinkGroup
                    activeCondition={
                      pathname === "/forms" || pathname.includes("forms")
                    }
                  >
                    {(handleClick, open) => {
                      return (
                        <React.Fragment>
                          <Link
                            href="/chart"
                            className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-1 font-medium text-black-2 dark:text-bodydark1 duration-300 ease-in-out active:bg-sky-400 focus:bg-sky-400 hover:bg-sky-400 dark:hover:bg-sky-400 ${
                              pathname.includes("chart") &&
                              "bg-sky-400 dark:bg-[#12467B]"
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              sidebarExpanded
                                ? handleClick()
                                : setSidebarExpanded(true);
                            }}
                          >
                            <div className="flex items-center gap-4 p-1.5 w-6 h-6 bg-blue-500 rounded-md">
                              <svg 
                                width="16" 
                                height="16" 
                                viewBox="0 0 16 16" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path 
                                  d="M5.71705 2.71963C6.08465 2.65082 6.45321 2.83436 6.6136 3.16609C6.65352 3.22629 6.68547 3.29123 6.70868 3.35934C6.81056 4.93197 6.91923 6.47795 7.02111 8.02392C7.01879 8.18462 7.04405 8.34456 7.09583 8.49704C7.21771 8.79706 7.52102 8.9874 7.84974 8.97016L12.8419 8.65031L12.8758 8.66363L12.9669 8.67019C13.1474 8.69329 13.3156 8.77567 13.4434 8.90528C13.5924 9.0565 13.6741 9.25962 13.6706 9.46994C13.4738 12.3365 11.3721 14.7316 8.51208 15.3487C5.65203 15.9657 2.72013 14.6566 1.31584 12.1354C0.902913 11.4093 0.641977 10.6095 0.54834 9.78313C0.512023 9.53825 0.496123 9.29088 0.500796 9.04346C0.510262 5.9953 2.68046 3.3643 5.71705 2.71963ZM8.68515 0.500619C12.1133 0.603241 14.9783 3.09185 15.4975 6.41797C15.5008 6.43783 15.5008 6.45808 15.4975 6.47795L15.4966 6.57184C15.4853 6.69597 15.4344 6.81434 15.3497 6.90939C15.2439 7.02819 15.0942 7.10074 14.9338 7.111L9.17418 7.49083L9.07929 7.49271C8.92207 7.48504 8.77132 7.4239 8.65388 7.31819C8.51296 7.19135 8.43307 7.01209 8.43385 6.82446L8.04671 1.16699V1.0737C8.05375 0.914582 8.12502 0.764752 8.24479 0.657247C8.36456 0.549742 8.52299 0.49339 8.68515 0.500619Z" 
                                  fill="white"
                                />
                              </svg>
                            </div>
                            Analytics
                            <div className="flex">
                              <AiFillCaretDown className={`flex h-4 w-4 dark:text-[#0B6BCB] text-[#0B6BCB] ml-8 ${ open && "rotate-180"}`} />
                            </div>
                          </Link>
                          {/* <!-- Dropdown Menu Start --> */}
                          <div
                            className={`translate transform overflow-hidden ${
                              !open && "hidden"
                            }`}
                          >
                            <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                              <li>
                                <Link
                                  href="/forms/form-elements"
                                  className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                    pathname === "/forms/form-elements" &&
                                    "text-white"
                                  }`}
                                >
                                  Statistics
                                  <AiOutlineRight className='ml-10 text-[#0B6BCB]'/>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/forms/form-layout"
                                  className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                    pathname === "/forms/form-layout" &&
                                    "text-white"
                                  } `}
                                >
                                  Polls
                                  <AiOutlineRight className='ml-17 text-[#0B6BCB]'/>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          {/* <!-- Dropdown Menu End --> */}
                        </React.Fragment>
                      );
                    }}
                  </SidebarLinkGroup>
                  {/* <!-- Community Space Item Analytics --> */}
                </ul>
              </div>      
            </nav>
            
            {/* <!-- Sidebar Menu --> */}
          </div>
          {/* <!-- Account Group --> */}
          <div className="fixed bottom-0 w-60 px-1 lg:mt-3 lg:px-4">
            <div className="mb-2 font-bold text-lg text-black-2 dark:text-bodydark1">
              Account Pages
            </div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Account Pages Item Profile --> */}
              <li>
                <Link
                  href="/profile"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-1 font-medium text-black-2 dark:text-bodydark1 duration-300 ease-in-out active:bg-sky-400 focus:bg-sky-400 hover:bg-sky-400 dark:hover:bg-sky-400 ${
                    pathname.includes("profile") &&
                    "bg-sky-400 dark:bg-[#12467B]"
                  }`}
                >
                  <div className="flex items-center gap-4 p-1.5 w-6 h-6 bg-blue-500 rounded-md">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 2.75C9.245 2.75 10.25 3.755 10.25 5C10.25 6.245 9.245 7.25 8 7.25C6.755 7.25 5.75 6.245 5.75 5C5.75 3.755 6.755 2.75 8 2.75ZM8 13.4C6.125 13.4 4.4675 12.44 3.5 10.985C3.5225 9.4925 6.5 8.675 8 8.675C9.4925 8.675 12.4775 9.4925 12.5 10.985C11.5325 12.44 9.875 13.4 8 13.4Z" 
                      fill="white"
                    />
                  </svg>
                  </div>
                  Profile
                </Link>
              </li>
              {/* <!-- Account Pages Item Profile --> */}

              {/* <!-- Account Pages Item Switch Role --> */}
              <li>
                <Link
                  href="/forms/form-elements"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-1 font-medium text-black-2 dark:text-bodydark1 duration-300 ease-in-out active:bg-sky-400 focus:bg-sky-400 hover:bg-sky-400 dark:hover:bg-sky-400 ${
                    pathname.includes("/forms/form-elements") &&
                    "bg-sky-400 dark:bg-[#12467B]"
                  }`}
                >
                  <div className="flex items-center gap-4 p-1.5 w-6 h-6 bg-blue-500 rounded-md">
                  <svg 
                    width="18" 
                    height="12" 
                    viewBox="0 0 18 12" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M14.25 3L11.25 6H13.5C13.5 8.4825 11.4825 10.5 9 10.5C8.2425 10.5 7.5225 10.3125 6.9 9.975L5.805 11.07C6.7275 11.655 7.8225 12 9 12C12.315 12 15 9.315 15 6H17.25L14.25 3ZM4.5 6C4.5 3.5175 6.5175 1.5 9 1.5C9.7575 1.5 10.4775 1.6875 11.1 2.025L12.195 0.93C11.2725 0.345 10.1775 0 9 0C5.685 0 3 2.685 3 6H0.75L3.75 9L6.75 6H4.5Z" 
                      fill="white"
                    />
                  </svg>
                  </div>
                  Switch Role
                </Link>
              </li>
              {/* <!-- Account Pages Item Switch Role --> */}

              {/* <!-- Account Pages Item Settings --> */}
              <li>
                <Link
                  href="/settings"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-1 font-medium text-black-2 dark:text-bodydark1 duration-300 ease-in-out active:bg-sky-400 focus:bg-sky-400 hover:bg-sky-400 dark:hover:bg-sky-400 ${
                    pathname.includes("settings") &&
                    "bg-sky-400 dark:bg-[#12467B]"
                  }`}
                >
                  <div className="flex items-center gap-4 p-1.5 w-6 h-6 bg-blue-500 rounded-md">
                  <svg 
                    width="14" 
                    height="16" 
                    viewBox="0 0 14 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M12.355 8.70505C12.385 8.48005 12.4 8.24755 12.4 8.00005C12.4 7.76005 12.385 7.52005 12.3475 7.29505L13.87 6.11005C14.005 6.00505 14.0425 5.80255 13.96 5.65255L12.52 3.16255C12.43 2.99755 12.2425 2.94505 12.0775 2.99755L10.285 3.71755C9.90996 3.43255 9.51246 3.19255 9.06996 3.01255L8.79996 1.10755C8.76996 0.927549 8.61996 0.800049 8.43996 0.800049H5.55996C5.37996 0.800049 5.23746 0.927549 5.20746 1.10755L4.93746 3.01255C4.49496 3.19255 4.08996 3.44005 3.72246 3.71755L1.92996 2.99755C1.76496 2.93755 1.57746 2.99755 1.48746 3.16255L0.0549602 5.65255C-0.0350398 5.81005 -0.00503986 6.00505 0.14496 6.11005L1.66746 7.29505C1.62996 7.52005 1.59996 7.76755 1.59996 8.00005C1.59996 8.23255 1.61496 8.48005 1.65246 8.70505L0.12996 9.89005C-0.00503985 9.99505 -0.0425398 10.1975 0.0399602 10.3475L1.47996 12.8376C1.56996 13.0026 1.75746 13.055 1.92246 13.0026L3.71496 12.2825C4.08996 12.5675 4.48746 12.8075 4.92996 12.9875L5.19996 14.8926C5.23746 15.0726 5.37996 15.2001 5.55996 15.2001H8.43996C8.61996 15.2001 8.76996 15.0726 8.79246 14.8926L9.06246 12.9875C9.50496 12.8075 9.90996 12.5675 10.2775 12.2825L12.07 13.0026C12.235 13.0626 12.4225 13.0026 12.5125 12.8376L13.9525 10.3475C14.0425 10.1825 14.005 9.99505 13.8625 9.89005L12.355 8.70505ZM6.99996 10.7001C5.51496 10.7001 4.29996 9.48505 4.29996 8.00005C4.29996 6.51505 5.51496 5.30005 6.99996 5.30005C8.48496 5.30005 9.69996 6.51505 9.69996 8.00005C9.69996 9.48505 8.48496 10.7001 6.99996 10.7001Z" 
                      fill="white"
                    />
                  </svg>
                  </div>
                  Settings
                </Link>
              </li>
              {/* <!-- Account Pages Item Settings --> */}

              {/* <!-- Account Pages Item Sign Out --> */}
              <li>
                <Link
                  href="/forms/form-layout"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-1 font-medium text-black-2 dark:text-bodydark1 duration-300 ease-in-out active:bg-sky-400 focus:bg-sky-400 hover:bg-sky-400 dark:hover:bg-sky-400 ${
                    pathname.includes("/forms/form-layout") &&
                    "bg-sky-400 dark:bg-[#12467B]"
                  }`}
                >
                  <div className="flex items-center gap-4 p-1.5 w-6 h-6 bg-blue-500 rounded-md">
                  <svg 
                    width="16" 
                    height="14" 
                    viewBox="0 0 16 14" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M11.75 3.25L10.6925 4.3075L12.6275 6.25H5V7.75H12.6275L10.6925 9.685L11.75 10.75L15.5 7L11.75 3.25ZM2 1.75H8V0.25H2C1.175 0.25 0.5 0.925 0.5 1.75V12.25C0.5 13.075 1.175 13.75 2 13.75H8V12.25H2V1.75Z" 
                      fill="white"
                    />
                  </svg>
                  </div>
                  Sign Out
                </Link>
              </li>
              {/* <!-- Account Pages Item Sign Out --> */}
            </ul>
          </div>
        </div>
    </aside>
  );
};

export default Sidebar;