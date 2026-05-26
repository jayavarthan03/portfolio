import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      {/* Outer wrapper that reacts to light/dark themes dynamically */}
      <div className="bg-lightBg dark:bg-darkBg text-slate-800 dark:text-slate-100 min-h-screen transition-colors duration-300 antialiased font-sans">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Core Single Page Application Sections */}
        <main>
          {/* Home / Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Projects Section */}
          <Projects />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Global Footer */}
        <Footer />
        
      </div>
    </ThemeProvider>
  );
}

export default App;
