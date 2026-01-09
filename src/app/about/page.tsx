"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConnectWithCodeBuzzModal from "@/components/ConnectWithCodeBuzzModal";
import CTASection from "@/components/CTASection";
import { useState } from "react";

export default function AboutPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const stats = [
        { value: "500", label: "Students Trained" },
        { value: "200", label: "Expert Courses" },
        { value: "95", label: "Success Rate" },
        { value: "24", label: "Support available" },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section
                className="w-full py-24 px-4 flex flex-col items-center justify-center text-center"
                style={{
                    background:
                        "linear-gradient(105deg, #FFF2E9 27.57%, #FFD5A7 108.43%)",
                }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-[#ff830a] font-montserrat mb-4">
                    About Us
                </h1>
                <p className="text-gray-600 font-poppins text-lg max-w-2xl leading-relaxed">
                    Empowering learners with structured, industry-ready tech education.
                </p>
            </section>

            {/* Content Section */}
            <section className="w-full max-w-5xl mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <p className="text-gray-600 font-poppins text-lg md:text-xl leading-loose max-w-4xl mx-auto">
                        CodeBuzz is a modern tech learning platform designed to help learners
                        build strong, job-ready skills with clarity and confidence. We focus
                        on structured courses, expert-led instruction, and hands-on learning
                        experiences that go beyond just watching videos.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-10 border border-gray-100 flex flex-col items-center justify-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                        >
                            <h3 className="text-4xl font-bold text-[#ff830a] mb-2 font-montserrat">
                                {stat.value}
                            </h3>
                            <p className="text-gray-500 font-poppins font-medium text-lg">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <CTASection />
            <Footer />

            <ConnectWithCodeBuzzModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
}
