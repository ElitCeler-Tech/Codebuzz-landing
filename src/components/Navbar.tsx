"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ConnectWithCodeBuzzModal from "./ConnectWithCodeBuzzModal";

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
            <Link href="/" className="text-2xl font-bold font-montserrat text-[#ff830a]">
                CodeBuzz
            </Link>

            <div className="hidden md:flex items-center gap-8 font-medium text-gray-800">
                <Link
                    href="/"
                    className={`transition-colors ${isActive('/') ? 'text-[#ff830a] font-semibold' : 'hover:text-[#ff830a]'}`}
                >
                    Home
                </Link>
                <Link
                    href="/courses"
                    className={`transition-colors ${isActive('/courses') ? 'text-[#ff830a] font-semibold' : 'hover:text-[#ff830a]'}`}
                >
                    Courses
                </Link>
                <Link
                    href="/#features"
                    className="hover:text-[#ff830a] transition-colors"
                >
                    Features
                </Link>
                <Link
                    href="/about"
                    className={`transition-colors ${isActive('/about') ? 'text-[#ff830a] font-semibold' : 'hover:text-[#ff830a]'}`}
                >
                    About Us
                </Link>
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
