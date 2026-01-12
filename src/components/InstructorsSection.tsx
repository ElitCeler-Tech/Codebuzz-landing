import React from "react";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import {
    ShoppingBag,
    Tv,
    TrendingUp,
} from "lucide-react";
import { FadeIn } from "./ui/animations";

const companiesRow1 = [
    { name: "Amazon", icon: ShoppingBag, isBox: false, imageSrc: "/logos/amazon.png" },
    { name: "Microsoft", icon: Tv, isBox: false, imageSrc: "/logos/Microsoft.svg" },
    { name: "Hulu", icon: Tv, isBox: false, imageSrc: "/logos/Hulu.svg" },
    { name: "Salesforce", icon: TrendingUp, isBox: false, imageSrc: "/logos/Salesforce.svg" },
    { name: "Amazon", icon: ShoppingBag, isBox: false, imageSrc: "/logos/amazon.png" },
    { name: "Microsoft", icon: Tv, isBox: false, imageSrc: "/logos/Microsoft.svg" },
];

const companiesRow2 = [
    { name: "AT&T", icon: TrendingUp, isBox: false, imageSrc: "/logos/AT&T-L.svg" },
    { name: "Fintech", icon: TrendingUp, isBox: false },
    { name: "Salesforce", icon: TrendingUp, isBox: false, imageSrc: "/logos/Salesforce.svg" },
    { name: "Hulu", icon: Tv, isBox: false, imageSrc: "/logos/Hulu.svg" },
    { name: "AT&T", icon: TrendingUp, isBox: false, imageSrc: "/logos/AT&T-L.svg" },
    { name: "Fintech", icon: TrendingUp, isBox: false },
];

const LogoCard = ({
    name,
    icon: Icon,
    isBox,
    imageSrc,
}: {
    name: string;
    icon: React.ElementType;
    isBox: boolean;
    imageSrc?: string;
}) => {
    return (
        <div className="mx-2 sm:mx-4 flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 sm:px-8 py-3 sm:py-4 min-w-[140px] sm:min-w-[200px] h-[70px] sm:h-[100px] hover:bg-gray-200 transition-colors">
            {imageSrc ? (
                <div className="relative h-10 sm:h-16 w-24 sm:w-40 flex items-center justify-center">
                    <Image
                        src={imageSrc}
                        alt={name}
                        fill
                        className="object-contain"
                    />
                </div>
            ) : isBox ? (
                <div className="flex items-center gap-2 border-2 border-gray-800 p-1 px-2 rounded-sm">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 fill-current text-gray-800" />
                    <span className="font-bold text-gray-800 uppercase tracking-widest text-[10px] sm:text-xs">
                        {name}
                    </span>
                </div>
            ) : (
                <>
                    <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-gray-700" />
                    <span className="font-bold text-gray-700 text-sm sm:text-lg">{name}</span>
                </>
            )}
        </div>
    );
};

export default function InstructorsSection() {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-white flex flex-col items-center overflow-hidden">
            <FadeIn direction="up">
                <div className="text-center mb-8 sm:mb-12 md:mb-16 max-w-3xl px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-gray-900 mb-4">
                        Instructors from <span className="text-[#ff830a]">Top Companies</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 font-poppins">
                        Learn directly from professionals shaping today&apos;s tech industry.
                    </p>
                </div>
            </FadeIn>

            <div className="w-full relative">
                <Marquee className="[--duration:40s] mb-4 sm:mb-8" pauseOnHover>
                    {companiesRow1.map((company, idx) => (
                        <LogoCard key={`row1-${idx}`} {...company} />
                    ))}
                </Marquee>

                <Marquee className="[--duration:40s]" reverse pauseOnHover>
                    {companiesRow2.map((company, idx) => (
                        <LogoCard key={`row2-${idx}`} {...company} />
                    ))}
                </Marquee>

                {/* Gradient overlays for smooth fade effect at edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 sm:w-1/4 md:w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 sm:w-1/4 md:w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </section>
    );
}
