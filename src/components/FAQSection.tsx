"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FadeIn } from "./ui/animations";

type FAQItem = {
    question: string;
    answer: React.ReactNode;
};

const faqs: FAQItem[] = [
    {
        question: "Do you guarantee jobs or placements?",
        answer: (
            <>
                We don&apos;t make unrealistic promises.
                <br />
                What we do provide is strong skill-building, real projects, and career guidance that genuinely improves readiness and confidence.
            </>
        ),
    },
    {
        question: "How are classes conducted?",
        answer: (
            <>
                Live, instructor-led sessions with:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Interactive discussions</li>
                    <li>Real-time coding</li>
                    <li>Project walkthroughs</li>
                    <li>Access to recordings for revision</li>
                </ul>
            </>
        ),
    },
    {
        question: "What kind of support do learners get?",
        answer: (
            <>
                Learners receive:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Instructor guidance</li>
                    <li>Mentorship sessions</li>
                    <li>Doubt-clearing support</li>
                    <li>Career direction advice</li>
                </ul>
                <p className="mt-4 font-semibold text-[#ff830a]">
                    You&apos;re never learning alone at CodeBuzz.
                </p>
            </>
        ),
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 md:py-24 px-4 bg-white flex flex-col items-center">
            <FadeIn direction="up">
                <div className="text-center mb-8 md:mb-16 px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-[#3D3D3D] mb-4">
                        Frequently Asked Questions
                    </h2>
                </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
                <div className="w-full max-w-4xl flex flex-col gap-4 md:gap-6 px-2 sm:px-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                onClick={() => toggleFAQ(index)}
                                className={`rounded-xl md:rounded-2xl cursor-pointer transition-all duration-300 ${isOpen
                                    ? "bg-white border border-gray-200 shadow-sm"
                                    : "bg-[#FFF2E5] border border-transparent hover:bg-[#ffeadd]"
                                    }`}
                            >
                                <div
                                    className={`flex items-center justify-between p-4 sm:p-6 md:p-8 ${isOpen ? "pb-2 sm:pb-3 md:pb-4" : ""
                                        }`}
                                >
                                    <h3
                                        className={`text-base sm:text-lg md:text-xl font-medium font-poppins pr-4 ${isOpen ? "text-[#ff830a]" : "text-[#4A4A4A]"
                                            }`}
                                    >
                                        {faq.question}
                                    </h3>
                                    <div className={`shrink-0 ${isOpen ? "text-[#ff830a]" : "text-[#4A4A4A]"}`}>
                                        {isOpen ? (
                                            <Minus className="w-5 h-5 md:w-6 md:h-6" />
                                        ) : (
                                            <Plus className="w-5 h-5 md:w-6 md:h-6" />
                                        )}
                                    </div>
                                </div>
                                <div
                                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"
                                        }`}
                                >
                                    <div className="px-4 sm:px-6 md:px-8 pb-6 md:pb-8 text-gray-500 font-poppins text-sm md:text-base leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </FadeIn>
        </section>
    );
}
