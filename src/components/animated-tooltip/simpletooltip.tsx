"use client";
import React, { useState } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

const getColorFromName = (name: string) => {
  switch (name.toLowerCase()) {
    case "red":
      return "#C41C1C";
    case "orange":
      return "#EA9A3E";
    case "green":
      return "#1F7A1F";
    case "blue":
      return "#0B6BCB";
    default:
      return "#636B74";
  }
};

const SimpleAnimatedTooltip = ({ labels  }:{labels:[]}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event: { target: { offsetWidth: number; }; nativeEvent: { offsetX: number; }; }) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {labels.map((label, idx) => (
        <div
          className="grid grid-cols-2 gap-0 group relative w-fit"
          key={label}
          onMouseEnter={() => setHoveredIndex(idx + 1)} // Generating ID based on array index
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === idx + 1 && (
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
              <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
              <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
              <div className="text-white text-xs">{label}</div>
            </motion.div>
          )}
          <div
            onMouseMove={handleMouseMove}
            className={`object-cover !m-0 !p-0 object-bottom rounded-full h-2 w-12 group-hover:scale-105 group-hover:z-30 relative transition duration-500`}
            style={{ backgroundColor: getColorFromName(label) }}
          />
        </div>
      ))}
    </>
  );
};

export default SimpleAnimatedTooltip;
