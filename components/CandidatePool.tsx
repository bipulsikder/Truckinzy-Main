import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Clock, BarChart as ChartBar } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "5,000+",
    label: "Pre-screened Logistics Professionals",
    description: "Verified and ready-to-hire candidates"
  },
  {
    icon: Building2,
    value: "98%",
    label: "Client Retention Rate",
    description: "Due to quality hiring and service"
  },
  {
    icon: Clock,
    value: "5 Days",
    label: "Average Turnaround Time",
    description: "For candidate shortlisting"
  }
];

export const CandidatePool = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-4">Candidate Pool Strength</h2>
            <p className="text-xl text-blue-100">
              Data-backed insights into our recruitment capabilities
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center transform hover:rotate-1 transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                className="mb-4"
              >
                <stat.icon className="w-16 h-16 mx-auto text-blue-200" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.5 }}
                className="text-5xl font-bold mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-xl font-semibold mb-2 text-blue-200">
                {stat.label}
              </div>
              <p className="text-blue-100">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 relative z-20 pointer-events-auto"
        >
          <a
            href="https://calendly.com/rk-truckinzy/30min?month=2025-02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Clock className="w-5 h-5 mr-2" />
            Schedule a Meeting
          </a>
        </motion.div>

        {/* Chart Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-900/50 to-transparent"
        >
          <div className="flex justify-around items-end h-full">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ height: '20%' }}
                animate={{ height: `${Math.random() * 60 + 20}%` }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.2
                }}
                className="w-4 bg-blue-400/30 rounded-t-lg"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};