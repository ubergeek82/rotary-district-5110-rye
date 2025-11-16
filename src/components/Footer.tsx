import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programs: [
      { name: "Long Term Exchange (LTEP)", href: "#programs" },
      { name: "Short Term Exchange (STEP)", href: "#programs" },
      { name: "Application Process", href: "#contact" },
      { name: "Program Requirements", href: "#programs" }
    ],
    support: [
      { name: "Host Family Guide", href: "#host-families" },
      { name: "Volunteer Opportunities", href: "#volunteers" },
      { name: "Student Resources", href: "#contact" },
      { name: "Emergency Contacts", href: "#contact" }
    ],
    district: [
      { name: "About District 5110", href: "#about" },
      { name: "Rotary Clubs", href: "#contact" },
      { name: "Leadership Team", href: "#contact" },
      { name: "Annual Reports", href: "#contact" }
    ]
  };

  return (
    <footer className="bg-rotary-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/rotary-logo.png" alt="Rotary International" className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-bold">Rotary Youth Exchange</h3>
                <p className="text-sm text-white/80">District 5110</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 text-sm leading-relaxed">
              Connecting young people across cultures through international exchange programs. 
              Building tomorrow's global leaders today.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-rotary-gold flex-shrink-0" />
                <span>rye5110@rotary.org</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-rotary-gold flex-shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-rotary-gold mt-0.5 flex-shrink-0" />
                <span>123 Rotary Way<br />Your City, ST 12345</span>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-rotary-gold">Programs</h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-rotary-gold">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* District Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-rotary-gold">District Info</h4>
            <ul className="space-y-2">
              {footerLinks.district.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/80">
              © {currentYear} Rotary District 5110 Youth Exchange. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-sm text-white/80">Follow us:</span>
              <div className="flex space-x-4">
                <a href="#" className="text-white/80 hover:text-rotary-gold transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-rotary-gold transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-rotary-gold transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Rotary International Credit */}
        <div className="border-t border-white/10 py-4 text-center">
          <p className="text-xs text-white/60">
            Rotary International and the Rotary Foundation make Youth Exchange possible through 
            the generosity of Rotarians worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;