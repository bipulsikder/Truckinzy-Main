import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Users, Building2, CheckCircle, ArrowRight, Award } from 'lucide-react';
import { ContactModal } from './ContactModal';

const stats = [
  { 
    icon: Users, 
    label: 'Professionals Placed', 
    value: '100+',
    description: 'Qualified logistics professionals placed across the industry'
  },
  { 
    icon: Building2, 
    label: 'Partner Companies', 
    value: '10+',
    description: 'Trusted transportation and logistics firms nationwide'
  },
  { 
    icon: CheckCircle, 
    label: 'Verified Candidates', 
    value: '5000+',
    description: 'Pre-screened and verified logistics professionals'
  },
];

export const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const [showWhiteCollarModal, setShowWhiteCollarModal] = useState(false);
  const [showDriverModal, setShowDriverModal] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          'Hiring Made Simple for Logistics.',
          'Simplify Your Logistics Workforce.',
          'Connect with Top Industry Talent.',
        ],
        typeSpeed: 40,
        backSpeed: 30,
        startDelay: 200,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      });

      return () => typed.destroy();
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-40 h-40 transform -translate-x-1/2 animate-truck"
              style={{ 
                top: `${30 * (i + 1)}%`,
                animationDelay: `${i * 5}s`
              }}
            >
              <Truck className="w-full h-full text-white/5" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Hero Title */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6 text-white">
              {/* Add a fixed height container for the typed text */}
              <div className="h-[120px] md:h-[160px] flex items-center justify-center">
                <span ref={typedRef}></span>
              </div>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Connect with top logistics talent and certified drivers. Streamline your hiring process with our industry-leading platform.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-24"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              onClick={() => setShowWhiteCollarModal(true)}
            >
              Hire Logistics Talent
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,165,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              onClick={() => setShowDriverModal(true)}
            >
              Find Truck Drivers
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onHoverStart={() => setHoveredStat(index)}
                onHoverEnd={() => setHoveredStat(null)}
                className="glass-card rounded-xl p-8 text-white relative group cursor-pointer"
              >
                <motion.div
                  animate={{
                    scale: hoveredStat === index ? 1.1 : 1,
                    y: hoveredStat === index ? -5 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center"
                >
                  <stat.icon className="w-16 h-16 mb-4 text-blue-200" />
                  <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold mb-2">{stat.label}</div>
                  <p className="text-sm text-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {stat.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex items-center justify-center gap-4 text-white/80"
          >
            <Award className="w-6 h-6" />
            <span className="text-sm">Trusted by startups, MSMEs and leading logistics companies nationwide</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Modals */}
      <AnimatePresence>
        {showWhiteCollarModal && (
          <ContactModal
            isOpen={showWhiteCollarModal}
            onClose={() => setShowWhiteCollarModal(false)}
            type="white-collar"
          />
        )}
        {showDriverModal && (
          <ContactModal
            isOpen={showDriverModal}
            onClose={() => setShowDriverModal(false)}
            type="driver"
          />
        )}
      </AnimatePresence>
    </div>
  );
};