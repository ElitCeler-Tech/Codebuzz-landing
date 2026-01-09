"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQItem = {
    question: string;
    answer: string;
};

const faqs: FAQItem[] = [
    {
        question: "What is CodeBuzz?",
        answer:
            "CodeBuzz is a comprehensive learning platform designed to take you from a beginner to a pro in coding through structured courses, live mentorship, and real-world projects.",
    },
    {
        question: "When do I get access after enrolling?",
        answer:
            "You get instant access to your enrolled courses and features immediately after successful registration or payment.",
    },
    {
        question: "Who can use CodeBuzz?",
        answer:
            "CodeBuzz is suitable for everyone â€” students, working professionals, and career switchers looking to build or upgrade their technical skills.",
    },
    {
        question: "Can I learn at my own pace?",
        answer:
            "Yes! Our recorded lessons and flexible modules allow you to learn at your own pace, anytime and anywhere.",
    },
    {
        question: "Do you offer live classes?",
        answer:
            "Absolutely. We offer live classes with industry experts where you can interact, ask questions, and solve doubts in real-time.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(1); // Defaulting 2nd item open as per image

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-4 bg-white flex flex-col items-center">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-[#3D3D3D] mb-4">
                    Frequently Asked Questions
                </h2>
            </div>

            <div className="w-full max-w-4xl flex flex-col gap-6">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            onClick={() => toggleFAQ(index)}
                            className={`rounded-2xl cursor-pointer transition-all duration-300 ${isOpen
                                    ? "bg-white border border-gray-200 shadow-sm"
                                    : "bg-[#FFF2E5] border border-transparent hover:bg-[#ffeadd]"
                                }`}
                        >
                            <div
                                className={`flex items-center justify-between p-6 md:p-8 ${isOpen ? "pb-4" : ""
                                    }`}
                            >
                                <h3
                                    className={`text-lg md:text-xl font-medium font-poppins ${isOpen ? "text-[#ff830a]" : "text-[#4A4A4A]"
                                        }`}
                                >
                                    {faq.question}
                                </h3>
                                <div className={isOpen ? "text-[#ff830a]" : "text-[#4A4A4A]"}>
                                    {isOpen ? (
                                        <Minus className="w-6 h-6" />
                                    ) : (
                                        <Plus className="w-6 h-6" />
                                    )}
                                </div>
                            </div>
                            <div
                                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-40" : "max-h-0"
                                    }`}
                            >
                                <p className="px-6 md:px-8 pb-8 text-gray-500 font-poppins text-base leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
