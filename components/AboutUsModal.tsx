import React from "react";
import { motion } from "framer-motion";
import { X, Truck, Users, Clock, HeadphonesIcon } from "lucide-react";

interface AboutUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutUsModal: React.FC<AboutUsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="bg-white rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden"
      >
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-white hover:text-blue-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-3">
            <Truck className="w-8 h-8" />
            <h2 className="text-2xl font-bold">About Us – Truckinzy</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Truckinzy is an end-to-end workforce recruitment platform specializing in the logistics, 
              transportation, and supply chain industry. We help businesses hire skilled professionals 
              across all levels—from fleet managers and warehouse executives to supply chain specialists 
              and maintenance experts.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              Our expertise lies in sourcing, screening, shortlisting, and coordinating interviews to 
              ensure you get the right talent efficiently. With a deep industry network and tech-driven 
              processes, we make recruitment seamless, helping logistics businesses build a strong and 
              reliable workforce.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              Truckinzy – Simplifying Hiring for Logistics & Supply Chain.
            </p>
          </div>

          {/* Features Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
              <Users className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Expert Team</h3>
                <p className="text-sm text-gray-600">Industry professionals with deep logistics expertise</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
              <Truck className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Fleet Management</h3>
                <p className="text-sm text-gray-600">Comprehensive fleet and workforce solutions</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Fast Hiring</h3>
                <p className="text-sm text-gray-600">Streamlined recruitment process</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
              <HeadphonesIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">24/7 Support</h3>
                <p className="text-sm text-gray-600">Round-the-clock assistance</p>
              </div>
            </div>
          </div> */}
        </div>

        {/* Footer */}
        <div className="border-t p-6 bg-gray-50">
          <button
            onClick={onClose}
            className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center space-x-2"
          >
            <span>Close</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};