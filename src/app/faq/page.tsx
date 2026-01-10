"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ConnectWithCodeBuzzModal from "@/components/ConnectWithCodeBuzzModal";
import CTASection from "@/components/CTASection";

export default function FAQPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Simple Hero for FAQ Page */}
            <section
                className="w-full py-16 px-4 flex flex-col items-center justify-center text-center"
                style={{
                    background:
                        "linear-gradient(105deg, #FFF2E9 27.57%, #FFD5A7 108.43%)",
                }}
            >
                <h1 className="text-3xl md:text-5xl font-bold text-[#ff830a] font-montserrat">
                    FAQ
                </h1>
            </section>

            <FAQSection />

            <div className="pb-16">
                <CTASection />
            </div>

            <Footer />

            <ConnectWithCodeBuzzModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
}
