"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Overview from "@/components/RatioRepresentation/Overview";
import { url } from "inspector";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { backgroundImage } from "tailwindcss/defaultTheme";


const LandingPage: React.FC = () => {
    const pathname = usePathname();
  return (
    <>
      <div className="bg-cover h-screen w-screen" style={{backgroundImage: 'url("./images/cover/Cover.png")'}}>
        <Link href="/components/Layouts" className={`${pathname.includes("/components/Layouts")}`}>
          <div className="text-white bg-blue-500 py-2 px-4 rounded">Go to Overview</div>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;