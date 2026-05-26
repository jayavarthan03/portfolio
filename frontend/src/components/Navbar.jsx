import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiTerminal } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to detect when user scrolls past top of page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Skills', target: 'skills' },
    { name: 'Projects', target: 'projects' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-4 glass-nav shadow-lg' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo / Name */}
        <Link
          to="home"
          smooth={true}
          duration={600}
          className="flex items-center gap-2 cursor-pointer font-bold text-xl tracking-tight"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-primary-light dark:text-cyan-400"
          >
            <FiTerminal className="w-6 h-6" />
          </motion.div>
          <span className="text-slate-900 dark:text-white font-sans">
            Jaivarthan<span className="text-primary-light dark:text-cyan-400"> C</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.target}>
                <Link
                  to={link.target}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={600}
                  activeClass="text-primary-light dark:text-cyan-400 font-semibold"
                  className="text-slate-600 dark:text-slate-300 hover:text-primary-light dark:hover:text-cyan-400 transition-all duration-300 cursor-pointer text-sm font-medium relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary-light dark:after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800" />
          
          {/* Theme Switcher & Resume Download */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              download="Jaivarthan_C_Resume.pdf"
              className="px-4 py-2 rounded-lg text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 dark:from-blue-500 dark:to-cyan-400 dark:hover:from-blue-600 dark:hover:to-cyan-500 shadow-md hover:shadow-cyan-500/20 active:scale-95 transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </nav>

        {/* Mobile Navbar Hamburger & Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-lg glass text-slate-800 dark:text-slate-200"
          >
            {navOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[72px] left-4 right-4 z-40 p-6 glass rounded-2xl flex flex-col md:hidden gap-6 shadow-2xl"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.target}>
                  <Link
                    to={link.target}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={600}
                    activeClass="text-primary-light dark:text-cyan-400 font-semibold pl-2 border-l-2 border-primary-light dark:border-cyan-400"
                    onClick={() => setNavOpen(false)}
                    className="block text-slate-700 dark:text-slate-300 hover:text-primary-light dark:hover:text-cyan-400 transition-all duration-200 cursor-pointer text-base font-medium py-1.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />
            <a
              href="/resume.pdf"
              download="Jaivarthan_C_Resume.pdf"
              className="w-full text-center px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 dark:from-blue-500 dark:to-cyan-400 dark:hover:from-blue-600 dark:hover:to-cyan-500 shadow-md transition-all duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
