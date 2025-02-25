import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, Building2 } from 'lucide-react';

const categories = [
  {
    icon: Truck,
    title: "Fleet & Transport Operations",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    positions: [
      "Fleet Managers / Supervisors",
      "Tracking & Operations Executives",
      "Diesel Monitoring Specialists",
      "Driver Coordinators",
      "Transport Documentation Executives",
      "Fleet Maintenance Supervisors",
      "Workshop / Service Center Managers",
      "Accounts & Billing Executives (Fleet Operations)"
    ]
  },
  {
    icon: Package,
    title: "Warehousing & Supply Chain",
    color: "bg-green-50",
    iconColor: "text-green-600",
    positions: [
      "Warehouse Managers / Supervisors",
      "Inventory Control Executives",
      "Procurement & Purchase Executives",
      "Logistics Coordinators",
      "Order Fulfillment Executives",
      "Last-Mile Delivery Operations Executives",
      "Return & Reverse Logistics Specialists",
      "Cold Storage & Perishable Goods Managers "
    ]
  },
  {
    icon: Building2,
    title: "Corporate & Compliance",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    positions: [
      "HR & Payroll Executives",
      "Data Management / MIS Executives",
      "Legal & Compliance Officers (Logistics)",
      "Challan & Permit Handling Executives",
      "Safety & Risk Management Officers",
      "Customer Support & Dispute Resolution Executives",
      "Business Development & Client Relations Managers",
      " IT & Digital Transformation Specialists",
    ]
  }
];

export const JobCategories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Career Opportunities</h2>
          <p className="text-xl text-gray-600">Explore diverse positions in logistics and transportation</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`${category.color} rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg ${category.iconColor} bg-white`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.positions.map((position, posIndex) => (
                  <motion.div
                    key={posIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.2) + (posIndex * 0.1) }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-1.5">
                      <div className="w-2 h-2 rounded-full bg-gray-400 group-hover:bg-blue-600 transition-colors" />
                    </div>
                    <p className="text-gray-700 group-hover:text-blue-900 transition-colors">
                      {position}
                    </p>
                  </motion.div>
                ))}
              </div>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};