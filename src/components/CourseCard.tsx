import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CourseCardProps {
    imageSrc: string;
    title: string;
    onContactClick: () => void;
}

export default function CourseCard({
    imageSrc,
    title,
    onContactClick,
}: CourseCardProps) {
    return (
        <div className="bg-white rounded-2xl sm:rounded-[32px] p-3 sm:p-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-neutral-200 hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="relative h-40 sm:h-48 md:h-56 w-full mb-3 sm:mb-4 rounded-xl sm:rounded-2xl overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="px-1 sm:px-2 pb-1 sm:pb-2 flex flex-col flex-grow">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold font-poppins text-gray-900 mb-4 sm:mb-6 flex-grow">
                    {title}
                </h3>
                <button
                    onClick={onContactClick}
                    className="w-full bg-[#ff830a] text-white font-medium py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl flex items-center justify-center gap-2 hover:bg-[#e07000] transition-colors text-sm sm:text-base"
                >
                    Contact For Curriculum
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>
        </div>
    );
}
