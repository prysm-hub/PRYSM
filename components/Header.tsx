import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../src/assets/prysm.png";
import { useState } from "react";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
};

const navItems = [
  { label: "About", id: "hero" },
  { label: "Community", id: "community" },
  { label: "Conclave", id: "conclave" },
  { label: "User Levels", id: "levels" },
  { label: "Contact", id: "contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60"
      style={{
        background: "#150d33",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 4px 12px rgba(21,13,51,0.55)"
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <motion.div
          className="flex items-center cursor-pointer"   // <-- tighter spacing
          whileHover={{ scale: 1.02 }}
          onClick={() => scrollToSection('hero')}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative bg-prysm-grad-1 rounded-lg flex items-center justify-center shadow-lg">
              <img
                src={logo}
                alt="PRYSM Logo"
                className="h-20 w-20 object-contain"  // <-- larger logo
              />
          </div>

          <div className="leading-tight">
            <h1 className="text-2xl font-extrabold text-white tracking-tight">PRYSM</h1>
            <p className="text-xs text-gray-400 font-medium">
              Direction. Acceleration. Growth.
            </p>
          </div>
        </motion.div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group py-2"
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {item.label}
              <motion.div
                className="absolute -bottom-0.5 left-0 h-0.5 bg-prysm-grad-1 rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, height: mobileMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden"
        style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
      >
        <div className="flex flex-col space-y-1 p-4" style={{ background: "rgba(7, 3, 26, 0.8)" }}>
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setMobileMenuOpen(false);
              }}
              className="text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors text-left px-4 py-3 rounded-lg"
              whileHover={{ x: 4 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}