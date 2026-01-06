"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import InsightCards from "./InsightCards";

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#111827]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-[#38BDF8] mb-3 sm:mb-4 font-semibold tracking-wider text-xs sm:text-sm">
            ABOUT ME
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How I approach backend development
          </h2>

          <p className="text-base sm:text-lg text-[#9CA3AF] mt-4 sm:mt-6 max-w-3xl leading-relaxed">
            I enjoy working on backend systems that solve real-world problems.
            While building projects, I focus on designing clear APIs, structuring
            databases properly, and understanding trade-offs instead of blindly
            following tools or trends.
          </p>

          <p className="text-base sm:text-lg text-[#9CA3AF] mt-4 max-w-3xl leading-relaxed">
            I’m also exploring machine learning using scikit-learn and learning
            how to integrate trained models into backend systems where they add
            real value.
          </p>
        </motion.div>

        {/* Insight Cards */}
        <InsightCards />

        {/* Bottom Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 sm:mt-16 md:mt-20"
        >
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {/* Education */}
            <div className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#38BDF8]/10 hover:border-[#38BDF8]/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 rounded-full border-2 border-[#38BDF8]" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Education
                  </h3>

                  <p className="text-[#E5E7EB] mb-1 font-semibold">
                    B.E. in Computer Science
                  </p>

                  <p className="text-[#9CA3AF] text-sm mb-2">
                    New Horizon College of Engineering
                  </p>

                  <p className="text-[#9CA3AF] text-sm mb-3">
                    Currently in 5th Semester
                  </p>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/20">
                    <span className="text-[#38BDF8] font-bold text-lg">
                      CGPA: 9.34
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#8B5CF6]/10 hover:border-[#8B5CF6]/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#8B5CF6] text-xl">⚡</span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    What I Focus On
                  </h3>

                  <ul className="text-[#9CA3AF] space-y-2 text-sm leading-relaxed">
                    <li>• Keeping APIs modular and easy to extend</li>
                    <li>• Designing databases carefully when scale or consistency matters</li>
                    <li>• Handling authentication, validation, and edge cases properly</li>
                    <li>• Writing code that stays readable and maintainable</li>
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
