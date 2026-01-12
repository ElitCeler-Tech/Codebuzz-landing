import React from "react";
import { StaggerContainer, StaggerItem } from "./ui/animations";

export default function StatsSection() {
    return (
        <section className="bg-white py-8 sm:py-12 md:py-16 px-4">
            <div className="w-full max-w-7xl mx-auto">
                <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {/* Card 1 */}
                    <StaggerItem direction="up">
                        <div className="bg-[#fbfbfb] rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center border border-neutral-200">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#ff830a] mb-1 sm:mb-2 font-montserrat">
                                500
                            </h3>
                            <p className="text-gray-500 font-poppins font-medium text-xs sm:text-sm md:text-base">
                                Students Trained
                            </p>
                        </div>
                    </StaggerItem>

                    {/* Card 2 */}
                    <StaggerItem direction="up">
                        <div className="bg-[#fbfbfb] rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center border border-neutral-200">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#ff830a] mb-1 sm:mb-2 font-montserrat">
                                200
                            </h3>
                            <p className="text-gray-500 font-poppins font-medium text-xs sm:text-sm md:text-base">
                                Expert Courses
                            </p>
                        </div>
                    </StaggerItem>

                    {/* Card 3 */}
                    <StaggerItem direction="up">
                        <div className="bg-[#fbfbfb] rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center border border-neutral-200">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#ff830a] mb-1 sm:mb-2 font-montserrat">
                                95
                            </h3>
                            <p className="text-gray-500 font-poppins font-medium text-xs sm:text-sm md:text-base">
                                Success Rate
                            </p>
                        </div>
                    </StaggerItem>

                    {/* Card 4 */}
                    <StaggerItem direction="up">
                        <div className="bg-[#fbfbfb] rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center border border-neutral-200">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#ff830a] mb-1 sm:mb-2 font-montserrat">
                                24
                            </h3>
                            <p className="text-gray-500 font-poppins font-medium text-xs sm:text-sm md:text-base">
                                Support available
                            </p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </div>
        </section>
    );
}

