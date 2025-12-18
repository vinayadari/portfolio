"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import ParticlesBackground from "./Particles";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-16">
      <ParticlesBackground />

      <div className="absolute inset-0 noise-texture opacity-40" />
      <div className="absolute inset-0 engineering-grid" />

      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#38BDF8]/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#8B5CF6]/15 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 text-left md:text-left flex items-center min-h-[80vh]">
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <p className="label-text text-[#9CA3AF]">
              Building scalable systems with code & intent
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4" style={{ fontWeight: 800 }}>
              Vinay Adari
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="text-xl md:text-2xl text-[#E5E7EB] font-normal mb-4" style={{ fontWeight: 450, lineHeight: 1.4 }}>
              Full Stack Developer & Machine Learning Enthusiast
            </h2>

            <div className="flex items-center gap-2 text-[#9CA3AF]">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Bengaluru, Karnataka, India</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.36, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl"
          >
            <p className="text-lg md:text-xl text-[#9CA3AF] italic" style={{ fontWeight: 400, lineHeight: 1.6, opacity: 0.8 }}>
              "I'm not a great coder, but a good coder with great habits."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-6"
          >
            <a
              href="#projects"
              className="btn-glow group px-8 py-4 bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-xl hover:shadow-[#38BDF8]/25"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border border-white/10 hover:border-white/20 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/5"
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
