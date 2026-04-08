// @flow strict

import { personalData } from "@/utils/data/personal-data";

function AboutSection() {
  return (
    <div id="about" className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-200/20 to-orange-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header with Subtitle */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              About <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto px-4">
              Passionate about creating meaningful digital experiences
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 p-6 md:p-12 border border-gray-100 mx-1 md:mx-0">
            {/* Description with Better Typography */}
            <p className="text-base md:text-2xl text-gray-700 leading-relaxed text-center lg:text-left font-medium">
              {personalData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;