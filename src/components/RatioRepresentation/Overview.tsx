"use client";
import ChartOne from "@/components/Charts/ChartOne";
import ClubsSatisfactioncard from "@/components/ClubsSatisfactionCard/page";
import GeneralLogisticStatsCard from "@/components/GeneralLogisticStats/GeneralLogisticStats";
import RatioRepresentation from "@/components/RatioRepresentation/RatioRepresentation";
import ResidancyStudentsSatisfactionCard from "@/components/ResidancyStudentsSatisfactionCard/ResidancyStudentsSatisfactionCard";
import TableOne from "@/components/Tables/TableOne";
import React from "react";


const Overview: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 md:gap-0 xl:grid-cols-3 2xl:gap-2">
        <RatioRepresentation value={30} title={"Student Satisfactory"}/>
        <RatioRepresentation value={60} title={"Teacher Satisfactory"}/>
        <RatioRepresentation value={70} title={"Module Satisfactory"}/>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-2 md:mt-6 md:gap-4 2xl:mt-7.5 2xl:gap-4">
        <div className="col-span-8 xl:col-span-8">
          <TableOne />
        </div>
        <ChartOne />
        <ClubsSatisfactioncard value={45} activity={15} report={20}></ClubsSatisfactioncard>
        <GeneralLogisticStatsCard ClassroomsState={76} Amphitheaters={60} LasbsState={50} StudyRooms={30}></GeneralLogisticStatsCard>
        <ResidancyStudentsSatisfactionCard value={65}></ResidancyStudentsSatisfactionCard>
      </div>
    </>
  );
};

export default Overview;