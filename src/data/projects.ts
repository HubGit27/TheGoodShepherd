import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: {
      en: 'Complete Kitchen Renovation',
      es: 'Renovación Completa de Cocina'
    },
    description: {
      en: 'Full kitchen transformation including new cabinets, countertops, flooring, and lighting. This project showcased our attention to detail and quality craftsmanship.',
      es: 'Transformación completa de cocina incluyendo gabinetes nuevos, encimeras, pisos e iluminación. Este proyecto mostró nuestra atención al detalle y artesanía de calidad.'
    },
    beforeImage: {
      //src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
       src: '/images/before-after/kitchen-before.jpg',
      alt: { en: 'Kitchen before renovation', es: 'Cocina antes de renovación' }
    },
    afterImage: {
      //src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
       src: '/images/before-after/kitchen-after.jpg',
      alt: { en: 'Kitchen after renovation', es: 'Cocina después de renovación' }
    },
    serviceCategory: 'home-contracting',
    year: 2024
  },
  {
    id: '2',
    title: {
      en: 'Bathroom Remodel',
      es: 'Remodelación de Baño'
    },
    description: {
      en: 'Modern bathroom renovation with new tile work, vanity, and fixtures. Created a spa-like atmosphere while maintaining functionality.',
      es: 'Renovación moderna de baño con nuevo trabajo de azulejos, tocador y accesorios. Creó una atmósfera tipo spa mientras mantenía la funcionalidad.'
    },
    beforeImage: {
      src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop',
      // src: '/images/before-after/bathroom-before.jpg',
      alt: { en: 'Bathroom before remodel', es: 'Baño antes de remodelación' }
    },
    afterImage: {
      src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop',
      // src: '/images/before-after/bathroom-after.jpg',
      alt: { en: 'Bathroom after remodel', es: 'Baño después de remodelación' }
    },
    serviceCategory: 'home-contracting',
    year: 2024
  },
  {
    id: '3',
    title: {
      en: 'Exterior House Painting',
      es: 'Pintura Exterior de Casa'
    },
    description: {
      en: 'Complete exterior painting project that transformed this home\'s curb appeal. Used premium weather-resistant paints for long-lasting results.',
      es: 'Proyecto completo de pintura exterior que transformó el atractivo exterior de esta casa. Utilizó pinturas premium resistentes a la intemperie para resultados duraderos.'
    },
    beforeImage: {
      src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop',
      //src: '/images/before-after/exterior-before.jpg',
      alt: { en: 'House before painting', es: 'Casa antes de pintar' }
    },
    afterImage: {
      src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop',
      //src: '/images/before-after/exterior-after.jpg',
      alt: { en: 'House after painting', es: 'Casa después de pintar' }
    },
    serviceCategory: 'painting',
    year: 2023
  },
  {
    id: '4',
    title: {
      en: 'Custom Deck Construction',
      es: 'Construcción de Terraza Personalizada'
    },
    description: {
      en: 'Built a beautiful custom deck with composite materials, built-in seating, and professional railings. Perfect for family gatherings.',
      es: 'Construyó una hermosa terraza personalizada con materiales compuestos, asientos incorporados y barandillas profesionales. Perfecto para reuniones familiares.'
    },
    beforeImage: {
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
      //src: '/images/before-after/deck-before.jpg',
      alt: { en: 'Backyard before deck', es: 'Patio trasero antes de terraza' }
    },
    afterImage: {
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
      //src: '/images/before-after/deck-after.jpg',
      alt: { en: 'New deck completed', es: 'Nueva terraza completada' }
    },
    serviceCategory: 'deck-building',
    year: 2023
  },
  {
    id: '5',
    title: {
      en: 'Flooring Installation',
      es: 'Instalación de Pisos'
    },
    description: {
      en: 'Hardwood flooring installation throughout the main living areas. Transformed the entire feel of the home with beautiful oak planks.',
      es: 'Instalación de pisos de madera dura en todas las áreas principales de vida. Transformó toda la sensación del hogar con hermosas tablones de roble.'
    },
    beforeImage: {
      src: '/images/before-after/flooring-before.jpg',
      alt: { en: 'Old carpet flooring', es: 'Piso de alfombra viejo' }
    },
    afterImage: {
      src: '/images/before-after/flooring-after.jpg',
      alt: { en: 'New hardwood floors', es: 'Nuevos pisos de madera dura' }
    },
    serviceCategory: 'flooring',
    year: 2023
  },
  {
    id: '6',
    title: {
      en: 'Roof Replacement',
      es: 'Reemplazo de Techo'
    },
    description: {
      en: 'Complete roof replacement with high-quality shingles. Included new gutters and improved ventilation for better energy efficiency.',
      es: 'Reemplazo completo de techo con tejas de alta calidad. Incluyó nuevas canaletas y ventilación mejorada para mejor eficiencia energética.'
    },
    beforeImage: {
      src: '/images/before-after/roof-before.jpg',
      alt: { en: 'Old damaged roof', es: 'Techo viejo dañado' }
    },
    afterImage: {
      src: '/images/before-after/roof-after.jpg',
      alt: { en: 'New roof installation', es: 'Nueva instalación de techo' }
    },
    serviceCategory: 'roofing',
    year: 2024
  }
]