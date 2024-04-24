"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Overview from "@/components/RatioRepresentation/Overview";
import React from "react";


const OverviewPage: React.FC = () => {
  return (
    <>
      <DefaultLayout>
        <Overview />
      </DefaultLayout>
    </>
  );
};

export default OverviewPage;