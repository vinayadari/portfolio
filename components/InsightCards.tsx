"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Brain, Code2 } from "lucide-react";

const insights = [
  {
    icon: Layers,
    title: "Starting with the Backend",
    description:
      "When building a project, I usually begin with APIs, database schemas, and auth flows before focusing on UI details.",
    color: "38BDF8",
  },
  {
    icon: Brain,
    title: "Choosing Tools Thoughtfully",
    description:
      "I try to choose technologies based on project needs — like using SQL or NoSQL depending on data and queries, not trends.",
    color: "8B5CF6",
  },
  {
    icon: Code2,
    title: "Writing Readable Code",
    description:
      "I aim to keep code modular and easy to understand so it’s maintainable for future changes and collaborators.",
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
