"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMonitor, FiPenTool, FiBookOpen } from "react-icons/fi";

function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0B0F19]">
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left: Image/Visual */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden glass-morphism-dark border-white/10 p-2 shadow-[0_0_40px_rgba(124,58,237,0.1)]">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-white/5">
                <Image
                  src={personalData.profile || '/profile.png'}
                  alt="G Ajay Kumar"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Where structure meets <span className="text-gradient">usability</span>.
              </h3>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed font-light">
              {personalData.description}
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <motion.div whileHover={{ y: -5 }} className="p-6 rounded-2xl glass-morphism-dark border-white/10 hover:border-white/20 transition-all">
                <FiBookOpen className="text-secondary mb-4" size={24} />
                <h4 className="text-white font-bold mb-2">Education</h4>
                <p className="text-sm text-gray-400">Computer Science<br/>Centurion University (2023–2027)</p>
              </motion.div>
              
              <motion.div whileHover={{ y: -5 }} className="p-6 rounded-2xl glass-morphism-dark border-white/10 hover:border-white/20 transition-all">
                <FiPenTool className="text-primary mb-4" size={24} />
                <h4 className="text-white font-bold mb-2">Design Tools</h4>
                <p className="text-sm text-gray-400">Expert in Figma & Canva<br/>Prototyping & Wireframing</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;