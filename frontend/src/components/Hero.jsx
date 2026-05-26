import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  // Simple custom typewriter effect
  const roles = ['Full Stack Developer', 'Software Developer Student', 'CIT Chennai Student', 'Problem Solver'];
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const fullText = roles[currentRoleIdx];

    const handleType = () => {
      if (!isDeleting) {
        // Typing letters
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Pause at the end of word, then start deleting
          setTypingSpeed(2000); // 2s pause
          setIsDeleting(true);
        } else {
          setTypingSpeed(100);
        }
      } else {
        // Deleting letters
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500); // short pause before typing next
        } else {
          setTypingSpeed(60);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIdx]);

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern bg-lightBg dark:bg-darkBg"
    >
      {/* Floating Ambient Glowing Blobs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full ambient-glow-1 animate-float pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full ambient-glow-2 animate-float-delayed pointer-events-none" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Side: Text Info */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider text-primary dark:text-cyan-300 bg-blue-100/50 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-800/30 mb-6 shadow-sm">
              🚀 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15]"
          >
            Hi, I'm <span className="text-gradient">Jaivarthan C</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-12 md:h-16 flex items-center justify-center lg:justify-start mt-3 mb-6"
          >
            <p className="text-lg md:text-2xl font-medium text-slate-700 dark:text-slate-300">
              I am a{' '}
              <span className="text-primary-light dark:text-cyan-400 font-semibold border-r-2 border-primary-light dark:border-cyan-400 pr-1 animate-pulse">
                {currentText}
              </span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            A passionate Full Stack Developer currently studying at Chennai Institute of Technology. I completed my schooling at Montfort Matric Higher Secondary School. I enjoy building modern, responsive, and user-friendly web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
          >
            <Link
              to="projects"
              smooth={true}
              offset={-80}
              duration={600}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 dark:from-blue-500 dark:to-cyan-400 dark:hover:from-blue-600 dark:hover:to-cyan-500 text-white font-semibold text-sm cursor-pointer shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/25 transition-all duration-300"
            >
              View My Work
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={600}
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-slate-200/50 dark:border-slate-800/40 text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-cyan-400 text-sm font-semibold cursor-pointer transition-all duration-300"
            >
              Hire Me
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-xl glass border border-slate-200/50 dark:border-slate-800/40 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-cyan-300 shadow hover:shadow-lg transition-all duration-300"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-xl glass border border-slate-200/50 dark:border-slate-800/40 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-cyan-300 shadow hover:shadow-lg transition-all duration-300"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:varthanjai123@gmail.com"
              aria-label="Email"
              className="p-3 rounded-xl glass border border-slate-200/50 dark:border-slate-800/40 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-cyan-300 shadow hover:shadow-lg transition-all duration-300"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Interactive Animated Code Card */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="w-full max-w-[450px] aspect-square rounded-3xl glass border border-slate-200/50 dark:border-slate-800/40 p-6 flex flex-col shadow-2xl relative"
          >
            {/* Ambient inner card glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-3xl pointer-events-none" />

            {/* MacOS like Terminal Dots */}
            <div className="flex gap-2 mb-6">
              <span className="w-3.5 h-3.5 rounded-full bg-red-400/90 block shadow" />
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-400/90 block shadow" />
              <span className="w-3.5 h-3.5 rounded-full bg-green-400/90 block shadow" />
            </div>

            {/* Code Snippet content */}
            <div className="flex-1 font-mono text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed overflow-auto">
              <p className="text-blue-600 dark:text-cyan-400 font-semibold mb-2">const developer = &#123;</p>
              <div className="pl-4 space-y-1.5">
                <p>name: <span className="text-emerald-600 dark:text-emerald-400">'Jaivarthan C'</span>,</p>
                <p>role: <span className="text-emerald-600 dark:text-emerald-400">'Full Stack Developer'</span>,</p>
                <p>location: <span className="text-emerald-600 dark:text-emerald-400">'Ariyalur, Tamil Nadu'</span>,</p>
                <p>
                  languages: [
                  <span className="text-amber-600 dark:text-amber-400">'JS'</span>,{' '}
                  <span className="text-amber-600 dark:text-amber-400">'TS'</span>,{' '}
                  <span className="text-amber-600 dark:text-amber-400">'Python'</span>,{' '}
                  <span className="text-amber-600 dark:text-amber-400">'Java'</span>
                  ],
                </p>
                <p>
                  frontend: [
                  <span className="text-indigo-600 dark:text-indigo-400">'React'</span>,{' '}
                  <span className="text-indigo-600 dark:text-indigo-400">'Tailwind'</span>
                  ],
                </p>
                <p>
                  backend: [
                  <span className="text-indigo-600 dark:text-indigo-400">'Node.js'</span>,{' '}
                  <span className="text-indigo-600 dark:text-indigo-400">'Express'</span>,{' '}
                  <span className="text-indigo-600 dark:text-indigo-400">'Mongo'</span>
                  ],
                </p>
                <p className="text-slate-500 dark:text-slate-500">// Driven by caffeine and logic</p>
                <p>learning: <span className="text-purple-600 dark:text-purple-400">() =&gt; 'Always'</span></p>
              </div>
              <p className="text-blue-600 dark:text-cyan-400 font-semibold mt-2">&#125;;</p>
            </div>
            
            {/* Subtle Interactive micro-animation button inside the mock terminal */}
            <div className="mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/40 flex justify-between items-center">
              <span className="text-[10px] text-slate-500 dark:text-slate-500">SYSTEM: ACTIVE</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
