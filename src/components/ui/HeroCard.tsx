"use client";

import React from "react";
import { motion } from "motion/react";

interface HeroCardProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    number: number;
    className?: string;
}

const HeroCard = ({
    icon,
    title,
    subtitle,
    number,
    className = "",
}: HeroCardProps) => {
    // Create unique animation based on card number for varied movement
    const floatDuration = 3 + (number * 0.5); // Different duration per card
    const floatDelay = number * 0.3; // Staggered start

    return (
        <motion.div
            className={`absolute bg-white py-10 rounded-3xl shadow-[0px_2.59px_11px_0px_#00000040] border border-orange-100 flex flex-col items-center text-center w-60 ${className}`}
            initial={{ y: 0, scale: 1 }}
            animate={{
                y: [0, -12, 0, 8, 0],
                scale: 1,
            }}
            transition={{
                y: {
                    duration: floatDuration,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: floatDelay,
                },
                scale: {
                    duration: 0.3,
                    ease: "easeOut",
                },
            }}
            whileHover={{
                scale: 1.05,
            }}
        >
            <motion.div
                className="absolute -top-4 -right-4 bg-[#ff830a] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md"
                animate={{
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: floatDelay + 0.5,
                }}
            >
                {number}
            </motion.div>
            <div className="text-[#ff830a] mb-4">{icon}</div>
            <h3 className="font-semibold text-gray-900 text-lg mb-2">{title}</h3>
            <p className="text-gray-500 text-sm">{subtitle}</p>
        </motion.div>
    );
};

export default HeroCard;
