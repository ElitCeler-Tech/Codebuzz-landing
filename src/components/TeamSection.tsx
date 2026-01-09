import React from "react";
import { ArrowRight, ArrowLeft, User } from "lucide-react";

type TeamMember = {
    name: string;
    role: string;
    bgColor: string;
    image?: string; // Optional if we had images
};

const teamMembers: TeamMember[] = [
    {
        name: "Devon Lane",
        role: "CEO & Founder of CodeBuzz",
        bgColor: "bg-[#d4f0d4]", // Light green
    },
    {
        name: "Kristin Watson",
        role: "UI Designer",
        bgColor: "bg-[#e5dcf5]", // Light purple
    },
    {
        name: "Jacob Jones",
        role: "Product Designer",
        bgColor: "bg-[#ffe8b8]", // Light yellow/orange
    },
    {
        name: "Esther Howard",
        role: "Front-end Developer",
        bgColor: "bg-[#d4e4fa]", // Light blue
    },
];

export default function TeamSection() {
    return (
        <section className="py-24 px-4 bg-white flex flex-col items-center">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-4">
                    Say hello to our team members
                </h2>
                <p className="text-lg text-gray-500 font-poppins">
                    Meet all the team members from our team
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl w-full mb-12">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col gap-4 group cursor-pointer">
                        {/* Image Placeholder */}
                        <div
                            className={`w-full aspect-[4/5] rounded-xl ${member.bgColor} flex items-end justify-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-2`}
                        >
                            {/* Using a generic placeholder illustration since we don't have the specific photos */}
                            <div className="relative w-full h-full opacity-50 flex items-center justify-center">
                                <User className="w-32 h-32 text-gray-600 opacity-20" />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-900 font-montserrat">
                                {member.name}
                            </h3>
                            <p className="text-sm text-gray-500 font-poppins">
                                {member.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full bg-[#faeff6] flex items-center justify-center text-[#ff830a] hover:bg-gray-100 transition-colors">
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <button className="w-12 h-12 rounded-full bg-[#ff830a] flex items-center justify-center text-white hover:bg-[#e07208] transition-colors shadow-md">
                    <ArrowRight className="w-6 h-6" />
                </button>
            </div>
        </section>
    );
}
