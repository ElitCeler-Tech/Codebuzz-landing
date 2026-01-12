"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ConnectWithCodeBuzzModal from "./ConnectWithCodeBuzzModal";

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/courses", label: "Courses" },
        { href: "/features", label: "Features" },
        { href: "/about", label: "About Us" },
    ];

    return (
        <>
            <nav className="flex items-center justify-between px-4 sm:px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
                <Link href="/" className="text-xl sm:text-2xl font-bold font-montserrat text-[#ff830a]">
                    CodeBuzz
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 font-medium text-gray-800">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`transition-colors ${isActive(link.href) ? 'text-[#ff830a] font-semibold' : 'hover:text-[#ff830a]'}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA Buttons */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="https://users.codebuzz.us" className="font-medium text-[#ff830a] hover:opacity-80 transition-opacity">
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

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-gray-800 hover:text-[#ff830a] transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Drawer */}
            <div
                className={`md:hidden fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between px-4 py-4 border-b">
                        <span className="text-xl font-bold font-montserrat text-[#ff830a]">
                            CodeBuzz
                        </span>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 text-gray-800 hover:text-[#ff830a] transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Mobile Menu Links */}
                    <div className="flex flex-col py-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`px-6 py-4 font-medium transition-colors ${isActive(link.href)
                                        ? 'text-[#ff830a] bg-orange-50 font-semibold'
                                        : 'text-gray-800 hover:text-[#ff830a] hover:bg-gray-50'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu CTAs */}
                    <div className="mt-auto p-6 border-t space-y-4">
                        <Link
                            href="https://users.codebuzz.us"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full text-center py-3 font-medium text-[#ff830a] border border-[#ff830a] rounded-lg hover:bg-orange-50 transition-colors"
                        >
                            Sign In
                        </Link>
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsModalOpen(true);
                            }}
                            className="block w-full py-3 rounded-lg text-white font-medium shadow-lg hover:opacity-90 transition-opacity text-center"
                            style={{
                                background: "linear-gradient(92.57deg, #FF830A -11.84%, #FF6700 100.76%)"
                            }}
                        >
                            Get Started Free
                        </button>
                    </div>
                </div>
            </div>

            <ConnectWithCodeBuzzModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
