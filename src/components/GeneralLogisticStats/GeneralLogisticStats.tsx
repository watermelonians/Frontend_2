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
  
  const UnsatisfiedIcon = ({ width, height, viewBox, fillColor, path_1, path_2, path_3 }) => (
    <svg width={width} height={height} viewBox={viewBox} fill={fillColor} xmlns="http://www.w3.org/2000/svg">
      <path d={path_1} />
      <path d={path_2} />
      <path d={path_3} />
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
