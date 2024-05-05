'use client';
import { useState, useEffect, useRef } from 'react';
import ProblemCategoryCard from '../ProblemCategoryCard/ProblemCategoryCard';
import CategoryCard from '../CategoryCard/CategoryCard';


const Feedback = ({ items }) => {
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
    className={`outline-none w-50 p-2 hover:bg-[#185EA5] rounded-xl text-cneter dark:text-[#F0F4F8] text-[#171A1C] focus:bg-[#185EA5] focus:text-white ${
      selectedTab === index ? ' bg-[#185EA5] text-white' : ''
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
      <div className='flex-col gap-y-2 justify-center items-center mb-11 w-full mr-5'>
        <div className='fixed p-1 rounded-xl flex justify-between items-center gap-x-5 font-bold text-white w-full max-w-screen-xl'>
          {tabs}
        </div>
      </div>
      <div className='bg-[#636B744D] w-full h-0.5 mb-4'></div>
      <div className='flex gap-x-5 w-full h-132.75 3xl:h-150 overflow-x-auto' style={{ overflowX: 'auto', scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>{contents}</div>
    </div>
  );
};

export default Feedback;