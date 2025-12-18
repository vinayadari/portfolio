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
          className="mb-12"
        >
          <p className="label-text text-[#9CA3AF] mb-4">ABOUT</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontWeight: 700 }}>
            Crafting digital experiences with code and intent
          </h2>
        </motion.div>

        <InsightCards />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-4xl"
        >
          <div className="glass-card rounded-2xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontWeight: 700 }}>Education</h3>
              <p className="text-[#E5E7EB]" style={{ fontWeight: 400, lineHeight: 1.6 }}>
                Currently pursuing <span className="font-semibold">B.E. in Computer Science</span> at <span className="text-[#38BDF8]">New Horizon College of Engineering</span>
              </p>
              <p className="text-[#38BDF8] font-bold text-2xl mt-2">CGPA: 9.34</p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontWeight: 700 }}>Philosophy</h3>
              <p className="text-[#9CA3AF] italic" style={{ fontWeight: 400, lineHeight: 1.6 }}>
                I believe in the power of great habits over innate talent, continuous
                improvement, and building systems that make a difference.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
