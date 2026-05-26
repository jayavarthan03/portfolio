import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const Projects = () => {
  const projectsList = [
    {
      title: 'Task Management App',
      description: 'A comprehensive collaborative task board inspired by Trello. Features drag-and-drop boards, task creation, label tags, deadlines, checklists, user activity logs, and real-time dashboard analytics.',
      tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'E-Commerce Website',
      description: 'A modern online shopping store featuring product catalog filterings, checkout cart state management, user authentication, dark theme, Stripe integration, and an administrator dashboard for processing orders.',
      tags: ['React.js', 'Node.js', 'Redux', 'Stripe API', 'Mongoose'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Hostel Power Saver System',
      description: 'An innovative IoT integrations dashboard tracking energy metrics in university hostels. Displays smart meter logs, real-time power consumption, automated shutdown schedules, and power saving recommendations.',
      tags: ['React.js', 'Express', 'IoT Dashboard', 'Chart.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Full Stack Internship Projects',
      description: 'A compilation of enterprise-level features deployed during my industrial internship, including automated PDF receipt engines, OAuth2 social logins, performance-optimized database queries, and unit test suites.',
      tags: ['React.js', 'Node.js', 'OAuth2.0', 'Jest', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  return (
    <section id="projects" className="py-24 relative bg-lightBg dark:bg-darkBg overflow-hidden">
      {/* Ambient background blob */}
      <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] rounded-full ambient-glow-2 pointer-events-none" />

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
            My <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-lg hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top ambient card glow */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Header Folder Icon */}
                <div className="flex justify-between items-center mb-6">
                  <div className="text-slate-400 dark:text-slate-600 group-hover:text-primary-light dark:group-hover:text-cyan-400 transition-colors duration-300">
                    <FiFolder className="w-9 h-9 stroke-[1.5]" />
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="p-2.5 rounded-xl glass border border-slate-200/50 dark:border-slate-800/40 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-cyan-300 transition-all duration-300 hover:shadow-md"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="p-2.5 rounded-xl glass border border-slate-200/50 dark:border-slate-800/40 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-cyan-300 transition-all duration-300 hover:shadow-md"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-primary-light dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-[10px] md:text-xs font-semibold px-3 py-1.5 rounded-full text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
