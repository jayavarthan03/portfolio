import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiLayers, FiDatabase, FiCpu } from 'react-icons/fi';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: <FiLayers className="w-4 h-4" /> },
    { id: 'backend', name: 'Backend', icon: <FiDatabase className="w-4 h-4" /> },
    { id: 'languages', name: 'Languages', icon: <FiCode className="w-4 h-4" /> },
    { id: 'tools', name: 'Tools & Others', icon: <FiCpu className="w-4 h-4" /> },
  ];

  const skillsData = {
    frontend: [
      { name: 'React.js', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 80 },
      { name: 'Redux / Context API', level: 85 },
      { name: 'HTML5 & CSS3', level: 95 },
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'MongoDB / Mongoose', level: 82 },
      { name: 'REST APIs', level: 90 },
      { name: 'SQL / PostgreSQL', level: 70 },
    ],
    languages: [
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'TypeScript', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'C++', level: 70 },
      { name: 'Java', level: 65 },
    ],
    tools: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 60 },
      { name: 'Postman', level: 85 },
      { name: 'Linux / Command Line', level: 78 },
      { name: 'Vercel / Render / Netlify', level: 80 },
    ],
  };

  return (
    <section id="skills" className="py-24 relative bg-lightBg dark:bg-darkBg overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full ambient-glow-1 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20'
                  : 'glass text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/40 hover:text-primary dark:hover:text-cyan-300'
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Skills List Container */}
        <div className="max-w-3xl mx-auto glass rounded-3xl p-6 md:p-10 shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl pointer-events-none" />

          {/* Animate list item changes */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {skillsData[activeTab].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center text-sm md:text-base font-semibold text-slate-800 dark:text-slate-200">
                    <span>{skill.name}</span>
                    <span className="text-primary-light dark:text-cyan-400 font-mono">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Outer Bar */}
                  <div className="h-3 w-full bg-slate-200 dark:bg-slate-800/80 rounded-full overflow-hidden p-[2px]">
                    {/* Inner Animated Bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: index * 0.05 }}
                      className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 dark:from-blue-600 dark:via-cyan-400 dark:to-blue-500 rounded-full shadow-lg shadow-cyan-500/30"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
