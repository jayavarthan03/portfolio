import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      aria-label="Toggle Dark/Light Mode"
      className="p-2.5 rounded-full glass border border-slate-200/50 dark:border-slate-800/40 text-slate-700 dark:text-blue-400 hover:text-primary dark:hover:text-cyan-300 transition-all duration-300 shadow-md"
    >
      {theme === 'dark' ? (
        <FiSun className="w-5 h-5 text-yellow-400 animate-spin-slow" />
      ) : (
        <FiMoon className="w-5 h-5 text-slate-700" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
