import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  loading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ loading }) => {
  if (!loading) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-transparent flex items-center justify-center z-[9999]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
      >
        <div className="text-center">
          <motion.img
            src="/Fortune One.png"
            alt="Fortune One Logo"
            className="w-auto h-auto max-w-40 max-h-40 mb-4 drop-shadow-2xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;