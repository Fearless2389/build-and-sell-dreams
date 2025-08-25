import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Quote, Star, Building2, Home, Store } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Property Investor',
      project: 'Luxury Residences Tower',
      type: 'residential',
      rating: 5,
      content: 'Premier Properties exceeded our expectations in every way. The quality of construction, attention to detail, and professional management throughout the project was outstanding. Our investment has already shown exceptional returns.',
      image: 'sarah-j'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Owner',
      project: 'Business Park Complex',
      type: 'commercial',
      rating: 5,
      content: 'Working with Premier Properties was a game-changer for our business. They delivered a world-class office space that perfectly matches our needs. The project was completed on time and within budget.',
      image: 'michael-c'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Homeowner',
      project: 'Greenview Apartments',
      type: 'residential',
      rating: 5,
      content: 'Our new home is everything we dreamed of and more. The team at Premier Properties listened to our needs and created a space that truly feels like home. The quality is exceptional and the service was professional.',
      image: 'emily-r'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Real Estate Developer',
      project: 'City Center Mall',
      type: 'commercial',
      rating: 5,
      content: 'As a fellow developer, I can appreciate the level of expertise and professionalism that Premier Properties brings to every project. Their commitment to quality and timely delivery is unmatched in the industry.',
      image: 'david-t'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'First-time Buyer',
      project: 'Skyline Condominiums',
      type: 'residential',
      rating: 5,
      content: 'Premier Properties made our first home buying experience smooth and stress-free. They guided us through every step and delivered a beautiful condominium with stunning views. We couldn\'t be happier!',
      image: 'lisa-w'
    },
    {
      id: 6,
      name: 'Robert Kim',
      role: 'Startup Founder',
      project: 'Innovation Hub',
      type: 'commercial',
      rating: 5,
      content: 'The Innovation Hub is the perfect space for our growing tech company. Premier Properties understood our unique needs and created a modern, flexible workspace that inspires innovation and collaboration.',
      image: 'robert-k'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'residential': return Home;
      case 'commercial': return Store;
      default: return Building2;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'residential': return 'bg-blue-100 text-blue-800';
      case 'commercial': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '150+', label: 'Projects Delivered' }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Hear from our satisfied clients about their experience working with Premier Properties 
              and the exceptional results we've delivered together.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Slider */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          
          <div className="relative">
            <Card className="luxury-shadow">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Client Info */}
                  <div className="text-center md:text-left">
                    <div className="w-24 h-24 bg-gradient-to-br from-luxury-navy to-primary rounded-full mx-auto md:mx-0 mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-foreground">
                        {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-primary mb-1">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {testimonials[currentIndex].role}
                    </p>
                    <Badge className={getTypeColor(testimonials[currentIndex].type)}>
                      {testimonials[currentIndex].type.charAt(0).toUpperCase() + testimonials[currentIndex].type.slice(1)}
                    </Badge>
                  </div>

                  {/* Testimonial Content */}
                  <div className="md:col-span-2">
                    <Quote className="h-12 w-12 text-luxury-gold mb-6 mx-auto md:mx-0" />
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                      "{testimonials[currentIndex].content}"
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                      <div className="flex">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].rating}/5 Stars
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Project: {testimonials[currentIndex].project}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-4 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-luxury-gold' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-elegant-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">All Reviews</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Browse through all our client testimonials to see the consistent quality and satisfaction we deliver.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const TypeIcon = getTypeIcon(testimonial.type);
              return (
                <Card key={testimonial.id} className="project-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-luxury-navy to-primary rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-primary-foreground">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary text-sm">
                            {testimonial.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <TypeIcon className="h-5 w-5 text-luxury-gold" />
                    </div>
                    
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    
                    <Badge className={`${getTypeColor(testimonial.type)} text-xs`}>
                      {testimonial.project}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Client Satisfaction</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our client satisfaction metrics.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-playfair text-4xl font-bold text-luxury-gold mb-2">
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

      {/* Call to Action */}
      <section className="py-20 luxury-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Join Our Satisfied Clients?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Experience the Premier Properties difference for yourself. Let's create something exceptional together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button variant="elegant" size="lg" asChild>
              <Link to="/projects">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;