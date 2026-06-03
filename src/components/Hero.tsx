import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles, Calendar, Award, CheckCircle } from "lucide-react";

interface HeroProps {
  isDarkMode: boolean;
  onScrollToSection: (sectionId: string) => void;
}

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920",
    label: "Luxury Weddings",
    accent: "Fairytales Executed Flawlessly"
  },
  {
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1920",
    label: "Elite Corporate Summits",
    accent: "Corporate Precision Meets Grandeur"
  },
  {
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1920",
    label: "Stellar Concerts & Festivals",
    accent: "Sensory Audio Visual Audiences"
  }
];

export default function Hero({ isDarkMode, onScrollToSection }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Dynamic Slide Background with AnimatePresence */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className={`absolute inset-0 z-10 transition-colors duration-500 ${
                isDarkMode
                  ? "bg-gradient-to-b from-[#1A1A1A]/85 via-[#1A1A1A]/75 to-[#1A1A1A]"
                  : "bg-gradient-to-b from-royal-purple/35 via-white/50 to-white"
              }`}
            />
            <img
              src={HERO_SLIDES[currentSlide].image}
              alt="Dwarka Events Show"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {/* Established 2001 tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 dark:bg-royal-purple/20 backdrop-blur-md border border-luxury-gold/40 mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
            CELEBRATING 25 YEARS OF EXCELLENCE
          </span>
        </motion.div>

        {/* Dynamic Secondary Tagline */}
        <div className="h-6 mb-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm font-semibold tracking-wider text-coral-orange dark:text-teal-accent uppercase font-display"
            >
              {HERO_SLIDES[currentSlide].accent}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Master Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          Creating Unforgettable <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-purple via-coral-orange to-luxury-gold font-serif italic font-normal">
            Events Since 2001
          </span>
        </motion.h1>

        {/* Master Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 font-sans"
        >
          Professional Event Planning & Management Services in Delhi NCR. Translating your milestone moments into spectacular grand celebrations, business summits, and fairytale settings.
        </motion.p>

        {/* CTA Button Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <button
            onClick={() => onScrollToSection("estimator")}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wider uppercase text-white rounded-full bg-gradient-to-r from-royal-purple via-coral-orange to-royal-gold shadow-xl shadow-coral-orange/20 transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            Get Free Quote
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={() => onScrollToSection("portfolio")}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wider uppercase text-gray-900 dark:text-white rounded-full border-2 border-royal-purple/30 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-royal-purple/10 active:scale-95 hover:border-royal-purple"
          >
            View Our Work
          </button>
        </motion.div>

        {/* Highlight trust factors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8 border-t border-gray-250 dark:border-white/10"
        >
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-full bg-royal-purple/10 dark:bg-royal-purple/30 flex items-center justify-center text-royal-purple dark:text-luxury-gold">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white">20+ Years Legacy</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">Serving NCR since 2001</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center">
            <div className="w-10 h-10 rounded-full bg-coral-orange/10 dark:bg-coral-orange/30 flex items-center justify-center text-coral-orange">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white">1000+ Events Managed</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">Flawless, creative production</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-end">
            <div className="w-10 h-10 rounded-full bg-teal-accent/10 dark:bg-teal-accent/30 flex items-center justify-center text-teal-accent">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white">100% Satisfaction</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">Custom tailored solutions</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Wave Overlay */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 select-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] text-white dark:text-[#1A1A1A]"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,16.22,83.1,22.07,162.22,38.45,242.88,60.44,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
