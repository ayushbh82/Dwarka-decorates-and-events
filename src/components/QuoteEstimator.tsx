import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Calculator, Sparkles, Users, CheckSquare, Square, FileCheck, ArrowRight } from "lucide-react";
import { ESTIMATE_DATA } from "../data";

interface EstimatorProps {
  selectedTypeKey: string;
  onSelectTypeKey: (key: string) => void;
  onEstimateGenerated: (summaryText: string) => void;
}

export default function QuoteEstimator({ selectedTypeKey, onSelectTypeKey, onEstimateGenerated }: EstimatorProps) {
  const currentConfig = ESTIMATE_DATA[selectedTypeKey] || ESTIMATE_DATA.wedding;
  const [guestsCount, setGuestsCount] = useState<number>(150);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  
  // Reset selected extras when event type shifts
  useEffect(() => {
    setSelectedExtras([]);
  }, [selectedTypeKey]);

  // Handle extras selection toggle
  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Math Calculations
  const baseCost = currentConfig.basePrice;
  const cateringCost = guestsCount * currentConfig.guestPriceMultiplier;
  
  const extrasCost = selectedExtras.reduce((sum, extraId) => {
    const extra = currentConfig.availableExtras.find((e) => e.id === extraId);
    return sum + (extra ? extra.price : 0);
  }, 0);

  const totalEstimate = baseCost + cateringCost + extrasCost;

  // Formatting currency helper (INR Indian Rupees)
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleApplyQuote = () => {
    // Generate an elegant, human readable summary string to populate the contact form
    const extrasList = selectedExtras
      .map((id) => currentConfig.availableExtras.find((e) => e.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const summary = `Proposal Estimate Ref DE-2026:\n`
      + `• Event Type: ${currentConfig.eventType}\n`
      + `• Expected Guest Count: ${guestsCount} people\n`
      + `• Estimated Base Decor: ${formatCurrency(baseCost)}\n`
      + `• Interactive Catering & Seating Factor: ${formatCurrency(cateringCost)}\n`
      + (extrasList ? `• Selected Premium Add-ons: ${extrasList} (${formatCurrency(extrasCost)})\n` : "")
      + `• Rough Budget Blueprint: ${formatCurrency(totalEstimate)} (Excluding GST)`;

    onEstimateGenerated(summary);
  };

  return (
    <section id="estimator" className="py-24 bg-gray-50 dark:bg-dark-charcoal/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-extrabold tracking-widest text-[#D4AF37] uppercase px-3 py-1 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/30">
            TRANSPARENT VALUE BUDGETING
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-gray-900 dark:text-white">
            Instant Cost Estimator <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-purple via-coral-orange to-luxury-gold font-serif italic font-normal">
              Build Your Custom Package
            </span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-sans">
            Customize guest count parameters, toggle staging, lighting rigs, gourmet catering multipliers, and receive a live estimated receipt. Lock in your choices to skip standard consulting delays!
          </p>
        </div>

        {/* Calculator Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Controls Panel (Left, 7 Columns) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#1A1A1A] p-6 sm:p-8 rounded-3xl border border-gray-100 dark:border-royal-purple/10 shadow-lg flex flex-col justify-between">
            <div className="space-y-8">
              
              {/* Factor 1: Select Event Class */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wider font-extrabold text-gray-600 dark:text-gray-300 font-display flex items-center gap-1.5">
                  <Calculator className="w-4 h-4 text-royal-purple dark:text-luxury-gold" />
                  Select Core Event Concept
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {Object.entries(ESTIMATE_DATA).map(([key, config]) => (
                    <button
                      key={key}
                      onClick={() => onSelectTypeKey(key)}
                      className={`px-3 py-3 rounded-xl text-xs font-bold transition-all text-center border ${
                        selectedTypeKey === key
                          ? "bg-royal-purple text-luxury-gold border-luxury-gold/50 shadow-md"
                          : "bg-gray-50 text-gray-600 border-gray-100 dark:bg-white/5 dark:text-gray-300 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/10"
                      }`}
                    >
                      {config.eventType.replace("Conference / ", "")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Factor 2: Guest Count Adjustment Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs uppercase tracking-wider font-extrabold text-gray-600 dark:text-gray-300 font-display flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-coral-orange" />
                    Target Guest Count
                  </label>
                  <span className="text-sm font-bold font-mono text-royal-purple dark:text-luxury-gold px-3 py-1 rounded bg-royal-purple/10 dark:bg-royal-purple/20">
                    {guestsCount} Guests
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1200"
                  step="25"
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(parseInt(e.target.value))}
                  className="w-full h-2 rounded bg-gray-200 dark:bg-[#2A2A2A] appearance-none cursor-pointer accent-royal-purple focus:outline-none"
                />
                <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono">
                  <span>50 Guests</span>
                  <span>400 Mid</span>
                  <span>800 Grand Show</span>
                  <span>1200+ Palatial scale</span>
                </div>
              </div>

              {/* Factor 3: Optional Add-ons Checkbox Grid */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wider font-extrabold text-gray-600 dark:text-gray-300 font-display flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-teal-accent" />
                  Select Modular Premium Upgrades (Check to Add)
                </label>
                <div className="space-y-3">
                  {currentConfig.availableExtras.map((extra) => {
                    const isSelected = selectedExtras.includes(extra.id);
                    return (
                      <div
                        key={extra.id}
                        onClick={() => toggleExtra(extra.id)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                          isSelected
                            ? "border-royal-purple bg-royal-purple/5 dark:bg-royal-purple/10"
                            : "border-gray-100 bg-gray-50 dark:border-white/5 dark:bg-white/5 hover:bg-gray-100"
                        }`}
                      >
                        <div className="shrink-0 mt-0.5 text-royal-purple dark:text-[#D4AF37]">
                          {isSelected ? (
                            <CheckSquare className="w-4 h-4 fill-royal-purple text-luxury-gold dark:fill-dark-charcoal dark:text-luxury-gold" />
                          ) : (
                            <Square className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-xs font-bold text-gray-900 dark:text-white">
                            <span>{extra.name}</span>
                            <span className="text-coral-orange">
                              +{formatCurrency(extra.price)}
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-500 dark:text-gray-400 font-sans mt-0.5">
                            {extra.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Receipt Panel Live Calculations (Right, 5 Columns) */}
          <div className="lg:col-span-5 bg-gradient-to-tr from-dark-charcoal to-[#2A2A2A] text-white p-6 sm:p-8 rounded-3xl border border-royal-purple/30 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
                <div>
                  <h3 className="text-lg font-display font-extrabold text-luxury-gold">
                    Estimated Proposal
                  </h3>
                  <p className="text-[10px] font-mono tracking-wider text-teal-accent uppercase font-bold">
                    Ref DE-2026-EST
                  </p>
                </div>
                <FileCheck className="w-6 h-6 text-[#D4AF37]" />
              </div>

              {/* Receipts breakdown list */}
              <div className="space-y-4 text-xs font-sans">
                {/* Core setup base row */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Base Interior Decor & Coordinator</span>
                  <span className="font-mono text-gray-200">{formatCurrency(baseCost)}</span>
                </div>

                {/* Catering Plate row */}
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-gray-400">Culinary & Seating Factor</span>
                    <span className="text-[10px] text-[#00BFA6] font-semibold">
                      ({guestsCount} Plates x {formatCurrency(currentConfig.guestPriceMultiplier)}/plate)
                    </span>
                  </div>
                  <span className="font-mono text-gray-200">{formatCurrency(cateringCost)}</span>
                </div>

                {/* Extras listed recursively */}
                {selectedExtras.length > 0 && (
                  <div className="border-t border-white/10 pt-4 space-y-2.5">
                    <span className="text-[10px] font-mono tracking-widest text-coral-orange uppercase font-bold block">
                      Premium Custom Extras
                    </span>
                    {selectedExtras.map((extraId) => {
                      const item = currentConfig.availableExtras.find((e) => e.id === extraId);
                      if (!item) return null;
                      return (
                        <div key={item.id} className="flex justify-between items-center text-[11px] text-gray-300">
                          <span className="truncate max-w-[200px] font-medium">{item.name}</span>
                          <span className="font-mono text-coral-orange shrink-0">
                            {formatCurrency(item.price)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Receipt Summary receipt total */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold tracking-wide text-white uppercase">
                  Rough Budget
                </span>
                <div className="text-right">
                  <span className="text-2xl sm:text-3xl font-display font-black text-luxury-gold">
                    {formatCurrency(totalEstimate)}
                  </span>
                  <p className="text-[9px] text-gray-400 uppercase font-mono mt-0.5">
                    *Excl. GST & service fee rules
                  </p>
                </div>
              </div>

              {/* Action and binding */}
              <button
                onClick={handleApplyQuote}
                className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-royal-purple via-coral-orange to-royal-gold shadow-lg shadow-coral-orange/20 hover:scale-103 transition-transform flex items-center justify-center gap-2 group"
              >
                Auto-Fill Inquiry Form
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[10px] text-center text-gray-400 font-sans italic">
                *Locks in seasonal discounts for bookings!
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
