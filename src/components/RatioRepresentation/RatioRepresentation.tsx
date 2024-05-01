import { Card } from '@nextui-org/react';
import React, { useEffect, useRef } from 'react';
import SemicircleProgress from './SemicircleProgress';

interface RatioRepresentationProps {
  value: number;
  title: string;
}

const RatioRepresentation: React.FC<RatioRepresentationProps> = ({
  value,
  title,
}) => {

  const getLevel = (scorePoints: number): string => {
    if (scorePoints <= 0.33 && scorePoints > 0) return 'Unsatisfied';
    else if (scorePoints > 0.33 && scorePoints <= 0.66) return 'Neutral';
    else if (scorePoints > 0.66 && scorePoints <= 1) return 'Satisfied';
    else return 'Unsatisfied';
  };

  return (
    <Card className="flex flex-col bg-gradient-to-r from-[#0B6BCB06] to-[#0B6BCB20] rounded-xl">
      <div className="font-bold text-base text-black dark:text-white w-fit ml-2 mt-2">{title}</div>
      <div className='flex flex-row'>
        <div className="flex flex-col p-2">
          <div className=" font-semibold text-sm text-[#636B74] w-fit">{getLevel(value/100)}</div>
          <div className="flex flex-row">
            {/* Dropdown for Measure period */}
            <div className="font-normal text-xs text-[#9FA6AD]">Measure period</div>
            <button id="menu-button" aria-expanded="true" aria-haspopup="true">
              <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="black" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="flex-grow"></div> {/* This div will push the button to the bottom */}
          <div className="flex justify-start"> {/* This div will hold the button at the bottom */}
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-sky-300 text-black dark:text-white">See Details</button>
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className="flex h-fit w-fit m-2 flex-col justify-end">
          <SemicircleProgress score={value}/>
        </div>
      </div>
      
    </Card>
  );
};


export default RatioRepresentation;
