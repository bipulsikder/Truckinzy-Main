import React, { useState, useEffect } from "react";
import { Menu, X, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactModal } from "./ContactModal";
import { AboutUsModal } from "./AboutUsModal";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"white-collar" | "truck-driver" | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (event: React.MouseEvent, sectionId: string) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openModal = (type: "white-collar" | "truck-driver") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/30 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={
                isScrolled
                  ? "https://i.postimg.cc/j20dnktx/log0-def.png"
                  : "https://i.postimg.cc/hGNKN3JL/log-def.png"
              }
              alt="Truckinzy Logo"
              className="transition-all duration-300 h-10 w-15"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#" isScrolled={isScrolled}>
              Home
            </NavLink>
            <NavLink href="#job-listings" onClick={(e) => scrollToSection(e, "job-listings")} isScrolled={isScrolled}>
              Find Jobs
            </NavLink>
            <button onClick={() => openModal("truck-driver")} className="focus:outline-none">
              <NavLink href="#" isScrolled={isScrolled}>
                Hire Drivers
              </NavLink>
            </button>
            <button onClick={() => setIsAboutModalOpen(true)} className="focus:outline-none">
              <NavLink href="#" isScrolled={isScrolled}>
                About Us
              </NavLink>
            </button>
            <button onClick={() => openModal("white-collar")} className="focus:outline-none">
              <NavLink href="#" isScrolled={isScrolled}>
                Contact
              </NavLink>
            </button>
            <a href="https://calendly.com/rk-truckinzy/30min?month=2025-02">
              <button className="px-3 py-3 bg-blue-600 text-white rounded-lg font-semibold flex items-center transition-all duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">
                <Clock className="w-5 h-5 mr-2" />
                <span>Schedule a Meeting</span>
              </button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-blue-900" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-blue-900" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white"
            >
              <nav className="flex flex-col py-4">
                <MobileNavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </MobileNavLink>
                <MobileNavLink href="#job-listings" onClick={(e) => {
                    scrollToSection(e, "job-listings");
                    setIsMobileMenuOpen(false);
                  }}>
                  Find Jobs
                </MobileNavLink>
                <button
                  onClick={() => {
                    openModal("truck-driver");
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-50 font-medium text-left"
                >
                  Hire Drivers
                </button>
                <button
                  onClick={() => {
                    setIsAboutModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-50 font-medium text-left"
                >
                  About Us
                </button>
                <button
                  onClick={() => {
                    openModal("white-collar");
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-50 font-medium text-left"
                >
                  Contact
                </button>
                <a
                  href="https://calendly.com/rk-truckinzy/30min?month=2025-02"
                  className="mx-4 mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Schedule a Meeting
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* About Us Modal */}
      <AboutUsModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />

      {/* Contact Modal */}
      {modalType && (
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type={modalType} />
      )}
    </header>
  );
};

const NavLink = ({
  href,
  children,
  onClick,
  isScrolled,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  isScrolled: boolean;
}) => (
  <a
    href={href}
    onClick={onClick}
    className={`font-medium transition-colors ${
      isScrolled ? "text-blue-900 hover:text-blue-600" : "text-white hover:text-blue-600"
    }`}
  >
    {children}
  </a>
);

const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}) => (
  <a href={href} onClick={onClick} className="px-4 py-2 text-gray-700 hover:bg-gray-50 font-medium">
    {children}
  </a>
);