'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-dark-bg bg-opacity-80 backdrop-blur-lg shadow-lg' : ''}`} id="navbar">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="#home" className="text-2xl font-bold font-urbanist">Ashif</Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="nav-link relative hover:text-neon-cyan transition-colors duration-300">Home</Link>
            <Link href="#skills" className="nav-link relative hover:text-neon-cyan transition-colors duration-300">Skills</Link>
            <Link href="#certifications" className="nav-link relative hover:text-neon-cyan transition-colors duration-300">Certifications</Link>
            <Link href="#experience" className="nav-link relative hover:text-neon-cyan transition-colors duration-300">Experience</Link>
            <Link href="#projects" className="nav-link relative hover:text-neon-cyan transition-colors duration-300">Projects</Link>
            <Link href="#contact" className="nav-link relative hover:text-neon-cyan transition-colors duration-300">Contact</Link>
          </div>
          <div className="flex items-center">
            <button
              className="focus:outline-none mr-4"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
            </button>
            <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`} id="mobile-menu">
          <Link href="#home" className="block py-2 nav-link hover:text-neon-cyan transition-colors duration-300">Home</Link>
          <Link href="#skills" className="block py-2 nav-link hover:text-neon-cyan transition-colors duration-300">Skills</Link>
          <Link href="#certifications" className="block py-2 nav-link hover:text-neon-cyan transition-colors duration-300">Certifications</Link>
          <Link href="#experience" className="block py-2 nav-link hover:text-neon-cyan transition-colors duration-300">Experience</Link>
          <Link href="#projects" className="block py-2 nav-link hover:text-neon-cyan transition-colors duration-300">Projects</Link>
          <Link href="#contact" className="block py-2 nav-link hover:text-neon-cyan transition-colors duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;