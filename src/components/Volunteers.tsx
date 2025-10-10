import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Handshake, Calendar, MapPin, BookOpen, Phone } from "lucide-react";
import volunteersImage from "@/assets/volunteers.jpg";

const Volunteers = () => {
  const roles = [
    {
      title: "Youth Exchange Officer",
      description: "Lead the district's youth exchange program and coordinate with clubs",
      commitment: "Monthly meetings + events",
      icon: Users,
      color: "text-rotary-red"
    },
    {
      title: "Host Family Coordinator",
      description: "Recruit and support host families throughout the district",
      commitment: "Flexible schedule",
      icon: Handshake,
      color: "text-rotary-blue"
    },
    {
      title: "Student Counselor",
      description: "Mentor exchange students and provide ongoing support",
      commitment: "Weekly check-ins",
      icon: BookOpen,
      color: "text-rotary-gold"
    },
    {
      title: "Event Coordinator",
      description: "Organize orientations, cultural events, and farewell gatherings",
      commitment: "Event-based",
      icon: Calendar,
      color: "text-rotary-red"
    },
    {
      title: "Transportation Support",
      description: "Help with airport pickups and transportation needs",
      commitment: "As needed",
      icon: MapPin,
      color: "text-rotary-blue"
    },
    {
      title: "Emergency Contact",
      description: "Provide 24/7 emergency support for students and families",
      commitment: "On-call rotation",
      icon: Phone,
      color: "text-rotary-gold"
    }
  ];

  const benefits = [
    "Make a lasting impact on young lives",
    "Gain international perspective",
    "Build leadership skills",
    "Network with Rotarians globally",
    "Personal fulfillment and growth",
    "Recognition and awards"
  ];

  return (
    <section id="volunteers" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-rotary-red border-rotary-red">
            Service Above Self
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-rotary-navy mb-6">
            Volunteer Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our dedicated team of volunteers and help create life-changing experiences 
            for young people around the world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-rotary-navy mb-6">
              Why Volunteer with Us?
            </h3>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rotary-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Users className="mr-2 h-5 w-5" />
                Join Our Team
              </Button>
              <p className="text-sm text-muted-foreground">
                All volunteers receive comprehensive training and ongoing support
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={volunteersImage} 
              alt="Rotary volunteers at community event"
              className="rounded-lg shadow-card w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-rotary-red text-white p-6 rounded-lg shadow-hero max-w-xs">
              <Users className="h-6 w-6 mb-2" />
              <p className="font-semibold text-sm">
                Join 50+ active volunteers in District 5110
              </p>
            </div>
          </div>
        </div>

        {/* Volunteer Roles */}
        <div>
          <h3 className="text-2xl font-bold text-rotary-navy text-center mb-8">
            Volunteer Roles Available
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => {
              const IconComponent = role.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <IconComponent className={`h-12 w-12 ${role.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                    <CardTitle className="text-lg text-rotary-navy">{role.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground text-sm">
                      {role.description}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {role.commitment}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="shadow-card mt-16">
          <CardContent className="text-center py-12">
            <h3 className="text-2xl font-bold text-rotary-navy mb-4">
              Ready to Get Involved?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you have a few hours a month or can take on a leadership role, 
              there's a place for you in our Youth Exchange program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Volunteer Application
              </Button>
              <Button variant="outline" size="lg">
                Contact Volunteer Coordinator
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Volunteers;