"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { AiFillPlusCircle } from "react-icons/ai";

export const MemberTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  const renderTooltip = (item) => (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.6 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 10,
        },
      }}
      exit={{ opacity: 0, y: 20, scale: 0.6 }}
      style={{
        translateX: translateX,
        rotate: rotate,
        whiteSpace: "nowrap",
      }}
      className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
    >
      <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
      <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
      <div className="font-bold text-white relative z-30 text-xs">
        {item.name}
      </div>
    </motion.div>
  );

  const remainingItemsCount = items.length - 5;

  return (
    <>
      {items.slice(0, 5).map((item, idx) => (
        <div
          className="-mr-1 relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => {
            setHoveredIndex(null);
            setShowTooltip(false);
          }}
        >
          {hoveredIndex === item.id && renderTooltip(item)}
          <Image
            onMouseMove={handleMouseMove}
            height={3}
            width={3}
            src={item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-bottom rounded-full h-4 w-4 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
          />
        </div>
      ))}
      {items.length > 5 && (
        <div
          className="-mr-3 relative group"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => {setHoveredIndex(null);setShowTooltip(false);}}
        >
          <AiFillPlusCircle className="object-cover !m-0 !p-0 object-bottom rounded-full h-4 w-4 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500" />
          {showTooltip && renderTooltip({ name: `+${remainingItemsCount} remaining people`, designation: "" })}
        </div>
      )}
    </>
  );
};
