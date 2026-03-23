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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-2 md:py-6">
        <div className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl md:rounded-full px-5 md:px-8 py-2 md:py-3.5 flex items-center justify-between shadow-lg relative">
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
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-1.5 text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
            </button>
          </div>

          {/* Mobile Menu Drawer */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-3 mx-0 md:hidden animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="bg-white/95 backdrop-blur-2xl border border-gray-100 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 mx-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold text-gray-800 hover:text-orange-500 transition-colors py-2 border-b border-gray-50 last:border-0"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center py-3.5 rounded-xl font-bold mt-2 shadow-lg shadow-orange-500/20"
                >
                  Hire Me
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
