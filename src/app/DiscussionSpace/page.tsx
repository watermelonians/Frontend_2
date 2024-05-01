import Calendar from "@/components/Feedback";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Overview from "@/components/RatioRepresentation/Overview";

export const metadata: Metadata = {
  title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <Overview />
    </DefaultLayout>
  );
};

export default CalendarPage;
