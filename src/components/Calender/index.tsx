'use client';
import { useState, useEffect, useRef } from 'react';
import ProblemCategoryCard from '../ProblemCategoryCard/ProblemCategoryCard';


const Calender = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();

  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <div className='flex flex-col justify-center items-center w-screen overflow-hidden'>
      <div className='flex-col gap-y-2 justify-center items-center overflow-hidden mb-15 w-full mr-5'>
        <div className='fixed bg-[#636B7429] p-1 rounded-xl flex justify-between items-center gap-x-5 font-bold text-white w-full max-w-screen-xl overflow-hidden'>
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`outline-none w-50 p-2 hover:bg-[#185EA5] rounded-xl text-cneter focus:ring-2 focus:bg-[#185EA5] focus:text-white ${
                selectedTab === index ? 'ring-2 bg-[#185EA5] text-white' : ''
              } `}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      <main className='p-2 rounded-xl w-full overflow-hidden'>
        <div className='flex gap-x-5 overflow-x-auto'>
          <ProblemCategoryCard title={'Operation systems'}></ProblemCategoryCard>
          <ProblemCategoryCard title={'Operation systems'}></ProblemCategoryCard>
          <ProblemCategoryCard title={'Operation systems'}></ProblemCategoryCard>
          <ProblemCategoryCard title={'Operation systems'}></ProblemCategoryCard>
          <ProblemCategoryCard title={'Operation systems'}></ProblemCategoryCard>
          <ProblemCategoryCard title={'Operation systems'}></ProblemCategoryCard>
        </div>
      </main>
    </div>
  );
};

export default Calender;