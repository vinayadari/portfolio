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
  title: "Vinay Adari | Full Stack Developer & ML Enthusiast",
  description: "Full Stack Developer specializing in MERN stack, machine learning integration, and scalable web applications. Based in Bengaluru, India.",
  keywords: ["Full Stack Developer", "Machine Learning", "AI", "React", "Node.js", "MERN Stack", "Web Development", "Bengaluru"],
  authors: [{ name: "Vinay Adari" }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Vinay Adari | Full Stack Developer & ML Enthusiast",
    description: "Full Stack Developer specializing in MERN stack, machine learning integration, and scalable web applications.",
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
