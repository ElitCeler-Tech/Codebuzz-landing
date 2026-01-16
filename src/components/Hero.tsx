"use client";

import { Zap, Bot, Atom, Settings, Brain, Database } from "lucide-react";
import HeroCard from "./ui/HeroCard";
import Link from "next/link";
import { FadeIn } from "./ui/animations";

export default function Hero() {

  return (
    <section
      className="relative min-h-[calc(100vh-80px)] overflow-hidden flex items-center px-4 sm:px-8 md:px-16 lg:px-24 py-12 md:py-0"
      style={{
        background: "linear-gradient(105deg, #FFF2E9 27.57%, #FFD5A7 108.43%)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-7xl mx-auto items-center">
        {/* Left Content */}
        <div className="z-10 text-center lg:text-left">
          <FadeIn delay={0.1} direction="up">
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold font-montserrat leading-tight text-gray-900 mb-4">
              Everyone starts somewhere.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              At CodeBuzz, we make sure you don&apos;t start alone.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-montserrat leading-tight text-[#ff830a] mb-4 md:mb-6">
              Faster. Smarter. Better.
            </h2>
          </FadeIn>
          <FadeIn delay={0.3} direction="up">
            <p className="text-base sm:text-lg text-gray-600 mb-8 md:mb-10 font-poppins max-w-lg mx-auto lg:mx-0">
              Learn, Experiment, and Deploy with Confidence. Let&apos;s get started.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="/resources">
                <button
                  className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition-all transform hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(92.57deg, #FF830A -11.84%, #FF6700 100.76%)",
                  }}
                >
                  <Zap size={20} fill="currentColor" />
                  Get Started For Free
                </button>
              </Link>
              <Link href="/resources">
                <button className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-white text-[#ff830a] font-semibold border border-[#ff830a] hover:bg-orange-50 transition-colors shadow-sm">
                  Watch Demo
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Right Content - Cards Stack */}
        <FadeIn
          delay={0.3}
          direction="right"
          className="relative h-[700px] w-full hidden lg:flex items-center justify-center"
        >
          <div className="relative w-[650px] h-[650px]">
            {/* Card 1: AI Engineer - Top Center */}
            <HeroCard
              icon={<Bot size={48} />}
              title="AI Engineer"
              subtitle="Build real systems"
              number={1}
              className="top-0 left-1/2 -translate-x-1/2 z-10"
            />

            {/* Card 2: Data Scientist - Right Upper */}
            <HeroCard
              icon={<Atom size={48} />}
              title="Data Scientist"
              subtitle="Analyse complex data"
              number={2}
              className="top-[190px] right-[-60px] z-20"
            />

            {/* Card 3: AI Product Manager - Right Lower */}
            <HeroCard
              icon={<Settings size={48} />}
              title="AI product manager"
              subtitle="Analyze & predict"
              number={3}
              className="bottom-[30px] right-[30px] z-30"
            />

            {/* Card 4: ML Ops - Left Lower */}
            <HeroCard
              icon={<Brain size={48} />}
              title="ML Ops"
              subtitle="Model concepts"
              number={4}
              className="bottom-[30px] left-[30px] z-40"
            />

            {/* Card 5: Data Engineer - Left Upper */}
            <HeroCard
              icon={<Database size={48} />}
              title="Data Engineer"
              subtitle="Intelligence concepts"
              number={5}
              className="top-[190px] left-[-60px] z-50"
            />
          </div>
        </FadeIn>
      </div>

    </section>
  );
}
