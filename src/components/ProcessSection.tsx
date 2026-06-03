import { useState } from "react";
import { motion } from "motion/react";
import { HelpCircle, FileText, Cpu, Award, CheckCircle, ChevronRight } from "lucide-react";
import { PROCESS_STEPS } from "../data";

// Map steps to icons
const iconMap: Record<string, any> = {
  HelpCircle: HelpCircle,
  FileText: FileText,
  Cpu: Cpu,
  Award: Award
};

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="process" className="py-24 bg-white dark:bg-[#1A1A1A] relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-royal-purple/5 dark:bg-royal-purple/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-mono font-extrabold tracking-widest text-royal-purple dark:text-luxury-gold uppercase px-3 py-1 bg-royal-purple/10 dark:bg-royal-purple/20 rounded-full">
            OUR WORKING PARADIGM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-gray-900 dark:text-white">
            The Golden 4-Step Journey <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-purple via-coral-orange to-luxury-gold font-serif italic font-normal">
              From Blueprint to Toast
            </span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-sans">
            How Dwarka Events delivers premium events at scale. Step through our standard operative protocols, representing 20+ years of robust execution wisdom.
          </p>
        </div>

        {/* Steps Selection Nodes Row */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Horizontal connectors line behind (Hidden on mobile) */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-1 bg-gray-150 dark:bg-royal-purple/10 -z-10">
            <div
              className="h-full bg-gradient-to-r from-royal-purple to-coral-orange transition-all duration-500"
              style={{ width: `${((activeStep - 1) / 3) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {PROCESS_STEPS.map((stepItem) => {
              const Icon = iconMap[stepItem.iconName];
              const isSelected = activeStep === stepItem.step;
              const isPassed = activeStep > stepItem.step;

              return (
                <div
                  key={stepItem.step}
                  onClick={() => setActiveStep(stepItem.step)}
                  className="flex flex-col items-center text-center cursor-pointer select-none group"
                >
                  {/* Step Selector Circle indicator button */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isSelected
                        ? "bg-royal-purple border-luxury-gold text-luxury-gold shadow-lg shadow-royal-purple/20 scale-110"
                        : isPassed
                        ? "bg-gradient-to-r from-royal-purple to-coral-orange border-none text-white shadow-sm"
                        : "bg-white dark:bg-[#1A1A1A] border-gray-200 dark:border-white/5 text-gray-400 group-hover:border-royal-purple/60 hover:scale-105"
                    }`}
                  >
                    {isPassed ? <CheckCircle className="w-5 h-5 text-white" /> : <Icon className="w-5 h-5" />}
                  </div>

                  <span
                    className={`text-xs font-mono font-bold tracking-wider uppercase mt-4 transition-colors ${
                      isSelected
                        ? "text-royal-purple dark:text-luxury-gold"
                        : "text-gray-400 dark:text-gray-500"
                    }`}
                  >
                    0{stepItem.step} • {stepItem.title.split('. ')[1].split(' ')[0]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Explanation Card details layout */}
        <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-dark-charcoal/30 rounded-3xl p-6 sm:p-10 border border-gray-150 dark:border-royal-purple/10 shadow-lg">
          {PROCESS_STEPS.map((stepItem) => {
            if (activeStep !== stepItem.step) return null;

            return (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                {/* Text Explanation (7 columns) */}
                <div className="md:col-span-7 space-y-4">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#D4AF37] uppercase bg-royal-purple/10 dark:bg-royal-purple/30 px-2.5 py-1 rounded-full">
                    {stepItem.duration}
                  </span>
                  <h3 className="text-2xl font-display font-extrabold text-navy-title dark:text-white">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-sans mt-2">
                    {stepItem.description}
                  </p>

                  <div className="pt-4 border-t border-gray-200 dark:border-royal-purple/10 space-y-2">
                    <span className="text-[10px] font-mono tracking-widest text-coral-orange uppercase font-bold block">
                      Core Checklist Item
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {stepItem.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex gap-2 items-center text-xs text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-accent" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Cover Image representation (5 columns) */}
                <div className="md:col-span-5 relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={
                        stepItem.step === 1
                          ? "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800"
                          : stepItem.step === 2
                          ? "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800"
                          : stepItem.step === 3
                          ? "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800"
                          : "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800"
                      }
                      alt={stepItem.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
