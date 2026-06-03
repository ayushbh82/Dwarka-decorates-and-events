import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Award, ShieldCheck, HeartHandshake, Zap, Check } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
}

function AnimatedCounter({ end, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#1A1A1A] relative overflow-hidden">
      {/* Decorative vector overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal-purple/5 dark:bg-royal-purple/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral-orange/5 dark:bg-coral-orange/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Brand Banner */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden aspect-square border border-royal-purple/20 shadow-2xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1520854225860-f3d970dd4098?auto=format&fit=crop&q=80&w=1000"
                alt="Dwarka Events Luxury Banquet Backdrop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Gold glass badge built directly */}
              <div className="absolute inset-x-4 bottom-4 p-6 rounded-xl bg-dark-charcoal/85 backdrop-blur-md border border-luxury-gold/40 text-center flex flex-col justify-center items-center">
                <span className="text-3xl font-serif font-extrabold text-luxury-gold tracking-tight">Est. 2001</span>
                <span className="text-xs uppercase font-bold tracking-widest text-teal-accent mt-1">20+ Years Excellence</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Company Story & Merits */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-extrabold tracking-widest text-royal-purple dark:text-luxury-gold uppercase px-3 py-1 bg-royal-purple/10 dark:bg-royal-purple/30 rounded-full">
                OUR LEGACY & VISION
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900 dark:text-white">
                Designing Experiences, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-purple to-coral-orange font-serif italic font-normal">
                  Not Just Decorating Venues
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
              Founded in <strong>2001</strong>, Dwarka Events has spent nearly a quarter of a century designing, producing, and executing some of the most prestigious weddings, cultural extravaganzas, and high-impact corporate summits across Delhi NCR. 
            </p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
              We operate on a simple ethos: **flawless precision combined with stellar creativity**. Our team of seasoned set designers, acoustic engineers, culinary planners, and light artists handle everything. Whether negotiating with five-star venues, planning royal entries, or calibrating concert-grade line arrays, we elevate every milestone.
            </p>

            {/* Quick checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: "20+ Years Pristine Reputation", desc: "Serving esteemed families and corporates since 2001" },
                { title: "In-House Dynamic Assets", desc: "Own trussing, luxury drapes, and sound rig items" },
                { title: "Elite Five-Star Liaison", desc: "Preferred vendor with top NCR farms & luxury hotels" },
                { title: "Custom Theme Customization", desc: "Designed fully with digital layouts from scratch" }
              ].map((item, index) => (
                <div key={index} className="flex gap-2.5 items-start">
                  <div className="p-1 rounded-full bg-teal-accent/20 text-teal-accent">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{item.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner: Statistics Counters Grid */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-royal-purple/10 to-coral-orange/10 dark:from-dark-charcoal dark:to-royal-purple/20 border border-royal-purple/20 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-royal-purple/20">
            {/* Stat 1 */}
            <div className="text-center pt-6 lg:pt-0">
              <div className="mx-auto w-12 h-12 rounded-full bg-royal-purple/15 flex items-center justify-center text-royal-purple dark:text-luxury-gold mb-3">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-royal-purple dark:text-[#D4AF37]">
                <AnimatedCounter end={25} suffix="+" />
              </h3>
              <p className="text-xs uppercase font-mono tracking-wider text-gray-500 dark:text-gray-400 mt-1 font-bold">
                Years of Legacy
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center pt-6 lg:pt-0">
              <div className="mx-auto w-12 h-12 rounded-full bg-coral-orange/15 flex items-center justify-center text-coral-orange mb-3">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-coral-orange dark:text-coral-orange">
                <AnimatedCounter end={1000} suffix="+" />
              </h3>
              <p className="text-xs uppercase font-mono tracking-wider text-gray-500 dark:text-gray-400 mt-1 font-bold">
                Events Executed
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center pt-6 lg:pt-0">
              <div className="mx-auto w-12 h-12 rounded-full bg-teal-accent/15 flex items-center justify-center text-teal-accent mb-3">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-teal-accent dark:text-[#00BFA6]">
                <AnimatedCounter end={500} suffix="+" />
              </h3>
              <p className="text-xs uppercase font-mono tracking-wider text-gray-500 dark:text-gray-400 mt-1 font-bold">
                Happy Clients
              </p>
            </div>

            {/* Stat 4 */}
            <div className="text-center pt-6 lg:pt-0">
              <div className="mx-auto w-12 h-12 rounded-full bg-luxury-gold/15 flex items-center justify-center text-[#D4AF37] mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-[#D4AF37]">
                <AnimatedCounter end={100} suffix="%" />
              </h3>
              <p className="text-xs uppercase font-mono tracking-wider text-gray-500 dark:text-gray-400 mt-1 font-bold">
                Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
