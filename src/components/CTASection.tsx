"use client";

import React, { useState } from "react";
import { Zap } from "lucide-react";
import ConnectWithCodeBuzzModal from "./ConnectWithCodeBuzzModal";

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-white flex flex-col items-center">
      {/* Stats Row */}
      <div className="w-full max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#fbfbfb] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center border border-neutral-200">
            <h3 className="text-4xl md:text-5xl font-semibold text-[#ff830a] mb-2 font-montserrat">
              50k
            </h3>
            <p className="text-gray-500 font-poppins font-medium">
              Students Trained
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fbfbfb] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center border border-neutral-200">
            <h3 className="text-4xl md:text-5xl font-semibold text-[#ff830a] mb-2 font-montserrat">
              200
            </h3>
            <p className="text-gray-500 font-poppins font-medium">
              Expert Courses
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fbfbfb] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center border border-neutral-200">
            <h3 className="text-4xl md:text-5xl font-semibold text-[#ff830a] mb-2 font-montserrat">
              95
            </h3>
            <p className="text-gray-500 font-poppins font-medium">
              Success Rate
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#fbfbfb] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center border border-neutral-200">
            <h3 className="text-4xl md:text-5xl font-semibold text-[#ff830a] mb-2 font-montserrat">
              24
            </h3>
            <p className="text-gray-500 font-poppins font-medium">
              Support available
            </p>
          </div>
        </div>
      </div>

      {/* CTA Block */}
      <div
        className="w-full py-24 px-4 flex flex-col items-center text-center"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #DD5900 0%, #FF9238 100%)",
        }}
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-white font-montserrat mb-6">
          Ready to Start Your AI/ML Journey?
        </h2>
        <p className="text-white/90 text-lg md:text-xl font-poppins max-w-3xl mb-10">
          Join thousands of professionals who are already building the future
          with artificial intelligence.
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-[#ff830a] px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-lg"
        >
          <Zap className="w-5 h-5 fill-current" />
          Get Started Today
        </button>
      </div>

      <ConnectWithCodeBuzzModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
