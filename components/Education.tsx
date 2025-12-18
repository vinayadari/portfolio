"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    institution: "New Horizon College of Engineering",
    degree: "B.E. Computer Science & Engineering",
    period: "Currently 5th Semester",
    achievement: "CGPA: 9.34",
    icon: GraduationCap,
  },
  {
    institution: "Narayana Techno School",
    degree: "Class XII",
    period: "Completed",
    achievement: "Aggregate: 86%",
    icon: Award,
  },
];

const achievements = [
  {
    title: "KCET Rank",
    value: "6183",
    icon: Award,
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
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0 },
};

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-24 px-6 bg-[#111827]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
            Education
          </h2>
          <div className="w-16 h-1 bg-[#8B5CF6]" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="space-y-6 max-w-4xl"
        >
          {education.map((edu) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.institution}
                variants={item}
                className="group glass-card glass-card-hover rounded-2xl p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#38BDF8]" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                      {edu.institution}
                    </h3>

                    <p className="text-base text-[#E5E7EB] mb-3">{edu.degree}</p>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-2 text-[#9CA3AF]">
                        <span className="w-2 h-2 bg-[#38BDF8] rounded-full" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-2 text-[#38BDF8] font-semibold">
                        <span className="w-2 h-2 bg-[#8B5CF6] rounded-full" />
                        {edu.achievement}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-xs"
        >
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.title}
                className="glass-card rounded-2xl p-8 text-center"
              >
                <Icon className="w-10 h-10 text-[#38BDF8] mx-auto mb-3" />
                <div className="text-5xl font-bold text-white mb-2">
                  {achievement.value}
                </div>
                <div className="text-[#9CA3AF]">{achievement.title}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
