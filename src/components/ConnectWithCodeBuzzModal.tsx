"use client";

import React, { useState } from "react";
import { X, ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

interface ConnectWithCodeBuzzModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ConnectWithCodeBuzzModal({
    isOpen,
    onClose,
}: ConnectWithCodeBuzzModalProps) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    if (!isOpen) return null;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? (e.target as HTMLInputElement).checked
                    : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus({
                    type: "success",
                    message: data.message || "Thank you! We'll get back to you soon.",
                });
                // Reset form
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    message: "",
                    consent: false,
                });
                // Close modal after 3 seconds
                setTimeout(() => {
                    onClose();
                    setSubmitStatus({ type: null, message: "" });
                }, 3000);
            } else {
                setSubmitStatus({
                    type: "error",
                    message: data.message || "Something went wrong. Please try again.",
                });
            }
        } catch {
            setSubmitStatus({
                type: "error",
                message: "Failed to submit. Please check your connection and try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        Have a question about courses, support, or partnerships? We&apos;re here to
                        help.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Success/Error Message */}
                    {submitStatus.type && (
                        <div
                            className={`p-4 rounded-lg flex items-start gap-3 ${
                                submitStatus.type === "success"
                                    ? "bg-green-50 border border-green-200"
                                    : "bg-red-50 border border-red-200"
                            }`}
                        >
                            {submitStatus.type === "success" ? (
                                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                            ) : (
                                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                            )}
                            <p
                                className={`text-sm font-poppins ${
                                    submitStatus.type === "success"
                                        ? "text-green-800"
                                        : "text-red-800"
                                }`}
                            >
                                {submitStatus.message}
                            </p>
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 font-poppins">
                            Full Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your Name"
                            required
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 rounded-lg bg-[#fff9f4] border-none focus:ring-2 focus:ring-[#ff830a]/20 outline-none transition-all placeholder:text-gray-400 font-poppins text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 font-poppins">
                            Email ID<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your Email ID"
                            required
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 rounded-lg bg-[#fff9f4] border-none focus:ring-2 focus:ring-[#ff830a]/20 outline-none transition-all placeholder:text-gray-400 font-poppins text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 font-poppins">
                            Phone Number<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your Phone Number"
                            required
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 rounded-lg bg-[#fff9f4] border-none focus:ring-2 focus:ring-[#ff830a]/20 outline-none transition-all placeholder:text-gray-400 font-poppins text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 font-poppins">
                            Message<span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Tell us how we can help you"
                            required
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 rounded-lg bg-[#fff9f4] border-none focus:ring-2 focus:ring-[#ff830a]/20 outline-none transition-all placeholder:text-gray-400 font-poppins text-sm resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                    </div>

                    <div className="flex items-start gap-2 pt-2">
                        <input
                            type="checkbox"
                            id="consent"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            className="mt-1 w-4 h-4 rounded border-gray-300 text-[#ff830a] focus:ring-[#ff830a] disabled:opacity-50 disabled:cursor-not-allowed"
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
                        disabled={isSubmitting}
                        className="w-full bg-[#ff830a] text-white font-semibold py-3 rounded-lg hover:bg-[#e07000] transition-all flex items-center justify-center gap-2 mt-4 shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1 duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            <>
                                Submit Request
                                <ArrowRight className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
