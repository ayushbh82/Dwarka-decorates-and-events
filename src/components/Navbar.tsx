import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Moon, Sun, ArrowRight, Stars } from "lucide-react";

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ isDarkMode, onToggleTheme, onScrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Background change opacity trigger
      setIsScrolled(window.scrollY > 50);

      // Simple active link detection
      const sections = ["hero", "about", "services", "portfolio", "estimator", "process", "contact"];
      const currentScroll = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (currentScroll >= top && currentScroll < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Gallery" },
    { id: "estimator", label: "Quote Estimator" },
    { id: "process", label: "The Process" },
    { id: "contact", label: "Contact Us" }
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? "bg-dark-charcoal/90 backdrop-blur-md border-b border-royal-purple/20 shadow-lg py-3"
            : "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity: Dwarka Events */}
        <div
          onClick={() => handleLinkClick("hero")}
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-royal-purple to-coral-orange flex items-center justify-center shadow-md shadow-royal-purple/20">
            <Stars className="w-5 h-5 text-luxury-gold animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight flex items-center gap-1">
              <span className="text-royal-purple dark:text-white">DWARKA</span>
              <span className="text-coral-orange">EVENTS</span>
            </h1>
            <p className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase -mt-1 font-bold">
              ESTD. 2001 • Delhi NCR
            </p>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`px-3 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
                activeSection === link.id
                  ? "bg-royal-purple text-luxury-gold dark:bg-royal-purple/30 dark:text-luxury-gold border border-luxury-gold/30"
                  : isDarkMode
                  ? "text-gray-300 hover:text-white hover:bg-white/5"
                  : "text-gray-600 hover:text-royal-purple hover:bg-royal-purple/5"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Dynamic Interactive Widgets */}
        <div className="hidden sm:flex items-center space-x-4">
          {/* Quick Call */}
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 text-xs font-semibold text-royal-purple dark:text-luxury-gold hover:opacity-85 transition-opacity"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+91 98101 20010</span>
          </a>

          {/* Theme toggler */}
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-full border transition-all duration-200 ${
              isDarkMode
                ? "border-royal-purple/30 bg-dark-charcoal text-luxury-gold hover:bg-royal-purple/10"
                : "border-gray-200 bg-gray-50 text-royal-purple hover:bg-gray-100"
            }`}
            aria-label="Toggle theme color mode"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Premium CTA */}
          <button
            onClick={() => handleLinkClick("estimator")}
            className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold tracking-wide uppercase text-white rounded-full bg-gradient-to-r from-royal-purple to-coral-orange shadow-lg shadow-coral-orange/20 overflow-hidden group transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Get Free Quote
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-coral-orange to-royal-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Small Screen widgets & triggers */}
        <div className="flex items-center space-x-2 sm:space-x-4 lg:hidden">
          {/* Theme toggler for mobile */}
          <button
            onClick={onToggleTheme}
            className={`p-1.5 rounded-full border transition-all duration-200 ${
              isDarkMode
                ? "border-royal-purple/30 text-luxury-gold"
                : "border-gray-200 text-royal-purple"
            }`}
            aria-label="Toggle mobile theme color"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Hamburger Menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-full border ${
              isDarkMode
                ? "border-royal-purple/20 bg-dark-charcoal/50 text-white"
                : "border-gray-200 bg-gray-50 text-royal-purple"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (with AnimatePresence) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden border-t overflow-hidden ${
              isDarkMode
                ? "bg-dark-charcoal border-royal-purple/20 text-white"
                : "bg-white border-gray-100 text-gray-800"
            }`}
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide uppercase transition-colors ${
                    activeSection === link.id
                      ? "bg-royal-purple text-luxury-gold"
                      : isDarkMode
                      ? "hover:bg-white/5 text-gray-300"
                      : "hover:bg-royal-purple/5 text-gray-700"
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 border-t border-gray-100 dark:border-royal-purple/20 flex flex-col space-y-3">
                <a
                  href="tel:+919810120010"
                  className="flex items-center justify-center gap-2 text-sm font-bold text-royal-purple dark:text-luxury-gold py-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 98101 20010</span>
                </a>

                <button
                  onClick={() => handleLinkClick("estimator")}
                  className="w-full text-center py-3 rounded-full text-xs font-bold uppercase text-white bg-gradient-to-r from-royal-purple to-coral-orange"
                >
                  Get A Free Quote Setup
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
