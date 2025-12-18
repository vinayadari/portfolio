"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      } else {
        setIsScrolled(false);
        setHidden(false);
      }

      setLastScrollY(currentScrollY);

      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: hidden ? -12 : 0,
        opacity: hidden ? 0.9 : 1
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-[#0B0F19]/60 border-b border-white/8"
          : "bg-transparent"
      }`}
      style={{ height: "64px" }}
    >
      <div className="gradient-line" />
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3 text-xl font-bold text-white tracking-tight"
        >
          <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 0L59.7128 16V48L32 64L4.28718 48V16L32 0Z" fill="#38BDF8"/>
            <text x="32" y="40" fontFamily="system-ui, -apple-system, sans-serif" fontSize="28" fontWeight="700" fill="white" textAnchor="middle">VA</text>
          </svg>
          Vinay Adari
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className="text-[#9CA3AF] hover:text-white transition-colors relative group font-medium text-sm tracking-wide"
                style={{ fontWeight: 500 }}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute -bottom-2 left-1/2 w-1 h-1 bg-[#38BDF8] rounded-full"
                    style={{ transform: "translateX(-50%)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#38BDF8] group-hover:w-full transition-all duration-300" />
              </a>
            );
          })}

          <a
            href="#contact"
            className="px-5 py-2 border border-[#38BDF8] text-[#38BDF8] rounded-full hover:bg-[#38BDF8]/10 transition-all duration-300 text-sm font-medium"
          >
            Get in Touch
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden backdrop-blur-xl bg-[#0B0F19]/95 border-t border-white/8"
        >
          <div className="flex flex-col gap-1 p-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors py-3 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-5 py-3 border border-[#38BDF8] text-[#38BDF8] rounded-full hover:bg-[#38BDF8]/10 transition-all duration-300 text-sm font-medium text-center"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
