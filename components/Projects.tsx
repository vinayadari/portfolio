"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Blog Application",
    problem: "Full-stack blog platform with authentication and role-based access control",
    tech: ["Express.js", "React.js", "Node.js", "MongoDB", "JWT", "Bcrypt"],
    highlights: [
      "Built a full-stack blog platform with authentication and role-based access control",
      "Developed RESTful APIs with complete CRUD functionality and secure authorization",
      "Designed a responsive UI with pagination and lazy loading for performance optimization",
    ],
    impact: "Secure multi-user content platform with role-based permissions and optimized performance",
  },
  {
    title: "News Analyzer System",
    problem: "Front-end enabling topic-based search, bookmarking, and exploration of news articles",
    tech: ["React.js", "Python", "UMAP"],
    highlights: [
      "Developed a front-end enabling topic-based search, bookmarking, and exploration",
      "Designed UI for clustered news visualization with dynamic filtering",
      "Integrated ML APIs for real-time sentiment-based article rendering",
    ],
    impact: "Interactive news exploration with AI-powered sentiment analysis and dynamic clustering",
  },
  {
    title: "Natural Language to SQL Interface",
    problem: "CLI tool converting natural language queries into executable SQL using LLMs",
    tech: ["Python", "PostgreSQL", "LLaMA 3"],
    highlights: [
      "Built a CLI tool converting natural language queries into executable SQL using LLMs",
      "Integrated with PostgreSQL for automated execution and structured results",
      "Generated human-readable summaries to improve accessibility for non-technical users",
    ],
    impact: "Makes database querying accessible to non-technical users through natural language",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#111827]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <p className="label-text text-[#8B5CF6] mb-3 sm:mb-4 font-semibold tracking-wider text-xs sm:text-sm">PROJECTS</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
            Projects that demonstrate technical depth
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] max-w-3xl" style={{ lineHeight: 1.7 }}>
            Each project focuses on real-world problem solving: full-stack development, AI integration, database design, and building accessible tools.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid gap-6 sm:gap-8 max-w-5xl"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ y: -4 }}
              className="group glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 transition-all duration-300 border border-white/5 hover:border-[#38BDF8]/30"
            >
              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] font-bold text-sm sm:text-base">
                        {index + 1}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-[#9CA3AF] text-sm sm:text-base font-medium" style={{ lineHeight: 1.6 }}>
                      {project.problem}
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-5 sm:pt-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-[#38BDF8] mb-3 sm:mb-4 uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2 sm:gap-3 text-[#E5E7EB] text-xs sm:text-sm" style={{ lineHeight: 1.7 }}>
                        <span className="text-[#8B5CF6] mt-1 flex-shrink-0">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/10 pt-5 sm:pt-6">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6">
                    <div className="flex-1 w-full">
                      <h4 className="text-xs font-semibold text-[#9CA3AF] mb-2 sm:mb-3 uppercase tracking-wider">Impact</h4>
                      <p className="text-[#E5E7EB] text-xs sm:text-sm" style={{ lineHeight: 1.6 }}>
                        {project.impact}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-medium bg-[#38BDF8]/10 text-[#38BDF8] rounded-lg border border-[#38BDF8]/20 hover:bg-[#38BDF8]/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
