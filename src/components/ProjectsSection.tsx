import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Fixrr – Local Trade Services",
      description: "A MERN-based platform connecting users with local tradies like electricians and plumbers, with secure role-based login and dashboards.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Nodemailer"]
    },
    {
      id: 2,
      title: "Resume Builder App",
      description: "A full-stack resume generator app with role-based access, reusable React UI, and optimized MongoDB performance.",
      techStack: ["React", "Express", "MongoDB", "Node.js"]
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "Built a scalable online store with secure product management, shopping flow, and responsive UI.",
      techStack: ["React", "Redux", "Node.js", "MongoDB", "Express"]
    },
    {
      id: 4,
      title: "Movie Recommendation System",
      description: "A Python-Flask ML system offering content-based movie suggestions with real-time front-end display.",
      techStack: ["Python", "Flask", "Pandas", "Scikit-learn", "HTML/CSS"]
    },
    {
      id: 5,
      title: "House Price Prediction Tool",
      description: "React- and Flask-powered tool to predict real estate values based on regression models and user inputs.",
      techStack: ["React", "Flask", "Pandas", "Scikit-learn"]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden text-[#E5E7EB]">
      {/* Light accents */}
      <div className="corner-light-premium top-0 right-0 opacity-40"></div>
      <div className="light-ray-premium opacity-20" style={{ top: '30%', right: '-20%', width: '70%', transform: 'rotate(165deg)' }}></div>
      <div className="light-ray-premium opacity-15" style={{ top: '60%', right: '-10%', width: '50%', transform: 'rotate(150deg)' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GlowCard 
                intensity={index % 3 === 0 ? 'high' : index % 2 === 0 ? 'medium' : 'low'}
                className="group h-full bg-white/5 backdrop-blur-md rounded-xl border border-white/10 transition-all"
                hoverScale={1.03}
              >
                <div className="p-6 h-full flex flex-col relative z-10">
                  {/* Smooth hover highlight */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-purple-500 via-pink-400 to-red-400 blur-xl rounded-xl transition-all"></div>

                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-3 py-1 bg-dark-200/30 backdrop-blur-sm border border-white/10 rounded-full text-white/60 group-hover:text-white/90 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
