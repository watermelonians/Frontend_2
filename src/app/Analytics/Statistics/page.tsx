import React from "react";
import { Metadata } from "next";
import SalesCard from "@/components/Charts/SalesCard";
import StudentSatisfactionCard from "@/components/Charts/StudentSatisfactionCard";

export const metadata: Metadata = {
  title: "Next.js Form Elements | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const FormElementsPage = () => {
  return (
    <>
      <SalesCard />
      <div className="flex justify-center items-center">
        <StudentSatisfactionCard Role={"Students"}/>
      </div>
    </>
  );
};

export default FormElementsPage;
