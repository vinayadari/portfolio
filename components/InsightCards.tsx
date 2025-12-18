"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Brain, Code2 } from "lucide-react";

const insights = [
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Designing systems that don't collapse under growth.",
  },
  {
    icon: Brain,
    title: "ML in Production",
    description: "Not demos. Real models solving real problems.",
  },
  {
    icon: Code2,
    title: "Clean Code Discipline",
    description: "Readable today. Maintainable next year.",
  },
];

export default function InsightCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-6 mt-12">
      {insights.map((insight, index) => {
        const Icon = insight.icon;
        return (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group glass-card glass-card-hover rounded-2xl p-8 interactive-card"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="mb-4"
            >
              <Icon className="w-10 h-10 text-[#38BDF8]" />
            </motion.div>

            <h3 className="text-xl font-bold text-white mb-3" style={{ fontWeight: 700 }}>
              {insight.title}
            </h3>

            <p className="text-[#9CA3AF] leading-relaxed" style={{ fontWeight: 400, lineHeight: 1.6 }}>
              {insight.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
