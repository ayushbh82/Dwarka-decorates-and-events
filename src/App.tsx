import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ServicesSection from "./components/ServicesSection";
import Portfolio from "./components/Portfolio";
import QuoteEstimator from "./components/QuoteEstimator";
import ProcessSection from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactFAQ from "./components/ContactFAQ";
import Footer from "./components/Footer";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [estimatorTypeKey, setEstimatorTypeKey] = useState<string>("wedding");
  const [prefilledMessage, setPrefilledMessage] = useState<string>("");

  // Keep dark class on document root to assist with Tailwind dark: variants
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset headers by 80px space
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Callback from Services Section cards to pre-configure event type in the cost estimator
  const handleSelectEventEstimate = (typeKey: string) => {
    setEstimatorTypeKey(typeKey);
    handleScrollToSection("estimator");
  };

  // Callback from Estimator receipt to prefill contact form
  const handleEstimateGenerated = (summaryText: string) => {
    setPrefilledMessage(summaryText);
    handleScrollToSection("contact");
  };

  const handleClearPrefilledMessage = () => {
    setPrefilledMessage("");
  };

  return (
    <div className={isDarkMode ? "dark bg-dark-charcoal text-white font-sans min-h-screen transition-colors duration-300" : "bg-white text-gray-900 font-sans min-h-screen transition-colors duration-300"}>
      
      {/* Sticky header */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        onScrollToSection={handleScrollToSection}
      />

      <main>
        {/* 1. Hero banner slideshow */}
        <Hero
          isDarkMode={isDarkMode}
          onScrollToSection={handleScrollToSection}
        />

        {/* 2. Brand history and statistics */}
        <About />

        {/* 3. 12 grand event services (Includes modal details) */}
        <ServicesSection onSelectEventEstimate={handleSelectEventEstimate} />

        {/* 4. Filterable masonry image gallery */}
        <Portfolio />

        {/* 5. Cost project estimator widget */}
        <QuoteEstimator
          selectedTypeKey={estimatorTypeKey}
          onSelectTypeKey={setEstimatorTypeKey}
          onEstimateGenerated={handleEstimateGenerated}
        />

        {/* 6. Professional operating pipeline timeline (1 to 4) */}
        <ProcessSection />

        {/* 7. Client reviews slider */}
        <TestimonialsSection />

        {/* 8. FAQs & Inquiry intake (Includes embedded Google map) */}
        <ContactFAQ
          prefilledMessage={prefilledMessage}
          onClearPrefilledMessage={handleClearPrefilledMessage}
        />
      </main>

      {/* Comprehensive brand footer links */}
      <Footer onScrollToSection={handleScrollToSection} />

    </div>
  );
}
