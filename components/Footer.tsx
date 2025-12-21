"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/vinayadari", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/vinay-adari-261241200", label: "LinkedIn" },
    { icon: Mail, href: "mailto:vinayadari00@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative py-12 sm:py-16 px-4 sm:px-6 bg-[#111827] border-t border-white/8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 sm:gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">
              Vinay Adari
            </h3>
            <p className="text-[#9CA3AF] text-xs sm:text-sm">Full Stack Developer & ML Enthusiast</p>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/8 flex items-center justify-center hover:border-[#38BDF8] hover:bg-[#38BDF8]/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#9CA3AF] group-hover:text-[#38BDF8] transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/8 text-center">
          <p className="text-xs sm:text-sm text-[#9CA3AF]">
            © {currentYear} Vinay Adari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
