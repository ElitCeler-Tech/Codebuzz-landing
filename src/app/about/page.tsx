"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConnectWithCodeBuzzModal from "@/components/ConnectWithCodeBuzzModal";
import CTASection from "@/components/CTASection";
import { useState } from "react";
import { FadeIn } from "@/components/ui/animations";

export default function AboutPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section
                className="w-full py-12 sm:py-16 md:py-24 px-4 flex flex-col items-center justify-center text-center"
                style={{
                    background:
                        "linear-gradient(105deg, #FFF2E9 27.57%, #FFD5A7 108.43%)",
                }}
            >
                <FadeIn direction="up">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#ff830a] font-montserrat mb-4 tracking-wide uppercase px-4">
                        CodeBuzz — OUR STORY
                    </h1>
                </FadeIn>
                <FadeIn delay={0.15} direction="up">
                    <p className="text-gray-700 font-poppins text-base sm:text-lg md:text-2xl font-medium max-w-2xl leading-relaxed px-4">
                        Building Skills That Truly Matter
                    </p>
                </FadeIn>
            </section>

            {/* Content Section */}
            <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-20">
                <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 text-center">
                    <FadeIn direction="up">
                        <p className="text-gray-600 font-poppins text-base sm:text-lg leading-relaxed md:leading-loose">
                            CodeBuzz was created with one simple belief:
                            <br />
                            <span className="font-medium text-gray-800">
                                learning technology should feel relevant, empowering, and connected to the real world.
                            </span>
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.1} direction="up">
                        <p className="text-gray-600 font-poppins text-base sm:text-lg leading-relaxed md:leading-loose">
                            Too often, learners are overwhelmed with random tools and outdated content.
                            At CodeBuzz, we design clear learning paths guided by industry professionals
                            who actively work in AI, Data, Cloud, and Software Engineering.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2} direction="up">
                        <div className="bg-[#FFF2E5] p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border border-orange-100 shadow-sm">
                            <h3 className="text-lg sm:text-xl font-bold text-[#ff830a] mb-4 sm:mb-6 font-montserrat">
                                We combine:
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                                <li className="flex flex-col items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#ff830a]" />
                                    <span className="font-medium text-gray-800 font-poppins text-sm sm:text-base">Strong fundamentals</span>
                                </li>
                                <li className="flex flex-col items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#ff830a]" />
                                    <span className="font-medium text-gray-800 font-poppins text-sm sm:text-base">Hands-on projects</span>
                                </li>
                                <li className="flex flex-col items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#ff830a]" />
                                    <span className="font-medium text-gray-800 font-poppins text-sm sm:text-base">Career-aligned thinking</span>
                                </li>
                            </ul>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3} direction="up">
                        <p className="text-gray-700 font-poppins text-base sm:text-lg md:text-xl font-medium text-center italic px-4">
                            &quot;So learners don&apos;t just learn — they grow with confidence and direction.&quot;
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up">
                        <div className="text-center mt-2 sm:mt-4">
                            <p className="text-gray-600 font-poppins text-base sm:text-lg">
                                Our goal isn&apos;t to rush you into a job.
                            </p>
                            <p className="text-[#ff830a] font-bold font-montserrat text-xl sm:text-2xl mt-2">
                                It&apos;s to prepare you to build a successful career.
                            </p>
                        </div>
                    </FadeIn>
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

