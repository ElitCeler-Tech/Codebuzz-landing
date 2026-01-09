"use client";

import Link from "next/link";
import { useState } from "react";
import ConnectWithCodeBuzzModal from "./ConnectWithCodeBuzzModal";

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white">
            <div className="text-2xl font-bold font-montserrat text-[#ff830a]">
                CodeBuzz
            </div>

            <div className="hidden md:flex items-center gap-8 font-medium text-gray-800">
                <Link href="#" className="hover:text-[#ff830a] transition-colors">Home</Link>
                <Link href="#" className="hover:text-[#ff830a] transition-colors">Courses</Link>
                <Link href="#" className="hover:text-[#ff830a] transition-colors">Features</Link>
                <Link href="#" className="hover:text-[#ff830a] transition-colors">About Us</Link>
            </div>

            <div className="flex items-center gap-6">
                <Link href="#" className="font-medium text-[#ff830a] hover:opacity-80 transition-opacity">
                    Sign In
                </Link>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-2.5 rounded-md text-white font-medium shadow-lg hover:opacity-90 transition-opacity"
                    style={{
                        background: "linear-gradient(92.57deg, #FF830A -11.84%, #FF6700 100.76%)"
                    }}
                >
                    Get Started Free
                </button>
            </div>

            <ConnectWithCodeBuzzModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </nav>
    );
}
