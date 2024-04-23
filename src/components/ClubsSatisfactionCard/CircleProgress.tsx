import React, { useEffect, useRef } from 'react';

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

interface CircleProgressProps {
  score: number;
}

const CircleProgress: React.FC<CircleProgressProps> = ({ score }) => {
  const scorePoints = score / 100;
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (circleRef.current) {
      const circumference = 2 * Math.PI * 45; // Circumference of the circle
      circleRef.current.style.strokeDasharray = `${circumference}`;
      circleRef.current.style.strokeDashoffset = `${circumference - circumference * scorePoints}`;
    }
  }, [scorePoints]);

  const getIcon = (scorePoints: number) => {
    if (scorePoints > 0.33 && scorePoints <= 0.66) return <UnsatisfiedIcon width={40} height={40} viewBox="-10 -10 40 40"  fillColor="white" path_1="M12 6.49L19.53 19.5H4.47L12 6.49ZM12 2.5L1 21.5H23L12 2.5Z" path_2="M13 16.5H11V18.5H13V16.5Z" path_3="M13 10.5H11V15.5H13V10.5Z" />;
    else if (scorePoints <= 0.33 && scorePoints > 0) return <NeutralIcon width={40} height={40} viewBox="-10 -10 40 40" fillColor="white" path="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />;
    else if (scorePoints > 0.66 && scorePoints <= 1) return <SatisfiedIcon width={40} height={40} viewBox="-10 -10 40 40" fillColor="white" path="M16.59 7.58L10 14.17L6.41 10.59L5 12L10 17L18 9L16.59 7.58ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" />;
    else return null;
  };

  const getStrokeColor = (scorePoints: number): string => {
    if (scorePoints <= 0.33 && scorePoints > 0) return '#C41C1C';
    else if (scorePoints > 0.33 && scorePoints <= 0.66) return '#EA9A3E';
    else if (scorePoints > 0.66 && scorePoints <= 1) return '#1F7A1F';
    else return '#808080';
  };

  const getGradientColor = (scorePoints: number): string => {
    if (scorePoints <= 0.33 && scorePoints > 0) return '#CA4A4C';
    else if (scorePoints > 0.33 && scorePoints <= 0.66) return '#F3C896';
    else if (scorePoints > 0.66 && scorePoints <= 1) return '#51BC51';
    else return '#808080';
  };

  const strokeColor = getStrokeColor(scorePoints);
  const gradientColor = getGradientColor(scorePoints);
  const stopOffset = `${score / 2}%`;

  return (
    <div className="flex flex-col items-center justify-center w-50 h-50">
      <div id="points-progress" className="relative text-center flex justify-center items-center w-50 h-fit">
      <div className='flex h-fit w-fit'>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex font-bold text-3xl text-[#171A1C] dark:text-[#F0F4F8] text-right w-fit'>
            <div className='absolute w-fit top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2'>
              {score}%
            </div>
          </div>
          <div className='absolute left-11 bottom-15 font-semibold text-sm w-fit'>Satisfaction ratio</div>
        </div>
      </div>
      <svg width="100%" height="100%" viewBox="-5 -5 110 110" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`progressGradient-${score}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={gradientColor} />
            <stop offset={stopOffset} stopColor={strokeColor} />
          </linearGradient>
        </defs>
        <circle
            ref={circleRef}
            className="progress"
            cx="50"
            cy="50"
            r="45"
            stroke="#aba9a9"
            strokeWidth="6"
            strokeLinecap="round"
            fillOpacity="0"
            transform="rotate(-90 50 50)"
        ></circle>
        <circle
            ref={circleRef}
            className="progress"
            cx="50"
            cy="50"
            r="45"
            stroke={`url(#progressGradient-${score})`}
            strokeWidth="6"
            strokeLinecap="round"
            fillOpacity="0"
            transform="rotate(-90 50 50)"
        ></circle>
      </svg>
      </div>
    </div>
  );
};

export default CircleProgress;
