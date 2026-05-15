"use client";

import { motion } from "framer-motion";
import { FiSearch, FiTarget, FiZap, FiLayout, FiLayers, FiCheckCircle } from "react-icons/fi";

function DesignProcess() {
  const steps = [
    { name: "Discover", icon: FiSearch, desc: "Research & understand user needs" },
    { name: "Define", icon: FiTarget, desc: "Identify problems & set goals" },
    { name: "Ideate", icon: FiZap, desc: "Brainstorm creative solutions" },
    { name: "Design", icon: FiLayout, desc: "Create UI & visual language" },
    { name: "Prototype", icon: FiLayers, desc: "Build interactive models" },
    { name: "Test", icon: FiCheckCircle, desc: "Validate & iterate with users" }
  ];

  return (
    <section className="py-24 bg-[#0B0F19] relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Workflow</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            My <span className="text-gradient">Design Process</span>.
          </h3>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/5 -translate-y-1/2 hidden md:block rounded-full" />
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full glass-morphism-dark border-white/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-xl">
                  <step.icon size={24} className="text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <h4 className="text-white font-bold mb-2">{step.name}</h4>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignProcess;
