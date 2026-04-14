"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Brain, Code2 } from "lucide-react";

const insights = [
  {
    icon: Layers,
    title: "Scalable Web Applications",
    description:
      "I enjoy building full-stack applications with proper API design, authentication, and database architecture that can handle real-world usage.",
    color: "38BDF8",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Strong interest in integrating AI and ML models into products — from natural language processing to computer vision and sentiment analysis.",
    color: "8B5CF6",
  },
  {
    icon: Code2,
    title: "Backend Systems",
    description:
      "I focus on building robust backend systems with RESTful APIs, secure authentication, and well-structured databases.",
    color: "38BDF8",
  },
];

export default function InsightCards() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-12"
    >
      {insights.map((insight, index) => {
        const Icon = insight.icon;

        return (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-white/10 transition-all"
          >
            <div
              className={`w-14 h-14 rounded-xl bg-[#${insight.color}]/10 border border-[#${insight.color}]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
            >
              <Icon className={`w-7 h-7 text-[#${insight.color}]`} />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
              {insight.title}
            </h3>

            <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed">
              {insight.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
