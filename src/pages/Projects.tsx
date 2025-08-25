import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, MapPin, Calendar, Users, Square } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Luxury Residences Tower',
      type: 'residential',
      location: 'Downtown District',
      description: 'A 20-story luxury residential tower featuring premium amenities and stunning city views.',
      units: 150,
      area: '2.5M sq ft',
      completed: '2023',
      status: 'completed',
      image: 'luxury-tower'
    },
    {
      id: 2,
      title: 'Business Park Complex',
      type: 'commercial',
      location: 'Tech Hub Area',
      description: 'Modern commercial complex with state-of-the-art office spaces and retail outlets.',
      units: 50,
      area: '1.8M sq ft',
      completed: '2023',
      status: 'completed',
      image: 'business-park'
    },
    {
      id: 3,
      title: 'Greenview Apartments',
      type: 'residential',
      location: 'Suburban Heights',
      description: 'Eco-friendly apartment complex with sustainable design and green spaces.',
      units: 200,
      area: '3.2M sq ft',
      completed: '2024',
      status: 'ongoing',
      image: 'greenview-apts'
    },
    {
      id: 4,
      title: 'City Center Mall',
      type: 'commercial',
      location: 'Central Business District',
      description: 'Premium shopping and entertainment complex in the heart of the city.',
      units: 80,
      area: '1.5M sq ft',
      completed: '2024',
      status: 'ongoing',
      image: 'city-mall'
    },
    {
      id: 5,
      title: 'Skyline Condominiums',
      type: 'residential',
      location: 'Waterfront Area',
      description: 'Luxury condominiums with panoramic waterfront and city skyline views.',
      units: 120,
      area: '2.1M sq ft',
      completed: '2022',
      status: 'completed',
      image: 'skyline-condos'
    },
    {
      id: 6,
      title: 'Innovation Hub',
      type: 'commercial',
      location: 'Technology District',
      description: 'Cutting-edge office complex designed for tech companies and startups.',
      units: 40,
      area: '1.2M sq ft',
      completed: '2025',
      status: 'upcoming',
      image: 'innovation-hub'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter || project.status === filter);

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'completed', label: 'Completed' },
    { value: 'ongoing', label: 'Ongoing' },
    { value: 'upcoming', label: 'Upcoming' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'ongoing': return 'bg-blue-100 text-blue-800';
      case 'upcoming': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse collection of residential and commercial projects 
              that showcase our commitment to excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-elegant-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filterItem) => (
              <Button
                key={filterItem.value}
                variant={filter === filterItem.value ? 'premium' : 'outline'}
                onClick={() => setFilter(filterItem.value)}
                className="transition-all duration-300"
              >
                {filterItem.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="project-card group">
                <CardContent className="p-0">
                  {/* Project Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-luxury-navy to-primary flex items-center justify-center relative overflow-hidden">
                    <Building2 className="h-16 w-16 text-luxury-gold opacity-50" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="hero" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge 
                        className={`${getStatusColor(project.status)} border-0`}
                      >
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </Badge>
                      <Badge variant="outline" className="border-luxury-gold text-luxury-gold">
                        {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                      </Badge>
                    </div>
                    
                    <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-luxury-gold" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-luxury-gold" />
                        {project.units} Units
                      </div>
                      <div className="flex items-center gap-2">
                        <Square className="h-4 w-4 text-luxury-gold" />
                        {project.area}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-luxury-gold" />
                        {project.completed}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-elegant-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Project Statistics</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our numbers speak for our commitment to delivering exceptional results.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-playfair text-4xl font-bold text-luxury-gold mb-2">150+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-4xl font-bold text-luxury-gold mb-2">12M+</div>
              <div className="text-muted-foreground">Sq Ft Developed</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-4xl font-bold text-luxury-gold mb-2">500+</div>
              <div className="text-muted-foreground">Families Housed</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-4xl font-bold text-luxury-gold mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 luxury-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you bring your vision to life with our proven expertise and dedication to excellence.
          </p>
          <Button variant="hero" size="lg">
            Start Your Project Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;