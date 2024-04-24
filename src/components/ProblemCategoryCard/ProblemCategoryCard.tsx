import { Card } from '@nextui-org/react';
import React, { useEffect, useRef } from 'react';

interface ProblemCategoryCardProps {
    title: string;
}
const ProblemCategoryCard: React.FC<ProblemCategoryCardProps> = ({
    title,
}) => {
    return (
        <Card className="flex flex-col bg-[#0A274440] rounded-xl w-50  h-132.5">
        </Card>
    );
};

export default ProblemCategoryCard;