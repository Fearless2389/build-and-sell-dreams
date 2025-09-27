import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Target, Heart, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We build lasting relationships through honest communication and transparent business practices.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every project, from conception to completion.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your vision is our mission. We listen, understand, and deliver beyond expectations.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace modern techniques and technologies to create future-ready properties.'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'We contribute to building stronger communities through responsible development.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Every project undergoes rigorous quality checks to ensure the highest standards.'
    }
  ];

  const milestones = [
    { year: '1998', title: 'Company Founded', description: 'Started with a vision to transform the real estate landscape' },
    { year: '2005', title: 'First Major Project', description: 'Completed our first commercial complex - City Center Plaza' },
    { year: '2012', title: '100 Projects Milestone', description: 'Celebrated our 100th successful project completion' },
    { year: '2018', title: 'Industry Recognition', description: 'Received "Developer of the Year" award from State Real Estate Association' },
    { year: '2023', title: 'Sustainable Focus', description: 'Launched our green building initiative for eco-friendly developments' }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              About Serenity Homes
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              For over 10 years, we have been at the forefront of real estate development, 
              creating exceptional spaces that enhance lives and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Serenity Homes has a simple yet ambitious goal: to redefine 
                excellence in real estate development. What started as a small construction firm has 
                grown into a trusted name in both residential and commercial development.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our founder's vision was to create more than just buildings – to craft spaces that 
                inspire, connect, and elevate the human experience. Today, that vision continues to 
                drive every project we undertake.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From luxury residential complexes to cutting-edge commercial spaces, we have consistently 
                delivered projects that exceed expectations and stand the test of time.
              </p>
              <Button variant="premium" asChild>
                <Link to="/projects">Explore Our Projects</Link>
              </Button>
            </div>
            <div className="relative">
              <Card className="project-card">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="font-playfair text-6xl font-bold text-luxury-gold mb-4">10+</div>
                    <h3 className="font-playfair text-2xl font-semibold text-primary mb-2">Years of Excellence</h3>
                    <p className="text-muted-foreground">
                      Building trust, one project at a time, with unwavering commitment to quality and innovation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-elegant-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every relationship we build.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="project-card">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-luxury-gold/10 rounded-full">
                      <value.icon className="h-8 w-8 text-luxury-gold" />
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-20 luxury-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our experience and expertise can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button variant="elegant" size="lg" asChild>
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
