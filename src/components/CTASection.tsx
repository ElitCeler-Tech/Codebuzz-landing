"use client";

import React from "react";
import { Zap } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "./ui/animations";

export default function CTASection() {

  return (
    <section className="bg-white flex flex-col items-center">

      {/* CTA Block */}
      <div
        className="w-full py-12 sm:py-16 md:py-24 px-4 flex flex-col items-center text-center"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #DD5900 0%, #FF9238 100%)",
        }}
      >
        <FadeIn direction="up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-montserrat mb-4 md:mb-6 max-w-3xl px-4">
            Ready to Start Your AI/ML Journey?
          </h2>
        </FadeIn>
        <FadeIn delay={0.15} direction="up">
          <p className="text-white/90 text-base sm:text-lg md:text-xl font-poppins max-w-3xl mb-6 sm:mb-8 md:mb-10 px-4">
            Join thousands of professionals who are already building the future
            with artificial intelligence.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} direction="up">
          <Link href="/resources">
            <button
              className="bg-white text-[#ff830a] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base md:text-lg flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              Get Started Today
            </button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
