import { Card } from '@nextui-org/react';
import React, { useEffect, useRef, useState } from 'react';
import CircleProgress from './CircleProgress';

interface ClubsSatisfactioncardProps {
  value: number;
  activity: number;
  report: number;
}

const ClubsSatisfactioncard: React.FC<ClubsSatisfactioncardProps> = ({
  value,
  activity,
  report,
}) => {
  const [percent, setPercent] = useState(0);
  const [circumference, setCircumference] = useState(0);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (circle) {
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      setCircumference(circumference);
    }
  }, []);

  useEffect(() => {
    const offset = (100 - percent) / 100 * circumference;
    circleRef.current?.setAttribute('strokeDasharray', `${circumference}`);
    circleRef.current?.setAttribute('strokeDashoffset', `${offset}`);
  }, [percent, circumference]);

  const getword_1 = (number: number): string => {
    if (number <= 1 && number >= 0) return '  activity';
    else return '  activities';
  };

  const getword_2 = (number: number): string => {
    if (number <= 1 && number >= 0) return '  report';
    else return '  reports';
  };

  return (
    <Card className="col-span-4 flex flex-row bg-gradient-to-r from-[#0B6BCB06] to-[#0B6BCB20] rounded-xl w-fit">
      <div className="flex flex-col p-2">
        <div className="font-bold text-base text-black dark:text-white w-fit ml-2 mt-2">
          Clubs Satisfaction
        </div>
        <div className="text-sm mb-4 ml-2 text-[#636B74]">Last month</div>
        <Card className="flex flex-col bg-[#C7DFF7] dark:bg-[#12467B40] rounded-xl p-4 w-50 mb-2">
          <div className="text-sm  mr-2 text-[#636B74] dark:text-[#636B74]">Realized activities</div>
          <div className="flex flex-row">
            <div className="font-semibold text-sm text-[#12467B] dark:text-[#C7DFF7] mr-1">{activity}</div>
            <div className="font-semibold text-sm text-[#12467B] dark:text-[#C7DFF7]">{getword_1(value)}</div>
          </div>
        </Card>
        <Card className="flex flex-col bg-[#C7DFF7] dark:bg-[#12467B40] rounded-xl p-4 w-50 mb-2">
          <div className="text-sm  mr-2 text-[#636B74] dark:text-[#636B74]">Submitted reports</div>
          <div className="flex flex-row">
            <div className="font-semibold text-sm text-[#7D1212] dark:text-[#F7C5C5] mr-1">{report}</div>
            <div className="font-semibold text-sm text-[#7D1212] dark:text-[#F7C5C5]">{getword_2(value)}</div>
          </div>
        </Card>
      </div>
      <div className="flex h-fit w-fit mt-8 flex-col justify-center items-center">   
        <CircleProgress score={value}></CircleProgress>   
      </div>
    </Card>
  );
};

export default ClubsSatisfactioncard;
