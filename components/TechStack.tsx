"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Database,
  Wrench,
  Braces,
  FileCode,
  Binary,
  FileType,
  Layers,
  GitBranch,
  Package,
  Atom,
  Server,
  Leaf,
  Box,
  CircuitBoard,
  Table,
} from "lucide-react";

const techStack = {
  Languages: [
    { name: "Python", icon: Code2 },
    { name: "Java", icon: Braces },
    { name: "JavaScript", icon: FileCode },
    { name: "SQL", icon: Database },
    { name: "HTML5", icon: FileType },
    { name: "CSS", icon: Layers },
    { name: "C", icon: Binary },
  ],
  "Developer Tools": [
    { name: "Git", icon: GitBranch },
    { name: "Postman", icon: Package },
  ],
  "Libraries & Frameworks": [
    { name: "React", icon: Atom },
    { name: "Node.js", icon: Server },
    { name: "Express.js", icon: Server },
    { name: "Spring Boot", icon: Leaf },
    { name: "PostgreSQL", icon: CircuitBoard },
    { name: "MongoDB", icon: Table },
  ],
};

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

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech-stack" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#111827]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-white">
            Tech Stack
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-[#8B5CF6]" />
        </motion.div>

        <div className="space-y-10 sm:space-y-12">
          {Object.entries(techStack).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6 text-[#9CA3AF]">
                {category}
              </h3>

              <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4"
              >
                {skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={item}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="group glass-card glass-card-hover rounded-lg sm:rounded-xl p-4 sm:p-5 transition-all duration-300"
                    >
                      <div className="flex flex-col items-center gap-2 sm:gap-3">
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#38BDF8] group-hover:text-[#8B5CF6] transition-colors" />
                        <span className="text-xs sm:text-sm font-medium text-[#E5E7EB] text-center">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
