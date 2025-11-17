import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const threshold = 100; // Show indicator if more than 100px of content below

      setShowIndicator(scrollPosition < pageHeight - threshold);
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  if (!showIndicator) return null;

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.8,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollDown}
      className="fixed bottom-6 right-6 z-40 bg-rotary-navy/80 hover:bg-rotary-navy text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110"
      aria-label="Scroll down for more content"
    >
      <ChevronDown className="h-6 w-6" />
    </button>
  );
};

export default ScrollIndicator;
