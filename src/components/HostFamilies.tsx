import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Heart, Globe, Users, Check, Star } from "lucide-react";
import hostFamilyImage from "@/assets/host-family.jpg";

const HostFamilies = () => {
  const benefits = [
    "Cultural exchange in your own home",
    "Lifelong international friendships",
    "Learn about different cultures",
    "Expand your family's worldview",
    "Support from Rotary district",
    "Meaningful community impact"
  ];

  const requirements = [
    "Welcoming and supportive family environment",
    "Private bedroom for exchange student",
    "Include student in family activities",
    "Provide meals and basic necessities",
    "Support student's educational goals",
    "Communicate with Rotary counselors"
  ];

  return (
    <section id="host-families" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-rotary-blue border-rotary-blue">
            Make a Difference
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-rotary-navy mb-6">
            Become a Host Family
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Open your home and heart to an international student. Experience the joy 
            of cultural exchange while making a lasting impact on a young person's life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img 
              src={hostFamilyImage} 
              alt="Host family welcoming exchange student"
              className="rounded-lg shadow-card w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-rotary-gold text-rotary-navy p-6 rounded-lg shadow-hero max-w-xs">
              <Star className="h-6 w-6 mb-2" />
              <p className="font-semibold text-sm">
                "Hosting has been one of our family's most rewarding experiences!"
              </p>
              <p className="text-xs mt-2 opacity-80">- Current Host Family</p>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-rotary-navy mb-6">
              Why Become a Host Family?
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-rotary-red mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Home className="mr-2 h-5 w-5" />
                Become a Host Family
              </Button>
            </div>
          </div>
        </div>

        {/* Host Family Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-card hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <Heart className="h-12 w-12 text-rotary-red mx-auto mb-4" />
              <CardTitle className="text-xl text-rotary-navy">Long-term Host</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Host a student for 3-4 months during their year-long exchange
              </p>
              <Badge variant="outline" className="text-rotary-red border-rotary-red">
                3-4 months
              </Badge>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-rotary-blue mx-auto mb-4" />
              <CardTitle className="text-xl text-rotary-navy">Short-term Host</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Host students during summer short-term exchange programs
              </p>
              <Badge variant="outline" className="text-rotary-blue border-rotary-blue">
                2-4 weeks
              </Badge>
            </CardContent>
          </Card>

        </div>

        {/* Requirements */}
        <Card className="shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-rotary-navy">
              Host Family Requirements
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              We provide full support and training to ensure a successful hosting experience
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rotary-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{requirement}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg" className="mr-4">
                Download Host Guide
              </Button>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Apply to Host
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HostFamilies;