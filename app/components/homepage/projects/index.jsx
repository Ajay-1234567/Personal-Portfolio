"use client";

import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0B0F19] relative">
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center lg:text-left">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Portfolio</h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            Featured <span className="text-gradient">Case Studies</span>.
          </h3>
          <p className="text-lg text-gray-400 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            A curated selection of digital products showcasing user-centered design solutions and premium aesthetics.
          </p>
        </div>

        {/* Projects Grid - Using 1 col on mobile, 2 on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;