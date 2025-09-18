import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Home, 
  Store, 
  Users, 
  Calculator, 
  Clipboard, 
  Shield, 
  TrendingUp,
  CheckCircle,
  Clock,
  Award,
  Heart
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Construction & Development',
      description: 'Full-service construction from ground breaking to completion with premium materials and expert craftsmanship.',
      features: [
        'Site preparation and planning',
        'Structural engineering',
        'Quality material sourcing',
        'Project management',
        'Safety compliance'
      ]
    },
    {
      icon: Home,
      title: 'Residential Properties',
      description: 'Beautiful homes and apartments designed for modern living with attention to every detail.',
      features: [
        'Luxury apartments and condos',
        'Single-family homes',
        'Townhouse communities',
        'Custom home design',
        'Interior finishing'
      ]
    },
    {
      icon: Store,
      title: 'Commercial Real Estate',
      description: 'Strategic commercial spaces that drive business success and maximize return on investment.',
      features: [
        'Office complexes',
        'Retail centers',
        'Industrial facilities',
        'Mixed-use developments',
        'Investment properties'
      ]
    },
    {
      icon: Users,
      title: 'Property Consultation',
      description: 'Expert guidance throughout your real estate journey from initial planning to final sale.',
      features: [
        'Market analysis',
        'Investment advice',
        'Property valuation',
        'Legal documentation',
        'Financial planning'
      ]
    },
    {
      icon: Calculator,
      title: 'Investment Services',
      description: 'Maximize your real estate investment potential with our comprehensive investment solutions.',
      features: [
        'Portfolio management',
        'ROI optimization',
        'Market research',
        'Risk assessment',
        'Investment strategies'
      ]
    },
    {
      icon: Clipboard,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely delivery within budget and quality standards.',
      features: [
        'Timeline management',
        'Budget control',
        'Quality assurance',
        'Vendor coordination',
        'Progress reporting'
      ]
    }
  ];

  const process = [
    {
      icon: Users,
      title: 'Initial Consultation',
      description: 'We meet to understand your vision, requirements, and budget to create a tailored plan.'
    },
    {
      icon: Clipboard,
      title: 'Planning & Design',
      description: 'Our team develops comprehensive plans and designs that align with your goals and regulations.'
    },
    {
      icon: Shield,
      title: 'Approval & Permits',
      description: 'We handle all necessary approvals, permits, and legal requirements for your project.'
    },
    {
      icon: Building2,
      title: 'Construction',
      description: 'Expert construction team brings your vision to life with quality materials and craftsmanship.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks ensure everything meets our high standards and your expectations.'
    },
    {
      icon: Award,
      title: 'Handover',
      description: 'Final walkthrough and handover with complete documentation and ongoing support.'
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We honor our commitments and deliver projects on schedule without compromising quality.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every project undergoes rigorous quality control to ensure the highest standards.'
    },
    {
      icon: TrendingUp,
      title: 'Value Maximization',
      description: 'Our expertise helps maximize the value and return on your real estate investment.'
    },
    {
      icon: Heart,
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our priority with personalized service and ongoing support.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive real estate solutions from construction to consultation, 
              delivered with expertise and dedication to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              End-to-end real estate services designed to meet all your construction and property needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="project-card group">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-luxury-gold/10 rounded-full group-hover:bg-luxury-gold/20 transition-colors duration-300">
                      <service.icon className="h-10 w-10 text-luxury-gold" />
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-luxury-gold mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-elegant-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to completion.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <Card className="project-card h-full">
                  <CardContent className="p-6 text-center">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex justify-center mb-6 mt-4">
                      <div className="p-4 bg-luxury-gold/10 rounded-full">
                        <step.icon className="h-8 w-8 text-luxury-gold" />
                      </div>
                    </div>
                    <h3 className="font-playfair text-lg font-semibold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Serenity Homes?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence and client satisfaction sets us apart in the industry.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-luxury-gold/10 rounded-full">
                    <advantage.icon className="h-10 w-10 text-luxury-gold" />
                  </div>
                </div>
                <h3 className="font-playfair text-lg font-semibold text-primary mb-3">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 luxury-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive services can help bring your real estate vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button variant="elegant" size="lg" asChild>
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;