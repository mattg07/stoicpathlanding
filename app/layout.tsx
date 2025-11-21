import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import localFont from "next/font/local";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export const metadata: Metadata = {
  metadataBase: new URL("https://pathstoic.com"),

  title: "Path App",
  description: "A self improvement tracking app, with AI Insights.",

  openGraph: {
    title: "Path App",
    description: "A self improvement tracking app, with AI Insights.",
    url: "https://pathstoic.com",
    siteName: "Path App",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/pathSplash.png", 
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Path App",
    description: "A self improvement tracking app, with AI Insights.",
    images: ["/pathiCon.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar/>  
        {children}
       <Footer/> 
      </body>
    </html>
  );
}
