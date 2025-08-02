import React from 'react';
import {
  Code2, Database, ServerCrash, Terminal, Paintbrush, Cloud, ShieldCheck, FlaskConical
} from 'lucide-react';
import { motion } from 'framer-motion';

const TechMarquee: React.FC = () => {
  const techStackRow1 = [
    { name: "React", icon: <Code2 className="w-5 h-5 mr-2" /> },
    { name: "Node.js", icon: <ServerCrash className="w-5 h-5 mr-2" /> },
    { name: "Express.js", icon: <ServerCrash className="w-5 h-5 mr-2" /> },
    { name: "MongoDB", icon: <Database className="w-5 h-5 mr-2" /> },
    { name: "TailwindCSS", icon: <Paintbrush className="w-5 h-5 mr-2" /> },
    { name: "HTML/CSS", icon: <Code2 className="w-5 h-5 mr-2" /> },
    { name: "JavaScript", icon: <Code2 className="w-5 h-5 mr-2" /> },
  ];

  const techStackRow2 = [
    { name: "Python", icon: <Terminal className="w-5 h-5 mr-2" /> },
    { name: "Flask", icon: <FlaskConical className="w-5 h-5 mr-2" /> },
    { name: "Wireshark", icon: <ShieldCheck className="w-5 h-5 mr-2" /> },
    { name: "Postman", icon: <Terminal className="w-5 h-5 mr-2" /> },
    { name: "Git & GitHub", icon: <Code2 className="w-5 h-5 mr-2" /> },
    { name: "SQL", icon: <Database className="w-5 h-5 mr-2" /> },
    { name: "Redux", icon: <Code2 className="w-5 h-5 mr-2" /> }
  ];

  const renderMarqueeItems = (items: Array<{ name: string; icon: React.ReactNode }>) => {
    return items.map((tech, index) => (
      <span
        key={index}
        className="mx-5 px-4 py-2 rounded-full border border-white/10 bg-gradient-to-r from-purple-600/20 via-pink-500/10 to-transparent text-white/80 hover:text-white/100 hover:border-white/30 hover:scale-105 backdrop-blur-md transition-all duration-300 flex items-center text-sm"
      >
        {tech.icon}
        {tech.name}
      </span>
    ));
  };

  return (
    <section className="py-20 bg-dark-100/30 relative max-w-screen-xl mx-auto px-10 overflow-hidden">
      {/* Central radial glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-radial-glow-premium opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

      {/* Section Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Technical Skills & Stack
      </motion.h2>

      {/* Marquee Row 1 */}
      <div className="relative overflow-hidden">
        <div className="animate-scroll-right flex whitespace-nowrap py-5">
          {renderMarqueeItems(techStackRow1)}
        </div>
      </div>

      {/* Marquee Row 2 */}
      <div className="relative overflow-hidden mt-10">
        <div className="animate-scroll-left flex whitespace-nowrap py-5">
          {renderMarqueeItems(techStackRow2)}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
