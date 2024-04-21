"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import MapOne from "../Maps/MapOne";
import RatioRepresentation from "./RatioRepresentation";

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 md:gap-0 xl:grid-cols-3 2xl:gap-2">
        <RatioRepresentation value={30} title={"Student Satisfactory"}/>
        <RatioRepresentation value={60} title={"Teacher Satisfactory"}/>
        <RatioRepresentation value={70} title={"Module Satisfactory"}/>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-8 xl:col-span-8">
          <TableOne />
        </div>
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
      </div>
    </>
  );
};

export default ECommerce;