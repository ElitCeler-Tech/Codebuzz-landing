import React from "react";
import Image from "next/image";

export default function PyramidSection() {
    return (
        <section className="py-20 px-4 flex flex-col items-center bg-white">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-4">
                    Why Choose <span className="text-[#ff830a]">CodeBuzz</span>
                </h2>
                <p className="text-lg text-gray-600 font-poppins">
                    Experience effective, engaging AI/ML learning with proven methods
                </p>
            </div>

            <div className="w-full max-w-6xl px-4 flex flex-col items-center">
                <div className="bg-[#9c3375] text-white py-2 rounded-t-xl text-center w-[61%] mx-auto font-bold text-lg z-30 relative shadow-md">
                    Layer 3 — Advanced AI (Expert)
                </div>
                <div
                    className="w-full bg-[#faeff6] -mt-6 pt-24 pb-24 px-8 flex justify-center gap-10 items-start z-20 relative filter drop-shadow-sm"
                    style={{ clipPath: "polygon(20% 0%, 80% 0%, 86% 100%, 14% 100%)" }}
                >
                    <div className="text-center flex flex-col items-center gap-3 w-40 px-1">
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
                    {/* Separator */}
                    <div className="w-px h-24 bg-[#844AFF] mx-2 self-center"></div>
                    <div className="text-center flex flex-col items-center gap-3 w-40 px-1">
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
                    {/* Separator */}
                    <div className="w-px h-24 bg-[#844AFF] mx-2 self-center"></div>
                    <div className="text-center flex flex-col items-center gap-3 w-40 px-1">
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

                <div className="bg-[#f07d00] text-white py-2 rounded-t-xl text-center w-[73%] mx-auto font-bold text-lg -mt-10 z-30 relative shadow-md">
                    Layer 2 — Applied AI / ML (Intermediate)
                </div>
                <div
                    className="w-full bg-[#fff6eb] -mt-6 pt-24 pb-24 px-12 flex justify-center gap-10 items-start z-10 relative filter drop-shadow-sm"
                    style={{ clipPath: "polygon(14% 0%, 86% 0%, 93% 100%, 7% 100%)" }}
                >
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
                    <div className="w-px h-24 bg-[#844AFF] mx-2 self-center"></div>
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
                    <div className="w-px h-24 bg-[#844AFF] mx-2 self-center"></div>
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

                <div className="bg-[#3b8da1] text-white py-2 rounded-t-xl text-center w-[87%] mx-auto font-bold text-lg -mt-10 z-30 relative shadow-md">
                    Layer 1: Core Skills (The Foundation Layer)
                </div>
                <div
                    className="w-full bg-[#f0fcff] -mt-6 pt-24 pb-28 px-16 flex justify-around items-start z-0 relative filter drop-shadow-sm"
                    style={{ clipPath: "polygon(7% 0%, 93% 0%, 100% 100%, 0% 100%)" }}
                >
                    <div className="text-center flex flex-col items-center gap-3 w-1/4 px-2">
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
                    <div className="w-px h-24 bg-[#844AFF] mx-2 self-center"></div>
                    <div className="text-center flex flex-col items-center gap-3 w-1/4 px-2">
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
                    <div className="w-px h-24 bg-[#844AFF] mx-2 self-center"></div>
                    <div className="text-center flex flex-col items-center gap-3 w-1/4 px-2">
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
                    <div className="w-px h-24 bg-[#844AFF] mx-2 self-center"></div>
                    <div className="text-center flex flex-col items-center gap-3 w-1/4 px-2">
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
        </section>
    );
}
