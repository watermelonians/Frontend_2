"use client";

import { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';

export interface CardProps {
  Role: string;
}

const generateRandomData = (numDays: number) => {
  return Array.from({ length: numDays }, () => Math.floor(Math.random() * 26) + 5);
};
const StudentSatisfactionCard: React.FC<CardProps> = ({Role}) => {
  const [chart, setChart] = useState<ApexCharts | null>(null);
  const [filter, setFilter] = useState<string>('1st Year');
  const [series1, setData1stYear] = useState<number[]>(generateRandomData(30));
  const [series2, setData2ndYear] = useState<number[]>(generateRandomData(30));
  const [series3, setData3rdYear] = useState<number[]>(generateRandomData(30));
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  // Function to get categories based on the filter
  const getCategories = (filter: string) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
  };

  const getFilteredData = (filter: string, data: number[]) => {
    if (filter === '1st Year') {
      return data.slice(0, 30); // Assuming each year's data occupies the first 30 elements
    } else if (filter === '2nd Year') {
      return data.slice(0, 30); // Assuming each year's data occupies the next 30 elements
    } else {
      return data.slice(0, 30); // Assuming each year's data occupies the last 30 elements
    }
  };

  const updateChart = (filter: string) => {
    if (chart) {
      const series = [
        {
          name: "1st Year",
          data: filter === '1st Year' ? series1 : [],
          color: "#136C13",
        },
        {
          name: "2nd Year",
          data: filter === '2nd Year' ? series2 : [],
          color: "#136C13",
        },
        {
          name: "3rd Year",
          data: filter === '3rd Year' ? series3 : [],
          color: "#136C13",
        }
      ].filter(item => item.data.length > 0); // Filter out series with no data
  
      chart.updateOptions({
        xaxis: {
          categories: getCategories(filter),
        },
        series,
        chart: {
          zoom: {
            enabled: filter === 'days',
            type: 'x',
            autoScaleYaxis: true
          },
          scroller: {
            enabled: true
          },
        },
      });
    }
  };
  

  useEffect(() => {
    // Generate random data for each category
    setData1stYear(generateRandomData(30));
    setData2ndYear(generateRandomData(30));
    setData3rdYear(generateRandomData(30));
  }, []);

  useEffect(() => {
    if (series1.length > 0 && series2.length > 0 && series3.length > 0) {
      const options = {
        xaxis: {
          show: true,
          categories: getCategories(filter),
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
              cssClass: 'text-xs font-normal dark:text-[#F0F4F8] text-[#171A1C]'
            }
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
              cssClass: 'text-xs font-normal dark:text-[#F0F4F8] text-[#171A1C]'
            },
            formatter: function (value: number) {
              return value;
            }
          }
        },
        grid: {
          show: true,
          strokeDashArray: 4,
          padding: {
            left: 2,
            right: 2,
            top: -26
          },
        },
        series: [
          {
            name: "1st Year",
            data: getFilteredData(filter, series1),
            color: "#136C13",
          },
          {
            name: "2nd Year",
            data: getFilteredData(filter, series2),
            color: "#EA9A3E",
          },
          {
            name: "3rd Year",
            data: getFilteredData(filter, series3),
            color: "#A51818",
          }
        ],
        chart: {
          zoom: {
            enabled: filter === 'days',
            type: 'x',
            autoScaleYaxis: true
          },
          scroller: {
            enabled: filter === 'days'
          },
          sparkline: {
            enabled: false
          },
          height: "100%",
          width: "100%",
          type: "area",
          fontFamily: "Inter, sans-serif",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.5,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 6,
        },
        legend: {
          show: true
        },
      };

      const chartElement = document.getElementById("student-satisfaction-chart");
      if (chartElement) {
        const newChart = new ApexCharts(chartElement, options);
        newChart.render();
        setChart(newChart);
      }
    }
  }, [series1, series2, series3]);

  useEffect(() => {
    updateChart(filter);
  }, [filter, series1, series2, series3]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setDropdownVisible(false);
  };

  return (
    <div className="w-6/12 mt-2 dark:bg-[#050C28] bg-[#EDF5FD] bg-gradient-to-r from-[#0B6BCB02] via-[#0B6BCB26] to-[#0B6BCB0A] rounded-lg shadow dark:bg-gray-800">
      <div className="flex justify-between p-4 md:p-6 pb-0 md:pb-0 mb-2">
        <div>
          <h5 className="leading-none text-xl font-bold dark:text-[#F0F4F8] text-[#171A1C] pb-2">{Role} Satisfaction</h5>
        </div>
        <div className="relative">
          <button
            id="dropdownDefaultButton"
            onClick={toggleDropdown}
            className="flex text-sm font-semibold dark:text-[#C7DFF7] dark:bg-[#12467B] bg-[#C7DFF7] text-[#12467B] rounded p-1 pl-2 items-center hover:text-gray-900 text-center justify-center dark:hover:text-white"
            type="button"
          >
            {filter}
            <svg
              className="w-2 m-2.5 ms-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M0 0.5L5 5.5L10 0.5H0Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <div
            id="lastDaysdropdown"
            className={`${dropdownVisible ? 'block' : 'hidden'} absolute right-0 mt-2 z-10 dark:bg-[#050C28] bg-[#EDF5FD] bg-gradient-to-r from-[#0B6BCB26] to-[#0B6BCB02] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
          >
            <ul className="py-2 text-sm dark:text-[#F0F4F8] text-[#171A1C]" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" onClick={() => handleFilterChange('1st Year')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1st Year</a>
              </li>
              <li>
                <a href="#" onClick={() => handleFilterChange('2nd Year')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2nd Year</a>
              </li>
              <li>
                <a href="#" onClick={() => handleFilterChange('3rd Year')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3rd Year</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="student-satisfaction-chart" className="px-2.5 py-1"></div>
    </div>
  );
};

export default StudentSatisfactionCard;
