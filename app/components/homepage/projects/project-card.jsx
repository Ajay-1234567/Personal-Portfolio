"use client";

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { SiBehance } from 'react-icons/si';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function ProjectCard({ project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group glass-morphism-dark rounded-[2rem] p-4 md:p-6 border border-white/10 transition-colors duration-500 hover:border-white/30 hover:shadow-[0_0_40px_rgba(124,58,237,0.1)] overflow-hidden flex flex-col h-full [perspective:1000px] cursor-view"
    >
      <div style={{ transform: "translateZ(30px)" }} className="flex flex-col h-full">
        {/* Project Image Container */}
        <Link href={project.demo || '#'} target="_blank" className="relative w-full aspect-[4/3] rounded-2xl md:rounded-[1.5rem] overflow-hidden bg-black/50 mb-6 md:mb-8 border border-white/5 cursor-none">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 500px"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60" />
          
          {/* Role Badge inside image area */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">
              {project.role}
            </span>
          </div>
        </Link>

        <div className="px-2 flex flex-col flex-grow">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight leading-tight">
            {project.name}
          </h3>
          
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-light">
            {project.description}
          </p>

          {/* Problem & Solution (if available) */}
          {(project.problem || project.solution) && (
             <div className="space-y-4 mb-8 bg-white/5 p-4 rounded-xl border border-white/5">
                {project.problem && (
                  <div>
                    <h4 className="text-xs text-primary font-bold uppercase tracking-wider mb-1">Problem</h4>
                    <p className="text-sm text-gray-300">{project.problem}</p>
                  </div>
                )}
                {project.solution && (
                  <div>
                    <h4 className="text-xs text-secondary font-bold uppercase tracking-wider mb-1">Solution</h4>
                    <p className="text-sm text-gray-300">{project.solution}</p>
                  </div>
                )}
             </div>
          )}

          <div className="mt-auto">
            {/* Tools */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tools.map((tool, index) => (
                <span key={index} className="text-[10px] font-bold text-gray-300 border border-white/10 bg-white/5 px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {tool}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/10">
              <Link
                href={project.demo || '#'}
                target="_blank"
                className="flex-1 bg-white text-black py-3 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
              >
                View Case Study
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href={project.demo || '#'}
                target="_blank"
                className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all"
              >
                <SiBehance size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
