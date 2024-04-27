'use client';
import { useState, useEffect, useRef } from 'react';
import ProblemCategoryCard from '../ProblemCategoryCard/ProblemCategoryCard';
import CategoryCard from '../CategoryCard/CategoryCard';


const Calender = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();

  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

const tabs = items.map((item, index) => (
  <button
    key={index}
    onClick={() => handleTabClick(index)}
    className={`outline-none w-50 p-2 hover:bg-[#185EA5] rounded-xl text-cneter focus:ring-2 focus:bg-[#185EA5] focus:text-white ${
      selectedTab === index ? 'ring-2 bg-[#185EA5] text-white' : ''
    } `}
    ref={index === 0 ? firstBtnRef : null}
  >
    {item.title}
  </button>
));

const contents = items.map((item, index) => (
  <div key={index} className={`${selectedTab !== index ? 'hidden' : ''} flex flex-row gap-5`}>
    {item.content}
  </div>
));

  return (
    <div className='flex flex-col justify-center items-center overflow-hidden max-h-screen'>
      <div className='flex-col gap-y-2 justify-center items-center mb-15 w-full mr-5'>
        <div className='fixed bg-[#636B7429] p-1 rounded-xl flex justify-between items-center gap-x-5 font-bold text-white w-full max-w-screen-xl'>
          {tabs}
        </div>
      </div>
      <div className='flex gap-x-5 w-full h-132.5 overflow-x-auto' style={{ overflowX: 'auto', scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>{contents}</div>
    </div>
  );
};

export default Calender;