"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MentorCard from "@/components/MentorCard";
import CTASection from "@/components/CTASection";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animations";

// Mock data based on the provided image
const mentors = [
    {
        id: 1,
        name: "Saneeta Narrlla",
        role: "Founder & Technologist, CodeBuzz",
        description: "Data • Security • AI Education",
        image: "/courses/ds.png", // Placeholder - User should replace with actual mentor images
    },
    {
        id: 2,
        name: "Siddharth Pothukuchi",
        role: "AI / ML Engineer",
        description: "IIT Bhilai & Purdue University Graduate",
        image: "/courses/html-css.png", // Placeholder
    },
    {
        id: 3,
        name: "Ravi Doddasomayajula",
        role: "Tech Lead & Mentor",
        description: "Senior Software Engineer",
        image: "/courses/ds.png", // Placeholder
    },
    {
        id: 4,
        name: "Dilip Yeluguri",
        role: "Data and Finance",
        description: "@CodeBuzz",
        image: "/courses/html-css.png", // Placeholder
    },
    {
        id: 5,
        name: "Vijay chakilam",
        role: "Founder@Kooper",
        description: "University of Cincinnati MS. Quantitative Analysis",
        image: "/courses/ds.png", // Placeholder
    },
];

export default function MentorsPage() {
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
                <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                    {mentors.map((mentor) => (
                        <StaggerItem key={mentor.id} direction="up">
                            <MentorCard
                                imageSrc={mentor.image}
                                name={mentor.name}
                                role={mentor.role}
                                description={mentor.description}
                            />
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
