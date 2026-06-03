import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, Mail, MapPin, ChevronDown, CheckCircle, 
  Send, HelpCircle, ArrowUp, Calendar, Users, Star, Sparkles, MessageSquare
} from "lucide-react";
import { FAQS_DATA } from "../data";

interface ContactProps {
  prefilledMessage: string;
  onClearPrefilledMessage: () => void;
}

export default function ContactFAQ({ prefilledMessage, onClearPrefilledMessage }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "150",
    service: "wedding-planning",
    message: ""
  });

  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showToTop, setShowToTop] = useState(false);
  const [quoteRef, setQuoteRef] = useState("");

  const formRef = useRef<HTMLDivElement>(null);

  // Sync pre-filled calculator message
  useEffect(() => {
    if (prefilledMessage) {
      setFormData((prev) => ({
        ...prev,
        message: prefilledMessage
      }));

      // Automatically scroll form into view smoothly
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }, [prefilledMessage]);

  // Back-to-top button appear logic
  useEffect(() => {
    const toggleVisibility = () => {
      setShowToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter at least Name and Phone hotline coordinates!");
      return;
    }

    setIsSubmitting(true);

    // Simulate elite submission with loader and modal
    setTimeout(() => {
      const randomRef = "DE-2026-" + Math.floor(1000 + Math.random() * 9000);
      setQuoteRef(randomRef);
      setIsSubmitting(false);
      setShowSuccessModal(true);
      // Reset
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        guests: "150",
        service: "wedding-planning",
        message: ""
      });
      onClearPrefilledMessage();
    }, 1500);
  };

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#1A1A1A] relative" ref={formRef}>
      
      {/* Decorative vectors */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-royal-purple/5 blur-3xl -z-10" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-coral-orange/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20 animate-fade-in">
          <span className="text-xs font-mono font-extrabold tracking-widest text-[#D4AF37] uppercase px-3 py-1 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/20">
            CONNECT WITH EXPERTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#1A1A1A] dark:text-white leading-tight">
            Schedule Your Consultation & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-purple via-coral-orange to-luxury-gold font-serif italic font-normal">
              Secure Your Exclusive Dates
            </span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-sans">
            Ready to design a sensory visual experience? Answer the checklist form block below, visit our physical studio in Delhi, or tap the WhatsApp button for direct support.
          </p>
        </div>

        {/* DOUBLE LAYOUT COLUMN: Contact details, Map, and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          {/* LEFT 5 COLUMNS: Contact detail & Map Frame */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-black text-[#1A1A1A] dark:text-white">
                Dwarka Events Group
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-sans leading-relaxed">
                We operate from Sector 12 Dwarka, New Delhi, carrying premium setups across South Delhi, Central Delhi, Gurugram, and Greater Noida. Step by for coffee trials!
              </p>

              {/* Direct rows */}
              <div className="space-y-4">
                
                {/* 1. Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-royal-purple/10 dark:bg-royal-purple/30 text-royal-purple dark:text-luxury-gold flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">Registered Corporate Office</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                      Dwarka Events, 3rd Floor, Plot No. 12, Sector 12A, Dwarka, New Delhi - 110075, India.
                    </p>
                  </div>
                </div>

                {/* 2. Phone Call */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-coral-orange/10 dark:bg-coral-orange/30 text-coral-orange flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">Direct Project Hotlines</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <a href="tel:+919810120010" className="hover:text-royal-purple block font-semibold">+91 98101 20010</a>
                      <a href="tel:+911128002001" className="hover:text-royal-purple block">+91 11 2800 2001</a>
                    </p>
                  </div>
                </div>

                {/* 3. Mail */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-teal-accent/10 dark:bg-teal-accent/30 text-teal-accent flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A1A1A] dark:text-white font-sans">Corporate Writing</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <a href="mailto:planning@dwarkaevents.co.in" className="hover:text-teal-accent block font-medium">planning@dwarkaevents.co.in</a>
                      <a href="mailto:inquiry@dwarkaevents.co.in" className="hover:text-teal-accent block">inquiry@dwarkaevents.co.in</a>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Map Interactive Iframe */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-royal-purple/20 shadow-md h-56 relative group">
              <iframe
                title="Dwarka Events Office Map Sector 12"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.332304917631!2d77.03964467140833!3d28.589832194605963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad75df726bf%3A0xc172e276f7c5e263!2sSector%2012%20Dwarka%2C%20Dwarka%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1717325000000!5m2!1sen!2sin"
                className="w-full h-full border-none opacity-85 group-hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* RIGHT 7 COLUMNS: Inquiry intake Form */}
          <div className="lg:col-span-7 bg-gray-50 dark:bg-dark-charcoal/30 p-6 sm:p-10 rounded-3xl border border-gray-150 dark:border-royal-purple/10 shadow-lg relative">
            <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-royal-purple dark:text-luxury-gold animate-pulse" />
              Inquire Online & Lock Pricing
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5 text-xs text-gray-700 dark:text-gray-300">
              
              {/* Double cluster: Name, Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold tracking-wide uppercase text-[10px] text-gray-500">Your Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 dark:bg-dark-charcoal focus:outline-none focus:border-royal-purple transition-colors text-xs"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold tracking-wide uppercase text-[10px] text-gray-500">Your Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@agency.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 dark:bg-dark-charcoal focus:outline-none focus:border-royal-purple transition-colors text-xs"
                  />
                </div>
              </div>

              {/* Double cluster: Phone, Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold tracking-wide uppercase text-[10px] text-gray-500">Contact WhatsApp Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98010 XXXXX"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 dark:bg-dark-charcoal focus:outline-none focus:border-royal-purple transition-colors text-xs"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold tracking-wide uppercase text-[10px] text-gray-500">Preferred Event Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 dark:bg-dark-charcoal focus:outline-none focus:border-royal-purple transition-colors text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Guests slider factor and Core Services drop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold tracking-wide uppercase text-[10px] text-gray-500">Estimated Guest Count</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 dark:bg-dark-charcoal focus:outline-none focus:border-royal-purple transition-colors text-xs"
                  >
                    <option value="50">Under 100 Guests (Boutique)</option>
                    <option value="150">100 - 300 Guests (Medium)</option>
                    <option value="400">300 - 600 Guests (Large)</option>
                    <option value="800">600 - 1000 Guests (Grand banquet)</option>
                    <option value="1200">1000+ Guests (Royal scale)</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold tracking-wide uppercase text-[10px] text-gray-500">Core Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 dark:bg-dark-charcoal focus:outline-none focus:border-royal-purple transition-colors text-xs animate-pulse"
                  >
                    <option value="wedding-planning">Wedding Planning & Decor</option>
                    <option value="corporate-events">Corporate Forums & Audio Rig</option>
                    <option value="birthday-parties">Theme Birthday Carnival</option>
                    <option value="anniversary-celebrations">Anniversary Celebration</option>
                    <option value="cultural-programs">Festivals & Large Stage Sound</option>
                    <option value="religious-events">Religious / Pious Jagran</option>
                  </select>
                </div>
              </div>

              {/* Text notes */}
              <div className="space-y-1.5">
                <label className="font-bold tracking-wide uppercase text-[10px] text-gray-500">Event Specific Details / Cost Checklist Notes</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter custom layout notes (e.g. Exotic white lilies request or line-array bass preferences)..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 dark:bg-dark-charcoal focus:outline-none focus:border-royal-purple transition-colors text-xs font-sans leading-relaxed"
                />
              </div>

              {/* Warnings and triggers */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase text-white bg-gradient-to-r from-royal-purple via-coral-orange to-royal-gold shadow-md hover:opacity-95 active:scale-98 transition-all flex items-center justify-center gap-1.5"
              >
                {isSubmitting ? (
                  <span>Securing Calendar Dates...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Proposal Request &rarr;</span>
                  </>
                )}
              </button>

              <p className="text-[10px] text-center text-gray-400">
                *Privacy note: We never share your coordinates. Rest assured.
              </p>

            </form>
          </div>

        </div>

        {/* FREQUENTLY ASKED QUESTIONS SECTION */}
        <div className="mt-28 border-t border-gray-150 dark:border-royal-purple/10 pt-20">
          <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900 dark:text-white">
              Planning Clarifications (FAQ)
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Answers regarding catering coordinate liability, budget projections, booking timelines, and local NCR support permits.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS_DATA.map((faq) => {
              const isOpen = expandedFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-gray-50 dark:bg-dark-charcoal/20 border border-gray-150 dark:border-royal-purple/10 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  {/* Click header */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-gray-900 dark:text-white font-sans focus:outline-none hover:text-royal-purple transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-royal-purple shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Collapsed explanation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 border-t border-gray-200/50 dark:border-royal-purple/5 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-sans mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* FIXED FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919810120010?text=Hi%20Dwarka%20Events%20team%2C%20I'm%20interested%20in%20planning%20an%20event%20with%20you!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform group border border-white/10"
        title="Chat over WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
        {/* Hover label */}
        <span className="absolute right-14 bg-dark-charcoal/90 text-white text-[10px] font-bold font-mono tracking-wider py-1.5 px-3.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md border border-white/10 pointer-events-none">
          WhatsApp Direct: +91 98101 20010
        </span>
      </a>

      {/* FLOAT BACK-TO-TOP BUTTON */}
      <AnimatePresence>
        {showToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleScrollToTop}
            className="fixed bottom-20 right-6 z-40 w-12 h-12 rounded-full bg-royal-purple text-luxury-gold flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform border border-luxury-gold/20"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* CELEBRATORY SUCCESS CONFETTI MODAL FRAME */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowSuccessModal(false)}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative w-full max-w-md bg-white dark:bg-[#1A1A1A] p-8 rounded-3xl text-center shadow-2xl border border-luxury-gold/50"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-500 mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>

              {/* Sparkle decorative */}
              <div className="absolute top-4 right-4 text-luxury-gold animate-bounce">
                <Sparkles className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-display font-extrabold text-gray-900 dark:text-white">
                Inquiry Received!
              </h3>
              
              <div className="mt-3 p-3 bg-royal-purple/5 dark:bg-royal-purple/20 border border-royal-purple/10 rounded-xl">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#D4AF37] uppercase block">
                  PROPOSAL BOOKING REFERENCE
                </span>
                <span className="text-base font-extrabold font-mono text-royal-purple dark:text-[#D4AF37]">
                  {quoteRef}
                </span>
              </div>

              <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 leading-relaxed font-sans px-2">
                Thank you for contacting <strong>Dwarka Events</strong>. Your selected parameters are locked. Our senior event design lead will review space clearances and call or WhatsApp you within <strong>2 hours</strong>!
              </p>

              {/* Checklist review highlights */}
              <div className="mt-6 flex flex-col gap-2 bg-gray-50 dark:bg-white/5 p-4 rounded-xl text-left text-[11px] text-gray-500">
                <div className="flex gap-2 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  <span>WhatsApp coordinate verify completed</span>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-royal-purple" />
                  <span>Assigned: South Delhi/Gurugram Team Lead</span>
                </div>
              </div>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="mt-6 w-full py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white bg-royal-purple hover:bg-royal-purple/90 transition-colors"
                id="btn-close-success"
              >
                Close Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
