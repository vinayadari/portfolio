"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import InsightCards from "./InsightCards";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 px-6 bg-[#111827]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <p className="label-text text-[#38BDF8] mb-4 font-semibold tracking-wider">ENGINEERING APPROACH</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontWeight: 700 }}>
            How I think about building backend systems
          </h2>
          <p className="text-lg text-[#9CA3AF] mt-6 max-w-3xl" style={{ lineHeight: 1.7 }}>
            Backend work is about making decisions under constraints. I focus on fundamentals over frameworks,
            maintainability over quick wins, and understanding trade-offs before writing code.
          </p>
        </motion.div>

        <InsightCards />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-8 border border-[#38BDF8]/10 hover:border-[#38BDF8]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 rounded-full border-2 border-[#38BDF8]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontWeight: 700 }}>Education</h3>
                  <p className="text-[#E5E7EB] mb-2" style={{ fontWeight: 400, lineHeight: 1.6 }}>
                    <span className="font-semibold">B.E. in Computer Science</span>
                  </p>
                  <p className="text-[#9CA3AF] text-sm mb-3">New Horizon College of Engineering</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/20">
                    <span className="text-[#38BDF8] font-bold text-lg">CGPA: 9.34</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-[#8B5CF6]/10 hover:border-[#8B5CF6]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 text-[#8B5CF6]">⚡</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontWeight: 700 }}>What I Prioritize</h3>
                  <ul className="text-[#9CA3AF] space-y-2 text-sm" style={{ lineHeight: 1.6 }}>
                    <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> Clear separation of concerns in API architecture</li>
                    <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> Database normalization when it matters</li>
                    <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> Handling edge cases in auth and validation</li>
                    <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> Code maintainable six months later</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
