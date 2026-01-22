"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import ParticlesBackground from "./Particles";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-20 sm:pt-16">
      <ParticlesBackground />

      <div className="absolute inset-0 noise-texture opacity-40" />
      <div className="absolute inset-0 engineering-grid" />

      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-[#38BDF8]/20 rounded-full blur-[100px] sm:blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-[#8B5CF6]/15 rounded-full blur-[100px] sm:blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-left flex items-center min-h-[80vh]">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20">
              <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              <span className="text-sm font-medium text-[#38BDF8]">Open to Backend Roles</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-4 sm:mb-6 relative" style={{ fontWeight: 800 }}>
              {"Vinay Adari".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.8 + index * 0.08,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  whileHover={{
                    rotateZ: -8,
                    y: -5,
                    scale: 1.1,
                    color: "#38BDF8",
                    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                  }}
                  className="inline-block text-white cursor-pointer relative"
                  style={{
                    display: char === " " ? "inline" : "inline-block",
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  <motion.span
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(56, 189, 248, 0.3)",
                        "0 0 30px rgba(139, 92, 246, 0.4)",
                        "0 0 20px rgba(56, 189, 248, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.1,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-4"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold" style={{ fontWeight: 600, lineHeight: 1.3 }}>
              Full Stack Developer
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#9CA3AF] max-w-2xl" style={{ fontWeight: 400, lineHeight: 1.6 }}>
              "im not a great coder, but a good coder with great habits"
            </p>

            <div className="flex items-center gap-2 text-[#9CA3AF] pt-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Bengaluru, Karnataka, India</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8"
          >
            <a
              href="#projects"
              className="btn-glow group px-6 sm:px-8 py-3 sm:py-4 bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-xl hover:shadow-[#38BDF8]/25 text-sm sm:text-base"
            >
              view projects
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#8B5CF6]/30 hover:border-[#8B5CF6]/60 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#8B5CF6]/10 backdrop-blur-sm text-sm sm:text-base"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-[#38BDF8] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
