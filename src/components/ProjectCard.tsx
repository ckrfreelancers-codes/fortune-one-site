import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

interface Project {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  image: string;
  status: string;
  features: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-500';
      case 'Selling Fast':
        return 'bg-orange-500';
      case 'Pre-Launch':
        return 'bg-blue-500';
      case 'Exclusive':
        return 'bg-purple-500';
      case 'Coming Soon':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        type: 'spring',
        stiffness: 80
      }}
      whileHover={{ 
        y: -15, 
        rotateY: 5,
        scale: 1.02,
        rotateX: -5
      }}
      className="group bg-white rounded-2xl shadow-xl overflow-hidden transform perspective-1000 hover:shadow-2xl transition-all duration-500"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700"
          whileHover={{ scale: 1.1 }}
        />
        
        {/* Status badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold ${getStatusColor(project.status)}`}>
          {project.status}
        </div>
        
        {/* Type badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium">
          {project.type}
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Hover content */}
        <motion.div 
          className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ y: 20 }}
          whileHover={{ y: 0 }}
        >
          <div className="flex flex-wrap gap-2">
            {project.features.slice(0, 3).map((feature, idx) => (
              <span key={idx} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium">
                {feature}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="p-6"
        style={{ transform: 'translateZ(20px)' }}
      >
        <motion.h3 
          className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          {project.title}
        </motion.h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPinIcon className="h-4 w-4 mr-1" />
          <span className="text-sm">{project.location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-blue-600 font-bold text-lg">
            <CurrencyDollarIcon className="h-5 w-5 mr-1" />
            {project.price}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.features.map((feature, idx) => (
            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
              {feature}
            </span>
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-gradient-to-r from-amber-400 to-yellow-600 text-gray-900 font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group-hover:from-amber-300 group-hover:to-yellow-500"
        >
          View Details
        </motion.button>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  );
};

export default ProjectCard;