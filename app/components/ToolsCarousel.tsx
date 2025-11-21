"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ToolsCarousel() {
  const tools = [
    { name: "Journaling", image: "/journaling.png" },
    { name: "Meditation", image: "/meditation.png" },
    { name: "Workout Tracker", image: "/workout.png" },
    { name: "Cold Showers Tracker", image: "/coldScreen.png" },
    { name: "Quotes for Guidance", image: "/guidance.png" },
    { name: "And many more...", image: "/moree.png" },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tools.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto overflow-hidden relative">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {tools.map((tool, i) => (
          <div
            key={i}
            className="min-w-full flex flex-col items-center justify-center p-8"
          >
            <Image
              src={tool.image}
              alt={tool.name}
              width={200}
              height={150}
              className="object-contain"
            />
            <p className="text-center font-[myFont] tracking-wide text-black mt-4 text-lg font-semibold">
              {tool.name}
            </p>
          </div>
        ))}
      </div>

      {/* Dots */}

    </div>
  );
}
