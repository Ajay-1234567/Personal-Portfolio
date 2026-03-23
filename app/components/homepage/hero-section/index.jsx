"use client";

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen pt-24 pb-12 md:pt-32 md:pb-20 flex items-center justify-center overflow-hidden bg-[#f3f4f6]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-5 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-4 py-2 rounded-full">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-[12px] md:text-sm font-bold text-orange-900 uppercase tracking-tighter">Available for New Opportunities</span>
            </div>

            {/* Title with Enhanced Typography */}
            <div>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-gray-900 leading-none md:leading-[0.85] mb-4 uppercase">
                {personalData.name}<span className="text-orange-500">.</span>
              </h1>
              <p className="text-lg md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent uppercase tracking-tight">
                {personalData.designation}
              </p>
            </div>

            {/* Professional Tagline */}
            <p className="text-sm md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              {personalData.description}
            </p>

            {/* CTAs with Enhanced Styling */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-5 pt-4">
              <Link
                href="#contact"
                className="group bg-gradient-to-r from-orange-500 to-pink-500 text-white px-7 md:px-8 py-3.5 md:py-4 rounded-full font-bold text-sm md:text-base hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/10"
              >
                <span className="flex items-center gap-2">
                  Let's Talk
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              <Link
                href="#projects"
                className="text-gray-900 font-bold text-sm md:text-base flex items-center gap-2 group px-6 md:px-7 py-3.5 md:py-4 border-2 border-gray-200 rounded-full hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
              >
                Projects
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </Link>
              <Link
                href={personalData.resume}
                target='_blank'
                className="text-gray-400 font-bold text-sm md:text-base flex items-center gap-2 group px-5 md:px-6 py-3.5 md:py-4 hover:text-orange-500 transition-all duration-300"
              >
                Resume
                <span className="group-hover:translate-y-1 transition-transform"><FaDownload /></span>
              </Link>
            </div>
          </div>

          {/* Right Column - Profile Photo */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Professional Profile Display */}
            <div className="relative w-[180px] sm:w-[250px] md:w-full aspect-square md:aspect-[4/5] max-w-sm mx-auto rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-orange-500 to-pink-500 p-1">
              <div className="w-full h-full bg-white rounded-[2.3rem] md:rounded-[2.8rem] overflow-hidden">
                <Image
                  src={personalData.profile || '/profile.png'}
                  alt={`${personalData.name} - ${personalData.designation}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
              </div>
            </div>

            {/* Floating Badge - More subtle on mobile */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-5 py-2 rounded-full shadow-xl border border-gray-50 whitespace-nowrap">
              <p className="text-[11px] md:text-sm font-black text-gray-900 uppercase tracking-tighter">{personalData.designation}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
