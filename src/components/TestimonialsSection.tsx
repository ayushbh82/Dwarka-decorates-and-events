import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Quote, Heart } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const activeReview = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 bg-gray-50 dark:bg-dark-charcoal/20 relative overflow-hidden">
      
      {/* Visual background enhancements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#D4AF37]/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-royal-purple/5 dark:bg-royal-purple/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-extrabold tracking-widest text-[#D4AF37] uppercase px-3 py-1 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/30">
            TESTIMONIALS OF TRUTHS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1A1A1A] dark:text-white leading-tight">
            Loved By Families & Corporate Brands <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-purple to-coral-orange font-serif italic font-normal">
              Words From Our Clients
            </span>
          </h2>
        </div>

        {/* Testimonials Slider Area */}
        <div className="relative bg-white dark:bg-[#1A1A1A] rounded-3xl border border-gray-100 dark:border-royal-purple/10 p-8 sm:p-12 shadow-xl">
          
          {/* Giant decorative quotation marks */}
          <div className="absolute top-6 left-6 text-royal-purple/10 dark:text-royal-purple/10">
            <Quote className="w-16 h-16 transform -scale-x-100" />
          </div>

          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Rating Stars row */}
                <div className="flex gap-1 justify-center sm:justify-start">
                  {Array.from({ length: activeReview.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>

                {/* Main feedback quotes */}
                <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-250 font-sans italic leading-relaxed text-center sm:text-left">
                  "{activeReview.comment}"
                </p>

                {/* Speaker profile info block */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-gray-100 dark:border-royal-purple/10 text-center sm:text-left">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-royal-purple/20 shadow-md">
                    <img
                      src={activeReview.image}
                      alt={activeReview.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5 justify-center sm:justify-start">
                      {activeReview.name}
                      <Heart className="w-3.5 h-3.5 text-coral-orange fill-coral-orange shrink-0" />
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {activeReview.role} • <span className="text-royal-purple dark:text-[#D4AF37] font-semibold">{activeReview.eventDate}</span>
                      {activeReview.company && ` at ${activeReview.company}`}
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controllers bottom right or bottom buttons */}
          <div className="mt-8 flex items-center justify-center sm:justify-end gap-3">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-gray-200 dark:border-royal-purple/20 text-gray-500 dark:text-gray-300 bg-gray-50 dark:bg-white/5 hover:bg-royal-purple/10 hover:text-royal-purple dark:hover:text-luxury-gold transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-bold text-gray-400">
              0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-gray-200 dark:border-royal-purple/20 text-gray-500 dark:text-gray-300 bg-gray-50 dark:bg-white/5 hover:bg-royal-purple/10 hover:text-royal-purple dark:hover:text-luxury-gold transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
