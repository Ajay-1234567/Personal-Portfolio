"use client";

import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    { title: "Exploring Product Design", desc: "Diving deep into end-to-end product strategy and business-centric design solutions.", date: "Present" },
    { title: "Improving Design Systems", desc: "Creating scalable, reusable components and tokens for consistent UI across applications.", date: "Recent" },
    { title: "Building Projects", desc: "Applying skills to real-world scenarios, crafting luxury apps and functional rental platforms.", date: "Past Year" },
    { title: "Learning UI/UX", desc: "Mastering Figma, understanding user psychology, and practicing modern aesthetic principles.", date: "The Beginning" },
  ];

  return (
    <section className="py-24 bg-[#0B0F19] relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            My <span className="text-gradient">Experience</span>.
          </h3>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2 }}
              className="mb-12 relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
              
              <div className="glass-morphism-dark p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all group">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">{exp.date}</span>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{exp.title}</h4>
                <p className="text-gray-400 text-sm">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
