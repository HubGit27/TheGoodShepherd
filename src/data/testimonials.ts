import { Testimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Rodriguez',
    text: {
      en: 'The Good Shepherd transformed our kitchen beyond our wildest dreams. Pastor John and his team treated our home like their own. Their faith-driven approach brought such peace to the entire process.',
      es: 'The Good Shepherd transformó nuestra cocina más allá de nuestros sueños más salvajes. El Pastor John y su equipo trataron nuestro hogar como el suyo. Su enfoque impulsado por la fe trajo tanta paz a todo el proceso.'
    },
    rating: 5,
    service: 'home-contracting',
    image: {
      src: 'https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=80&h=80&fit=crop&crop=face',
      alt: { en: 'Maria Rodriguez', es: 'Maria Rodriguez' }
    },
    role: {
      en: 'Homeowner',
      es: 'Propietaria'
    }
  },
  {
    id: '2',
    name: 'David Chen',
    text: {
      en: 'Professional, reliable, and honest. They completed our church renovation on time and within budget. It is rare to find contractors with such strong values and exceptional craftsmanship.',
      es: 'Profesional, confiable y honesto. Completaron la renovación de nuestra iglesia a tiempo y dentro del presupuesto. Es raro encontrar contratistas con valores tan fuertes y artesanía excepcional.'
    },
    rating: 5,
    service: 'home-contracting',
    image: {
      src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      alt: { en: 'David Chen', es: 'David Chen' }
    },
    role: {
      en: 'Church Administrator',
      es: 'Administrador de Iglesia'
    }
  },
  {
    id: '3',
    name: 'Sarah Williams',
    text: {
      en: 'The drywall work in our home office was flawless. They worked around our schedule and left everything spotless. Truly a blessing to work with such dedicated professionals.',
      es: 'El trabajo de yeso en nuestra oficina en casa fue impecable. Trabajaron alrededor de nuestro horario y dejaron todo impecable. Verdaderamente una bendición trabajar con profesionales tan dedicados.'
    },
    rating: 5,
    service: 'drywall',
    image: {
      src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      alt: { en: 'Sarah Williams', es: 'Sarah Williams' }
    },
    role: {
      en: 'Business Owner',
      es: 'Propietaria de Negocio'
    }
  },
  {
    id: '4',
    name: 'Michael Johnson',
    text: {
      en: 'Their integrity and craftsmanship are unmatched. The exterior painting transformed our home completely. We have recommended them to all our friends and neighbors.',
      es: 'Su integridad y artesanía son incomparables. La pintura exterior transformó completamente nuestro hogar. Los hemos recomendado a todos nuestros amigos y vecinos.'
    },
    rating: 5,
    service: 'painting',
    image: {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      alt: { en: 'Michael Johnson', es: 'Michael Johnson' }
    },
    role: {
      en: 'Homeowner',
      es: 'Propietario'
    }
  },
  {
    id: '5',
    name: 'Carmen Martinez',
    text: {
      en: 'The new deck they built has become our favorite family gathering place. The attention to detail and quality materials used exceeded our expectations. Truly built with love.',
      es: 'La nueva terraza que construyeron se ha convertido en nuestro lugar favorito de reunión familiar. La atención al detalle y los materiales de calidad utilizados superaron nuestras expectativas. Verdaderamente construido con amor.'
    },
    rating: 5,
    service: 'deck-building',
    image: {
      src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=80&h=80&fit=crop&crop=face',
      alt: { en: 'Carmen Martinez', es: 'Carmen Martinez' }
    },
    role: {
      en: 'Family',
      es: 'Familia'
    }
  },
  {
    id: '6',
    name: 'Robert Thompson',
    text: {
      en: 'Emergency plumbing repair during the holidays - they came right away and fixed everything perfectly. Their Christian values really show in how they serve the community.',
      es: 'Reparación de plomería de emergencia durante las vacaciones - vinieron de inmediato y arreglaron todo perfectamente. Sus valores cristianos realmente se muestran en cómo sirven a la comunidad.'
    },
    rating: 5,
    service: 'plumbing',
    image: {
      src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face',
      alt: { en: 'Robert Thompson', es: 'Robert Thompson' }
    },
    role: {
      en: 'Homeowner',
      es: 'Propietario'
    }
  }
]