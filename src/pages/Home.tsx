import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Users, Award, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-skyline.jpg';

const Home = () => {
  const stats = [
    { icon: Building2, label: 'Projects Completed', value: '150+' },
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Years Experience', value: '25+' },
    { icon: TrendingUp, label: 'Properties Sold', value: '200+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 luxury-gradient opacity-80"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="hero-text mb-6">
            Building Dreams, <span className="text-luxury-gold">Creating Value</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Premier Properties is your trusted partner in residential and commercial real estate development. 
            We construct exceptional buildings and deliver unmatched value to our clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/projects">View Our Projects</Link>
            </Button>
            <Button variant="elegant" size="lg" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-elegant-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-luxury-gold/10 rounded-full">
                    <stat.icon className="h-8 w-8 text-luxury-gold" />
                  </div>
                </div>
                <div className="font-playfair text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Why Choose Premier Properties?</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 25 years of experience in construction and real estate, we have established 
                ourselves as a leader in delivering quality projects on time and within budget.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-primary">Quality Construction</h4>
                    <p className="text-muted-foreground">Premium materials and expert craftsmanship in every project.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-primary">Timely Delivery</h4>
                    <p className="text-muted-foreground">We honor our commitments and deliver projects on schedule.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-primary">Trusted Partnership</h4>
                    <p className="text-muted-foreground">Building lasting relationships with our clients and community.</p>
                  </div>
                </div>
              </div>
              <Button variant="premium" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <Card className="project-card">
                <CardContent className="p-0">
                  <div className="h-96 bg-gradient-to-br from-luxury-navy to-primary rounded-lg flex items-center justify-center">
                    <div className="text-center text-primary-foreground">
                      <Building2 className="h-20 w-20 mx-auto mb-4 text-luxury-gold" />
                      <h3 className="font-playfair text-2xl font-semibold mb-2">Expert Development</h3>
                      <p className="text-primary-foreground/80">Residential & Commercial Excellence</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 luxury-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Dream Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise in construction and real estate development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button variant="elegant" size="lg" asChild>
              <Link to="/projects">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;