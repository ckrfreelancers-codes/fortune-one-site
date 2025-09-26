import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, AcademicCapIcon, HeartIcon, TrophyIcon } from '@heroicons/react/24/outline';
import LoadingScreen from '../components/LoadingScreen';

const Career = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const values = [
    {
      icon: TrophyIcon,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do and recognize outstanding performance'
    },
    {
      icon: HeartIcon,
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards and transparency'
    },
    {
      icon: AcademicCapIcon,
      title: 'Growth',
      description: 'We invest in our people with continuous learning and career development opportunities'
    },
    {
      icon: BriefcaseIcon,
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to stay ahead of the market'
    }
  ];

  const openings = [
    { title: 'Senior Sales Manager', department: 'Sales', location: 'Bangalore', type: 'Full-time', experience: '5+ years' },
    { title: 'Marketing Specialist', department: 'Marketing', location: 'Bangalore', type: 'Full-time', experience: '3+ years' },
    { title: 'Project Manager', department: 'Operations', location: 'Bangalore', type: 'Full-time', experience: '7+ years' },
    { title: 'Customer Relations Executive', department: 'Customer Service', location: 'Pune', type: 'Full-time', experience: '2+ years' },
    { title: 'Financial Analyst', department: 'Finance', location: 'Bangalore', type: 'Full-time', experience: '4+ years' },
    { title: 'Legal Advisor', department: 'Legal', location: 'Bangalore', type: 'Full-time', experience: '6+ years' }
  ];

  return (
    <div className="min-h-screen pt-20 relative">
      <LoadingScreen loading={loading} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#664930] via-[#997E67] to-[#CCBEB1] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/3 left-1/5 w-48 h-48 border-2 border-white/10 rounded-3xl"
          />
          <motion.div
            animate={{ y: [0, -40, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FFDBBB]/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Join Our
              <span className="bg-gradient-to-r from-[#FFDBBB] to-white bg-clip-text text-transparent">
                {' '}Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#F5ECE5] max-w-4xl mx-auto leading-relaxed">
              Build your career with Fortune One and be part of a team that's shaping the future of luxury real estate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#FFF8F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#664930] mb-6">
              Our 
              <span className="bg-gradient-to-r from-[#997E67] to-[#CCBEB1] bg-clip-text text-transparent">{' '}Values</span>
            </h2>
            <p className="text-xl text-[#7A5F49] max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, type: 'spring' }}

                whileHover={{ y: -15, rotateY: 10, scale: 1.05 }}
                className="bg-gradient-to-br from-[#F5ECE5] to-[#E8D7C9] p-6 rounded-2xl shadow-lg hover:shadow-2xl text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#664930] to-[#997E67] rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <value.icon className="h-8 w-8 text-[#FFDBBB]" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#664930] mb-3">{value.title}</h3>
                <p className="text-[#7A5F49] text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gradient-to-r from-[#F5ECE5] to-[#FFF8F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#664930] mb-6">
              Current 
              <span className="bg-gradient-to-r from-[#997E67] to-[#CCBEB1] bg-clip-text text-transparent">{' '}Openings</span>
            </h2>
            <p className="text-xl text-[#7A5F49] max-w-3xl mx-auto">
              Explore exciting opportunities to grow your career with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, rotateX: 30 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
                whileHover={{ y: -10, rotateY: 5, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl"
              >
                <h3 className="text-xl font-bold text-[#664930] mb-2">{job.title}</h3>
                <div className="flex items-center justify-between text-sm text-[#7A5F49] mb-4">
                  <span className="bg-[#FFDBBB] text-[#664930] px-2 py-1 rounded-lg font-medium">{job.department}</span>
                  <span>{job.type}</span>
                </div>
                <div className="space-y-2 text-sm text-[#7A5F49] mb-6">
                  <div className="flex items-center"><span className="font-medium">Location:</span><span className="ml-2">{job.location}</span></div>
                  <div className="flex items-center"><span className="font-medium">Experience:</span><span className="ml-2">{job.experience}</span></div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-[#664930] to-[#997E67] text-[#FFDBBB] font-semibold rounded-xl hover:shadow-lg"
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#664930] mb-6">
              Apply 
              <span className="bg-gradient-to-r from-[#997E67] to-[#CCBEB1] bg-clip-text text-transparent">{' '}Today</span>
            </h2>
            <p className="text-xl text-[#7A5F49]">
              Don't see a perfect match? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#F5ECE5] to-[#FFF8F2] p-8 rounded-2xl shadow-lg"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#664930] mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67] focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#664930] mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67] focus:border-transparent" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#664930] mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67] focus:border-transparent" />
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-medium text-[#664930] mb-2">Position of Interest</label>
                <select id="position" className="w-full px-4 py-3 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67] focus:border-transparent">
                  <option value="">Select a position</option>
                  {openings.map((job, i) => <option key={i} value={job.title}>{job.title}</option>)}
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-[#664930] mb-2">Resume/CV</label>
                <input type="file" id="resume" accept=".pdf,.doc,.docx" className="w-full px-4 py-3 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67] focus:border-transparent" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#664930] mb-2">Cover Letter / Message</label>
                <textarea id="message" rows={6} className="w-full px-4 py-3 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67] focus:border-transparent resize-none"></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#664930] to-[#997E67] text-[#FFDBBB] font-bold text-lg rounded-xl shadow-lg hover:shadow-xl"
              >
                Submit Application
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Career;
