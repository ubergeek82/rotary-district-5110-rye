import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Exchange Programs", href: "#programs" },
    { name: "Host Families", href: "#host-families" },
    { name: "Volunteers", href: "#volunteers" },
    { name: "Calendar", href: "#calendar" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">RYE</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-rotary-navy">Rotary Youth Exchange</h1>
              <p className="text-sm text-muted-foreground">District 5110</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="default" className="bg-primary hover:bg-primary/90 w-full">
                Apply Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;