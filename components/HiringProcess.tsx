import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Users2, Handshake, ArrowRight, CheckCircle2, Clock3, Award, X, ChevronRight, Lightbulb, Target, Rocket } from 'lucide-react';

const hiringSteps = [
  {
    icon: FileText,
    title: "Share Your Requirements",
    description: "Share your hiring needs and requirements through our intuitive platform",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=2340",
    stats: ["24/7 Support", "5 min setup"],
    color: "blue",
    details: {
      benefits: [
        "AI-powered job description builder",
        "Custom screening questions",
        "Salary insights and recommendations",
        "Automated candidate matching"
      ],
      features: [
        {
          icon: Lightbulb,
          title: "Smart Templates",
          description: "Industry-specific templates to help you create perfect job postings"
        },
        {
          icon: Target,
          title: "Precise Targeting",
          description: "Reach the right candidates with advanced targeting options"
        },
        {
          icon: Rocket,
          title: "Instant Distribution",
          description: "Post to multiple job boards with one click"
        }
      ]
    }
  },
  {
    icon: Users2,
    title: "Review Top Candidates",
    description: "Access pre-screened candidates matching your specific criteria",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2340",
    stats: ["95% Match Rate", "48hr Delivery"],
    color: "purple",
    details: {
      benefits: [
        "AI-powered candidate ranking",
        "Automated skill assessment",
        "Video interview platform",
        "Background verification"
      ],
      features: [
        {
          icon: Lightbulb,
          title: "Smart Matching",
          description: "AI algorithms match candidates based on skills and experience"
        },
        {
          icon: Target,
          title: "Deep Screening",
          description: "Comprehensive background and reference checks"
        },
        {
          icon: Rocket,
          title: "Quick Shortlisting",
          description: "Efficient tools to compare and shortlist candidates"
        }
      ]
    }
  },
  {
    icon: Handshake,
    title: "Make the Perfect Hire",
    description: "Connect with candidates and finalize your hiring decision",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2340",
    stats: ["90% Success Rate", "7-day Guarantee"],
    color: "emerald",
    details: {
      benefits: [
        "Automated offer letters",
        "Digital contract signing",
        "Onboarding checklist",
        "90-day success guarantee"
      ],
      features: [
        {
          icon: Lightbulb,
          title: "Smart Decisions",
          description: "Data-driven insights to help you make the best choice"
        },
        {
          icon: Target,
          title: "Seamless Onboarding",
          description: "Streamlined process from offer to first day"
        },
        {
          icon: Rocket,
          title: "Long-term Success",
          description: "Post-hire support and satisfaction guarantee"
        }
      ]
    }
  }
];

interface ModalProps {
  step: typeof hiringSteps[0];
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ step, isOpen, onClose }: ModalProps) => {
  const colors = {
    blue: "from-blue-500 to-blue-700",
    purple: "from-purple-500 to-purple-700",
    emerald: "from-emerald-500 to-emerald-700"
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal Container - Centers the Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 overflow-y-auto">
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden my-auto"
            >
              {/* Header with Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/40 z-10" />
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-20 h-full flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[step.color]} p-3`}>
                      <step.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                  <button
                    onClick={onClose}
                    className="rounded-full p-2 bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 max-h-[calc(100vh-24rem)] overflow-y-auto">
                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.details.benefits.map((benefit, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-2 text-gray-700"
                      >
                        <ChevronRight className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Features</h4>
                  <div className="grid gap-6">
                    {step.details.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors[step.color]} p-2 flex-shrink-0`}>
                          <feature.icon className="w-full h-full text-white" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900">{feature.title}</h5>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 p-6">
                <div className="flex flex-wrap gap-4">
                  {step.stats.map((stat, i) => (
                    <div key={i} className={`bg-gradient-to-br ${colors[step.color]} rounded-lg p-3 text-white text-sm`}>
                      <CheckCircle2 className="w-4 h-4 inline-block mr-2" />
                      {stat}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

const StepCard = ({ step, index }: { step: typeof hiringSteps[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const colors = {
    blue: "from-blue-500 to-blue-700",
    purple: "from-purple-500 to-purple-700",
    emerald: "from-emerald-500 to-emerald-700"
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="relative group"
      >
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/40 z-10" />
            <img 
              src={step.image} 
              alt={step.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Content */}
          <div className="relative z-20 p-6 sm:p-8">
            {/* Step Number */}
            <div className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br ${colors[step.color]} 
                            flex items-center justify-center text-white font-bold`}>
              {index + 1}
            </div>

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors[step.color]} p-4 mb-6
                         shadow-lg transform -rotate-3`}
            >
              <step.icon className="w-full h-full text-white" />
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
            
            {/* Description */}
            <p className="text-gray-200 mb-6">{step.description}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {step.stats.map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 inline-block mr-2 text-white" />
                  {stat}
                </div>
              ))}
            </div>

            {/* Action Button */}
            {/* <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${colors[step.color]} 
                         text-white font-semibold flex items-center justify-center group`}
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </motion.button> */}
          </div>
        </div>

        {/* Connection Line */}
        {index < hiringSteps.length - 1 && (
          <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-0.5 bg-gray-300">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
              className={`absolute top-1/2 left-1/2 w-3 h-3 -mt-1.5 -ml-1.5 rounded-full
                         bg-gradient-to-br ${colors[step.color]}`}
            />
          </div>
        )}
      </motion.div>

      <Modal
        step={step}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export const HiringProcess = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 relative overflow-hidden bg-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-purple-500/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6"
          >
            <Clock3 className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-white">Streamlined Hiring Process</span>
            <Award className="w-5 h-5 text-purple-400 ml-2" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Three Simple Steps to
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> 
              {" "}Perfect Hiring
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our efficient hiring process ensures you find the right talent quickly and effectively,
            backed by our proven methodology and expert support.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 max-w-7xl mx-auto">
          {hiringSteps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;