import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, Calendar, Users, Square, Bed, Bath, Car, Phone, Mail } from 'lucide-react';
import serenityNestImage from '@/assets/serenity-nest.jpg';
import jayabheriCenterImage from '@/assets/jayabheri-center.jpg';

const ProjectDetail = () => {
  const { projectId } = useParams();

  const projects = {
    'serenity-nest': {
      id: 'serenity-nest',
      title: 'Serenity Nest',
      type: 'residential',
      location: 'Hyderabad, Telangana',
      description: 'A premium 6-story residential complex featuring modern architecture with white and brown facades, spacious balconies, and beautiful landscaping. Designed for luxury living with all modern amenities.',
      longDescription: 'Serenity Nest represents the pinnacle of modern residential living. This beautifully designed 6-story apartment complex combines contemporary architecture with comfort and luxury. Each unit is thoughtfully planned to maximize space and natural light, while the building features premium finishes, glass balconies, and professionally landscaped surroundings.',
      units: 24,
      area: '850,000 sq ft',
      completed: '2023',
      status: 'completed',
      image: serenityNestImage,
      gallery: [serenityNestImage],
      specifications: {
        floors: 6,
        totalUnits: 24,
        unitTypes: ['2BHK', '3BHK', '4BHK'],
        parking: 'Covered parking for all units',
        amenities: ['Swimming Pool', 'Gym', 'Children\'s Play Area', 'Security', 'Landscaped Gardens', 'Power Backup']
      },
      pricing: {
        '2BHK': '₹45-55 Lakhs',
        '3BHK': '₹65-80 Lakhs',
        '4BHK': '₹90-1.2 Crores'
      },
      contact: {
        phone: '+91 9876543210',
        email: 'info@serenityhomes.com'
      }
    },
    'jayabheri-center': {
      id: 'jayabheri-center',
      title: 'Jayabheri Center',
      type: 'commercial',
      location: 'Financial District, Hyderabad',
      description: 'A sophisticated commercial and mixed-use complex featuring contemporary glass facade architecture, premium office spaces, retail outlets, and professional landscaping.',
      longDescription: 'Jayabheri Center stands as a testament to modern commercial architecture. This mixed-use development combines premium office spaces with retail opportunities, all wrapped in a stunning glass facade. The building is strategically located in the heart of the financial district, making it an ideal choice for businesses looking for a prestigious address.',
      units: 40,
      area: '1,200,000 sq ft',
      completed: '2024',
      status: 'completed',
      image: jayabheriCenterImage,
      gallery: [jayabheriCenterImage],
      specifications: {
        floors: 12,
        totalUnits: 40,
        unitTypes: ['Office Spaces', 'Retail Outlets', 'Conference Facilities'],
        parking: 'Multi-level parking facility',
        amenities: ['Food Court', 'ATM', '24/7 Security', 'High-Speed Elevators', 'Central AC', 'Power Backup', 'Fire Safety Systems']
      },
      pricing: {
        'Office Space': '₹80-120 per sq ft',
        'Retail Space': '₹100-150 per sq ft'
      },
      contact: {
        phone: '+91 9876543210',
        email: 'commercial@serenityhomes.com'
      }
    }
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button variant="premium">Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

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
      <section className="py-12 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge className={`${getStatusColor(project.status)} border-0`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </Badge>
                <Badge variant="outline" className="border-luxury-gold text-luxury-gold bg-primary-foreground">
                  {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover hover-scale transition-transform duration-300"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="section-title mb-4">Project Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-luxury-gold" />
                  <span className="text-muted-foreground">{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-luxury-gold" />
                  <span className="text-muted-foreground">Completed {project.completed}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-luxury-gold" />
                  <span className="text-muted-foreground">{project.units} Units</span>
                </div>
                <div className="flex items-center gap-2">
                  <Square className="h-4 w-4 text-luxury-gold" />
                  <span className="text-muted-foreground">{project.area}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-elegant-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="project-card">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold text-primary mb-6">
                  Specifications
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Total Floors</span>
                    <span className="font-semibold text-primary">{project.specifications.floors}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Total Units</span>
                    <span className="font-semibold text-primary">{project.specifications.totalUnits}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Unit Types</span>
                    <span className="font-semibold text-primary">{project.specifications.unitTypes.join(', ')}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Parking</span>
                    <span className="font-semibold text-primary">{project.specifications.parking}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold text-primary mb-6">
                  Amenities & Features
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.specifications.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing & Contact */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="project-card">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold text-primary mb-6">
                  Pricing Information
                </h3>
                <div className="space-y-4">
                  {Object.entries(project.pricing).map(([type, price]) => (
                    <div key={type} className="flex justify-between items-center py-3 border-b border-border/50 last:border-b-0">
                      <span className="font-medium text-primary">{type}</span>
                      <span className="font-semibold text-luxury-gold">{price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  *Prices are subject to change. Contact us for current rates and availability.
                </p>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold text-primary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-luxury-gold" />
                    <span className="text-muted-foreground">{project.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-luxury-gold" />
                    <span className="text-muted-foreground">{project.contact.email}</span>
                  </div>
                </div>
                <Button variant="premium" className="w-full" asChild>
                  <Link to="/contact">Schedule Site Visit</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Floor Plans Placeholder */}
      <section className="py-16 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Floor Plans & Site Maps
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Detailed floor plans and site maps will be available soon. Contact us for more information.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Request Floor Plans</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;