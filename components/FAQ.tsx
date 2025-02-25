import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { SupportModal } from './SupportModal';

const faqs = [
  {
    question: "What types of logistics professionals can I hire through Truckinzy?",
    answer: "Truckinzy specializes in placing various logistics professionals including fleet managers, truck drivers, warehouse managers, supply chain executives, and more. We cover both operational and managerial roles in the logistics sector."
  },
  {
    question: "How long does it take to get qualified candidates?",
    answer: "Our average turnaround time for shortlisting qualified candidates is 5-7 working days. For urgent requirements, we can expedite the process based on availability."
  },
  {
    question: "Do you verify the credentials of the candidates?",
    answer: "Yes, we conduct thorough background checks, verify previous employment records, and validate all professional credentials before presenting any candidate to our clients."
  },
  {
    question: "What is your service area coverage?",
    answer: "We operate pan-India with strong networks in all major logistics hubs. We can help you hire for any location across India."
  },
  {
    question: "Do you provide any post-placement support?",
    answer: "Yes, we offer post-placement support including regular check-ins, retention strategies, and replacement guarantee if required as per the terms of engagement."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const [showSupportModal, setShowSupportModal] = useState(false);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-white rounded-lg shadow-md px-6 py-4 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-600" />
                  )}
                </div>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 text-gray-600"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button 
            onClick={() => setShowSupportModal(true)}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Our Support Team
          </button>
        </div>
      </div>

      <SupportModal
        isOpen={showSupportModal}
        onClose={() => setShowSupportModal(false)}
      />
    </section>
  );
};