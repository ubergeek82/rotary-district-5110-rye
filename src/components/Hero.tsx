import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-rotary-navy/80 via-rotary-blue/70 to-rotary-red/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to <br />
            <span className="text-rotary-gold">Rotary District 5110</span><br />
            Youth Exchange
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your world through international exchange. Build lifelong friendships, 
            discover new cultures, and become a global citizen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 shadow-hero transition-smooth">
              Apply for Exchange
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4 backdrop-blur-sm transition-smooth"
            >
              Become a Host Family
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-slide-in">
              <Globe className="h-12 w-12 text-rotary-gold mx-auto mb-4" />
              <div className="text-3xl font-bold text-white">70+</div>
              <div className="text-white/80">Countries</div>
            </div>
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <Users className="h-12 w-12 text-rotary-gold mx-auto mb-4" />
              <div className="text-3xl font-bold text-white">8,000+</div>
              <div className="text-white/80">Students Annually</div>
            </div>
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <Heart className="h-12 w-12 text-rotary-gold mx-auto mb-4" />
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-white/80">Years of Service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;