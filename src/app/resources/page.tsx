"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourceCard from "@/components/ResourceCard";
import CTASection from "@/components/CTASection";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { ArrowRight } from "lucide-react";

// Mock data based on the image description
const resources = [
    {
        id: 1,
        title: "AI/ML Product Analysis",
        image: "/courses/ds.png", // Using existing placeholder images
    },
    {
        id: 2,
        title: "Module 10 - Math For ML",
        image: "/courses/html-css.png",
    },
    {
        id: 3,
        title: "Module 11 - Intro To ML And NN",
        image: "/courses/ds.png",
    },
    {
        id: 4,
        title: "Module 13 - MI : Adv Supervised..",
        image: "/courses/ds.png",
    },
    {
        id: 5,
        title: "Module 15 - MLOps",
        image: "/courses/html-css.png",
    },
    {
        id: 6,
        title: "Module 16 : Neural Networks",
        image: "/courses/ds.png",
    },
];

export default function ResourcesPage() {
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
                        Resources
                    </h1>
                </FadeIn>
                <FadeIn delay={0.15} direction="up">
                    <p className="text-gray-600 font-poppins text-base md:text-lg max-w-2xl leading-relaxed px-4 mb-8">
                        Explore free learning materials curated by Codebuzz mentors
                    </p>
                </FadeIn>
                <FadeIn delay={0.2} direction="up">
                    <button className="bg-[#ff830a] text-white font-medium py-3 px-8 rounded-xl flex items-center justify-center gap-2 hover:bg-[#e07000] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300">
                        View All
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </FadeIn>
            </section>

            {/* Resources Grid */}
            <section className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
                <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {resources.map((resource) => (
                        <StaggerItem key={resource.id} direction="up">
                            <ResourceCard
                                imageSrc={resource.image}
                                title={resource.title}
                                onViewMoreClick={() => { }}
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
