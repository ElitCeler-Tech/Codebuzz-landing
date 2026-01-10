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
                <h1 className="text-4xl md:text-5xl font-bold text-[#ff830a] font-montserrat mb-4 tracking-wide uppercase">
                    CodeBuzz — OUR STORY
                </h1>
                <p className="text-gray-700 font-poppins text-lg md:text-2xl font-medium max-w-2xl leading-relaxed">
                    Building Skills That Truly Matter
                </p>
            </section>

            {/* Content Section */}
            <section className="w-full max-w-4xl mx-auto px-6 py-20">
                <div className="flex flex-col gap-10 text-center md:text-left">
                    <p className="text-gray-600 font-poppins text-lg leading-loose">
                        CodeBuzz was created with one simple belief:
                        <br />
                        <span className="font-medium text-gray-800">
                            learning technology should feel relevant, empowering, and connected to the real world.
                        </span>
                    </p>

                    <p className="text-gray-600 font-poppins text-lg leading-loose">
                        Too often, learners are overwhelmed with random tools and outdated content.
                        At CodeBuzz, we design clear learning paths guided by industry professionals
                        who actively work in AI, Data, Cloud, and Software Engineering.
                    </p>

                    <div className="bg-[#FFF2E5] p-8 rounded-2xl border border-orange-100 shadow-sm">
                        <h3 className="text-xl font-bold text-[#ff830a] mb-6 font-montserrat">
                            We combine:
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <li className="flex flex-col items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#ff830a]" />
                                <span className="font-medium text-gray-800 font-poppins">Strong fundamentals</span>
                            </li>
                            <li className="flex flex-col items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#ff830a]" />
                                <span className="font-medium text-gray-800 font-poppins">Hands-on projects</span>
                            </li>
                            <li className="flex flex-col items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#ff830a]" />
                                <span className="font-medium text-gray-800 font-poppins">Career-aligned thinking</span>
                            </li>
                        </ul>
                    </div>

                    <p className="text-gray-700 font-poppins text-xl font-medium text-center italic">
                        "So learners don’t just learn — they grow with confidence and direction."
                    </p>

                    <div className="text-center mt-4">
                        <p className="text-gray-600 font-poppins text-lg">
                            Our goal isn’t to rush you into a job.
                        </p>
                        <p className="text-[#ff830a] font-bold font-montserrat text-2xl mt-2">
                            It’s to prepare you to build a successful career.
                        </p>
                    </div>
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
