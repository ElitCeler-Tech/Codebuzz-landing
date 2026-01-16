import React from "react";
import { User } from "lucide-react";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "./ui/animations";

type TeamMember = {
    name: string;
    role: string;
    bgColor: string;
    image?: string; // Optional if we had images
};

const teamMembers: TeamMember[] = [
    {
        name: "Saneeta Narrlla",
        role: "Founder & Technologist, CodeBuzz\nData • Security • AI Education",
        bgColor: "bg-[#ffe8b8]", // Light yellow/orange
        image: "/teams/Saneetapic.png",
    },
    {
        name: "Siddharth Pothukuchi",
        role: "AI/ML Engineer\nIIT Bhilai & Purdue University Graduate",
        bgColor: "bg-[#d4e4fa]", // Light blue
        image: "/teams/siddharth-pothukuchi.jpeg",
    },
    {
        name: "Ravi Doddasomayajula",
        role: "Tech Lead & Mentor\nSenior Software Engineer\nLead Data Scientist with 8+ years of experience in financial anomaly detection and generative AI; MS (Georgia Tech), PhD (George Mason University).",
        bgColor: "bg-[#e8f5e9]", // Light green
        image: "/teams/Ravi_sir.jpeg",
    },
    {
        name: "Dilip Yeluguri",
        role: "Data and Finance@CodeBuzz",
        bgColor: "bg-[#fce4ec]", // Light pink
        image: "/teams/DilipY.jpeg",
    },
    {
        name: "Vijay Chakilam",
        role: "Founder@Kooper\nUniversity of Cincinnati MS Quantitative Analysis",
        bgColor: "bg-[#e3f2fd]", // Light blue
        image: "/teams/vijay_chakilam.jpeg",
    },
];

export default function TeamSection() {
    return (
        <section className="py-12 md:py-24 px-4 bg-white flex flex-col items-center">
            <FadeIn direction="up">
                <div className="text-center mb-8 md:mb-16 px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-gray-900 mb-4">
                        Say hello to our team members
                    </h2>
                    <p className="text-base md:text-lg text-gray-500 font-poppins">
                        Meet all the team members from our team
                    </p>
                </div>
            </FadeIn>

            <StaggerContainer staggerDelay={0.15} className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-8 px-4 max-w-5xl w-full mb-8 md:mb-12">
                {teamMembers.map((member, index) => (
                    <StaggerItem key={index} direction="up">
                        <div className="flex flex-col gap-4 group cursor-pointer w-full sm:w-56 md:w-72">
                            {/* Image Placeholder */}
                            <div
                                className={`relative w-full aspect-[4/5] rounded-xl ${member.bgColor} flex items-end justify-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-2`}
                            >
                                {member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover object-top"
                                    />
                                ) : (
                                    <div className="relative w-full h-full opacity-50 flex items-center justify-center">
                                        <User className="w-24 h-24 md:w-32 md:h-32 text-gray-600 opacity-20" />
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div className="text-left">
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 font-montserrat">
                                    {member.name}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-500 font-poppins whitespace-pre-line">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>


        </section>
    );
}
