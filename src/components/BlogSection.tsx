import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  status: string;
}

const BlogSection: React.FC = () => {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Python Pro Bootcamp",
      issuer: "Udemy",
      status: "In Progress"
    },
    {
      id: 2,
      title: "MERN Developer Internship",
      issuer: "Zcientia Labs",
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden text-[#E5E7EB]">
      {/* Decorative glow */}
      <div className="light-ray-premium opacity-20 absolute top-[20%] left-[-10%] w-[70%] transform rotate-[30deg] z-0"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications & Learning
        </motion.h2>

        <div className="space-y-6">
          {certificates.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative group rounded-xl border border-white/10 p-6 bg-white/5 backdrop-blur-md overflow-hidden hover:border-white/20 transition-all">
                {/* Glow hover layer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 blur-lg rounded-xl z-0"></div>

                <div className="relative z-10 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{cert.title}</h3>
                    <p className="text-sm text-white/60">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80 group-hover:text-white">
                    <BadgeCheck className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                    {cert.status}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
