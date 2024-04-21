import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Exit = () => {
   const trigger = useRef<any>(null);

  return (
    <li className="relative">
      <Link
        ref={trigger}
        onClick={() => {
        }}
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-lg border-[0.5px] border-stroke bg-[#E3EFFB] hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
        href="#"
      >
        <svg
          className="fill-current duration-300 ease-in-out"
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M11.75 3.25L10.6925 4.3075L12.6275 6.25H5V7.75H12.6275L10.6925 9.685L11.75 10.75L15.5 7L11.75 3.25ZM2 1.75H8V0.25H2C1.175 0.25 0.5 0.925 0.5 1.75V12.25C0.5 13.075 1.175 13.75 2 13.75H8V12.25H2V1.75Z" 
            fill=""
          />
        </svg>
      </Link>
    </li>
  );
};

export default Exit;
