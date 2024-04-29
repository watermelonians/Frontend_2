import useColorMode from '@/hooks/useColorMode';
import { Card } from '@nextui-org/react';
import React, { useEffect, useRef, useState } from 'react';


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
  
  const UnsatisfiedIcon = ({ width, height, viewBox, fillColor, path}) => (
    <svg width={width} height={height} viewBox={viewBox} fill={fillColor} xmlns="http://www.w3.org/2000/svg">
      <path d={path} />
    </svg>
  );

interface GeneralLogisticStatsCardProps {
  ClassroomsState: number;
  Amphitheaters: number;
  LasbsState: number;
  StudyRooms: number;
}

const GeneralLogisticStatsCard: React.FC<GeneralLogisticStatsCardProps> = ({
  ClassroomsState,
  Amphitheaters,
  LasbsState,
  StudyRooms,
}) => {

  const getword = (number: number): string => {
    if (number <= 1 && number >= 0) return ' activity';
    else return ' activities';
  };

  const getIcon = (scorePoints: number) => {
    if (scorePoints > 0.33 && scorePoints <= 0.66) return <UnsatisfiedIcon width={40} height={40} viewBox="-10 -10 40 40"  fillColor="white" path="M0 19.5H22L11 0.5L0 19.5ZM12 16.5H10V14.5H12V16.5ZM12 12.5H10V8.5H12V12.5Z" />;
    else if (scorePoints <= 0.33 && scorePoints > 0) return <NeutralIcon width={40} height={40} viewBox="-10 -10 40 40" fillColor="white" path="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" />;
    else if (scorePoints > 0.66 && scorePoints <= 1) return <SatisfiedIcon width={40} height={40} viewBox="-10 -10 40 40" fillColor="white" path="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" />;
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
    else return '[#808080]';
  };

  const getBackgroundColorDark = (scorePoints: number): string => {
    if (scorePoints <= 0.33 && scorePoints > 0) return 'dark:bg-[#C41C1C99]';
    else if (scorePoints > 0.33 && scorePoints <= 0.66 ) return 'dark:bg-[#9A5B1399]';
    else if (scorePoints > 0.66 && scorePoints <= 1) return 'dark:bg-[#12467B40]';
    else return '[#808080]';
  };

  const [colorMode] = useColorMode();


  return (
    <Card className="col-span-4 flex flex-col bg-gradient-to-r from-[#0B6BCB06] to-[#0B6BCB20] rounded-xl">
      <div className="flex flex-col p-2">
        <div className="font-bold text-base text-black dark:text-white w-fit mt-2 ml-2">
          General Logistic Stats
        </div>
        <div className="text-sm ml-2 mb-6 text-[#636B74]">Last month</div>
        <div className='grid grid-cols-2 gap-2 gap-x-4'>
            <Card className={`flex flex-row justify-center items-center rounded-xl p-2 w-47 mb-2 ${getBackgroundColor(ClassroomsState / 100)} ${getBackgroundColorDark(ClassroomsState / 100)}`}>
                <div className='flex flex-col w-fit'>
                    <div className="text-xs font-semibold  mr-2 text-[#636B74] dark:text-[#636B74] w-fit">Classrooms’ state</div>
                    <div className="font-semibold text-2xl text-[#171A1C] dark:text-[#F0F4F8]">{ClassroomsState}%</div>
                </div>
                <div className='flex flex-grow'></div>
                <div className='flex h-fit w-fit'>
                    <div className='relative rounded-lg justify-center items-center' style={{ backgroundColor: getStrokeColor(ClassroomsState/100), height: '40px', width: '40px' }}>
                        <div className='absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2'>
                            {getIcon(ClassroomsState/100)}
                        </div>
                    </div>
                </div>
            </Card>
            <Card className={`flex flex-row justify-center items-center rounded-xl p-2 w-47 mb-2 ${getBackgroundColor(Amphitheaters / 100)} ${getBackgroundColorDark(Amphitheaters / 100)}`}>
                <div className='flex flex-col w-fit'>
                    <div className="text-xs font-semibold  mr-2 text-[#636B74] dark:text-[#636B74] w-fit">Amphitheaters</div>
                    <div className="font-semibold text-2xl text-[#171A1C] dark:text-[#F0F4F8]">{Amphitheaters}%</div>
                </div>
                <div className='flex flex-grow'></div>
                <div className='flex h-fit w-fit'>
                    <div className='relative rounded-lg justify-center items-center' style={{ backgroundColor: getStrokeColor(Amphitheaters/100), height: '40px', width: '40px' }}>
                        <div className='absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2'>
                            {getIcon(Amphitheaters/100)}
                        </div>
                    </div>
                </div>
            </Card>
            <Card className={`flex flex-row justify-center items-center rounded-xl p-2 w-47 mb-2 ${getBackgroundColor(LasbsState / 100)} ${getBackgroundColorDark(LasbsState / 100)}`}>
                <div className='flex flex-col w-fit'>
                    <div className="text-xs font-semibold  mr-2 text-[#636B74] dark:text-[#636B74] w-fit">Labs’ state</div>
                    <div className="font-semibold text-2xl text-[#171A1C] dark:text-[#F0F4F8]">{LasbsState}%</div>
                </div>
                <div className='flex flex-grow'></div>
                <div className='flex h-fit w-fit'>
                    <div className='relative rounded-lg justify-center items-center' style={{ backgroundColor: getStrokeColor(LasbsState/100), height: '40px', width: '40px' }}>
                        <div className='absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2'>
                            {getIcon(LasbsState/100)}
                        </div>
                    </div>
                </div>
            </Card>
            <Card className={`flex flex-row justify-center items-center rounded-xl p-2 w-47 mb-2 ${getBackgroundColor(StudyRooms / 100)} ${getBackgroundColorDark(StudyRooms / 100)}`}>
                <div className='flex flex-col w-fit'>
                    <div className="text-xs font-semibold  mr-2 text-[#636B74] dark:text-[#636B74] w-fit">Study rooms</div>
                    <div className="font-semibold text-2xl text-[#171A1C] dark:text-[#F0F4F8]">{StudyRooms}%</div>
                </div>
                <div className='flex flex-grow'></div>
                <div className='flex h-fit w-fit'>
                    <div className='relative rounded-lg justify-center items-center' style={{ backgroundColor: getStrokeColor(StudyRooms/100), height: '40px', width: '40px' }}>
                        <div className='absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2'>
                            {getIcon(StudyRooms/100)}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
      </div>
    </Card>
  );
};

export default GeneralLogisticStatsCard;
