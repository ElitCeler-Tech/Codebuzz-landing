import React from "react";
import Image from "next/image";

export default function DashboardSection() {
  return (
    <section className="py-24 px-4 relative flex flex-col items-center overflow-hidden bg-white">
      <div className="absolute -right-40 w-[500px] h-[500px] border-[50px] border-[#FFF2E5] rounded-full z-0 pointer-events-none bg-transparent" />

      <div className="absolute bottom-[-100px] -left-40 w-[500px] h-[500px] border-[50px] border-[#FFF2E5] rounded-full z-0 pointer-events-none bg-transparent" />

      <div className="text-center mb-12 z-10 relative px-4">
        <h2 className="text-4xl font-semibold font-montserrat text-gray-900 mb-6">
          Smart Learning <span className="text-[#ff830a]">Dashboard</span>
        </h2>
        <p className="text-lg text-gray-600 font-poppins max-w-5xl mx-auto">
          Track your courses, resume lessons instantly, and stay on top of your
          learning progress — all in one place.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-6xl rounded-xl overflow-hidden bg-white">
        <Image
          src="/landing/landing-dashboard.png"
          alt="Smart Learning Dashboard"
          width={1400}
          height={900}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </section>
  );
}
