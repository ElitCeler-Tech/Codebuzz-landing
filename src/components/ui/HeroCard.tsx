import React from "react";

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
}: HeroCardProps) => (
    <div
        className={`absolute bg-white py-10 rounded-3xl shadow-[0px_2.59px_11px_0px_#00000040] border border-orange-100 flex flex-col items-center text-center w-60 transition-transform hover:scale-105 ${className}`}
    >
        <div className="absolute -top-4 -right-4 bg-[#ff830a] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
            {number}
        </div>
        <div className="text-[#ff830a] mb-4">{icon}</div>
        <h3 className="font-semibold text-gray-900 text-lg mb-2">{title}</h3>
        <p className="text-gray-500 text-sm">{subtitle}</p>
    </div>
);

export default HeroCard;
