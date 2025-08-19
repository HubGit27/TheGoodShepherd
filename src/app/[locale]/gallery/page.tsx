'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { X, ArrowRight, Filter, Expand } from 'lucide-react'
import { services } from '@/data/services'
import AnimatedSection from '@/components/AnimatedSection'

// Sample gallery images - in a real app, this would come from a CMS
const galleryImages = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    // src: '/images/gallery/project-1.jpg',
    alt: 'Construction work',
    category: 'home-contracting',
    title: 'Home Renovation Project'
  },
  {
    id: '2',
     src: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&h=600&fit=crop',
    //src: '/images/gallery/project-2.jpg',
    alt: 'Drywall installation',
    category: 'drywall',
    title: 'Professional Drywall Installation'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop',
    //src: '/images/gallery/project-3.jpg',
    alt: 'House painting',
    category: 'painting',
    title: 'Exterior House Painting'
  },
  {
    id: '4',
     src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    //src: '/images/gallery/project-4.jpg',
    alt: 'Flooring installation',
    category: 'flooring',
    title: 'Hardwood Floor Installation'
  },
  {
    id: '5',
     src: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&h=600&fit=crop',
    //src: '/images/gallery/project-5.jpg',
    alt: 'Roofing work',
    category: 'roofing',
    title: 'Complete Roof Replacement'
  },
  {
    id: '6',
    //src: '/images/gallery/project-6.jpg',
    alt: 'Deck construction',
    category: 'deck-building',
    title: 'Custom Deck Construction'
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    //src: '/images/gallery/project-7.jpg',
    alt: 'Air conditioning',
    category: 'air-conditioning',
    title: 'HVAC Installation'
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop',
    //src: '/images/gallery/project-8.jpg',
    alt: 'Electrical work',
    category: 'electrical',
    title: 'Electrical Panel Upgrade'
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop',
    //src: '/images/gallery/project-9.jpg',
    alt: 'Plumbing work',
    category: 'plumbing',
    title: 'Bathroom Plumbing Installation'
  }
]

export default function GalleryPage() {
  const t = useTranslations()
  const locale = useLocale()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory)

  const categoryOptions = [
    { value: 'all', label: 'All Projects' },
    ...services.map(service => ({
      value: service.slug,
      label: service.title[locale as 'en' | 'es']
    }))
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2} className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
              {t('navigation.gallery')}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Explore our portfolio of completed projects showcasing quality craftsmanship and faith-driven excellence
            </p>
            
            {/* Filter */}
            <div className="flex justify-center">
              <div className="relative">
                <Filter className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-slate-300 rounded-lg bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {categoryOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <AnimatedSection key={image.id} delay={0.1 + (index * 0.05)}>
                <div className="group relative aspect-square bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <button
                        onClick={() => setLightboxImage(image.src)}
                        className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium inline-flex items-center space-x-2 hover:bg-slate-100 transition-colors duration-200"
                      >
                        <Expand className="w-4 h-4" />
                        <span>View Full Size</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4">
                    <h3 className="text-white font-medium">{image.title}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">
                No images found for the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-slate-300 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            <Image
              src={lightboxImage}
              alt="Gallery image"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl font-semibold mb-6 tracking-tight">
              Inspired by Our Work?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Let us bring the same level of quality and care to your next project. Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                href={`/${locale}/contact`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                href={`/${locale}/before-after`}
                className="border border-slate-600 hover:border-slate-500 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                View Before & After
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}