"use client";

import React, { useState } from "react";
import { Zap } from "lucide-react";
import ConnectWithCodeBuzzModal from "./ConnectWithCodeBuzzModal";

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-white flex flex-col items-center">

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
