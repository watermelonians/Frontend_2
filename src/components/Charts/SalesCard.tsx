"use client";
import { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';

// Generate random data for two datasets
const generateRandomData = (numDays: number) => {
  return Array.from({ length: numDays }, () => Math.floor(Math.random() * 26) + 5);
};

const SalesCard = () => {
  const [chart, setChart] = useState<ApexCharts | null>(null);
  const [filter, setFilter] = useState<string>('days');
  const [series1, setSeries1] = useState<number[]>(generateRandomData(150));
  const [series2, setSeries2] = useState<number[]>(generateRandomData(150));
  const [series3, setSeries3] = useState<number[]>(generateRandomData(150));
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const getCategories = (filter: string) => {
    if (filter === 'days') {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return Array.from({ length: 150 }, (_, i) => days[i % 7]);
    } else if (filter === 'weeks') {
      return Array.from({ length: Math.ceil(150 / 7) }, (_, i) => `Week ${i + 1}`);
    } else {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return Array.from({ length: Math.ceil(150 / 30) }, (_, i) => months[i % 12]);
    }
  };

  const getFilteredData = (filter: string, data: number[]) => {
    if (filter === 'days') {
      return data;
    } else if (filter === 'weeks') {
      return data.reduce((acc, value, index) => {
        const weekIndex = Math.floor(index / 7);
        acc[weekIndex] = (acc[weekIndex] || 0) + value;
        return acc;
      }, [] as number[]);
    } else {
      return data.reduce((acc, value, index) => {
        const monthIndex = Math.floor(index / 30);
        acc[monthIndex] = (acc[monthIndex] || 0) + value;
        return acc;
      }, [] as number[]);
    }
  };

  const updateChart = (filter: string) => {
    if (chart) {
      chart.updateOptions({
        xaxis: {
          categories: getCategories(filter),
        },
        series: [
          {
            name: "Solved",
            data: getFilteredData(filter, series1),
            color: "#136C13",
          },
          {
            name: "Treated",
            data: getFilteredData(filter, series2),
            color: "#EA9A3E",
          },
          {
            name: "Reported",
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
            enabled: true
          },
        },
      });
    }
  };

  useEffect(() => {
    // Generate random data for each series
    setSeries1(generateRandomData(150));
    setSeries2(generateRandomData(150));
    setSeries3(generateRandomData(150));
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
            name: "Solved",
            data: getFilteredData(filter, series1),
            color: "#136C13",
          },
          {
            name: "Treated",
            data: getFilteredData(filter, series2),
            color: "#EA9A3E",
          },
          {
            name: "Reported",
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

      const chartElement = document.getElementById("labels-chart");
      if (chartElement) {
        const newChart = new ApexCharts(chartElement, options);
        newChart.render();
        setChart(newChart);
      }
    }
  }, [series1, series2, series3]);

  useEffect(() => {
    updateChart(filter);
  }, [filter]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setDropdownVisible(false);
  };

  return (
    <div className="w-full dark:bg-[#050C28] bg-[#EDF5FD] bg-gradient-to-r from-[#0B6BCB02] via-[#0B6BCB26] to-[#0B6BCB0A] rounded-lg shadow dark:bg-gray-800">
      <div className="flex justify-between p-4 md:p-6 pb-0 md:pb-0 mb-2">
        <div>
          <h5 className="leading-none text-xl font-bold dark:text-[#F0F4F8] text-[#171A1C] pb-2">Problems Ratio</h5>
        </div>
        <div className="relative">
          <button
            id="dropdownDefaultButton"
            onClick={toggleDropdown}
            className="flex text-sm font-semibold dark:text-[#C7DFF7] dark:bg-[#12467B] bg-[#C7DFF7] text-[#12467B] rounded p-1 pl-2 items-center hover:text-gray-900 text-center justify-center dark:hover:text-white"
            type="button">
            {filter}
            <svg className="w-2 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M0 0.5L5 5.5L10 0.5H0Z" fill='currentColor' />
            </svg>
          </button>
          <div id="lastDaysdropdown" className={`${dropdownVisible ? 'block' : 'hidden'} absolute right-0 mt-2 z-10 dark:bg-[#050C28] bg-[#EDF5FD] bg-gradient-to-r from-[#0B6BCB26] to-[#0B6BCB02] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm dark:text-[#F0F4F8] text-[#171A1C]" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" onClick={() => handleFilterChange('days')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">By Days</a>
              </li>
              <li>
                <a href="#" onClick={() => handleFilterChange('weeks')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">By Weeks</a>
              </li>
              <li>
                <a href="#" onClick={() => handleFilterChange('months')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">By Months</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="labels-chart" className="px-2.5 py-1"></div>
    </div>
  );
};

export default SalesCard;
