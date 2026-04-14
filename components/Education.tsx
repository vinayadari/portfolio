"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Trophy, Cloud, Sparkles } from "lucide-react";

const education = [
  {
    institution: "New Horizon College of Engineering",
    degree: "B.E. Computer Science & Engineering",
    period: "2023 – 2027",
    achievement: "CGPA: 9.2",
    location: "Bengaluru",
    icon: GraduationCap,
  },
  {
    institution: "Narayana Techno School",
    degree: "Pre-University Course (PCMC)",
    period: "2021 – 2023",
    achievement: "86%",
    location: "Bengaluru",
    icon: Award,
  },
];

const achievements = [
  {
    title: "Smart India Hackathon (SIH)",
    description: "Secured a top 45 position across the college by developing an ML-based timetable generator",
    year: "2025",
    icon: Trophy,
  },
  {
    title: "NPTEL – Cloud Computing (IIT Kharagpur)",
    description: "Achieved Elite certification; ranked among the top 5% nationally",
    year: "2025",
    icon: Cloud,
  },
  {
    title: "Fueled Hackathon – AR Jewelry Try-On",
    description: "Built a real-time AR try-on system using OpenCV and MediaPipe",
    year: "2025",
    icon: Sparkles,
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
    <section id="education" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#111827]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-white">
            Education
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-[#8B5CF6]" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="space-y-5 sm:space-y-6 max-w-4xl"
        >
          {education.map((edu) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.institution}
                variants={item}
                className="group glass-card glass-card-hover rounded-xl sm:rounded-2xl p-6 sm:p-8"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#38BDF8]" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                      {edu.institution}
                    </h3>

                    <p className="text-sm sm:text-base text-[#E5E7EB] mb-3">{edu.degree}</p>

                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm">
                      <span className="flex items-center gap-2 text-[#9CA3AF]">
                        <span className="w-2 h-2 bg-[#38BDF8] rounded-full" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-2 text-[#9CA3AF]">
                        <span className="w-2 h-2 bg-[#8B5CF6] rounded-full" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-2 text-[#38BDF8] font-semibold">
                        <span className="w-2 h-2 bg-[#38BDF8] rounded-full" />
                        {edu.achievement}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Experience & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-white">
            Experience & Achievements
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-[#38BDF8] mb-10 sm:mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group glass-card glass-card-hover rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-[#38BDF8]/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#38BDF8]" />
                    </div>
                    <span className="text-xs font-semibold text-[#8B5CF6] bg-[#8B5CF6]/10 px-3 py-1 rounded-full border border-[#8B5CF6]/20">
                      {achievement.year}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                    {achievement.title}
                  </h3>

                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
