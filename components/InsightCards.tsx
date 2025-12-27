"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Brain, Code2 } from "lucide-react";

const insights = [ 
  {
    icon: Layers,
    title: "Backend-First Approach",
    description: "APIs, schemas, auth flows, and error handling before UI polish. The foundation matters more than the facade.",
    color: "38BDF8",
  },
  {
    icon: Brain,
    title: "Trade-Offs Over Trends",
    description: "Choosing SQL vs NoSQL based on query patterns, not blog posts. Every technology decision has costs.",
    color: "8B5CF6",
  },
  {
    icon: Code2,
    title: "Code That Lasts",
    description: "Consistent naming, modular structure, readable by the next person. Future-you will thank present-you.",
    color: "38BDF8",
  },
];

export default function InsightCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-12">
      {insights.map((insight, index) => {
        const Icon = insight.icon;
        return (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 interactive-card border border-white/5 hover:border-white/10 transition-all duration-300"
          >
            <div className={`w-14 h-14 rounded-xl bg-[#${insight.color}]/10 border border-[#${insight.color}]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <Icon className={`w-7 h-7 text-[#${insight.color}]`} />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#38BDF8] transition-colors" style={{ fontWeight: 700 }}>
              {insight.title}
            </h3>

            <p className="text-[#9CA3AF] leading-relaxed text-sm sm:text-base" style={{ fontWeight: 400, lineHeight: 1.7 }}>
              {insight.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
