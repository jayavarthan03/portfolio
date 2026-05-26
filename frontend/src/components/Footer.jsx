import React from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub className="w-5 h-5" />, url: 'https://github.com', label: 'GitHub' },
    { icon: <FiLinkedin className="w-5 h-5" />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FiTwitter className="w-5 h-5" />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FiMail className="w-5 h-5" />, url: 'mailto:varthanjai123@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-12 glass border-t border-slate-200/40 dark:border-slate-800/30 overflow-hidden bg-white/70 dark:bg-darkBg/60 backdrop-blur-md">
      {/* Background ambient mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Brand details */}
        <div className="text-center md:text-left">
          <Link
            to="home"
            smooth={true}
            duration={600}
            className="cursor-pointer font-bold text-lg tracking-tight text-slate-800 dark:text-white"
          >
            Jaivarthan<span className="text-primary-light dark:text-cyan-400"> C</span>
          </Link>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
            © {currentYear} Jaivarthan C. All rights reserved. | Ariyalur, Tamil Nadu
          </p>
        </div>

        {/* Social media icons with animated micro-effects */}
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl glass border border-slate-200/50 dark:border-slate-800/40 text-slate-500 dark:text-slate-400 hover:text-primary-light dark:hover:text-cyan-400 hover:shadow-md transition-all duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Scroll back to top button */}
        <div>
          <Link
            to="home"
            smooth={true}
            duration={800}
            className="group flex items-center justify-center p-3 rounded-xl glass border border-slate-200/50 dark:border-slate-800/40 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-cyan-300 transition-all duration-300 cursor-pointer shadow hover:shadow-lg"
            title="Scroll to top"
          >
            <FiArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
