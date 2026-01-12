import React from "react";
import { MessageCircle, Users, MessageSquare } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./ui/animations";

export default function SupportSection() {
    return (
        <section
            className="py-12 md:py-20 px-4 flex flex-col items-center"
            style={{
                background: "linear-gradient(105deg, #FFF2E9 27.57%, #FFD5A7 108.43%)",
            }}
        >
            <FadeIn direction="up">
                <div className="text-center mb-8 md:mb-16 max-w-4xl px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-montserrat text-gray-900 mb-4">
                        Learning Support <span className="text-[#ff830a]">24/7</span>
                    </h2>
                    <p className="text-base md:text-lg text-[#555555] font-poppins">
                        Get help whenever you need it — from mentors, support teams, and the
                        CodeBuzz community.
                    </p>
                </div>
            </FadeIn>

            <StaggerContainer staggerDelay={0.15} className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-12 w-full max-w-6xl mb-8 md:mb-16 px-4">
                {/* Card 1: Mentor Support */}
                <div className="bg-[#ffefe0] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col items-center gap-4 sm:gap-6 w-full sm:w-1/3 shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-transparent p-2 sm:p-4 rounded-full">
                        {/* Custom Icon Composition for Mentor */}
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#ff830a]">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-full h-full"
                            >
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                            </svg>
                            {/* Adding a bubble to make it look like 'mentor support' - simplistic approach */}
                            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-white rounded-full p-0.5 sm:p-1">
                                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#ff830a] fill-current" />
                            </div>
                        </div>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#3D3D3D] font-poppins text-center">
                        Mentor Support
                    </h3>
                </div>

                {/* Card 2: Chat & Community */}
                <a
                    href="https://chat.whatsapp.com/Eno44GYSrff8gMZOah9CP8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#ffefe0] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col items-center gap-4 sm:gap-6 w-full sm:w-1/3 shadow-sm hover:shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                >
                    <div className="bg-transparent p-2 sm:p-4 rounded-full">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#ff830a]">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-full h-full"
                            >
                                <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#3D3D3D] font-poppins text-center">
                        Chat & Community
                    </h3>
                </a>

                {/* Card 3: Whatsapp support */}
                <a
                    href="https://chat.whatsapp.com/Eno44GYSrff8gMZOah9CP8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#ffefe0] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col items-center gap-4 sm:gap-6 w-full sm:w-1/3 shadow-sm hover:shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                >
                    <div className="bg-transparent p-2 sm:p-4 rounded-full">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#25D366]">
                            {/* WhatsApp Icon SVG */}
                            <svg
                                viewBox="0 0 448 512"
                                fill="currentColor"
                                className="w-full h-full"
                            >
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#3D3D3D] font-poppins text-center">
                        Whatsapp support
                    </h3>
                </a>
            </StaggerContainer>

            <FadeIn delay={0.3} direction="up">
                <button className="bg-[#ff830a] text-white font-medium py-3 px-6 sm:px-8 rounded-lg text-base md:text-lg hover:bg-[#e07208] transition-colors flex items-center gap-2 shadow-md">
                    Talk To Support
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5l7.5 7.5-7.5 7.5M19.5 12H4.5"
                        />
                    </svg>
                </button>
            </FadeIn>
        </section>
    );
}
