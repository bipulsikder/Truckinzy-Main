import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, MapPin, Phone, Mail, Truck, Users, Building, Loader2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "white-collar" | "truck-driver";
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzDtOSkwlHkgxY_UdqLZe8GPFcF3wE-546Kyt01rKm6vmM92W_leZP4H4FEKa9WGTBY/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            inquiryType: type === "truck-driver" ? "Hire Professional Drivers" : "Contact Recruitment Team",
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
          }),
        }
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => {
        onClose();
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 overflow-y-auto min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl my-4 md:my-8 relative"
      >
        {/* SEO Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Truckinzy",
              "description": "Leading logistics workforce management platform in India",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "TDI Mall, 4th Floor",
                "addressLocality": "Rajouri Garden",
                "addressRegion": "New Delhi",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9911960107",
                "contactType": "customer service",
                "email": "info@truckinzy.com"
              }
            }
          `}
        </script>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 md:p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute right-3 top-3 md:right-4 md:top-4 text-white hover:text-blue-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <div className="flex items-center space-x-3">
            {type === "truck-driver" ? (
              <Truck className="w-6 h-6 md:w-8 md:h-8" />
            ) : (
              <Users className="w-6 h-6 md:w-8 md:h-8" />
            )}
            <h2 className="text-xl md:text-2xl font-bold leading-tight">
              {type === "truck-driver" ? "Hire Professional Drivers" : "Contact Our Recruitment Team"}
            </h2>
          </div>
        </div>

        <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Form - Moved to top on mobile */}
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg order-1 md:order-2">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg transition duration-200 flex items-center justify-center space-x-2 text-base
                  ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700 active:bg-blue-800'}
                  ${submitStatus === 'success' ? 'bg-green-600 hover:bg-green-700' : ''}
                  ${submitStatus === 'error' ? 'bg-red-600 hover:bg-red-700' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  'Message Sent!'
                ) : submitStatus === 'error' ? (
                  'Error Sending Message'
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="prose max-w-none">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Building className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                Corporate Office
              </h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm md:text-base">TDI mall, 4th floor, Rajouri Garden, New Delhi</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a href="tel:+9199110 22107" className="text-gray-700 hover:text-blue-600 text-sm md:text-base">
                    +91 99110 22107
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a href="mailto:info@truckinzy.com" className="text-gray-700 hover:text-blue-600 text-sm md:text-base break-all">
                    info@truckinzy.com
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Business Hours</h4>
              <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};