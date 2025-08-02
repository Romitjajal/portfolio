import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-dark-100/30 relative overflow-hidden">
      {/* Ambient glow circle */}
      <div className="absolute w-[400px] h-[400px] bg-radial-glow-premium rounded-full opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center"
        >
        <div className="relative group glow-card p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/30 transition-all duration-500 overflow-hidden max-w-md mx-auto">
  {/* Glowing background on hover */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500 z-0"></div>

  <div className="relative z-10 flex flex-col items-center text-center space-y-5">
    <h3 className="text-xl font-bold italic">Connect with me</h3>

    <a 
      href="https://www.linkedin.com/in/romitjajal/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="p-3 border border-white/10 rounded-full hover:border-white/40 transition-all hover:scale-110 relative group"
    >
      <Linkedin className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
      <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 blur-md -z-10 transition-opacity"></div>
    </a>

    <p className="text-white/70">Or email me at:</p>
    <a href="mailto:romitjajal07@gmail.com" className="text-white hover:text-white/90 hover:underline">
      romitjajal07@gmail.com
    </a>
  </div>
</div>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
