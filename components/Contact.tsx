"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "vinayadari00@gmail.com",
    href: "mailto:vinayadari00@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9945014686",
    href: "tel:+919945014686",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/vinayadari",
    href: "https://github.com/vinayadari",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/vinayadari",
    href: "https://linkedin.com/in/vinay-adari-261241200",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#111827]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-white">
            Get In Touch
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-[#8B5CF6]" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl"
        >
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                variants={item}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group glass-card glass-card-hover rounded-xl sm:rounded-2xl p-5 sm:p-7 transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#38BDF8] group-hover:text-[#8B5CF6] transition-colors" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[#9CA3AF] mb-1 uppercase tracking-wider">{contact.label}</div>
                    <div className="text-white text-sm sm:text-base font-medium truncate group-hover:text-[#38BDF8] transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
