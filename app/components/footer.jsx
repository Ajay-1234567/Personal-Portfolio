import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin, BiLogoBehance } from "react-icons/bi";
import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-white/10 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2 group">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10 shadow-sm group-hover:border-primary/50 transition-colors">
                <Image
                  src="/favicon.png"
                  alt="G Ajay Kumar"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">G Ajay<span className="text-secondary">.</span></h2>
            </div>
            <p className="text-gray-500 font-light text-sm">© {new Date().getFullYear()} Designed & Built by G Ajay Kumar</p>
          </div>

          <div className="flex items-center gap-4">
            <Link href={personalData.linkedIn} target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/5">
              <BiLogoLinkedin size={20} />
            </Link>
            <Link href="https://www.behance.net/gajyakumar" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/5">
              <BiLogoBehance size={20} />
            </Link>
          </div>

          <div className="text-gray-500 text-xs font-bold uppercase tracking-widest hidden md:block">
            UI/UX PORTFOLIO
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;