import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Truck, Shield, Clock, ClipboardCheck, Globe, Users } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: "Specialized in Logistics & Supply Chain Hiring",
    hoverText: "Get access to candidates who understand the unique challenges of the logistics industry",
    gradient: "from-blue-400 to-blue-600",
    bgLight: "bg-blue-50"
  },
  {
    icon: Shield,
    title: "Pre-Screened & Verified Candidates",
    hoverText: "Every candidate undergoes thorough background checks and skill assessments",
    gradient: "from-purple-400 to-purple-600",
    bgLight: "bg-purple-50"
  },
  {
    icon: Clock,
    title: "Faster Turnaround Time",
    hoverText: "Get qualified candidates in less than a week",
    gradient: "from-green-400 to-green-600",
    bgLight: "bg-green-50"
  },
  {
    icon: ClipboardCheck,
    title: "End-to-End Recruitment Support",
    hoverText: "Complete recruitment solution from sourcing to onboarding",
    gradient: "from-red-400 to-red-600",
    bgLight: "bg-red-50"
  },
  {
    icon: Globe,
    title: "Nationwide Network & Local Expertise",
    hoverText: "Access talent from all major logistics hubs across India",
    gradient: "from-yellow-400 to-yellow-600",
    bgLight: "bg-yellow-50"
  },
  {
    icon: Users,
    title: "Reduce Attrition, Improve Workforce Stability",
    hoverText: "Proven strategies to improve employee retention and satisfaction",
    gradient: "from-indigo-400 to-indigo-600",
    bgLight: "bg-indigo-50"
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }}
      whileHover={{ scale: 1.03 }}
      className="relative group"
    >
      <div className={`bg-white rounded-2xl shadow-xl p-6 sm:p-8 h-full transform transition-all duration-300
                    group-hover:shadow-2xl group-hover:-translate-y-2 ${feature.bgLight} bg-opacity-40`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 
                        group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
        
        {/* Icon with animated background */}
        <div className="relative mb-6">
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 
                          rounded-full blur-lg transform group-hover:scale-110 transition-transform duration-300`} />
          <div className={`w-16 h-16 rounded-xl ${feature.bgLight} flex items-center justify-center
                          transform transition-transform duration-300 group-hover:rotate-6`}>
            <feature.icon className={`w-8 h-8 relative z-10 transform transition-transform duration-300 
                                    group-hover:scale-110`} />
          </div>
        </div>

        {/* Title with animated underline */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 relative inline-block">
          {feature.title}
          <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${feature.gradient} 
                          group-hover:w-full transition-all duration-300`} />
        </h3>

        {/* Mobile-friendly description */}
        <p className="text-gray-600 text-sm sm:text-base opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300 mt-2">
          {feature.hoverText}
        </p>

        {/* Interactive element indicator */}
        <div className="absolute bottom-4 right-4 opacity-40 group-hover:opacity-0 transition-opacity duration-300">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
          >
            <span className="text-gray-600 text-xs">↗</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const WhyTruckinzy = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-gray-50 to-transparent opacity-60" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 
                       bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight"
          >
            Why Choose Truckinzy?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Leading the revolution in logistics hiring with cutting-edge technology and unwavering trust.
            Experience the future of recruitment with our innovative solutions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTruckinzy;