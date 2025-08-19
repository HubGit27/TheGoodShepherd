import { Service } from '@/types'

export const services: Service[] = [
  {
    id: '1',
    slug: 'home-contracting',
    title: {
      en: 'Home Contracting',
      es: 'Contratación Residencial'
    },
    description: {
      en: 'Full-service general contracting for your home improvement needs. From small repairs to complete renovations, we handle every aspect of your project with care and expertise.',
      es: 'Servicios completos de contratación general para sus necesidades de mejoras del hogar. Desde pequeñas reparaciones hasta renovaciones completas, manejamos cada aspecto de su proyecto con cuidado y experiencia.'
    },
    shortDescription: {
      en: 'Complete home improvement and renovation services',
      es: 'Servicios completos de mejoras y renovaciones del hogar'
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
        alt: { en: 'Home construction work', es: 'Trabajo de construcción residencial' }
      }
    ],
    featured: true,
    icon: 'Home',
    process: [
      { en: 'Initial consultation and project assessment', es: 'Consulta inicial y evaluación del proyecto' },
      { en: 'Detailed planning and permitting', es: 'Planificación detallada y permisos' },
      { en: 'Professional execution with quality materials', es: 'Ejecución profesional con materiales de calidad' },
      { en: 'Final inspection and warranty', es: 'Inspección final y garantía' }
    ]
  },
  {
    id: '2',
    slug: 'drywall',
    title: {
      en: 'Drywall Installation & Repair',
      es: 'Instalación y Reparación de Yeso'
    },
    description: {
      en: 'Professional drywall installation and repair services. Whether you need new walls, ceiling work, or fixing damaged areas, we deliver smooth, professional finishes.',
      es: 'Servicios profesionales de instalación y reparación de yeso. Ya sea que necesite paredes nuevas, trabajo de techos o reparar áreas dañadas, entregamos acabados suaves y profesionales.'
    },
    shortDescription: {
      en: 'Expert drywall installation and repair services',
      es: 'Servicios expertos de instalación y reparación de yeso'
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&h=400&fit=crop',
        alt: { en: 'Drywall installation work', es: 'Trabajo de instalación de yeso' }
      }
    ],
    featured: true,
    icon: 'Square'
  },
  {
    id: '3',
    slug: 'painting',
    title: {
      en: 'Interior & Exterior Painting',
      es: 'Pintura Interior y Exterior'
    },
    description: {
      en: 'Transform your space with our professional painting services. We use premium paints and proven techniques for beautiful, long-lasting results.',
      es: 'Transforme su espacio con nuestros servicios profesionales de pintura. Utilizamos pinturas premium y técnicas comprobadas para resultados hermosos y duraderos.'
    },
    shortDescription: {
      en: 'Professional interior and exterior painting',
      es: 'Pintura profesional interior y exterior'
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop',
        alt: { en: 'House painting work', es: 'Trabajo de pintura de casa' }
      }
    ],
    featured: true,
    icon: 'Brush'
  },
  {
    id: '4',
    slug: 'snow-removal',
    title: {
      en: 'Snow Removal Services',
      es: 'Servicios de Remoción de Nieve'
    },
    description: {
      en: 'Reliable snow removal services to keep your property safe and accessible during winter months. Available for residential and commercial properties.',
      es: 'Servicios confiables de remoción de nieve para mantener su propiedad segura y accesible durante los meses de invierno. Disponible para propiedades residenciales y comerciales.'
    },
    shortDescription: {
      en: 'Professional snow removal for winter months',
      es: 'Remoción profesional de nieve para meses de invierno'
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        alt: { en: 'Snow removal service', es: 'Servicio de remoción de nieve' }
      }
    ],
    featured: false,
    icon: 'Snowflake'
  },
  {
    id: '5',
    slug: 'flooring',
    title: {
      en: 'Flooring Installation & Repair',
      es: 'Instalación y Reparación de Pisos'
    },
    description: {
      en: 'Expert flooring services including hardwood, laminate, tile, and carpet installation. We also provide flooring repairs and refinishing.',
      es: 'Servicios expertos de pisos incluyendo instalación de madera dura, laminado, azulejos y alfombras. También proporcionamos reparaciones y refinishado de pisos.'
    },
    shortDescription: {
      en: 'Complete flooring installation and repair',
      es: 'Instalación y reparación completa de pisos'
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
        alt: { en: 'Flooring installation', es: 'Instalación de pisos' }
      }
    ],
    featured: true,
    icon: 'Grid3x3'
  },
  {
    id: '6',
    slug: 'roofing',
    title: {
      en: 'Roofing Services',
      es: 'Servicios de Techado'
    },
    description: {
      en: 'Complete roofing services from repairs to full replacements. We work with all roofing materials and provide emergency roof repair services.',
      es: 'Servicios completos de techado desde reparaciones hasta reemplazos completos. Trabajamos con todos los materiales de techado y proporcionamos servicios de reparación de techos de emergencia.'
    },
    shortDescription: {
      en: 'Professional roofing installation and repair',
      es: 'Instalación y reparación profesional de techos'
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&h=400&fit=crop',
        alt: { en: 'Roofing work', es: 'Trabajo de techado' }
      }
    ],
    featured: true,
    icon: 'Home'
  },
  {
    id: '7',
    slug: 'deck-building',
    title: {
      en: 'Deck Building & Repair',
      es: 'Construcción y Reparación de Terrazas'
    },
    description: {
      en: 'Custom deck construction and repair services. Create the perfect outdoor living space with our expertly crafted decks and patios.',
      es: 'Servicios de construcción y reparación de terrazas personalizadas. Cree el espacio perfecto de vida al aire libre con nuestras terrazas y patios expertamente elaborados.'
    },
    shortDescription: {
      en: 'Custom deck building and outdoor spaces',
      es: 'Construcción personalizada de terrazas y espacios exteriores'
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
        alt: { en: 'Deck construction', es: 'Construcción de terraza' }
      }
    ],
    featured: false,
    icon: 'TreePine'
  },
  {
    id: '8',
    slug: 'air-conditioning',
    title: {
      en: 'Air Conditioning Services',
      es: 'Servicios de Aire Acondicionado'
    },
    description: {
      en: 'Professional AC installation, maintenance, and repair services. Keep your home comfortable year-round with our HVAC expertise.',
      es: 'Servicios profesionales de instalación, mantenimiento y reparación de AC. Mantenga su hogar cómodo durante todo el año con nuestra experiencia en HVAC.'
    },
    shortDescription: {
      en: 'AC installation and HVAC services',
      es: 'Instalación de AC y servicios de HVAC'
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop',
        alt: { en: 'Air conditioning unit', es: 'Unidad de aire acondicionado' }
      }
    ],
    featured: false,
    icon: 'Wind'
  },
  {
    id: '9',
    slug: 'electrical',
    title: {
      en: 'Electrical Services',
      es: 'Servicios Eléctricos'
    },
    description: {
      en: 'Licensed electrical services for residential and commercial properties. From basic repairs to complete rewiring, we ensure safe and code-compliant work.',
      es: 'Servicios eléctricos licenciados para propiedades residenciales y comerciales. Desde reparaciones básicas hasta recableado completo, aseguramos trabajo seguro y conforme al código.'
    },
    shortDescription: {
      en: 'Licensed electrical installation and repair',
      es: 'Instalación y reparación eléctrica licenciada'
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop',
        alt: { en: 'Electrical work', es: 'Trabajo eléctrico' }
      }
    ],
    featured: false,
    icon: 'Zap'
  },
  {
    id: '10',
    slug: 'plumbing',
    title: {
      en: 'Plumbing Services',
      es: 'Servicios de Plomería'
    },
    description: {
      en: 'Comprehensive plumbing services including repairs, installations, and emergency services. We handle everything from leaky faucets to complete bathroom renovations.',
      es: 'Servicios integrales de plomería incluyendo reparaciones, instalaciones y servicios de emergencia. Manejamos todo desde grifos con goteras hasta renovaciones completas de baños.'
    },
    shortDescription: {
      en: 'Complete plumbing installation and repair',
      es: 'Instalación y reparación completa de plomería'
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop',
        alt: { en: 'Plumbing work', es: 'Trabajo de plomería' }
      }
    ],
    featured: false,
    icon: 'Droplets'
  },
  {
    id: '11',
    slug: 'concrete',
    title: {
      en: 'Concrete Work',
      es: 'Trabajo de Concreto'
    },
    description: {
      en: 'Professional concrete services including driveways, sidewalks, patios, and foundations. We provide durable, high-quality concrete work for any project.',
      es: 'Servicios profesionales de concreto incluyendo entradas de autos, aceras, patios y cimientos. Proporcionamos trabajo de concreto duradero y de alta calidad para cualquier proyecto.'
    },
    shortDescription: {
      en: 'Professional concrete and foundation work',
      es: 'Trabajo profesional de concreto y cimientos'
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
        alt: { en: 'Concrete work', es: 'Trabajo de concreto' }
      }
    ],
    featured: false,
    icon: 'Building'
  }
]