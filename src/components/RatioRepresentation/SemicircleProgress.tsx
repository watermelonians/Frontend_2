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

interface SemicircleProgressProps {
  score: number;
}

const SemicircleProgress: React.FC<SemicircleProgressProps> = ({ score }) => {
  const scorePoints = score / 100;
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${pathLength}`;
      pathRef.current.style.strokeDashoffset = `${pathLength - pathLength * scorePoints}`;
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
    <div className="flex flex-col items-center justify-end w-60 h-fit">
      <div id="points-progress" className="relative text-center flex justify-end items-center w-50">
      <div className='relative h-fit w-fit'>
        <div className='absolute inset-0 left-19 rounded-full' style={{ backgroundColor: strokeColor, height: '45px', width: '45px' }}>
          <div className='justify-center'>
            {getIcon(scorePoints)}
          </div>
        </div>
      </div>
      <svg width="100%" height="100%" viewBox="-5 -5 110 63" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`progressGradient-${score}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={gradientColor} />
            <stop offset={stopOffset} stopColor={strokeColor} />
          </linearGradient>
        </defs>
        <path
          className="placeholder"
          d="M 50,50 m -47,0 a 47,47 0 1 1 94,0"
          stroke="#aba9a9"
          strokeWidth="6"
          strokeLinecap="round"
          fillOpacity="0"
        ></path>
        <path
          ref={pathRef}
          className="sports"
          d="M 50,50 m -47,0 a 47,47 0 1 1 94,0"
          stroke={`url(#progressGradient-${score})`}
          strokeLinecap="round"
          strokeWidth="6"
          fillOpacity="0"
        ></path>
      </svg>
      </div>
      <div className="w-full text-center">
        <div
          className="py-2 rounded-2xl shadow-xl"
          style={{ width: '100%', background: `linear-gradient(to right, ${strokeColor}, ${gradientColor})` }}
        >
          <span className="text-2xl font-bold text-white">{score}%</span>
        </div>
      </div>
    </div>
  );
};

export default SemicircleProgress;
