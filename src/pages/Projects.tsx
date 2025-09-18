// src/pages/Projects.tsx
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Footer
import Footer from "../components/Footer"; // make sure path is correct

const Projects = () => {
  const bengaluruProjects = [
    {
      id: 1,
      title: "Vista 1 & 2",
      type: "Plotted (RERA Approved)",
      value: "₹80 Cr",
      image: "/projects/vista.jpg", // place inside public/projects/
    },
    {
      id: 2,
      title: "Essha Vana",
      type: "Farm Plotted",
      value: "₹25 Cr",
      image: "/projects/essha-vana.jpg",
    },
    {
      id: 3,
      title: "Skylark",
      type: "Farm Plotted",
      value: "₹21 Cr",
      image: "/projects/skylark.jpg",
    },
    {
      id: 4,
      title: "Arham",
      type: "Commercial Office",
      value: "₹200 Cr",
      image: "/projects/arham.jpg",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-emerald-50 to-white text-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-700 via-amber-800 to-emerald-800 text-white text-center relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Bengaluru{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h1>
        <p className="text-lg md:text-xl text-amber-100">
          Assets under Management ~ <span className="font-bold">₹400 Cr</span>
        </p>
      </section>

      {/* Projects Slider */}
      <section className="py-16 max-w-7xl mx-auto px-6 flex-1">
        <Slider {...settings}>
          {bengaluruProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-4"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-[1.02]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{project.type}</p>
                  <p className="text-xl font-extrabold text-amber-600">
                    {project.value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;
