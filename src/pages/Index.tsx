import { useEffect, useState } from "react";
import logoImage from "@/assets/amar-punjab-logo.png";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-background overflow-hidden">
      {/* Decorative Elements - Subtle blue brush strokes */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path
            d="M 10 80 Q 60 10, 120 50 T 200 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="40"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full text-accent">
          <path
            d="M 200 120 Q 150 50, 80 100 T 0 120"
            fill="none"
            stroke="currentColor"
            strokeWidth="50"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16">
        
        {/* Logo Section */}
        <div 
          className={`mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src={logoImage}
            alt="Amar Punjab - Cultural Beverage Brand"
            className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl h-auto drop-shadow-2xl"
          />
        </div>

        {/* Headline */}
        <h1 
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 md:mb-8 text-balance leading-tight tracking-tight text-foreground transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Every Sip Carries Punjab's Legacy Forward.
        </h1>

        {/* Sub-headline */}
        <p 
          className={`text-base sm:text-lg md:text-xl lg:text-2xl text-center mb-12 md:mb-16 text-muted-foreground max-w-3xl text-balance leading-relaxed transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Launching Soon — The First Cultural Beverage Movement from Punjab.
        </p>

        {/* CTA Section */}
        <div 
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center justify-center px-8 py-4 text-sm md:text-base font-medium text-foreground border-2 border-border rounded-full hover:border-primary hover:text-primary transition-all duration-300 cursor-default group">
            <span className="relative">
              Be Part of the Revival — Stay Tuned.
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></span>
            </span>
          </div>
        </div>

        {/* Subtle Bottom Text */}
        <div 
          className={`mt-16 md:mt-20 text-xs md:text-sm text-muted-foreground/60 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          A Cultural Revolution
        </div>
      </div>
    </main>
  );
};

export default Index;
