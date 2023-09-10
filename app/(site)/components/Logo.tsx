"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark border border-solid border-transparent dark:border-light text-light flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: ["#121212", "#FF0303", "#121212"],
          transition: {
            duration: 1,
            repeat: Infinity,
          },
        }}
      >
        JM
      </MotionLink>
    </div>
  );
};

export default Logo;
