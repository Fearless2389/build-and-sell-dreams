import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  Building2,
  Users,
  Calculator,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formPayload = {
    access_key: "c722b9ac-b03f-434f-b7d4-603b0284ba61", 
    subject: "New Contact Form Submission - Serenity Homes",
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    projectType: formData.projectType,
    budget: formData.budget,
    message: formData.message,
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formPayload),
    });

    const result = await response.json();

    if (result.success) {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: ''
      });
    } else {
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again.",
      variant: "destructive",
    });
  }
};


  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 9989007575',
      description: 'Call us for immediate assistance'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      details: '+91 9989007575',
      description: 'Quick messages and updates'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@serenityhomes.com',
      description: 'Send us detailed inquiries'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      details: 'Flat G-11,Serenity Homes Apartment',
      description: 'Kompally,Hyderabad,500100'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'Sat: 10:00 AM - 4:00 PM'
    }
  ];

  const services = [
    {
      icon: Building2,
      title: 'New Construction',
      description: 'Custom buildings from ground up'
    },
    {
      icon: Users,
      title: 'Property Consultation',
      description: 'Expert real estate guidance'
    },
    {
      icon: Calculator,
      title: 'Investment Analysis',
      description: 'ROI and market evaluation'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Ready to start your project? Get in touch with our expert team for a consultation 
              and let's bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="luxury-shadow">
                <CardContent className="p-8">
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-6">
                    Get Free Consultation
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectType">Project Type</Label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select project type</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="consultation">Consultation</option>
                          <option value="investment">Investment</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under-60L">Under 60L</option>
                        <option value="60-1Cr">60L - 1Cr</option>
                        <option value="1Cr-plus">1Cr+</option>
                        <option value="consultation">Just Consultation</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, requirements, timeline, or any questions you have..."
                        className="min-h-32"
                        required
                      />
                    </div>
                    
                    <Button type="submit" variant="premium" size="lg" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="card-shadow">
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="p-2 bg-luxury-gold/10 rounded-lg">
                          <info.icon className="h-5 w-5 text-luxury-gold" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary text-sm">
                            {info.title}
                          </h4>
                          <p className="text-sm text-foreground font-medium">
                            {info.details}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-shadow">
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-6">
                    Quick Services
                  </h3>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-elegant-gray/50">
                        <service.icon className="h-5 w-5 text-luxury-gold" />
                        <div>
                          <h4 className="font-medium text-primary text-sm">
                            {service.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Why Contact Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Contact Serenity Homes?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-luxury-gold/10 rounded-full">
                  <CheckCircle className="h-10 w-10 text-luxury-gold" />
                </div>
              </div>
              <h3 className="font-playfair text-lg font-semibold text-primary mb-3">
                Free Consultation
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Get expert advice and project estimates at no cost. We believe in transparent communication from day one.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-luxury-gold/10 rounded-full">
                  <Clock className="h-10 w-10 text-luxury-gold" />
                </div>
              </div>
              <h3 className="font-playfair text-lg font-semibold text-primary mb-3">
                Quick Response
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We respond to all inquiries within 24 hours. Your time is valuable, and we respect that.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-luxury-gold/10 rounded-full">
                  <Users className="h-10 w-10 text-luxury-gold" />
                </div>
              </div>
              <h3 className="font-playfair text-lg font-semibold text-primary mb-3">
                Expert Team
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Connect with our experienced professionals who understand your needs and deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 luxury-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Your dream project is just one conversation away. Contact us today and let's turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Phone className="h-4 w-4 mr-2" />
              Call Now: +91 9989007575
            </Button>
            <Button variant="elegant" size="lg">
              <MessageSquare className="h-4 w-4 mr-2" />
              WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
