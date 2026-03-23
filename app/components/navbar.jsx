"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Case Studies', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300">
      <div className="container mx-auto px-4 py-3 md:py-6">
        <div className="bg-white/90 backdrop-blur-2xl border border-gray-100 rounded-2xl md:rounded-full px-5 md:px-8 py-2 md:py-3.5 flex items-center justify-between shadow-lg">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-gray-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/favicon.png"
                alt="Ajay Kumar"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg md:text-xl font-black tracking-tighter text-gray-900 group-hover:text-orange-500 transition-colors uppercase">AJAY<span className="text-orange-500">.</span></span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-semibold text-gray-600 hover:text-orange-500 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="#contact" className="hidden sm:inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all shadow-md">
              Hire Me
            </Link>
            
            {/* Mobile Menu Button - App Style */}
            <button 
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center text-gray-900 bg-gray-50 rounded-full transition-all active:scale-90"
              aria-label="Toggle Menu"
            >
              {isOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile App Menu - Moved OUTSIDE for solid background */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] md:hidden bg-white">
          <div className="flex flex-col h-full overflow-y-auto">
            {/* Header in Menu */}
            <div className="px-6 py-6 flex items-center justify-between border-b border-gray-50 sticky top-0 bg-white">
               <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-black tracking-tighter text-gray-900 uppercase">AJAY<span className="text-orange-500">.</span></Link>
               <button onClick={() => setIsOpen(false)} className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-900 active:scale-90 transition-transform">
                 <HiX size={20} />
               </button>
            </div>

            {/* Vertical App Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8 py-10 px-6">
              {navLinks.map((link, idx) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-[2.75rem] font-black text-gray-900 hover:text-orange-500 transition-all uppercase tracking-tighter active:scale-90"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Footer in Menu */}
            <div className="p-6 pb-12">
              <Link 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full bg-gray-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-2xl active:scale-95 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
