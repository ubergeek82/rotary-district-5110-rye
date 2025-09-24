import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, GraduationCap, Users, Calendar, BookOpen } from "lucide-react";

const ExchangePrograms = () => {
  const programs = [
    {
      id: "ltep",
      title: "Long Term Exchange Program",
      subtitle: "LTEP",
      duration: "Academic Year (10-11 months)",
      ageRange: "15-18.5 years",
      description: "Immerse yourself in a new culture for a full academic year. Live with host families, attend local school, and become part of the community.",
      features: [
        "Full academic year abroad",
        "Multiple host families",
        "Local school attendance",
        "Language immersion",
        "Cultural mentorship",
        "Rotary club support"
      ],
      color: "bg-primary",
      textColor: "text-primary-foreground",
      icon: GraduationCap
    },
    {
      id: "step",
      title: "Short Term Exchange Program",
      subtitle: "STEP",
      duration: "3-4 weeks",
      ageRange: "15-19 years",
      description: "Experience international culture through a shorter but intensive exchange program during summer break.",
      features: [
        "Summer program",
        "Host family experience",
        "Cultural activities",
        "Group interactions",
        "Language practice",
        "Rotary networking"
      ],
      color: "bg-secondary",
      textColor: "text-secondary-foreground",
      icon: Users
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rotary-navy mb-6">
            Exchange Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the program that fits your goals and timeline. Both programs offer 
            life-changing experiences and lifelong memories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card key={program.id} className="shadow-card hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="text-center pb-6">
                  <div className={`w-20 h-20 ${program.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-10 w-10 ${program.textColor}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-rotary-navy mb-2">
                    {program.title}
                  </CardTitle>
                  <div className={`inline-block px-4 py-2 ${program.color} ${program.textColor} rounded-full text-sm font-semibold`}>
                    {program.subtitle}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-center">
                    {program.description}
                  </p>
                  
                  <div className="flex justify-center space-x-8">
                    <div className="text-center">
                      <Clock className="h-6 w-6 text-rotary-blue mx-auto mb-2" />
                      <div className="text-sm font-medium">{program.duration}</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-6 w-6 text-rotary-blue mx-auto mb-2" />
                      <div className="text-sm font-medium">{program.ageRange}</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-rotary-navy">Program Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-rotary-gold rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className={`w-full ${program.color} hover:opacity-90 ${program.textColor} transition-smooth`}
                    size="lg"
                  >
                    Apply for {program.subtitle}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Application Timeline */}
        <Card className="shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-rotary-navy">
              Application Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <Calendar className="h-8 w-8 text-rotary-red mx-auto mb-3" />
                <h4 className="font-semibold text-rotary-navy mb-2">Application</h4>
                <p className="text-sm text-muted-foreground">October - February</p>
              </div>
              <div className="text-center">
                <BookOpen className="h-8 w-8 text-rotary-blue mx-auto mb-3" />
                <h4 className="font-semibold text-rotary-navy mb-2">Interviews</h4>
                <p className="text-sm text-muted-foreground">February - March</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-rotary-gold mx-auto mb-3" />
                <h4 className="font-semibold text-rotary-navy mb-2">Matching</h4>
                <p className="text-sm text-muted-foreground">April - June</p>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 text-rotary-red mx-auto mb-3" />
                <h4 className="font-semibold text-rotary-navy mb-2">Departure</h4>
                <p className="text-sm text-muted-foreground">July - August</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExchangePrograms;