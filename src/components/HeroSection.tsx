import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 relative overflow-hidden text-[#E5E7EB]">
      {/* Premium corner lights */}
      <div className="corner-light-premium"></div>
      <div className="corner-light-premium" style={{ right: 0, left: 'auto', transform: 'rotate(90deg)' }}></div>
      
      {/* Light rays */}
      <div className="light-ray-premium opacity-20" style={{ top: '10%', left: '-10%', width: '80%', transform: 'rotate(25deg)' }}></div>
      <div className="light-ray-premium opacity-15" style={{ top: '30%', left: '-5%', width: '60%', transform: 'rotate(15deg)' }}></div>
      <div className="light-ray-premium opacity-10" style={{ top: '60%', left: '-15%', width: '70%', transform: 'rotate(-10deg)' }}></div>
      
      {/* Central soft glow */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.15),transparent)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 animate-glow-pulse"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold italic mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-block"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariants}
          >
            Hi, <span className="text-[#C084FC]">I'm Romit Jajal</span> —
          </motion.span>{" "}
          <motion.span 
            className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-transparent bg-clip-text"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textVariants}
          >
            crafting secure, scalable digital products.
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl font-light italic text-[#D1D5DB] mb-10 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Full Stack Developer | React, Node.js, MongoDB | Cybersecurity Enthusiast
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <a 
            href="#projects" 
            className="cta-button-premium group inline-flex items-center gap-2 border border-[#C084FC] text-[#C084FC] px-6 py-3 rounded hover:bg-[#C084FC]/20 transition"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
