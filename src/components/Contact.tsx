import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send, MessageCircle, FileText, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "rye5110@rotary.org",
      description: "Best for general inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      description: "Monday - Friday, 9 AM - 5 PM"
    },
    {
      icon: MapPin,
      title: "District Office",
      details: "123 Rotary Way, Your City, ST 12345",
      description: "By appointment only"
    }
  ];

  const quickLinks = [
    {
      icon: FileText,
      title: "Application Forms",
      description: "Download exchange program applications"
    },
    {
      icon: Users,
      title: "Host Family Info",
      description: "Learn about hosting opportunities"
    },
    {
      icon: MessageCircle,
      title: "FAQ",
      description: "Find answers to common questions"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-rotary-blue border-rotary-blue">
            Get in Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-rotary-navy mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our Youth Exchange programs? We're here to help you 
            start your international adventure.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-rotary-navy">
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student-application">Student Application</SelectItem>
                          <SelectItem value="host-family">Host Family</SelectItem>
                          <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                          <SelectItem value="general">General Information</SelectItem>
                          <SelectItem value="events">Events & Calendar</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={5}
                      className="mt-1"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Quick Links */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-rotary-navy">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <IconComponent className="h-6 w-6 text-rotary-blue mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-rotary-navy">{contact.title}</div>
                        <div className="text-sm font-medium text-foreground">{contact.details}</div>
                        <div className="text-xs text-muted-foreground">{contact.description}</div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-rotary-navy">
                  Quick Links
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start h-auto p-4 text-left"
                    >
                      <IconComponent className="h-5 w-5 text-rotary-blue mr-3 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-rotary-navy">{link.title}</div>
                        <div className="text-xs text-muted-foreground">{link.description}</div>
                      </div>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="shadow-card border-rotary-red border-2">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-rotary-red">
                  Emergency Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  For urgent matters involving exchange students:
                </p>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-rotary-red" />
                  <span className="font-semibold text-rotary-red">(555) 999-0000</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Available 24/7 for emergencies only
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;