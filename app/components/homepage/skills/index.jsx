import { 
  SiFigma, SiMiro, SiNotion, SiFramer, SiAdobephotoshop, 
  SiInvision, SiSketch, SiAdobeillustrator, SiCanva 
} from "react-icons/si";
import Marquee from "react-fast-marquee";

function Skills() {
  const designSkills = [
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    { name: 'Miro', icon: SiMiro, color: '#FFD02F' },
    { name: 'Notion', icon: SiNotion, color: '#000000' },
    { name: 'Framer', icon: SiFramer, color: '#0055FF' },
    { name: 'Photoshop', icon: SiAdobephotoshop, color: '#31A8FF' },
    { name: 'InVision', icon: SiInvision, color: '#FF3366' },
    { name: 'Sketch', icon: SiSketch, color: '#FDB300' },
    { name: 'Illustrator', icon: SiAdobeillustrator, color: '#FF9A00' },
    { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
  ];

  return (
    <div id="skills" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* App Header style */}
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter mb-4">
              My <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent underline decoration-orange-500/10">Toolkit</span>.
            </h2>
            <p className="text-sm md:text-xl text-gray-400 font-bold uppercase tracking-[0.2em]">Industry Standard Design Stack</p>
          </div>

          {/* Infinite Marquee - App Feel */}
          <div className="w-full relative py-6">
             {/* Gradient Overlays for App-like Fade */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <Marquee
              gradient={false}
              speed={60}
              pauseOnHover={true}
              play={true}
            >
              {[...designSkills, ...designSkills].map((skill, id) => (
                <div key={id} className="mx-8 md:mx-16 flex flex-col items-center gap-4 group transition-all duration-300 active:scale-90">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-50 rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 flex items-center justify-center p-4 md:p-6 shadow-sm group-hover:border-gray-900 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
                    <skill.icon 
                      size="100%" 
                      style={{ color: skill.color }}
                      className="transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <span className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest leading-none group-hover:text-gray-900 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;