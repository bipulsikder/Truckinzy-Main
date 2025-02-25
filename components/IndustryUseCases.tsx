import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Truck, Tractor, Wrench, Zap, Utensils, 
  Stethoscope, Box, Factory, Store, Trash2,
  ArrowRight, X, CheckCircle2, Users, Clock, 
  Building2, MapPin, PhoneCall
} from 'lucide-react';

const industries = [
  {
    title: "Agriculture & Farming",
    description: "Streamline farm-to-market logistics and optimize agricultural supply chains",
    icon: Tractor,
    color: "bg-green-50/80",
    iconColor: "text-green-600",
    gradient: "from-green-600 to-green-800"
  },
  {
    title: "Manufacturing",
    description: "Enhance production efficiency with reliable transportation and inventory management",
    icon: Factory,
    color: "bg-blue-50/80",
    iconColor: "text-blue-600",
    gradient: "from-blue-600 to-blue-800"
  },
  {
    title: "Retail & E-commerce",
    description: "Optimize last-mile delivery and improve customer satisfaction",
    icon: Store,
    color: "bg-purple-50/80",
    iconColor: "text-purple-600",
    gradient: "from-purple-600 to-purple-800"
  },
  {
    title: "Construction",
    description: "Coordinate material deliveries and equipment transportation efficiently",
    icon: Wrench,
    color: "bg-yellow-50/80",
    iconColor: "text-yellow-600",
    gradient: "from-yellow-600 to-yellow-800"
  },
  {
    title: "Food & Beverage",
    description: "Ensure timely delivery of fresh products with temperature-controlled transport",
    icon: Utensils,
    color: "bg-red-50/80",
    iconColor: "text-red-600",
    gradient: "from-red-600 to-red-800"
  },
  {
    title: "Healthcare",
    description: "Reliable medical supply transportation and time-sensitive deliveries",
    icon: Stethoscope,
    color: "bg-teal-50/80",
    iconColor: "text-teal-600",
    gradient: "from-teal-600 to-teal-800"
  },
  {
    title: "Logistics & Warehousing",
    description: "Optimize warehouse operations and distribution networks",
    icon: Box,
    color: "bg-orange-50/80",
    iconColor: "text-orange-600",
    gradient: "from-orange-600 to-orange-800"
  },
  {
    title: "Waste Management",
    description: "Efficient waste collection and transportation solutions",
    icon: Trash2,
    color: "bg-gray-50/80",
    iconColor: "text-gray-600",
    gradient: "from-gray-600 to-gray-800"
  },
  {
    title: "Energy & Utilities",
    description: "Support infrastructure maintenance and equipment transportation",
    icon: Zap,
    color: "bg-indigo-50/80",
    iconColor: "text-indigo-600",
    gradient: "from-indigo-600 to-indigo-800"
  },
  {
    title: "Fleet Management",
    description: "Comprehensive fleet tracking and maintenance solutions",
    icon: Truck,
    color: "bg-cyan-50/80",
    iconColor: "text-cyan-600",
    gradient: "from-cyan-600 to-cyan-800"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

interface LearnMoreModalProps {
  industry: typeof industries[0];
  onClose: () => void;
}

const LearnMoreModal = ({ industry, onClose }: LearnMoreModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="bg-white rounded-2xl p-6 md:p-8 max-w-2xl w-full shadow-xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div className={`${industry.iconColor} p-3 rounded-xl ${industry.color}`}>
            <industry.icon className="w-8 h-8 stroke-[1.5]" />
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Key Benefits</h4>
              <p className="text-gray-600">
                Streamlined operations, reduced costs, and improved efficiency through our
                specialized transportation solutions tailored for {industry.title.toLowerCase()}.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Client Success</h4>
              <p className="text-gray-600">
                Join hundreds of satisfied clients who have transformed their
                transportation operations with our industry-specific expertise.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <Clock className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Implementation</h4>
              <p className="text-gray-600">
                Quick and seamless integration with your existing systems,
                with dedicated support throughout the process.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 text-gray-600">
              <Building2 className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Enterprise Solutions</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Nationwide Coverage</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <PhoneCall className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
        >
          Learn More
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export const IndustryUseCases = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [selectedIndustry, setSelectedIndustry] = React.useState<typeof industries[0] | null>(null);

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4 md:mb-6">
            Industry Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4 md:mb-6 leading-tight">
            Transforming Transportation
            <span className="block text-blue-600">Across Industries</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover how Truckinzy's innovative solutions revolutionize logistics and 
            transportation across diverse industry sectors
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6 max-w-7xl mx-auto"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial={false}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                scale: hoveredIndex === index ? 1.05 : 1,
                y: hoveredIndex === index ? -8 : 0,
                transition: { 
                  type: "spring",
                  stiffness: hoveredIndex === index ? 300 : 200,
                  damping: hoveredIndex === index ? 20 : 25,
                  duration: 0.5
                }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedIndustry(industry)}
              className={`
                ${industry.color} rounded-xl md:rounded-2xl p-4 md:p-6 
                group cursor-pointer relative overflow-hidden backdrop-blur-sm 
                shadow-md hover:shadow-xl transition-all duration-700
                touch-none
              `}
            >
              <div className="relative z-10">
                <motion.div 
                  className={`${industry.iconColor} mb-3 md:mb-6`}
                  animate={{ 
                    scale: hoveredIndex === index ? 1.2 : 1,
                    rotate: hoveredIndex === index ? 5 : 0,
                    transition: { 
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      duration: 0.4
                    }
                  }}
                >
                  <industry.icon className="w-8 h-8 md:w-10 md:h-10 stroke-[1.5]" />
                </motion.div>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 group-hover:text-white transition-colors duration-500 line-clamp-2">
                  {industry.title}
                </h3>
                
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ 
                        opacity: 0, 
                        y: 10,
                        transition: { duration: 0.3, ease: "easeInOut" }
                      }}
                      transition={{ 
                        duration: 0.4,
                        ease: "easeOut"
                      }}
                      className="hidden md:block text-sm text-white/90 mt-3"
                    >
                      {industry.description}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div
                initial={false}
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                className={`
                  absolute inset-0 bg-gradient-to-br ${industry.gradient}
                  transition-opacity duration-500
                `}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedIndustry && (
          <LearnMoreModal
            industry={selectedIndustry}
            onClose={() => setSelectedIndustry(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default IndustryUseCases;