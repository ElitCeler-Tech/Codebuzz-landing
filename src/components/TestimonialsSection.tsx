"use client";

import React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Testimonial = {
    name: string;
    role: string;
    text: string;
    bgColor: string;
    avatar: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Lauren",
        role: "Software Designer",
        text: "Transitioning careers into tech and finding a platform that provided clarity was crucial. CodeBuzz guided me from basic to advanced concepts with clear lessons and assessments. The quizzes helped me validate what I learned instead of just watching videos.",
        bgColor: "bg-[#f0f4ff]", // Light blue-ish
        avatar: "https://i.pravatar.cc/150?u=lauren",
    },
    {
        name: "Rishi Shah",
        role: "Software Engineer",
        text: "I started CodeBuzz with almost no technical background. The way courses are structured helped me understand concepts step by step without feeling overwhelmed. The dashboard clearly shows my progress, which kept me motivated to continue learning every day.",
        bgColor: "bg-[#fff9e6]", // Light yellow
        avatar: "https://i.pravatar.cc/150?u=rishi",
    },
    {
        name: "Fiona Serre",
        role: "Designer",
        text: "The live classes were extremely helpful because I could ask questions in real time. What I loved most was that every session was recorded, so I could revisit difficult topics later. This made learning flexible even with my busy schedule.",
        bgColor: "bg-[#e6f7eb]", // Light green
        avatar: "https://i.pravatar.cc/150?u=fiona",
    },
    {
        name: "Aditya Singh",
        role: "Lawyer",
        text: "As a working professional, finding time to learn is hard. CodeBuzz allowed me to learn at my own pace, resume lessons instantly, and track exactly where I left off. The platform feels clean, focused, and built for serious learners.",
        bgColor: "bg-[#f5f5f5]", // Light gray
        avatar: "https://i.pravatar.cc/150?u=aditya",
    },
    {
        name: "Ria Manek",
        role: "Software Developer",
        text: "CodeBuzz didn't just teach me — it built my confidence. The mix of video lessons, assessments, and progress tracking made learning purposeful. I now feel prepared to apply my skills in real projects.",
        bgColor: "bg-[#f2f0ff]", // Light purple
        avatar: "https://i.pravatar.cc/150?u=ria",
    },
    {
        name: "Jacob Jones",
        role: "Product Designer",
        text: "The community features are a game changer. Being able to discuss problems with peers and mentors in real-time helped me unblock myself quickly. The collaborative environment is unmatched.",
        bgColor: "bg-[#fff9e6]", // Light yellow
        avatar: "https://i.pravatar.cc/150?u=jacob",
    },
    {
        name: "Esther Howard",
        role: "Front-end Developer",
        text: "I appreciated the project-based approach. Instead of just learning syntax, I was building real applications. This portfolio-ready work helped me land my first junior developer role.",
        bgColor: "bg-[#f0f4ff]", // Light blue-ish
        avatar: "https://i.pravatar.cc/150?u=esther",
    },
    {
        name: "Kristin Watson",
        role: "UI Designer",
        text: "The UX/UI design track provided a comprehensive foundation. The instructors are industry experts who share practical insights that you don't find in textbooks. Highly recommended for aspiring designers.",
        bgColor: "bg-[#e6f7eb]", // Light green
        avatar: "https://i.pravatar.cc/150?u=kristin",
    },
];

export default function TestimonialsSection() {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320; // Approximate card width + gap
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="py-12 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[95%] sm:max-w-[90%] 2xl:max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 px-4 max-w-6xl mx-auto w-full gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-gray-900 mb-4 md:mb-6">
                            What Our Learners Say
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 font-poppins">
                            Real experiences from students who are building their skills with
                            CodeBuzz.
                        </p>
                    </div>

                    <div className="flex gap-3 md:gap-4">
                        <button
                            onClick={() => scroll("left")}
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#FFF2E5] flex items-center justify-center text-[#ff830a] hover:bg-orange-100 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#ff830a] flex items-center justify-center text-white hover:bg-[#e07208] transition-colors shadow-md shadow-orange-200"
                        >
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                    </div>
                </div>
                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 md:gap-6 overflow-x-auto pb-8 md:pb-12 px-4 scrollbar-hide"
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`w-[280px] sm:w-[320px] md:w-[380px] p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2rem] ${testimonial.bgColor} flex flex-col gap-4 md:gap-6 shrink-0 transition-transform hover:scale-[1.01]`}
                        >
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-gray-200 shrink-0 relative">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 font-montserrat text-base md:text-lg">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-500 font-poppins">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                            <p className="text-[#555555] leading-relaxed md:leading-[1.8] font-poppins text-sm md:text-[15px]">
                                &quot;{testimonial.text}&quot;
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
