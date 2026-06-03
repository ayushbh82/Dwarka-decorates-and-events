import { Stars, Instagram, Facebook, Linkedin, Youtube, Mail, Phone, Heart, MapPin } from "lucide-react";

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    onScrollToSection(id);
  };

  return (
    <footer className="bg-dark-charcoal text-gray-350 border-t border-royal-purple/20 pt-16 pb-8 relative overflow-hidden">
      
      {/* Absolute design accents */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-royal-purple via-coral-orange to-luxury-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
        
        {/* Col 1: Brand & Bio (4 columns) */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => handleLinkClick("hero")}>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-royal-purple to-coral-orange flex items-center justify-center">
              <Stars className="w-4 h-4 text-luxury-gold" />
            </div>
            <div>
              <h4 className="text-lg font-display font-black text-white tracking-tight flex items-center gap-1">
                DWARKA<span className="text-coral-orange">EVENTS</span>
              </h4>
              <p className="text-[8px] font-mono tracking-widest text-[#D4AF37] uppercase -mt-1 font-bold">
                ESTD. 2001 • Delhi NCR
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-400 font-sans leading-relaxed">
            Dwarka Events is a highly respected full-scope event planning and management consultancy, crafting breathtaking weddings, elite corporate milestones, and vibrant community festivals across Delhi NCR for nearly a quarter of a century.
          </p>
          
          {/* Social Icons row */}
          <div className="flex items-center gap-3 pt-2">
            {[
              { icon: Instagram, url: "https://instagram.com/dwarkaevents", name: "Instagram" },
              { icon: Facebook, url: "https://facebook.com/dwarkaevents", name: "Facebook" },
              { icon: Linkedin, url: "https://linkedin.com/company/dwarkaevents", name: "LinkedIn" },
              { icon: Youtube, url: "https://youtube.com/dwarkaevents", name: "YouTube" }
            ].map((social, i) => {
              const IconComp = social.icon;
              return (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:text-luxury-gold hover:bg-royal-purple/25 flex items-center justify-center transition-all duration-300"
                  title={social.name}
                >
                  <IconComp className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Col 2: Navigation Links (2-3 columns) */}
        <div className="md:col-span-2 space-y-4">
          <h5 className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase border-b border-white/10 pb-2">
            Quick Links
          </h5>
          <ul className="space-y-2 text-xs font-sans">
            {[
              { id: "hero", label: "Home Base" },
              { id: "about", label: "About Legacy" },
              { id: "services", label: "Event Services" },
              { id: "portfolio", label: "Pristine Gallery" },
              { id: "estimator", label: "Cost Estimator" },
              { id: "contact", label: "Consultation" }
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className="hover:text-white hover:translate-x-1.5 transition-all text-left text-gray-450 text-[11px]"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Key Core Services (3 columns) */}
        <div className="md:col-span-3 space-y-4">
          <h5 className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase border-b border-white/10 pb-2">
            Main Expertise
          </h5>
          <ul className="space-y-2 text-xs text-gray-400 font-sans">
            <li>
              <button onClick={() => handleLinkClick("services")} className="hover:text-white transition-colors text-left text-[11px]">
                Wedding Planning & Mandap Setup
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("services")} className="hover:text-white transition-colors text-left text-[11px]">
                Corporate AV & High-density LEDs
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("services")} className="hover:text-white transition-colors text-left text-[11px]">
                Thematic Birthday Carnival sets
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("services")} className="hover:text-white transition-colors text-left text-[11px]">
                Concert-grade sound & Light rigs
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("services")} className="hover:text-white transition-colors text-left text-[11px]">
                Luxury Farmhouse & Hotel Liaison
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Reach Info (3 columns) */}
        <div className="md:col-span-3 space-y-4">
          <h5 className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase border-b border-white/10 pb-2">
            Direct Reach
          </h5>
          <ul className="space-y-3 text-xs text-gray-400 font-sans">
            <li className="flex gap-2 items-center">
              <Phone className="w-3.5 h-3.5 text-coral-orange shrink-0" />
              <span>+91 98101 20010</span>
            </li>
            <li className="flex gap-2 items-center">
              <Mail className="w-3.5 h-3.5 text-teal-accent shrink-0" />
              <span className="truncate">planning@dwarkaevents.co.in</span>
            </li>
            <li className="flex gap-2 items-start">
              <MapPin className="w-3.5 h-3.5 text-royal-purple shrink-0 mt-0.5" />
              <span className="leading-relaxed text-[11px]">Sector 12A, Dwarka, New Delhi - 110075</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Under footer copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/5 text-center text-[10px] text-gray-500 font-mono flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {currentYear} Dwarka Events Group, Delhi NCR. All rights reserved.</p>
        
        <p className="flex items-center gap-1">
          Designed with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for elite clients since 2001.
        </p>
      </div>

    </footer>
  );
}
