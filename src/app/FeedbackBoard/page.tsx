"use client";
import Calendar from "@/components/Calender";
import ChartOne from "@/components/Charts/ChartOne";
import ChartThree from "@/components/Charts/ChartThree";
import ChartTwo from "@/components/Charts/ChartTwo";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import MapOne from "@/components/Maps/MapOne";
import RatioRepresentation from "@/components/RatioRepresentation/RatioRepresentation";
import TableOne from "@/components/Tables/TableOne";
import React from "react";


const Overview: React.FC = () => {
  return (
    <>
      <DefaultLayout>
        <Calendar />
      </DefaultLayout>
    </>
  );
};

export default Overview;