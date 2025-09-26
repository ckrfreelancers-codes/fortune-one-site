import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, CurrencyRupeeIcon } from '@heroicons/react/24/outline';

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
        return 'bg-gradient-to-r from-green-500 to-green-600';
      case 'Selling Fast':
        return 'bg-gradient-to-r from-orange-500 to-red-500';
      case 'Pre-Launch':
        return 'bg-gradient-to-r from-blue-500 to-blue-600';
      case 'Exclusive':
        return 'bg-gradient-to-r from-purple-500 to-purple-600';
      case 'Coming Soon':
        return 'bg-gradient-to-r from-gray-500 to-gray-600';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600';
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
      className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform perspective-1000 hover:shadow-2xl transition-all duration-500 border border-[#CCBEB1]/30"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Image Section - Full width and proper height */}
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
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FFDBBB]/90 backdrop-blur-sm text-[#664930] text-sm font-medium">
          {project.type}
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#664930]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Hover content - Preview of features */}
        <motion.div 
          className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ y: 20 }}
          whileHover={{ y: 0 }}
        >
          <div className="flex flex-wrap gap-2">
            {project.features.slice(0, 3).map((feature, idx) => (
              <span key={idx} className="px-2 py-1 bg-[#FFDBBB]/20 backdrop-blur-sm rounded-lg text-xs font-medium">
                {feature}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Content Section - Complete project information */}
      <motion.div 
        className="p-6"
        style={{ transform: 'translateZ(20px)' }}
      >
        {/* Title */}
        <motion.h3 
          className="text-2xl font-bold text-[#664930] mb-3 group-hover:text-[#997E67] transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          {project.title}
        </motion.h3>

        {/* Location */}
        <div className="flex items-center text-[#664930]/70 mb-2">
          <MapPinIcon className="w-4 h-4 mr-2" />
          <span className="text-sm">{project.location}</span>
        </div>

        {/* Price */}
        <div className="flex items-center text-[#997E67] font-bold text-lg mb-4">
          <CurrencyRupeeIcon className="w-5 h-5 mr-1" />
          <span>{project.price}</span>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-[#664930] mb-2">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {project.features.map((feature, idx) => (
              <span 
                key={idx}
                className="text-xs px-2 py-1 bg-[#CCBEB1]/30 text-[#664930] rounded-lg font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-3 bg-gradient-to-r from-[#664930] to-[#997E67] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 text-sm"
          >
            View Details
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-3 border-2 border-[#664930] text-[#664930] font-semibold rounded-xl hover:bg-[#664930] hover:text-white transition-all duration-300 text-sm"
          >
            Schedule Visit
          </motion.button>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#CCBEB1]/20 to-[#997E67]/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  );
};

export default ProjectCard;