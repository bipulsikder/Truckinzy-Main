import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <img
              src="https://i.postimg.cc/hGNKN3JL/log-def.png"
              alt="Truckinzy Logo"
              className="h-10 w-15 mb-6"
            />
            <p className="text-gray-400 mb-6">
              India's premier logistics hiring platform, connecting qualified drivers with top companies.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/truckinzy/" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/truckinzy/" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/truckinzy.technology" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#job-listings" className="text-gray-400 hover:text-white transition-colors">Find Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Post a Job</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              {/* <li><a href="https://calendly.com/rk-truckinzy/30min?month=2025-02" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Schedule a Meeting
              </a></li> */}
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h4 className="text-lg font-semibold mb-6">For Employers</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Post Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Candidates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Recruitment Solutions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>TDI mall, 4th floor, Rajouri Garden, New Delhi</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+91 99110 22107</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@truckinzy.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links and Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-400 text-sm text-center w-full">
              © {new Date().getFullYear()} Truckinzy. All rights reserved.
            </p>
            {/* <p className="text-gray-400 text-sm text-right flex items-center gap-1 whitespace-nowrap">
              Made with <span className="text-red-500">❤️</span> By <a 
                href="https://www.linkedin.com/in/bipulsikder/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Bipul
              </a>
            </p> */}
          </div>
       </div>
      </div>
    </footer>
  );
};