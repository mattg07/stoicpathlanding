// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Support", href: "mailto:support@pathstoic.com" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Contact", href: "mailto:support@pathstoic.com" },
  ];

  return (
    <footer className="relative overflow-hidden font-[myFont] ">
      {/* Reversed gradient background – dark at top, fades to light */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50 via-sky-50 to-sky-100" />

      {/* Optional subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Copyright + tagline */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <img src={"/pathlogotwo.webp"} width={60} height={60} />
            <p className="text-md    text-gray-600 tracking-wider font-[myFont]">
              © {currentYear}. Built for growth, clarity, and mastery.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Optional tiny easter egg */}
          <div className="flex items-center gap-2 justify-center">
            <p className="text-lg text-gray-600 opacity-70">
              Made with love and dedication
            </p>
            <p className="text-md text-gray-600 tracking-wider font-[myFont]">
              M.M.G.P
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
