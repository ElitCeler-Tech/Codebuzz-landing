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
        <div className="bg-white rounded-[32px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-neutral-200 hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="relative h-56 w-full mb-4 rounded-2xl overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="px-2 pb-2 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold font-poppins text-gray-900 mb-6 flex-grow">
                    {title}
                </h3>
                <button
                    onClick={onContactClick}
                    className="w-full bg-[#ff830a] text-white font-medium py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#e07000] transition-colors"
                >
                    Contact For Curriculum
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
