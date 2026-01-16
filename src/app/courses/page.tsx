"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import ConnectWithCodeBuzzModal from "@/components/ConnectWithCodeBuzzModal";
import CTASection from "@/components/CTASection";
import { useState, useEffect } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animations";

interface Course {
    id: string;
    slug: string;
    title: string;
    description: string;
    instructor: string;
    students: number;
    duration: string;
    level: string;
    thumbnail: string;
    price: number;
}

export default function CoursesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [courses, setCourses] = useState<Course[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('https://apicb.codebuzz.us/api/courses');
                const data = await response.json();
                if (data.success && Array.isArray(data.data)) {
                    setCourses(data.data);
                }
            } catch (error) {
                console.error("Error fetching courses:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCourses();
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
                        Our Courses
                    </h1>
                </FadeIn>
                <FadeIn delay={0.15} direction="up">
                    <p className="text-gray-600 font-poppins text-base md:text-lg max-w-2xl leading-relaxed px-4">
                        Explore our industry-focused courses. Contact us to get the complete
                        curriculum and learning roadmap.
                    </p>
                </FadeIn>
            </section>

            {/* Courses Grid */}
            <section className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16 min-h-[400px]">
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ff830a]"></div>
                    </div>
                ) : (
                    <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {courses.map((course) => (
                            <StaggerItem key={course.id} direction="up">
                                <CourseCard
                                    imageSrc={course.thumbnail}
                                    title={course.title}
                                    onContactClick={() => setIsModalOpen(true)}
                                />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                )}
            </section>

            <CTASection />
            <Footer />

            <ConnectWithCodeBuzzModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
}

