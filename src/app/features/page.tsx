"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConnectWithCodeBuzzModal from "@/components/ConnectWithCodeBuzzModal";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { useState } from "react";

// Feature data to map through and render sections
// Using available images as placeholders where appropriate.
const features = [
  {
    id: 1,
    title: "Smart Learning",
    highlight: "Dashboard",
    description:
      "Track your courses, resume lessons instantly, and stay on top of your learning progress — all in one place.",
    image: "/landing/landing-dashboard.png",
  },
  {
    id: 2,
    title: "Access to your",
    highlight: "Courses with ease",
    description:
      "Access all your enrolled courses and continue learning from where you left off.",
    image: "/landing/dashboard2.png", // Reusing for consistent UI look as per request to use dashboard design
  },
  {
    id: 3,
    title: "Learn Live with",
    highlight: "Experts",
    description:
      "Attend real-time classes, ask questions, and get instant clarity from instructors.",
    image: "/landing/dashboard3.png",
  },
  {
    id: 4,
    title: "Never",
    highlight: "Miss a Lesson",
    description:
      "Record your classes and watch them later whenever you need a quick recap.",
    image: "/landing/dashboard4.png",
  },
];

export default function FeaturesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Navbar />

      <section
        className="w-full py-24 px-4 flex flex-col items-center justify-center text-center relative z-10"
        style={{
          background:
            "linear-gradient(105deg, #FFF2E9 27.57%, #FFD5A7 108.43%)",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#ff830a] font-montserrat mb-4">
          Our Features
        </h1>
        <p className="text-gray-600 font-poppins text-lg max-w-2xl leading-relaxed mx-auto">
          Everything you need to learn faster, practice better, and grow with
          confidence.
        </p>
      </section>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[400px] -right-80 w-[800px] h-[800px] border-[60px] border-[#FFF2E5] rounded-full" />

        {/* Mid Left */}
        <div className="absolute top-[800px] -left-80 w-[800px] h-[800px] border-[60px] border-[#FFF2E5] rounded-full" />

        {/* Lower Right */}
        <div className="absolute top-[1600px] -right-80 w-[800px] h-[800px] border-[60px] border-[#FFF2E5] rounded-full" />

        {/* Bottom Left */}
        <div className="absolute top-[2500px] -left-80 w-[800px] h-[800px] border-[60px] border-[#FFF2E5] rounded-full" />

        <div className="absolute top-[3400px] -right-80 w-[800px] h-[800px] border-[60px] border-[#FFF2E5] rounded-full" />

        <div className="absolute top-[3900px] -left-80 w-[800px] h-[800px] border-[60px] border-[#FFF2E5] rounded-full" />
      </div>

      {/* Features List */}
      <div className="w-full max-w-7xl mx-auto px-4 py-12 relative z-10 flex flex-col gap-24">
        {features.map((feature) => (
          <section key={feature.id} className="text-center">
            <div className="mb-12 px-4">
              <h2 className="text-3xl md:text-4xl font-semibold font-montserrat text-gray-900 mb-4">
                {feature.title}{" "}
                <span className="text-[#ff830a]">{feature.highlight}</span>
              </h2>
              <p className="text-lg text-gray-600 font-poppins max-w-4xl mx-auto">
                {feature.description}
              </p>
            </div>

            <div className="relative w-full rounded-2xl overflow-hidden bg-white">
              <Image
                src={feature.image}
                alt={`${feature.title} ${feature.highlight}`}
                width={1400}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>
          </section>
        ))}
      </div>

      <CTASection />
      <Footer />

      <ConnectWithCodeBuzzModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
