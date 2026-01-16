import Image from "next/image";

interface MentorCardProps {
    imageSrc: string;
    name: string;
    role: string;
    description: string;
}

export default function MentorCard({
    imageSrc,
    name,
    role,
    description,
}: MentorCardProps) {
    return (
        <div className="bg-white rounded-2xl sm:rounded-[32px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-neutral-200 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="relative aspect-[3/4] w-full mb-4 rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
                <Image
                    src={imageSrc}
                    alt={name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold font-montserrat text-gray-900 mb-1">
                    {name}
                </h3>
                <p className="text-[#ff830a] font-medium font-poppins text-sm mb-2">
                    {role}
                </p>
                <p className="text-gray-600 text-sm font-poppins leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
