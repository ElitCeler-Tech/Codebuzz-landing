"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import ConnectWithCodeBuzzModal from "@/components/ConnectWithCodeBuzzModal";
import { useState } from "react";

const courses = [
    {
        id: 1,
        title: "Intro To Data Structures - Learn From Shalie",
        image: "/courses/ds.png",
    },
    {
        id: 2,
        title: "Intro To Html CSS - Learn From John",
        image: "/courses/html-css.png",
    },
    {
        id: 3,
        title: "Intro To Data Structures - Learn From Shalie",
        image: "/courses/ds.png",
    },
    {
        id: 4,
        title: "Intro To Data Structures - Learn From Shalie",
        image: "/courses/ds.png",
    },
    {
        id: 5,
        title: "Intro To Html CSS - Learn From John",
        image: "/courses/html-css.png",
    },
    {
        id: 6,
        title: "Intro To Data Structures - Learn From Shalie",
        image: "/courses/ds.png",
    },
];

export default function CoursesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section
                className="w-full py-20 px-4 flex flex-col items-center justify-center text-center"
                style={{
                    background: "linear-gradient(105deg, #FFF2E9 27.57%, #FFD5A7 108.43%)",
                }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-[#ff830a] font-montserrat mb-4">
                    Our Courses
                </h1>
                <p className="text-gray-600 font-poppins text-lg max-w-2xl leading-relaxed">
                    Explore our industry-focused courses. Contact us to get the complete
                    curriculum and learning roadmap.
                </p>
            </section>

            {/* Courses Grid */}
            <section className="w-full max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <CourseCard
                            key={course.id}
                            imageSrc={course.image}
                            title={course.title}
                            onContactClick={() => setIsModalOpen(true)}
                        />
                    ))}
                </div>
            </section>

            <Footer />

            <ConnectWithCodeBuzzModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
}
