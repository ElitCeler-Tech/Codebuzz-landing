import React from "react";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "./ui/animations";

export default function PyramidSection() {
    return (
        <section className="py-12 md:py-20 px-4 flex flex-col items-center bg-white">
            <FadeIn direction="up">
                <div className="text-center mb-8 md:mb-16 px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-gray-900 mb-4">
                        Why Choose <span className="text-[#ff830a]">CodeBuzz</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 font-poppins max-w-2xl mx-auto">
                        Experience effective, engaging AI/ML learning with proven methods
                    </p>
                </div>
            </FadeIn>

            {/* Desktop Pyramid Layout */}
            <div className="w-full max-w-6xl px-4 hidden md:flex flex-col items-center">
                <div className="bg-[#99337e] text-white py-2 rounded-t-xl text-center w-[61%] mx-auto font-semibold text-lg z-30 relative shadow-md">
                    Layer 3 — Advanced AI (Expert)
                </div>
                <div
                    className="w-full bg-[#fff0f9] -mt-6 pt-16 pb-24 px-8 flex flex-col items-center z-20 relative filter drop-shadow-sm"
                    style={{ clipPath: "polygon(20% 0%, 80% 0%, 86% 100%, 14% 100%)" }}
                >
                    <p className="font-poppins italic text-gray-800 text-center mb-8 text-base">
                        Build scalable, production-ready AI solutions.
                    </p>
                    <div className="flex justify-center gap-10 items-start w-full">
                        <div className="text-center flex flex-col items-center gap-3 w-40 px-2">
                            <div className=" flex items-center justify-center mb-1">
                                <Image
                                    src="/l3a.png"
                                    alt="Generative AI"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm md:text-base font-semibold text-gray-800">
                                Generative AI & Agents
                            </p>
                        </div>
                        <div className="w-px h-24 bg-[#99337e] mx-2 self-center"></div>
                        <div className="text-center flex flex-col items-center gap-3 w-40 px-2">
                            <div className=" flex items-center justify-center mb-1">
                                <Image
                                    src="/l3b.png"
                                    alt="Advanced Architectures"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm md:text-base font-semibold text-gray-800">
                                Advanced Architectures
                            </p>
                        </div>
                        <div className="w-px h-24 bg-[#99337e] mx-2 self-center"></div>
                        <div className="text-center flex flex-col items-center gap-3 w-40 px-2">
                            <div className=" flex items-center justify-center mb-1">
                                <Image
                                    src="/l3c.png"
                                    alt="Multi-modal AI"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm md:text-base font-semibold text-gray-800">
                                Multi-modal & Scalable AI
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#ff830a] text-white py-2 rounded-t-xl text-center w-[73%] mx-auto font-semibold text-lg -mt-10 z-30 relative shadow-md">
                    Layer 2 — Applied AI / ML (Intermediate)
                </div>
                <div
                    className="w-full bg-[#fff9ee] -mt-6 pt-16 pb-24 px-12 flex flex-col items-center z-10 relative filter drop-shadow-sm"
                    style={{ clipPath: "polygon(14% 0%, 86% 0%, 93% 100%, 7% 100%)" }}
                >
                    <p className="font-poppins italic text-gray-800 text-center mb-8 text-base">
                        Apply ML concepts to real-world systems.
                    </p>
                    <div className="flex justify-center gap-10 items-start w-full">
                        <div className="text-center flex flex-col items-center gap-3 w-40 px-2">
                            <div className=" flex items-center justify-center mb-1">
                                <Image
                                    src="/l2a.png"
                                    alt="ML Algorithms"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm md:text-base font-semibold text-gray-800">
                                ML Algorithms & Model Training
                            </p>
                        </div>
                        {/* Separator */}
                        <div className="w-px h-24 bg-[#ff830a] mx-2 self-center"></div>
                        <div className="text-center flex flex-col items-center gap-3 w-40 px-2">
                            <div className=" flex items-center justify-center mb-1">
                                <Image
                                    src="/l2b.png"
                                    alt="System Design"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm md:text-base font-semibold text-gray-800">
                                Product & System Design
                            </p>
                        </div>
                        {/* Separator */}
                        <div className="w-px h-24 bg-[#ff830a] mx-2 self-center"></div>
                        <div className="text-center flex flex-col items-center gap-3 w-40 px-2">
                            <div className=" flex items-center justify-center mb-1">
                                <Image
                                    src="/l2c.png"
                                    alt="MLOps"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm md:text-base font-semibold text-gray-800">
                                MLOps & Deployment Basics
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#378c9f] text-white py-2 rounded-t-xl text-center w-[87%] mx-auto font-semibold text-lg -mt-10 z-30 relative shadow-md">
                    Layer 1: Core Skills (The Foundation Layer)
                </div>
                <div
                    className="w-full bg-[#ecfcff] -mt-6 pt-16 pb-28 px-16 flex flex-col items-center z-0 relative rounded-b-[2.5rem]"
                    style={{ clipPath: "polygon(7% 0%, 93% 0%, 100% 100%, 0% 100%)" }}
                >
                    <p className="font-poppins italic text-gray-800 text-center mb-8 text-base">
                        Build strong programming and engineering fundamentals.
                    </p>
                    <div className="flex justify-center gap-10 items-start w-full">
                        <div className="text-center flex flex-col items-center gap-3 w-40 px-2">
                            <div className=" flex items-center justify-center mb-1">
                                <Image
                                    src="/l1a.png"
                                    alt="Python & SQL"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm md:text-base font-semibold text-gray-800">
                                Python & SQL
                            </p>
                        </div>
                        {/* Separator */}
                        <div className="w-px h-24 bg-[#378C9F] mx-2 self-center"></div>
                        <div className="text-center flex flex-col items-center gap-3 w-40 px-2">
                            <div className=" flex items-center justify-center mb-1">
                                <Image
                                    src="/l1b.png"
                                    alt="Data Handling"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm md:text-base font-semibold text-gray-800">
                                Data Handling
                            </p>
                        </div>
                        {/* Separator */}
                        <div className="w-px h-24 bg-[#378C9F] mx-2 self-center"></div>
                        <div className="text-center flex flex-col items-center gap-3 w-40 px-2">
                            <div className=" flex items-center justify-center mb-1">
                                <Image
                                    src="/l1c.png"
                                    alt="Math for ML"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm md:text-base font-semibold text-gray-800">
                                Math & Statistics for ML
                            </p>
                        </div>
                        {/* Separator */}
                        <div className="w-px h-24 bg-[#378C9F] mx-2 self-center"></div>
                        <div className="text-center flex flex-col items-center gap-3 w-40 px-2">
                            <div className=" flex items-center justify-center mb-1">
                                <Image
                                    src="/l1d.png"
                                    alt="Cloud Basics"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm md:text-base font-semibold text-gray-800">
                                Git, Linux & Cloud Basics
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Stacked Cards Layout */}
            <div className="w-full max-w-lg px-4 flex md:hidden flex-col gap-6">
                {/* Layer 3 - Mobile */}
                <div className="bg-[#fff0f9] rounded-2xl overflow-hidden shadow-md">
                    <div className="bg-[#99337e] text-white py-3 px-4 text-center font-semibold text-sm sm:text-base">
                        Layer 3 — Advanced AI (Expert)
                    </div>
                    <div className="p-6">
                        <p className="font-poppins italic text-gray-800 text-center mb-6 text-sm">
                            Build scalable, production-ready AI solutions.
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center flex flex-col items-center gap-2">
                                <Image
                                    src="/l3a.png"
                                    alt="Generative AI"
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                                <p className="text-xs font-semibold text-gray-800">
                                    Generative AI & Agents
                                </p>
                            </div>
                            <div className="text-center flex flex-col items-center gap-2">
                                <Image
                                    src="/l3b.png"
                                    alt="Advanced Architectures"
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                                <p className="text-xs font-semibold text-gray-800">
                                    Advanced Architectures
                                </p>
                            </div>
                            <div className="text-center flex flex-col items-center gap-2">
                                <Image
                                    src="/l3c.png"
                                    alt="Multi-modal AI"
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                                <p className="text-xs font-semibold text-gray-800">
                                    Multi-modal AI
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Layer 2 - Mobile */}
                <div className="bg-[#fff9ee] rounded-2xl overflow-hidden shadow-md">
                    <div className="bg-[#ff830a] text-white py-3 px-4 text-center font-semibold text-sm sm:text-base">
                        Layer 2 — Applied AI / ML (Intermediate)
                    </div>
                    <div className="p-6">
                        <p className="font-poppins italic text-gray-800 text-center mb-6 text-sm">
                            Apply ML concepts to real-world systems.
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center flex flex-col items-center gap-2">
                                <Image
                                    src="/l2a.png"
                                    alt="ML Algorithms"
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                                <p className="text-xs font-semibold text-gray-800">
                                    ML Algorithms
                                </p>
                            </div>
                            <div className="text-center flex flex-col items-center gap-2">
                                <Image
                                    src="/l2b.png"
                                    alt="System Design"
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                                <p className="text-xs font-semibold text-gray-800">
                                    System Design
                                </p>
                            </div>
                            <div className="text-center flex flex-col items-center gap-2">
                                <Image
                                    src="/l2c.png"
                                    alt="MLOps"
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                                <p className="text-xs font-semibold text-gray-800">
                                    MLOps
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Layer 1 - Mobile */}
                <div className="bg-[#ecfcff] rounded-2xl overflow-hidden shadow-md">
                    <div className="bg-[#378c9f] text-white py-3 px-4 text-center font-semibold text-sm sm:text-base">
                        Layer 1 — Core Skills (Foundation)
                    </div>
                    <div className="p-6">
                        <p className="font-poppins italic text-gray-800 text-center mb-6 text-sm">
                            Build strong programming fundamentals.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center flex flex-col items-center gap-2">
                                <Image
                                    src="/l1a.png"
                                    alt="Python & SQL"
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                                <p className="text-xs font-semibold text-gray-800">
                                    Python & SQL
                                </p>
                            </div>
                            <div className="text-center flex flex-col items-center gap-2">
                                <Image
                                    src="/l1b.png"
                                    alt="Data Handling"
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                                <p className="text-xs font-semibold text-gray-800">
                                    Data Handling
                                </p>
                            </div>
                            <div className="text-center flex flex-col items-center gap-2">
                                <Image
                                    src="/l1c.png"
                                    alt="Math for ML"
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                                <p className="text-xs font-semibold text-gray-800">
                                    Math & Statistics
                                </p>
                            </div>
                            <div className="text-center flex flex-col items-center gap-2">
                                <Image
                                    src="/l1d.png"
                                    alt="Cloud Basics"
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                                <p className="text-xs font-semibold text-gray-800">
                                    Git, Linux & Cloud
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
