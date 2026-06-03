import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Calendar, X, ExternalLink, Sparkles, Trophy } from "lucide-react";
import { PORTFOLIO_DATA } from "../data";
import { PortfolioItem } from "../types";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filterCategories = ["All", "Weddings", "Corporate Events", "Birthdays", "Stage Shows", "Cultural Events"];

  const filteredProjects = activeFilter === "All"
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl space-y-4 text-center md:text-left">
            <span className="text-xs font-mono font-extrabold tracking-widest text-[#D4AF37] uppercase px-3 py-1 bg-[#D4AF37]/10 rounded-full">
              PORTFOLIO OF LUXURY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-gray-900 dark:text-white leading-tight">
              Our Spectacular <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-purple via-coral-orange to-luxury-gold font-serif italic font-normal">
                Masterpiece Gallery
              </span>
            </h2>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-sans max-w-md text-center md:text-left">
            Relive some of Delhi NCR's most spectacular occasions designed by Dwarka Events since 2001. Filter by category and click any project to view milestones detail.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                activeFilter === category
                  ? "bg-royal-purple text-luxury-gold shadow-md shadow-royal-purple/20 border border-luxury-gold/30"
                  : "bg-gray-100 text-gray-600 dark:bg-white/5 dark:text-gray-300 hover:bg-royal-purple/10 dark:hover:bg-royal-purple/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Items Grid with Framer Motion layout transition */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer shadow-md bg-gray-100 dark:bg-[#1A1A1A] border border-gray-100 dark:border-white/5"
              >
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-350" />

                {/* Hover Reveal Card Label details */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white flex flex-col justify-end h-1/2">
                  <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase font-extrabold mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-base font-display font-bold leading-tight group-hover:text-luxury-gold transition-colors duration-200">
                    {project.title}
                  </h3>

                  <div className="mt-3 flex items-center justify-between text-[11px] text-gray-300 border-t border-white/10 pt-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-coral-orange shrink-0" />
                      <span className="truncate max-w-[130px]">{project.location.split(',')[0]}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-teal-accent shrink-0" />
                      <span>{project.year}</span>
                    </span>
                  </div>
                </div>

                {/* Quick Link Badge top right */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-white/20">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Lightbox Popup Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl bg-white dark:bg-[#1A1A1A] rounded-3xl overflow-hidden shadow-2xl border border-royal-purple/20 max-h-[92vh] overflow-y-auto"
            >
              {/* Feature Banner */}
              <div className="relative h-64 sm:h-80 w-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-[10px] font-mono tracking-widest text-luxury-gold font-bold uppercase py-0.5 px-2 rounded bg-royal-purple/60 inline-block mb-1.5">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Informational Details */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Meta stats bar */}
                <div className="grid grid-cols-2 gap-4 border-b border-gray-100 dark:border-royal-purple/10 pb-4 text-xs text-gray-500 dark:text-gray-400 font-sans">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-coral-orange shrink-0" />
                    <span><strong>Location:</strong> {selectedProject.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-teal-accent shrink-0" />
                    <span><strong>Year Executed:</strong> {selectedProject.year}</span>
                  </div>
                </div>

                {/* Narrative Description */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-extrabold text-royal-purple dark:text-[#D4AF37] mb-2 font-display">
                    Project Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-sans leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Deliverable Highlights */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy className="w-4 h-4 text-luxury-gold" />
                    <h4 className="text-xs uppercase tracking-wider font-extrabold text-navy-title dark:text-white font-display">
                      Special Deliverables & Highlights
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="p-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-royal-purple/10 text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-coral-orange" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footnote dismiss */}
                <div className="flex justify-end pt-4 border-t border-gray-100 dark:border-royal-purple/10">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 rounded-full text-xs font-bold uppercase text-white bg-royal-purple hover:bg-royal-purple/90 transition-colors"
                  >
                    Close Showcase
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
