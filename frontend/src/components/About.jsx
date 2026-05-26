import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiBookOpen, FiClock } from 'react-icons/fi';

const About = () => {
  const stats = [
    { icon: <FiAward className="w-5 h-5" />, value: '15+', label: 'Projects Completed' },
    { icon: <FiBookOpen className="w-5 h-5" />, value: '3.9', label: 'Cumulative GPA' },
    { icon: <FiClock className="w-5 h-5" />, value: '1000+', label: 'Hours of Coding' },
  ];

  return (
    <section id="about" className="py-24 relative bg-lightBg dark:bg-darkBg overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-[30%] right-[-10%] w-[300px] h-[300px] rounded-full ambient-glow-2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Beautiful Decorative Graphic / Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden glass border border-slate-200/50 dark:border-slate-800/40 p-4 shadow-xl"
            >
              {/* Inner Decorative Tech Image Placeholder / Avatar Container */}
              <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 rounded-2xl flex flex-col justify-between p-6 relative group overflow-hidden">
                {/* Visual grid inside the card */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                
                {/* Floating Glowing Particle */}
                <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-cyan-400/20 blur-xl animate-float-delayed" />
                
                <div className="flex justify-between items-start z-10">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 text-cyan-400 border border-white/10">
                    <FiBookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-white/5 px-2.5 py-1.5 rounded-full border border-white/5">
                    Developer Intern
                  </span>
                </div>
                
                <div className="z-10">
                  <h3 className="font-extrabold text-2xl text-white tracking-wide leading-tight">
                    Jaivarthan <br />
                    C
                  </h3>
                  <p className="text-cyan-400 text-xs font-semibold tracking-wider mt-1.5 uppercase">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Personal Bio & Resume Download */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center lg:text-left"
            >
              Building digital solutions with focus and creativity
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-center lg:text-left text-sm md:text-base"
            >
              I am Jaivarthan C, a passionate Full Stack Developer currently studying at Chennai Institute of Technology. I completed my schooling at Montfort Matric Higher Secondary School. I enjoy building modern, responsive, and user-friendly web applications.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-center lg:text-left text-sm md:text-base"
            >
              I am continuously learning new technologies and improving my development skills to create innovative real-world solutions. I focus on developing clean codebase structures, designing seamless user experiences, and integrating full-stack web APIs.
            </motion.p>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="glass-card rounded-2xl p-4 flex flex-col items-center justify-center text-center"
                >
                  <div className="text-primary-light dark:text-cyan-400 bg-blue-100/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-800/20 rounded-xl p-2 mb-2 shadow-sm">
                    {stat.icon}
                  </div>
                  <span className="font-extrabold text-base md:text-xl text-slate-900 dark:text-white leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-xs text-slate-500 dark:text-slate-500 font-medium tracking-tight mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Resume Download Action Section */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <a
                href="/resume.pdf"
                download="Jaivarthan_C_Resume.pdf"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 dark:from-blue-500 dark:to-cyan-400 dark:hover:from-blue-600 dark:hover:to-cyan-500 text-white font-semibold text-sm cursor-pointer shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <FiDownload className="w-4 h-4 animate-bounce-slow" />
                Download Full Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
