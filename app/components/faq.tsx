"use client";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "How is my journaling data protected?",
      a: "Your journaling entries are encrypted locally using AES-256 before they ever leave your device. This means only you can access and read your content.",
    },
    {
      q: "How does it work?",
      a: "We process your entries through a privacy‑focused filter that extracts only the key themes—such as emotions, progress, and challenges. Before anything is sent to the AI, personal or sensitive details are automatically removed. The AI then analyzes only the essential excerpts to provide insights that support your growth.",
    },
    {
      q: "Will I get coaching or therapy?",
      a: "No. The AI helps you reflect and identify patterns in your journaling, but it is not a therapist, coach, or medical professional.",
    },
    {
      q: "Is my activity tracking shared with anyone?",
      a: "No. Your activity data stays private and is never shared or sold to third parties.",
    },
    {
      q: "When I delete my account, will my data be deleted too?",
      a: "Yes. When you delete your account, all your associated data is permanently removed.",
    },
    {
      q: "The AI is not making sense, why?",
      a: "Our system extracts excerpts from your entries—mainly emotions, progress, and struggles. The more you write, the more accurate the insights become. If the AI seems off or confused, feel free to reach out to support.",
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
              <span className="text-gray-500 text-xl">{open === idx ? "−" : "+"}</span>
            </button>

            {/* Smooth expand container */}
            <div
              className={`transition-all duration-500 overflow-hidden ${
                open === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
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
