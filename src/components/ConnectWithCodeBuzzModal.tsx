import React from "react";
import { X, ArrowRight } from "lucide-react";

interface ConnectWithCodeBuzzModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ConnectWithCodeBuzzModal({
    isOpen,
    onClose,
}: ConnectWithCodeBuzzModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-lg p-6 md:p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-gray-900">
                        Get in Touch with <span className="text-[#ff830a]">CodeBuzz</span>
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm md:text-base font-poppins">
                        Have a question about courses, support, or partnerships? We're here to
                        help.
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 font-poppins">
                            Full Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            className="w-full px-4 py-3 rounded-lg bg-[#fff9f4] border-none focus:ring-2 focus:ring-[#ff830a]/20 outline-none transition-all placeholder:text-gray-400 font-poppins text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 font-poppins">
                            Email ID<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your Email ID"
                            className="w-full px-4 py-3 rounded-lg bg-[#fff9f4] border-none focus:ring-2 focus:ring-[#ff830a]/20 outline-none transition-all placeholder:text-gray-400 font-poppins text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 font-poppins">
                            Phone Number<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            placeholder="Enter your Phone Number"
                            className="w-full px-4 py-3 rounded-lg bg-[#fff9f4] border-none focus:ring-2 focus:ring-[#ff830a]/20 outline-none transition-all placeholder:text-gray-400 font-poppins text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 font-poppins">
                            Message<span className="text-red-500">*</span>
                        </label>
                        <textarea
                            rows={4}
                            placeholder="Tell us how we can help you"
                            className="w-full px-4 py-3 rounded-lg bg-[#fff9f4] border-none focus:ring-2 focus:ring-[#ff830a]/20 outline-none transition-all placeholder:text-gray-400 font-poppins text-sm resize-none"
                        />
                    </div>

                    <div className="flex items-start gap-2 pt-2">
                        <input
                            type="checkbox"
                            id="consent"
                            className="mt-1 w-4 h-4 rounded border-gray-300 text-[#ff830a] focus:ring-[#ff830a]"
                        />
                        <label
                            htmlFor="consent"
                            className="text-xs text-gray-500 font-poppins italic leading-tight cursor-pointer"
                        >
                            I Agree To Be Contacted By CodeBuzz Regarding My Query.
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#ff830a] text-white font-semibold py-3 rounded-lg hover:bg-[#e07000] transition-all flex items-center justify-center gap-2 mt-4 shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1 duration-200"
                    >
                        Submit Request
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </form>
            </div>
        </div>
    );
}
