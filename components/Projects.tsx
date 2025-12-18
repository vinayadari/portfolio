"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Blog Application",
    description:
      "Full-featured blog platform with user authentication, CRUD operations, and multi-user support. Optimized backend with MongoDB Atlas.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "AI Job Assigning Platform",
    description:
      "Intelligent task management powered by Google Gemini API with AI-driven recommendations, admin/employee dashboards, and real-time updates.",
    tech: ["MERN", "Gemini API", "JWT"],
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Responsive messaging platform with live chat, typing indicators, and online status. Secure WebSocket connections with token-based authentication.",
    tech: ["Socket.io", "React", "Node.js", "JWT"],
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
    <section id="projects" className="relative py-24 px-6 bg-[#111827]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-[#8B5CF6]" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ y: -8 }}
              className="group glass-card glass-card-hover rounded-2xl p-8 transition-all duration-300"
            >
              <div className="space-y-5">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#E5E7EB] leading-relaxed text-base min-h-[100px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium bg-[#38BDF8]/10 text-[#38BDF8] rounded-lg border border-[#38BDF8]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
