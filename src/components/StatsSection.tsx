import React from "react";

export default function StatsSection() {
    return (
        <section className="bg-white py-16 px-4">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="bg-[#fbfbfb] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center border border-neutral-200">
                        <h3 className="text-4xl md:text-5xl font-semibold text-[#ff830a] mb-2 font-montserrat">
                            50k
                        </h3>
                        <p className="text-gray-500 font-poppins font-medium">
                            Students Trained
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#fbfbfb] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center border border-neutral-200">
                        <h3 className="text-4xl md:text-5xl font-semibold text-[#ff830a] mb-2 font-montserrat">
                            200
                        </h3>
                        <p className="text-gray-500 font-poppins font-medium">
                            Expert Courses
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#fbfbfb] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center border border-neutral-200">
                        <h3 className="text-4xl md:text-5xl font-semibold text-[#ff830a] mb-2 font-montserrat">
                            95
                        </h3>
                        <p className="text-gray-500 font-poppins font-medium">
                            Success Rate
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#fbfbfb] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center border border-neutral-200">
                        <h3 className="text-4xl md:text-5xl font-semibold text-[#ff830a] mb-2 font-montserrat">
                            24
                        </h3>
                        <p className="text-gray-500 font-poppins font-medium">
                            Support available
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
