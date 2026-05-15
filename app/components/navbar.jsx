"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 pt-4 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={clsx(
            "rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300",
            scrolled ? "glass-morphism-dark border-gray-800/50 shadow-2xl shadow-primary/5" : "bg-transparent border border-transparent"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-700 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/favicon.png"
                alt="Ajay Kumar"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">Ajay<span className="text-secondary">.</span></span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 bg-white/5 rounded-full px-6 py-2 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white hover:text-shadow-sm transition-all duration-300">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="#contact" className="hidden sm:inline-flex items-center justify-center bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all shadow-md hover:shadow-white/20">
              Hire Me
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white bg-white/10 border border-white/10 rounded-full transition-all active:scale-90"
              aria-label="Toggle Menu"
            >
              {isOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Full-Screen Mobile App Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] md:hidden glass-morphism-dark"
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-6">
              {/* Vertical App Links */}
              <div className="flex-1 flex flex-col items-center justify-center gap-8">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all tracking-tight"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer in Menu */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="p-6"
              >
                <Link 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full bg-white text-black py-4 rounded-full font-bold shadow-2xl active:scale-95 transition-all text-lg"
                >
                  Let's Talk
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
