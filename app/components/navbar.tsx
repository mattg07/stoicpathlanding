"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setOpen(false); // close mobile menu
  };
  return (
    <>
      <nav
        className="
        fixed top-6 left-1/2 -translate-x-1/2
        w-[90%] max-w-4xl
        bg-white/0 backdrop-blur-xl
        shadow-lg shadow-black/5
        rounded-full px-6 py-1
        flex items-center justify-between
        z-50
      "
      >
        {/* Logo */}
        <div className="font-semibold text-lg tracking-tight">
          <Link href="/">
            <Image src={"/pathlogotwo.webp"} height={70} width={70} alt="Log" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-[#202020] font-[Poppins]">
          <a href="#home" className="hover:text-gray-900">
            Home
          </a>
          <button
            onClick={() => scrollToSection("faq")}
            className="hover:text-[#6b5b62] transition cursor-pointer"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection("howItWorks")}
            className="hover:text-[#6b5b62] transition cursor-pointer"
          >
            How It Works
          </button>
          <a
            href="mailto:support@pathstoic.com"
            className="hover:text-[#6b5b62]"
          >
            Contact
          </a>
          <a href="#download" className="hover:text-[#6b5b62]">
            Download
          </a>
        </div>

        {/* CTA */}
        <button
          className="
          hidden md:block bg-[#202020] text-white px-7 py-2 rounded-full cursor-pointer
          font-medium transition font-[Poppins] text-xl hover:bg-gray-300 hover:text-black hover:animate-bounce
        "
        >
          Try it!
        </button>

        {/* Mobile menu icon */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <div className="w-6 h-[2px] bg-black mb-[5px] rounded transition" />
          <div className="w-6 h-[2px] bg-black rounded transition" />
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div
          className="
      md:hidden fixed top-[90px] left-1/2 -translate-x-1/2
      w-[90%] bg-white/20 backdrop-blur-lg shadow-lg shadow-black/5
      rounded-2xl p-6 flex flex-col gap-4 text-center font-[Poppins]
      z-50
      opacity-0 animate-fadeInSlow
    "
        >
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="text-[#202020]  hover:text-gray-500"
          >
            Home
          </a>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-[#202020] hover:text-gray-500 transition cursor-pointer"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection("howItWorks")}
            className="text-[#202020]  hover:text-gray-500 transition cursor-pointer"
          >
            How It Works
          </button>
          <a
            href="mailto:support@pathstoic.com"
            onClick={() => setOpen(false)}
            className="text-[#202020]  hover:text-gray-500 transition"
          >
            Contact
          </a>
          <a
            href="#download"
            onClick={() => setOpen(false)}
            className="text-[#202020]  hover:text-gray-500 transition"
          >
            Download
          </a>

          <button
            className="bg-[#202020] text-white px-5 py-2 rounded-full font-medium hover:bg-gray-500 transition cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Try it!
          </button>
        </div>
      )}
    </>
  );
}
