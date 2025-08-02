import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import TechMarquee from '@/components/TechMarquee';
import ProjectsSection from '@/components/ProjectsSection';
import EducationTimeline from '@/components/EducationTimeline';
import CompetitiveStats from '@/components/CompetitiveStats';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

const Index: React.FC = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-black text-[#D1B3FF] min-h-screen relative"
      >
        {/* Animated Background Glow */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-[30vh] -left-[30vh] w-[80vh] h-[80vh] rounded-full bg-[#D946EF]/30 animate-glow-pulse"></div>
          <div className="absolute top-[70vh] -right-[20vh] w-[60vh] h-[60vh] rounded-full bg-[#F43F5E]/30 animate-glow-pulse" style={{ animationDelay: '2s' }}></div>

          <div className="absolute w-[100px] h-[100px] rounded-full bg-[#F43F5E]/10 blur-3xl animate-float" style={{ top: '20vh', left: '30vw' }}></div>
          <div className="absolute w-[80px] h-[80px] rounded-full bg-[#D946EF]/10 blur-3xl animate-float" style={{ top: '60vh', right: '25vw', animationDelay: '1.5s' }}></div>
        </div>

        {/* Header */}
        <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold italic text-[#D946EF]">Romit Jajal</h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-8 text-sm text-[#F1E3FF]">
                <li>
                  <a href="#projects" className="hover:text-[#F43F5E] transition-colors relative group">
                    Projects
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#F43F5E]/30 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#F43F5E] transition-colors relative group">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#F43F5E]/30 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/Romit Jajal Full Stack Developer CV.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-[#D946EF] rounded hover:bg-[#D946EF] hover:text-black transition"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Sections */}
        <main className="pt-16 relative z-10">
          <HeroSection />
          <CompetitiveStats />
          <ProjectsSection />
          <TechMarquee />
          <EducationTimeline />
          <BlogSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-[#D1B3FF]/60">
              © {new Date().getFullYear()} Romit Jajal. All rights reserved.
            </p>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
