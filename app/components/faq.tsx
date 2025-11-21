"use client";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "How is my journaling data protected?",
      a: "Your journals are encrypted locally before they ever leave your device. We use industry-standard AES-256 encryption so only you can read your entries.",
    },
    {
      q: "How does it work?",
      a: "We use a filter that focuses only on the essential elements of your entries such as emotions, progress, and challenges. Before anything is sent to the AI, a security filter removes personal details and sensitive information to protect your privacy. Only the cleaned, minimal excerpts needed for analysis are then shared with the AI to generate insights that support your growth.",
    },
    {
      q: "Will i get coaching or therapy?",
      a: "No. The AI gives you insights and recgonize your patterns. Is a tool to know yourself better, to master yourself. Is not a coach nor a therapist or medical advisor.",
    },
    {
      q: "Is my activity tracking shared with anyone?",
      a: "Absolutely not. Your tracking data stays private and is never sold or shared with third parties.",
    },
    {
      q: "When i delete my account will my data be deleted too?",
      a: "Yes, once you delete your account all your data will be erased.",
    },
    {
      q: "The AI is not making sense, why?",
      a: "We have a thorough data agreggator and security filter that extracts excerpts from your journals. IE entries about emotions, progress and struggles. The more entries the more context the AI can have. If you find the AI hallucinating or having trouble please message support.",
    },
  ];

const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="w-full px-6 py-24 bg-gradient-to-b from-green-50/10 via-green-100/20 to-white rounded-3xl mt-28 max-w-4xl mx-auto shadow-md border border-green-200/40">
      <h2 className="text-3xl font-semibold text-gray-800 font-['MyFont'] text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col gap-4">
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/20 backdrop-blur-xl border border-gray-200 rounded-3xl cursor-pointer shadow-sm"
          >
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full text-left p-6 flex justify-between items-center"
            >
              <span className="text-lg font-medium text-gray-800 font-['MyFont']">
                {item.q}
              </span>
              <span className="text-gray-500 text-xl">
                {open === idx ? "−" : "+"}
              </span>
            </button>

            {/* Smooth expand container */}
            <div
              className={`
                transition-all duration-500 overflow-hidden
                ${open === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <div className="px-6 pb-6 text-gray-600 text-md leading-relaxed">
                {item.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
