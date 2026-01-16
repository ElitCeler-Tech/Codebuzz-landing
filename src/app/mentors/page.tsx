"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MentorCard from "@/components/MentorCard";
import CTASection from "@/components/CTASection";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { useEffect, useState } from "react";

interface Mentor {
    id: string;
    name: string;
    email: string;
    courseExpertise: string[];
    about: string;
    role: string;
    photoUrl: string;
}

interface ApiResponse {
    success: boolean;
    message: string;
    data: Mentor[];
}

export default function MentorsPage() {
    const [mentors, setMentors] = useState<Mentor[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMentors = async () => {
            try {
                const response = await fetch("https://apicb.codebuzz.us/api/mentors");
                const data: ApiResponse = await response.json();
                if (data.success) {
                    setMentors(data.data);
                }
            } catch (error) {
                console.error("Failed to fetch mentors:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMentors();
    }, []);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section
                className="w-full py-12 sm:py-16 md:py-20 px-4 flex flex-col items-center justify-center text-center"
                style={{
                    background: "linear-gradient(105deg, #FFF2E9 27.57%, #FFD5A7 108.43%)",
                }}
            >
                <FadeIn direction="up">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#ff830a] font-montserrat mb-4">
                        Our Mentors
                    </h1>
                </FadeIn>
                <FadeIn delay={0.15} direction="up">
                    <p className="text-gray-600 font-poppins text-base md:text-lg max-w-2xl leading-relaxed px-4">
                        Learn from industry professionals guiding the Codebuzz community
                    </p>
                </FadeIn>
            </section>

            {/* Mentors Grid */}
            <section className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
                {isLoading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff830a]"></div>
                    </div>
                ) : (
                    <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                        {mentors.map((mentor) => (
                            <StaggerItem key={mentor.id} direction="up">
                                <MentorCard
                                    // Use API photoUrl or a default placeholder
                                    imageSrc={mentor.photoUrl || "/courses/ds.png"}
                                    name={mentor.name}
                                    role={mentor.role}
                                    description={mentor.about}
                                />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                )}
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
