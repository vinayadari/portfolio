import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vinay-adari.vercel.app"),

  title: {
    default: "Vinay Adari — Full Stack Developer & ML Enthusiast",
    template: "%s | Vinay Adari",
  },

  description:
    "Vinay Adari is a Full Stack Developer and Machine Learning enthusiast building scalable, high-performance web applications using React, Node.js, PostgreSQL, and modern AI tools. Based in Bengaluru, India.",

  keywords: [
    "Vinay Adari",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Machine Learning Engineer",
    "React Developer",
    "Node.js Developer",
    "PostgreSQL",
    "MongoDB",
    "AI Web Applications",
    "Bengaluru Developer",
  ],

  authors: [{ name: "Vinay Adari", url: "https://vinay-adari.vercel.app" }],
  creator: "Vinay Adari",

  alternates: {
    canonical: "https://vinay-adari.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Vinay Adari — Full Stack Developer & ML Enthusiast",
    description:
      "Building scalable web systems and AI-powered applications using modern full stack technologies.",
    url: "https://vinay-adari.vercel.app",
    siteName: "Vinay Adari Portfolio",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vinay Adari — Full Stack Developer & ML Enthusiast",
    description:
      "Full Stack Developer building scalable web applications and integrating machine learning into production systems.",
    creator: "@vinayadari", // remove if you don’t have Twitter
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
