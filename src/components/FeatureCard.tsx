import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ComponentType<any>; // Lucide icon component
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
      whileHover={{ y: -10, rotateY: 5, scale: 1.02 }}
      className="group relative bg-neutral-900 rounded-2xl shadow-xl overflow-hidden transform perspective-1000 border border-white/10"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Background gradient */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-700 flex items-center justify-center">
        <motion.div
          className="text-amber-400"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={80} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <motion.div className="p-8" style={{ transform: 'translateZ(20px)' }}>
        <motion.h3
          className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          {title}
        </motion.h3>
        <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-amber-400/20 to-yellow-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-amber-400/10 to-yellow-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
    </motion.div>
  );
};

export default FeatureCard;
