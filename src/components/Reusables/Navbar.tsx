"use client"; // Add this directive for client-side hooks

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Assuming you use ShadCN UI
import { Menu, X } from 'lucide-react'; // For hamburger/close icons

// A simple hook to detect screen size
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};

// Main Navbar Component
export  function Navbar() {
  const isMobile = useMediaQuery("(max-width: 954px)");

  return (
    <div className='fixed top-0   z-50 w-full'>
    <div className="bg-[#F36F2B] py-2 text-center text-white text-sm font-medium w-[100%] z-40">
        ziPay — YC Exclusive Preview
      </div>
  
    <nav className=" flex items-center    w-full h-20  md:px-12  bg-white/70 backdrop-blur-lg shadow-sm">
       
      {/* ====== Logo Section ====== */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 lg:left-4 right-4 absolute px-4 lg:px-[140px]"
      >
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Image src="/Temp Logo.svg" alt="Temp Logo" width={60} height={60} />
        </Link>
        <span className="text-gray-400 text-sm mt-1">to</span>
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Image src="/YC Logo.png" alt="YC Logo" width={35} height={18} />
        </Link>
      </motion.div>

      {/* ====== Render correct view based on screen size ====== */}
      {isMobile ? <MobileView /> : <DesktopView />}
    </nav>  </div>
  );
}

// Navigation Links Data (to avoid repetition)
const navLinks = [
  { name: "The Problem", href: "#problem" },
  { name: "Our Solution", href: "#solution" },
  { name: "Why Now?", href: "#why-now" },
  { name: "Launch Timeline", href: "#timeline" },
  { name: "Contact Us", href: "#contact" },
];

// Desktop Navigation Component
function DesktopView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="hidden md:flex items-center gap-6 absolute right-24"
    >
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="text-gray-600 font-medium hover:text-[#9E71C2] transition-colors duration-300 space-x-28 relative group"
        >
          {link.name}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9E71C2] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 120 }}
      >
        <Button asChild className="bg-[#9E71C2] text-white px-6 py-2 shadow-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
          <Link href="/#business">Product Access</Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}

// Mobile Navigation Component
function MobileView() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation variants for the menu container
  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  } as const;

  // Animation variants for the nav links
  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <div className="lg:hidden">
    
      <button
        onClick={toggleMenu}
        className="relative z-50 text-gray-700 transition-transform hover:scale-110 "
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            // ====== 'X' ICON (CLOSE BUTTON) ======
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='mx-4'
            >
              <X size={28} />
            </motion.div>
          ) : (
            // ====== HAMBURGER ICON (OPEN BUTTON) ======
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
                            className='mx-4'

              transition={{ duration: 0.3 }}
            >
              <Menu size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* ====== Mobile Menu Overlay ====== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            // Add z-40 to ensure the menu is behind the close button
            className="fixed top-0 left-0 w-full h-screen bg-white z-40 pt-24 px-8 flex flex-col items-center gap-8"
          >
            {navLinks.map((link, index) => (
              <motion.div key={index} custom={index} variants={listItemVariants}>
                <Link
                  href={link.href}
                  onClick={toggleMenu} // Close menu on link click
                  className="text-2xl font-semibold text-gray-700 hover:text-[#9E71C2] transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div custom={navLinks.length} variants={listItemVariants} className="mt-8">
              <Button asChild size="lg" className="bg-[#9E71C2] text-white  px-10 py-6 text-lg shadow-lg">
                <Link href="/#business">Product Access</Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}