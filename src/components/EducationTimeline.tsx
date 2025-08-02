import React from 'react';
import { motion } from 'framer-motion';

interface Education {
  id: number;
  years: string;
  degree: string;
  institution: string;
  grade: string;
}

const EducationTimeline: React.FC = () => {
  const educationData: Education[] = [
    {
      id: 1,
      years: "2024–2026",
      degree: "Master of Information Technology (Networking & Cybersecurity)",
      institution: "Queensland University of Technology",
      grade: "Expected Completion: 2025"
    },
    {
      id: 2,
      years: "2018–2022",
      degree: "B.Tech in Computer Science Engineering",
      institution: "M.S. Ramaiah Institute of Applied Sciences",
      grade: "Completed with strong foundation in software engineering"
    }
  ];

  return (
    <section className="py-20 px-4 bg-dark-100/20 relative overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute w-[600px] h-[600px] bg-radial-glow-premium rounded-full opacity-20 -z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        
        <div className="relative pl-10">
          {/* Vertical timeline line */}
          <div className="absolute top-0 left-1 h-full w-0.5 bg-white/10"></div>

          {educationData.map((item, index) => (
            <motion.div 
              key={item.id}
              className="mb-12 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Dot */}
              <div className="absolute -left-5 top-3 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-red-500 shadow-md shadow-pink-500"></div>
              
              {/* Card */}
            <div className="relative group glow-card p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/30 transition-all duration-500">
  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500 -z-10"></div>

  <span className="text-white/60 block mb-1">{item.years}</span>
  <h3 className="text-xl font-bold mb-1 text-white">{item.degree}</h3>
  <p className="text-white/80 mb-1">{item.institution}</p>
  <p className="text-white/60 italic">{item.grade}</p>
</div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
