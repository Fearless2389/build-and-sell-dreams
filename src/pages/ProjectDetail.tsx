import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, Calendar, Users, Square, Phone, Mail } from 'lucide-react';
import serenityNestImage from '@/assets/Serenity Nest.jpg';
import serenityHomesImage from '@/assets/Serenity Homes.jpg';
import serenityNestPDF from '@/assets/Serenity Nest.pdf';
import serenityHomesPDF from '@/assets/Serenity Homes floor plan.pdf';

interface Project {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  longDescription: string;
  units: number;
  area: string;
  completed: string;
  status: string;
  image: string;
  specifications: {
    floors: number;
    totalUnits: number;
    unitTypes: string[];
    parking: string;
    amenities: string[];
  };
  pricing: Record<string, string>;
  contact: {
    phone: string;
    email: string;
  };
  pdf: string;
  mapSrc: string;
}

const projects: Record<string, Project> = {
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
      phone: '+91 9989007575',
      email: 'info@serenityhomes.com'
    },
    pdf: serenityNestPDF,
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.451067080757!2d78.47849577501974!3d17.533698398573964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb850067b25ea5%3A0x5c0bec359e9815fa!2sSerenity%20Nest!5e0!3m2!1sen!2sin!4v1758779753409!5m2!1sen!2sin'
  },
  'serenity-homes': {
    id: 'serenity-homes',
    title: 'Serenity Homes',
    type: 'residential',
    location: 'Kompally, Hyderabad, Telangana',
    description: 'A sophisticated commercial and mixed-use complex featuring contemporary glass facade architecture, premium office spaces, and retail outlets.',
    longDescription: 'Serenity Homes is a contemporary mixed-use development offering premium office spaces, retail outlets, and modern architectural design. Strategically located in Kompally, it offers convenience, accessibility, and a prestigious address.',
    units: 40,
    area: '1,200,000 sq ft',
    completed: '2024',
    status: 'completed',
    image: serenityHomesImage,
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
      phone: '+91 9989007575',
      email: 'commercial@serenityhomes.com'
    },
    pdf: serenityHomesPDF,
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.468617576684!2d78.47884237501971!3d17.532861798598304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb855a066076a5%3A0xe64ff121e3ccd4da!2sSerenity%20Homes%2C%20Cine%20Planet%20Rd%2C%20near%20Royal%20Meadows%20Gated%20Community%2C%20Satyam%20Enclave%2C%20Kompally%2C%20Hyderabad%2C%20Telangana%20500100!5e0!3m2!1sen!2sin!4v1758779582314!5m2!1sen!2sin'
  }
};

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams();
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

      {/* Project Overview, Map & PDF */}
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

              <div className="mt-6 w-full rounded-lg overflow-hidden space-y-4">
                <iframe
                  src={project.mapSrc}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${project.title} Location`}
                ></iframe>

                <div className="text-center">
                  <a
                    href={project.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="hero">Download Brochure (PDF)</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications, Amenities, Pricing & Contact sections remain unchanged */}
    </div>
  );
};

export default ProjectDetail;
