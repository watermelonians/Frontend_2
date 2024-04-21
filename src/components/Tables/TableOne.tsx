import { BRAND } from "@/types/brand";
import Image from "next/image";
import { AnimatedTooltip } from "../animated-tooltip/animated-tooltip";

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
    name: "Twiter",
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
    name: "Vesss",
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
];

const brandData: BRAND[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "Twitter",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Github",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "Vimeo",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Facebook",
    visitors: 3.5,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
  },
];

const TableOne = () => {
  return (
    <div className="rounded-xl bg-gradient-to-r from-[#0B6BCB06] to-[#0B6BCB20] px-5 pb-2.5 pt-5 shadow-default sm:px-7.5 xl:pb-1 w-fit">
      <h4 className="mb-4 text-xl font-semibold text-black dark:text-white">
        Trending Problems
      </h4>
      <div className="flex flex-row">
        <div className="flex justify-center items-center w-fit h-fit mr-1">
          <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="#EA9A3E"/>
          </svg>
        </div>
        <div className="text-sm font-bold text-white mr-1">30 reported</div>
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
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div>

            <div className="flex items-start justify-start p-2.5 xl:p-5">
              <div className="flex flex-row items-center justify-center w-fit">
                <AnimatedTooltip items={people} />
              </div>
            </div>

            <div className="flex items-start justify-start p-2.5 xl:p-5">
              <p className="text-meta-3">${brand.revenues}</p>
            </div>

            <div className="hidden items-start justify-start p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.sales}</p>
            </div>

            <div className="hidden items-start justify-start p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.conversion}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
