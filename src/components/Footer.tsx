import React from "react";
import { Youtube, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#2C3F51] text-white pt-16 pb-8">
            <div className="max-w-[90%] 2xl:max-w-[1600px] mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
                    {/* Logo Section */}
                    <div className="w-full md:w-1/4">
                        <h2 className="text-3xl font-bold text-[#ff830a] font-montserrat mb-4">
                            CodeBuzz
                        </h2>
                    </div>

                    {/* Links Columns */}
                    <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {/* Product Column */}
                        <div className="flex flex-col gap-6">
                            <h3 className="font-bold font-montserrat uppercase tracking-wide">
                                Product
                            </h3>
                            <ul className="flex flex-col gap-4 text-gray-300 font-poppins text-sm">
                                <li>
                                    <a href="#" className="hover:text-[#ff830a] transition-colors">
                                        AI Fundamentals
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#ff830a] transition-colors">
                                        Machine Learning
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#ff830a] transition-colors">
                                        Data Science
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#ff830a] transition-colors">
                                        Deep Learning
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Support Column */}
                        <div className="flex flex-col gap-6">
                            <h3 className="font-bold font-montserrat uppercase tracking-wide">
                                Support
                            </h3>
                            <ul className="flex flex-col gap-4 text-gray-300 font-poppins text-sm">
                                <li>
                                    <a href="#" className="hover:text-[#ff830a] transition-colors">
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#ff830a] transition-colors">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#ff830a] transition-colors">
                                        Community
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#ff830a] transition-colors">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div className="flex flex-col gap-6">
                            <h3 className="font-bold font-montserrat uppercase tracking-wide">
                                Company
                            </h3>
                            <ul className="flex flex-col gap-4 text-gray-300 font-poppins text-sm">
                                <li>
                                    <a href="#" className="hover:text-[#ff830a] transition-colors">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#ff830a] transition-colors">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#ff830a] transition-colors">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#ff830a] transition-colors">
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-600 mb-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-400 font-poppins text-sm">
                        © 2024 CodeBuzz. All rights reserved.
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                        <div className="flex gap-6 text-gray-300 font-poppins text-sm">
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Contact</a>
                        </div>

                        <div className="flex items-center gap-6">
                            <a href="#" className="text-white hover:text-[#ff830a] transition-colors">
                                <Youtube className="w-5 h-5 fill-current" />
                            </a>
                            <a href="#" className="text-white hover:text-[#ff830a] transition-colors">
                                <Facebook className="w-5 h-5 fill-current" />
                            </a>
                            <a href="#" className="text-white hover:text-[#ff830a] transition-colors">
                                <Twitter className="w-5 h-5 fill-current" />
                            </a>
                            <a href="#" className="text-white hover:text-[#ff830a] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white hover:text-[#ff830a] transition-colors">
                                <Linkedin className="w-5 h-5 fill-current" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
