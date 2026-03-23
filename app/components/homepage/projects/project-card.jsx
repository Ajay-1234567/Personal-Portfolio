// @flow strict

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

function ProjectCard({ project }) {
  return (
    <div className="group bg-white rounded-2xl md:rounded-[2.5rem] p-3.5 md:p-6 border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 overflow-hidden">
      {/* Project Image Container */}
      <div className="relative w-full aspect-[16/10] md:aspect-[4/3] rounded-xl md:rounded-3xl overflow-hidden bg-gray-50 mb-4 md:mb-8">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          sizes="(max-width: 768px) 100vw, 500px"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="px-1 md:px-2">
        {/* Role & Name */}
        <div className="flex items-center gap-2 mb-2 md:mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
          <span className="text-[9px] md:text-[11px] font-black uppercase tracking-widest text-gray-400">
            {project.role}
          </span>
        </div>

        <h3 className="text-xl md:text-4xl font-black text-gray-900 mb-2 md:mb-4 tracking-tighter uppercase leading-tight">
          {project.name}
        </h3>
        
        <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-5 md:mb-8 line-clamp-2 font-medium">
          {project.description}
        </p>

        {/* Tools & CTA */}
        <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-gray-50">
          <div className="flex gap-1.5 md:gap-2 flex-wrap">
            {project.tools.slice(0, 3).map((tool, index) => (
              <span key={index} className="text-[8px] md:text-[10px] font-black text-gray-400 border border-gray-100 px-2.5 py-1 rounded-full uppercase tracking-tighter">
                {tool}
              </span>
            ))}
          </div>

          <Link
            href={project.demo || '#'}
            target="_blank"
            className="w-9 h-9 md:w-14 md:h-14 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300"
          >
            <FiArrowRight size={18} className="md:w-6 md:h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
