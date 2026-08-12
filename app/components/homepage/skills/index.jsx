"use client";

import { motion } from "framer-motion";
import { SiFigma, SiCanva, SiNotion, SiHtml5, SiCss3 } from "react-icons/si";
import { FiLayout, FiSearch, FiPenTool, FiLayers, FiSmartphone, FiBox, FiCheckCircle, FiMap } from "react-icons/fi";

function Skills() {
  const skills = [
    { name: 'UI Design', icon: FiLayout, color: '#7C3AED' },
    { name: 'UX Research', icon: FiSearch, color: '#06B6D4' },
    { name: 'Wireframing', icon: FiPenTool, color: '#A855F7' },
    { name: 'Prototyping', icon: FiLayers, color: '#3B82F6' },
    { name: 'Responsive Design', icon: FiSmartphone, color: '#10B981' },
    { name: 'Design Systems', icon: FiBox, color: '#F59E0B' },
    { name: 'Usability Testing', icon: FiCheckCircle, color: '#F43F5E' },
    { name: 'Information Arch', icon: FiMap, color: '#EAB308' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
    { name: 'Notion', icon: SiNotion, color: '#000000' },
    { name: 'HTML/CSS', icon: SiHtml5, color: '#E34F26' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div id="skills" className="py-24 bg-[#0B0F19] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Core Competencies</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              My <span className="text-gradient">Toolkit</span> & Expertise.
            </h3>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-morphism-dark border-white/10 p-6 md:p-8 rounded-[1.5rem] flex flex-col items-center justify-center gap-4 group transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <skill.icon size={32} style={{ color: skill.color }} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm md:text-base font-bold text-gray-300 text-center group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skills;