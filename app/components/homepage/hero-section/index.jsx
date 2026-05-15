"use client";

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "../../helper/magnetic-button";

function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -300]);
  
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#0B0F19]">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-10 max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-morphism-dark border-white/10"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">
              Available for New Opportunities
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-[1.1]"
              >
                UI/UX Designer & <br className="hidden md:block" />
                <span className="text-gradient">Digital Experience Creator</span>
              </motion.h1>
            </div>
            
            <p className="text-lg md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
              Designing intuitive and visually engaging digital experiences with a focus on usability and modern aesthetics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4"
          >
            <MagneticButton>
              <Link
                href="#projects"
                className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-base overflow-hidden flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              >
                <span>View Projects</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
            
            <MagneticButton>
              <Link
                href={personalData.resume}
                target='_blank'
                className="group px-8 py-4 rounded-full font-bold text-base text-white border border-white/20 hover:bg-white/10 flex items-center gap-2 transition-all hover:border-white/50 active:scale-95"
              >
                <span>Download Resume</span>
                <FaDownload className="group-hover:translate-y-1 transition-transform" />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Abstract Floating UI Elements for Hero with Parallax */}
        <motion.div style={{ y: y1 }} className="absolute top-[20%] left-[5%] hidden lg:block animate-float opacity-80">
          <div className="w-48 h-32 rounded-2xl glass-morphism-dark border-white/10 p-4 shadow-2xl flex flex-col gap-3">
            <div className="w-1/2 h-4 bg-white/20 rounded-md" />
            <div className="w-3/4 h-3 bg-white/10 rounded-md" />
            <div className="w-full h-12 bg-primary/30 rounded-lg mt-auto" />
          </div>
        </motion.div>

        <motion.div style={{ y: y2 }} className="absolute top-[40%] right-[5%] hidden lg:block animate-float-delayed opacity-80">
          <div className="w-56 h-40 rounded-2xl glass-morphism-dark border-white/10 p-5 shadow-2xl flex flex-col gap-4">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-secondary/30" />
               <div className="flex flex-col gap-2 flex-1">
                 <div className="w-full h-2 bg-white/20 rounded-md" />
                 <div className="w-2/3 h-2 bg-white/10 rounded-md" />
               </div>
             </div>
             <div className="flex gap-2 mt-auto">
               <div className="w-1/2 h-8 bg-white/10 rounded-lg" />
               <div className="w-1/2 h-8 bg-white/10 rounded-lg" />
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
