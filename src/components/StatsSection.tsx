import React from "react";

export default function StatsSection() {
    return (
        <section className="bg-white py-8 sm:py-12 md:py-16 px-4">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {/* Card 1 */}
                    <div className="bg-[#fbfbfb] rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center border border-neutral-200">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#ff830a] mb-1 sm:mb-2 font-montserrat">
                            50k
                        </h3>
                        <p className="text-gray-500 font-poppins font-medium text-xs sm:text-sm md:text-base">
                            Students Trained
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#fbfbfb] rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center border border-neutral-200">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#ff830a] mb-1 sm:mb-2 font-montserrat">
                            200
                        </h3>
                        <p className="text-gray-500 font-poppins font-medium text-xs sm:text-sm md:text-base">
                            Expert Courses
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#fbfbfb] rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center border border-neutral-200">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#ff830a] mb-1 sm:mb-2 font-montserrat">
                            95
                        </h3>
                        <p className="text-gray-500 font-poppins font-medium text-xs sm:text-sm md:text-base">
                            Success Rate
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#fbfbfb] rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center border border-neutral-200">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#ff830a] mb-1 sm:mb-2 font-montserrat">
                            24
                        </h3>
                        <p className="text-gray-500 font-poppins font-medium text-xs sm:text-sm md:text-base">
                            Support available
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
