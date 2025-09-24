import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, MapPin, Clock, Users } from "lucide-react";

const Calendar = () => {
  const events = [
    {
      date: "December 15, 2024",
      title: "Information Session - Long Term Exchange",
      location: "Rotary Club of Downtown",
      time: "2:00 PM - 4:00 PM",
      type: "Information Session",
      description: "Learn about our long-term exchange programs for the 2025-26 academic year.",
      registrationRequired: true
    },
    {
      date: "January 12, 2025",
      title: "Host Family Orientation",
      location: "District Office",
      time: "10:00 AM - 12:00 PM",
      type: "Training",
      description: "Comprehensive training for new and returning host families.",
      registrationRequired: true
    },
    {
      date: "January 20, 2025",
      title: "Application Workshop",
      location: "Virtual Event",
      time: "7:00 PM - 8:30 PM",
      type: "Workshop",
      description: "Get help with your exchange application from our experienced team.",
      registrationRequired: true
    },
    {
      date: "February 8, 2025",
      title: "Student Interview Day",
      location: "Multiple Locations",
      time: "9:00 AM - 5:00 PM",
      type: "Interview",
      description: "Final interviews for exchange program applicants.",
      registrationRequired: false
    },
    {
      date: "March 15, 2025",
      title: "Cultural Night",
      location: "Community Center",
      time: "6:00 PM - 9:00 PM",
      type: "Social Event",
      description: "Celebration with current exchange students, host families, and volunteers.",
      registrationRequired: false
    },
    {
      date: "April 10, 2025",
      title: "Pre-departure Orientation",
      location: "District Office",
      time: "1:00 PM - 5:00 PM",
      type: "Orientation",
      description: "Essential preparation for outbound exchange students and families.",
      registrationRequired: true
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Information Session":
        return "bg-rotary-blue text-white";
      case "Training":
        return "bg-rotary-red text-white";
      case "Workshop":
        return "bg-rotary-gold text-rotary-navy";
      case "Interview":
        return "bg-rotary-navy text-white";
      case "Social Event":
        return "bg-green-500 text-white";
      case "Orientation":
        return "bg-purple-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section id="calendar" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <CalendarIcon className="h-16 w-16 text-rotary-blue mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-rotary-navy mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about important dates, information sessions, and 
            community events in our Youth Exchange program.
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {events.map((event, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                      <Badge className={getEventTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground font-medium">
                        {event.date}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-rotary-navy mb-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {event.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-rotary-blue" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-rotary-blue" />
                        {event.time}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    {event.registrationRequired && (
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Register Now
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subscribe Section */}
        <Card className="shadow-card mt-16">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-rotary-navy">
              Stay Updated
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Subscribe to our calendar to receive notifications about upcoming events, 
              deadlines, and important announcements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                <CalendarIcon className="mr-2 h-5 w-5" />
                Subscribe to Calendar
              </Button>
              <Button variant="outline" size="lg">
                Download Event List
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t">
              <div className="text-center">
                <Users className="h-8 w-8 text-rotary-blue mx-auto mb-2" />
                <div className="font-semibold text-rotary-navy">Information Sessions</div>
                <div className="text-sm text-muted-foreground">Learn about programs</div>
              </div>
              <div className="text-center">
                <CalendarIcon className="h-8 w-8 text-rotary-red mx-auto mb-2" />
                <div className="font-semibold text-rotary-navy">Training Events</div>
                <div className="text-sm text-muted-foreground">For families & volunteers</div>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 text-rotary-gold mx-auto mb-2" />
                <div className="font-semibold text-rotary-navy">Social Gatherings</div>
                <div className="text-sm text-muted-foreground">Community celebrations</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Calendar;