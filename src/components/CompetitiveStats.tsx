import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';
import { Briefcase } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
}

const CompetitiveStats: React.FC = () => {
  const experienceList: Experience[] = [
    {
      id: 1,
      title: "Web Developer Intern",
      company: "Zcientia Labs",
      period: "Mar 2023 – May 2023",
      description: [
        "Spearheaded a MERN-based resume builder with role-based access.",
        "Reduced API load time by 20% via optimized queries.",
        "Collaborated in Agile teams with UI/UX and product leads."
      ]
    },
    {
      id: 2,
      title: "MERN Stack Developer Intern",
      company: "Be Practical Tech Solutions",
      period: "2022 – 2023",
      description: [
        "Built and deployed a feature-rich e-commerce site from scratch.",
        "Developed scalable APIs and integrated clean front-end logic.",
        "Delivered ahead of deadlines with production-grade code."
      ]
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Premium lighting effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-corner-light-premium opacity-30 z-0"></div>
      
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="section-heading-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceList.map((exp, index) => (
          <GlowCard
  key={exp.id}
  delayIndex={index}
  intensity="medium"
  className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/30 transition-all duration-500"
>
  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

  <div className="p-6 relative z-10">
    <div className="flex items-center mb-2">
      <Briefcase className="w-5 h-5 text-accent" />
      <h3 className="text-lg font-semibold ml-2 text-white">{exp.title}</h3>
    </div>
    <p className="text-white/80 italic mb-1">{exp.company}</p>
    <p className="text-white/60 mb-4 text-sm">{exp.period}</p>
    <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
      {exp.description.map((line, i) => (
        <li key={i}>{line}</li>
      ))}
    </ul>
  </div>
</GlowCard>

          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveStats;
