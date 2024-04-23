import useColorMode from '@/hooks/useColorMode';
import { Card } from '@nextui-org/react';
import React, { useEffect, useRef, useState } from 'react';
import SemicircleProgress from '../RatioRepresentation/SemicircleProgress';


const NeutralIcon = ({ width, height, viewBox, fillColor, path }) => (
    <svg width={width} height={height} viewBox={viewBox} fill={fillColor} xmlns="http://www.w3.org/2000/svg">
      <path d={path} />
    </svg>
  );
  
  const SatisfiedIcon = ({width, height, viewBox, fillColor, path }) => (
    <svg width={width} height={height} viewBox={viewBox} fill={fillColor} xmlns="http://www.w3.org/2000/svg">
      <path d={path} />
    </svg>
  );
  
  const UnsatisfiedIcon = ({ width, height, viewBox, fillColor, path_1, path_2, path_3 }) => (
    <svg width={width} height={height} viewBox={viewBox} fill={fillColor} xmlns="http://www.w3.org/2000/svg">
      <path d={path_1} />
      <path d={path_2} />
      <path d={path_3} />
    </svg>
  );

interface ResidancyStudentsSatisfactionCardProps {
  value: number;
}

const ResidancyStudentsSatisfactionCard: React.FC<ResidancyStudentsSatisfactionCardProps> = ({
  value,
}) => {

  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  const getIcon = (scorePoints: number) => {
    if (scorePoints > 0.33 && scorePoints <= 0.66) return <UnsatisfiedIcon width={40} height={40} viewBox="-8 -8 40 40"  fillColor="white" path_1="M12 6.49L19.53 19.5H4.47L12 6.49ZM12 2.5L1 21.5H23L12 2.5Z" path_2="M13 16.5H11V18.5H13V16.5Z" path_3="M13 10.5H11V15.5H13V10.5Z" />;
    else if (scorePoints <= 0.33 && scorePoints > 0) return <NeutralIcon width={40} height={40} viewBox="-8 -8 40 40" fillColor="white" path="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />;
    else if (scorePoints > 0.66 && scorePoints <= 1) return <SatisfiedIcon width={40} height={40} viewBox="-8 -8 40 40" fillColor="white" path="M16.59 7.58L10 14.17L6.41 10.59L5 12L10 17L18 9L16.59 7.58ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" />;
    else return null;
  };

  const getStrokeColor = (scorePoints: number): string => {
    if (scorePoints <= 0.33 && scorePoints > 0) return '#C41C1C';
    else if (scorePoints > 0.33 && scorePoints <= 0.66) return '#EA9A3E';
    else if (scorePoints > 0.66 && scorePoints <= 1) return '#0B6BCB';
    else return '#808080';
  };

  const getBackgroundColor = (scorePoints: number): string => {
    if (scorePoints <= 0.33 && scorePoints > 0) return 'bg-[#F7C5C599]';
    else if (scorePoints > 0.33 && scorePoints <= 0.66) return 'bg-[#FCE1C299]';
    else if (scorePoints > 0.66 && scorePoints <= 1) return 'bg-[#C7DFF7]';
    else return '#808080';
  };

  const getBackgroundColorDark = (scorePoints: number): string => {
    if (scorePoints <= 0.33 && scorePoints > 0) return 'bg-[#C41C1C99]';
    else if (scorePoints > 0.33 && scorePoints <= 0.66) return 'bg-[#9A5B1399]';
    else if (scorePoints > 0.66 && scorePoints <= 1) return 'bg-[#12467B40]';
    else return '#808080';
  };

  const getLevel = (scorePoints: number): string => {
    if (scorePoints <= 0.33 && scorePoints > 0) return 'Unsatisfied';
    else if (scorePoints > 0.33 && scorePoints <= 0.66) return 'Neutral';
    else if (scorePoints > 0.66 && scorePoints <= 1) return 'Satisfied';
    else return 'Unsatisfied';
  };

  return (
    <Card className="col-span-4 flex flex-col justify-center items-center bg-gradient-to-r from-[#0B6BCB06] to-[#0B6BCB20] rounded-xl h-fit">
      <div className="flex flex-col p-2">
        <div className="font-bold text-base text-black dark:text-white w-fit m-2">
          Residancy Students Satisfaction
        </div>
        <div className="flex justify-center items-center font-semibold text-sm text-[#636B74]">{getLevel(value/100)}</div>
        <div className="flex justify-center items-center text-sm text-[#9FA6AD]">Last month</div>
        <div className="flex h-fit w-fit flex-col justify-end ml-2">
          <SemicircleProgress score={value}/>
        </div>
      </div>
    </Card>
  );
};

export default ResidancyStudentsSatisfactionCard;
