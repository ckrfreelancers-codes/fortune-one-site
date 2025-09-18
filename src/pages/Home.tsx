import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Home as HomeIcon,
  Building2,
  User,
  Star,
  Hotel,
  Waves,
  Landmark,
  Handshake,
  Clock,
  Layers,
  BadgeCheck,
  Building
} from "lucide-react";

const Home: React.FC = () => {
  const slides = [
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?auto=format&fit=crop&w=1600&q=80",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen w-full">
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          className="h-full"
        >
          {slides.map((img, i) => (
            <div key={i} className="h-screen w-full relative">
              <img src={img} alt={`slide-${i}`} className="h-screen w-full object-cover" />
              {/* dark navy overlay for readability */}
              <div className="absolute inset-0 bg-branddark/70 flex items-center justify-center px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
                  <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                    Welcome to <span className="text-brandlight">Fortune One</span>
                  </h1>
                  <p className="mt-4 text-lg text-gray-200 text-center">
                    Building elegant lifestyles with trust & vision.
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Scaling Horizons Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          {/* Apartment Image */}
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
              alt="Fortune One Apartment"
              className="rounded-2xl shadow-xl w-full object-cover h-96"
            />
          </div>
          {/* Info Container */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Scaling Horizons</h3>
            <div className="text-lg text-blue-800 space-y-4 leading-relaxed">
              <p>
                We began our journey as a developer, building local residential properties in Chennai, rooted in a commitment to quality, timely delivery, and client trust.
              </p>
              <p>
                <span className="font-semibold text-blue-700">Big Push:</span> From 2021 to 2025, we evolved into a Development Management (DM) company, partnering with landowners, HNIs, investors, and institutions to deliver high-value real estate projects across India.
              </p>
              <p>
                With our advisory strength and execution capabilities, we unlocked multi-channel revenue streams and built long-term partnerships across Bengaluru, Mysuru, Gurgaon, Mumbai, Chennai, and other emerging corridors.
              </p>
              <p>
                <span className="font-semibold text-blue-700">Today:</span> With a proven portfolio and ₹12,000+ Cr pipeline, we are transitioning into a full-scale developer with strategic ambitions, ready to shape the future of urban living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-16 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-blue-900 mb-10 text-center">Our Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Residential & Commercial Spaces */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition">
              <Building2 className="w-12 h-12 text-blue-700 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Residential & Commercial Spaces</h4>
            </div>
            {/* Senior Living */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition">
              <User className="w-12 h-12 text-blue-700 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Senior Living</h4>
            </div>
            {/* Branded Residences */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition">
              <Star className="w-12 h-12 text-blue-700 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Branded Residences</h4>
            </div>
            {/* Hospitality */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition">
              <Hotel className="w-12 h-12 text-blue-700 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Hospitality</h4>
            </div>
            {/* Manmade Beaches */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition">
              <Waves className="w-12 h-12 text-blue-700 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Manmade Beaches</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          {/* High Quality Home Image */}
          <div className="flex-1 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80"
              alt="Luxury Home"
              className="rounded-2xl shadow-xl w-full object-cover h-96"
            />
          </div>
          {/* Product & Description Column */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-blue-900 mb-6">Core Services</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Landmark className="text-blue-700" /> 
                  <span className="font-semibold text-lg text-blue-800">Villas</span>
                </div>
                <p className="text-blue-700 ml-8">Premium independent homes in gated enclaves, offering privacy and green living.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Building2 className="text-blue-700" />
                  <span className="font-semibold text-lg text-blue-800">Plots</span>
                </div>
                <p className="text-blue-700 ml-8">Ready-to-build land parcels with clear titles in master planned layouts.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <HomeIcon className="text-blue-700" />
                  <span className="font-semibold text-lg text-blue-800">Row Houses</span>
                </div>
                <p className="text-blue-700 ml-8">Attached homes combining private space with a sense of community.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Building2 className="text-blue-700" />
                  <span className="font-semibold text-lg text-blue-800">Apartments</span>
                </div>
                <p className="text-blue-700 ml-8">Vertical living solutions with a balance of comfort, convenience, and amenities.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <User className="text-blue-700" />
                  <span className="font-semibold text-lg text-blue-800">Senior Living</span>
                </div>
                <p className="text-blue-700 ml-8">Residences tailored for seniors with care, wellness, and active community life.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Star className="text-blue-700" />
                  <span className="font-semibold text-lg text-blue-800">Branded Residences</span>
                </div>
                <p className="text-blue-700 ml-8">Signature homes co-created with global brands for lifestyle-focused living.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Hotel className="text-blue-700" />
                  <span className="font-semibold text-lg text-blue-800">Hospitality</span>
                </div>
                <p className="text-blue-700 ml-8">Hotels and serviced suites offering luxury, comfort, and guest-centric services.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Waves className="text-blue-700" />
                  <span className="font-semibold text-lg text-blue-800">Manmade Beaches</span>
                </div>
                <p className="text-blue-700 ml-8">Artificial lagoons that bring beachside living to urban and resort communities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights Section */}
      <section className="py-16 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-blue-900 mb-10 text-center">Investment Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* 01 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition relative">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold shadow-lg">01</span>
              <Handshake className="w-12 h-12 text-blue-700 mb-4 mt-6" />
              <h4 className="text-xl font-semibold mb-2">Strategic Partnerships with Top Brands</h4>
            </div>
            {/* 02 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition relative">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold shadow-lg">02</span>
              <Clock className="w-12 h-12 text-blue-700 mb-4 mt-6" />
              <h4 className="text-xl font-semibold mb-2">Customer-Centric Approach, On-Time Delivery</h4>
            </div>
            {/* 03 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition relative">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold shadow-lg">03</span>
              <Layers className="w-12 h-12 text-blue-700 mb-4 mt-6" />
              <h4 className="text-xl font-semibold mb-2">Innovative Product Mix: Driving Synergies & Maximizing Profits</h4>
            </div>
            {/* 04 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition relative">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold shadow-lg">04</span>
              <Building className="w-12 h-12 text-blue-700 mb-4 mt-6" />
              <h4 className="text-xl font-semibold mb-2">High Construction Standards</h4>
            </div>
            {/* 05 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition relative">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold shadow-lg">05</span>
              <BadgeCheck className="w-12 h-12 text-blue-700 mb-4 mt-6" />
              <h4 className="text-xl font-semibold mb-2">Transparent Dealings, Innovative Designs</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-blue-900 mb-10 text-center">Milestones</h3>
          <p className="text-lg text-blue-800 text-center mb-12">
            Company has achieved significant accomplishments within a short span of time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                year: 2014,
                details: ["Company Formation"]
              },
              {
                year: 2018,
                details: ["Launched 128 Unit Brikhouse, Real Estate and Promotion business"]
              },
              {
                year: 2020,
                details: ["Launched Elements-Active Senior Living homes, a retirement community"]
              },
              {
                year: 2021,
                details: ["Real Estate as a service (REaaS) to AMPA family developing Taj Hotel with Branded residence"]
              },
              {
                year: 2022,
                details: ["Brikhouse has been delivered"]
              },
              {
                year: 2023,
                details: ["On-boarded GT group for Real Estate Portfolio Management Services, Managing 75+ Acres of prime properties"]
              },
              {
                year: 2024,
                details: [
                  "Launched senior living communities: Elements II, Elements III",
                  "Expanded to NCR, Partnered with Sheraton",
                  "Launched Senior living community in Mysore (client name: Purple Brik)",
                  "Relationship with GT group has been committed",
                  "RE Portfolio Management Services for GT Bharathi",
                  "Branded Residences: 1. ITC-Welcome (client: RP Realcon) 2. Lamborghini, Connaught Place, Delhi (client: RP Buildcon)"
                ]
              },
              {
                year: 2025,
                details: [
                  "Fortune One Bharathi Meraki",
                  "Senior Living Launch: Valarpuram (Urban) 2. Elements 4 (Active)",
                  "Hospitality: 1. LoI signed for Taj Gateway, Ghaziabad",
                  "Launched Luxury Living- RON"
                ]
              }
            ].map((milestone, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                <div className="bg-blue-700 text-white text-center py-4">
                  <h4 className="text-2xl font-bold">{milestone.year}</h4>
                </div>
                <div className="p-6">
                  <Carousel
                    autoPlay={false}
                    infiniteLoop={false}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={milestone.details.length > 1}
                    className="milestone-carousel"
                  >
                    {milestone.details.map((detail, i) => (
                      <div key={i} className="text-center">
                        <p className="text-blue-800 leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-brandoffwhite">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-branddark mb-4">Discover Your Dream Home</h2>
          <p className="text-lg text-brandprimary mb-6">
             Discover a new standard of luxury living with Fortune One.  
            Our landmark developments blend sophisticated design, modern comfort, and sustainable innovation—crafted to elevate your lifestyle and redefine urban excellence.  
            Experience the art of fine living in every detail.
          </p>

          <div className="flex justify-center gap-4">
            <a href="/projects" className="px-6 py-3 bg-brandpurple text-white rounded-lg font-semibold hover:bg-brandlight transition">
              View Projects
            </a>
            <a href="/about" className="px-6 py-3 border-2 border-branddark text-branddark rounded-lg hover:bg-branddark hover:text-white transition">
              Learn More
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;