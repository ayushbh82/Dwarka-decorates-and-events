import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Heart, Briefcase, Cake, Sparkles, Music, 
  Milestone, Volume2, Flower, Smile, Utensils, 
  MapPin, Users, Check, ArrowRight, X, Phone
} from "lucide-react";
import { SERVICES_DATA } from "../data";
import { ServiceItem } from "../types";

// Icon lookup table
const iconMap: Record<string, any> = {
  Heart: Heart,
  Briefcase: Briefcase,
  Cake: Cake,
  Sparkles: Sparkles,
  Music: Music,
  Milestone: Milestone,
  Volume2: Volume2,
  Flower: Flower,
  Smile: Smile,
  Utensils: Utensils,
  MapPin: MapPin,
  Users: Users
};

interface ServicesProps {
  onSelectEventEstimate: (typeKey: string) => void;
}

export default function ServicesSection({ onSelectEventEstimate }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceTypeKey = (id: string): string => {
    switch (id) {
      case "wedding-planning": return "wedding";
      case "corporate-events": return "corporate";
      case "birthday-parties": return "birthday";
      case "anniversary-celebrations": return "anniversary";
      case "cultural-programs": return "cultural";
      default: return "wedding"; // fallback baseline
    }
  };

  const handleCalculatorTrigger = (service: ServiceItem) => {
    const key = getServiceTypeKey(service.id);
    setSelectedService(null);
    onSelectEventEstimate(key);
  };

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-dark-charcoal/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-extrabold tracking-widest text-[#D4AF37] uppercase px-3 py-1 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/30">
            OUR COMPREHENSIVE EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-gray-900 dark:text-white">
            Bespoke Event Services <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-purple via-coral-orange to-luxury-gold font-serif italic font-normal">
              Tailored for Every Occasion
            </span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-sans">
            Explore our curated solutions designed to host seamless, high-prestige events across Delhi NCR since 2001. Click any card to explore details and request instant estimates.
          </p>
        </div>

        {/* Services Grid (12 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = iconMap[service.iconName] || Star;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedService(service)}
                className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-100 dark:border-royal-purple/10 p-6 shadow-md transition-all duration-300 cursor-pointer hover:shadow-xl hover:border-royal-purple/30 group relative flex flex-col justify-between"
              >
                {/* Background color block and icon accent */}
                <div>
                  <div className="flex items-center justify-between pointer-events-none mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-royal-purple to-coral-orange text-white flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6 text-luxury-gold" />
                    </div>
                    <span className="text-xs font-mono tracking-widest text-emerald-500 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full uppercase">
                      Premium
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white group-hover:text-royal-purple dark:group-hover:text-luxury-gold transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37] mt-1 line-clamp-1">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 font-sans line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Micro Actions */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-royal-purple/10 flex items-center justify-between text-xs font-bold text-royal-purple dark:text-[#D4AF37]">
                  <span>Explore Features</span>
                  <div className="w-6 h-6 rounded-full bg-royal-purple/10 dark:bg-royal-purple/20 flex items-center justify-center transition-all duration-300 group-hover:bg-royal-purple group-hover:text-white">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Lead Gen Call to Action mid way */}
        <div className="mt-16 text-center">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
            Have a unique community setup not listed here?
          </p>
          <button
            onClick={() => onScrollToSection("contact")}
            className="text-xs font-bold text-coral-orange hover:text-royal-purple dark:hover:text-luxury-gold underline ml-1.5 transition-colors"
          >
            Ask our expert planner directly &rarr;
          </button>
        </div>

      </div>

      {/* Detail Slide-over Modal using AnimatePresence */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#1A1A1A] rounded-3xl overflow-hidden shadow-2xl border border-royal-purple/20 max-h-[90vh] overflow-y-auto"
            >
              {/* Cover Image inside popup */}
              <div className="relative h-60 w-full">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-[10px] font-mono tracking-widest text-luxury-gold font-bold uppercase">
                    ESTABLISHED 2001 SERVICES
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold mt-0.5">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Popup details content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs uppercase font-extrabold text-coral-orange tracking-wider">
                    {selectedService.tagline}
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-sans leading-relaxed mt-2">
                    {selectedService.longDescription}
                  </p>
                </div>

                {/* Features Checklist */}
                <div>
                  <h5 className="text-xs font-mono font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-royal-purple/10 pb-2 mb-3">
                    Key Deliverables Included
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, i) => (
                      <div key={i} className="flex gap-2 items-start text-xs text-gray-600 dark:text-gray-400">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions bottom */}
                <div className="pt-6 border-t border-gray-150 dark:border-royal-purple/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Lead advice */}
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
                    <Phone className="w-3.5 h-3.5 text-royal-purple dark:text-luxury-gold shrink-0" />
                    <span>Direct Planning line: <strong>+91 98101 20010</strong></span>
                  </div>

                  <div className="flex gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-5 py-2.5 rounded-full text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 transition-colors shrink-0"
                    >
                      Close Window
                    </button>
                    <button
                      onClick={() => handleCalculatorTrigger(selectedService)}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-bold uppercase text-white bg-gradient-to-r from-royal-purple to-coral-orange shadow-md shadow-coral-orange/10 hover:scale-102 transition-transform"
                    >
                      Calculate Quote &rarr;
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Simple fallback helper
function Star(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function onScrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
