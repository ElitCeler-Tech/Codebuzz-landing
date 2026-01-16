"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourceCard from "@/components/ResourceCard";
import CTASection from "@/components/CTASection";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface Resource {
    id: string;
    courseId: string;
    title: string;
    description: string | null;
    videoUrl: string;
    thumbnailUrl: string | null;
    duration: number;
    createdAt: string;
    updatedAt: string;
}

interface ApiResponse {
    success: boolean;
    message: string;
    data: Resource[];
}

export default function ResourcesPage() {
    const [resources, setResources] = useState<Resource[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const response = await fetch("https://apicb.codebuzz.us/api/resources");
                const data: ApiResponse = await response.json();
                if (data.success) {
                    setResources(data.data);
                }
            } catch (error) {
                console.error("Failed to fetch resources:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchResources();
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
                {isLoading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff830a]"></div>
                    </div>
                ) : (
                    <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {resources.map((resource) => (
                            <StaggerItem key={resource.id} direction="up">
                                <ResourceCard
                                    // Use API thumbnail or a default placeholder
                                    imageSrc={resource.thumbnailUrl || "/courses/ds.png"}
                                    title={resource.title}
                                    onViewMoreClick={() => {
                                        if (resource.videoUrl) {
                                            window.open(resource.videoUrl, '_blank');
                                        }
                                    }}
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
