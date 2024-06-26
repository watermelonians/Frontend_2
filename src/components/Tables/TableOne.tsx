import { BRAND } from "@/types/brand";
import Image from "next/image";
import { AnimatedTooltip } from "../animated-tooltip/animated-tooltip";
import SimpleAnimatedTooltip from "../animated-tooltip/simpletooltip";

const people = [
  {
    id: 1,
    name: "Google",
    designation: "Software Engineer",
    image:
      "/images/brand/brand-01.svg",
  },
  {
    id: 2,
    name: "Twitter",
    designation: "Product Manager",
    image:
      "/images/brand/brand-02.svg",
  },
  {
    id: 3,
    name: "Github",
    designation: "Data Scientist",
    image:
      "/images/brand/brand-03.svg",
  },
  {
    id: 4,
    name: "Vimeo",
    designation: "UX Designer",
    image:
      "/images/brand/brand-04.svg",
  },
  {
    id: 5,
    name: "Facebook",
    designation: "Soap Developer",
    image:
      "/images/brand/brand-05.svg",
  },
  {
    id: 6,
    name: "Google",
    designation: "The Explorer",
    image:
      "/images/brand/brand-01.svg",
  },
  {
    id: 1,
    name: "Google",
    designation: "Software Engineer",
    image:
      "/images/brand/brand-01.svg",
  },
];

const brandData: BRAND[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Google",
    visitors: "Keywords shown only max 6 words",
    labels: ["red", "green", "blue", "orange"],
    sales: 1,
    class: "Class name here",
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "Twitter",
    visitors: "Keywords shown only max 6 words",
    labels: ["green", "gray", "orange"],
    sales: 1,
    class: "Class name here",
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Github",
    visitors: "Keywords shown only max 6 words",
    labels: ["red", "blue", "orange"],
    sales: 2,
    class: "Class name here",
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "Vimeo",
    visitors: "Keywords shown only max 6 words",
    labels: ["green", "red"],
    sales: 1,
    class: "Class name here",
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Facebook",
    visitors: "Keywords shown only max 6 words",
    labels: ["blue", "orange", "red", "green", "yellow"],
    sales: 3,
    class: "Class name here",
  },
];

const getBackgroundColor = (sales: number): string => {
  switch (sales) {
    case 1:
      return "red";
    case 2:
      return "orange";
    case 3:
      return "green";
    // Add more cases for other sales values as needed...
    default:
      return "gray";
  }
};

const TableOne = () => {
  return (
    <div className="rounded-xl bg-gradient-to-r from-[#0B6BCB06] to-[#0B6BCB20] px-5 pb-2.5 pt-5 shadow-default sm:px-7.5 xl:pb-1 w-fit h-fit">
      <h4 className="mb-4 text-xl font-semibold text-black dark:text-white">
        Trending Problems
      </h4>
      <div className="flex flex-row">
        <div className="flex justify-center items-center w-fit h-fit mr-1">
          <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="#EA9A3E"/>
          </svg>
        </div>
        <div className="text-sm font-bold text-black mr-1 dark:text-white">30 reported</div>
        <div className="text-sm">this month</div>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <div className="text-sm font-semibold text-gray-600 xsm:text-base">
              Problem Title
            </div>
          </div>
          <div className="p-2.5 xl:p-5">
            <div className="text-sm font-semibold text-gray-600 xsm:text-base">
              Members
            </div>
          </div>
          <div className="p-2.5 xl:p-5">
            <div className="text-sm font-semibold text-gray-600 xsm:text-base">
              Labels
            </div>
          </div>
          <div className="hidden p-2.5 sm:block xl:p-5">
            <div className="text-sm font-semibold text-gray-600 xsm:text-base">
              Priority
            </div>
          </div>
          <div className="hidden p-2.5 sm:block xl:p-5">
            <div className="text-sm font-semibold text-gray-600 xsm:text-base">
              Class
            </div>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-start justify-start p-2.5 xl:p-5">
              <p className="text-black dark:text-white truncate ...">{brand.visitors}</p>
            </div>

            <div className="flex items-start justify-start p-2.5 xl:p-5">
              <div className="flex flex-row items-center justify-center w-fit">
                <AnimatedTooltip items={people} />
              </div>
            </div>

            <div className="flex items-start justify-start p-2.5 xl:p-5 w-fit">
              <div className="grid grid-cols-2 gap-1">
                <SimpleAnimatedTooltip labels={brand.labels} />
              </div>
            </div>

            <div className="hidden items-start justify-start p-2.5 sm:flex xl:p-5">
              <div className="rounded-full w-6 h-6 justify-center items-center" style={{ backgroundColor: getBackgroundColor(brand.sales) }}>
                <p className="flex text-white items-center justify-center">{brand.sales}</p>
              </div>
            </div>

            <div className="hidden items-start justify-start p-2.5 sm:flex xl:p-5">
              <p className="text-sm font-semibold text-gray-600 truncate ...">{brand.class}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
