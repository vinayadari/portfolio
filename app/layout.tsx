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
    "Vinay Adari is a Full Stack Developer and Machine Learning enthusiast building scalable, high-performance web applications using React, Node.js, PostgreSQL, and AI tools.",

  verification: {
    google: "qolhhbcUjr34ZQTeq0c6-eY_gCwSYSWTTbqoSLKJbPE",
  },

  alternates: {
    canonical: "https://vinay-adari.vercel.app",
  },

  icons: {
    icon: '/favicon.svg',
  },

  openGraph: {
    title: "Vinay Adari — Full Stack Developer & ML Enthusiast",
    url: "https://vinay-adari.vercel.app",
    type: "website",
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
