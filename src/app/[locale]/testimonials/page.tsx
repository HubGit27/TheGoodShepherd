'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Star, ArrowRight, Filter } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { services } from '@/data/services'
import AnimatedSection from '@/components/AnimatedSection'

export default function TestimonialsPage() {
  const t = useTranslations()
  const locale = useLocale()
  const [selectedService, setSelectedService] = useState<string>('all')
  
  const filteredTestimonials = selectedService === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.service === selectedService)

  const serviceOptions = [
    { value: 'all', label: 'All Services' },
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
              {t('testimonials.title')}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              {t('testimonials.subtitle')}
            </p>
            
            {/* Filter */}
            <div className="flex justify-center">
              <div className="relative">
                <Filter className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-slate-300 rounded-lg bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {serviceOptions.map(option => (
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

      {/* Testimonials Grid */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={0.1 + (index * 0.1)}>
                <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    {testimonial.image && (
                      <Image
                        src={testimonial.image.src}
                        alt={testimonial.image.alt[locale as 'en' | 'es']}
                        width={56}
                        height={56}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      {testimonial.role && (
                        <p className="text-sm text-slate-500">
                          {testimonial.role[locale as 'en' | 'es']}
                        </p>
                      )}
                    </div>
                  </div>
                  <blockquote className="text-slate-600 italic text-lg leading-relaxed">
                    "{testimonial.text[locale as 'en' | 'es']}"
                  </blockquote>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">
                No testimonials found for the selected service.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10+', label: 'Years of Service' },
              { number: '500+', label: 'Happy Customers' },
              { number: '100%', label: 'Satisfaction Rate' },
              { number: '24/7', label: 'Emergency Support' }
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={0.2 + (index * 0.1)}>
                <div className="p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl font-semibold mb-6 tracking-tight">
              Join Our Happy Customers
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Experience the faith-driven excellence that our customers rave about. Get your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                href={`/${locale}/contact`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <a
                href="#"
                className="border border-slate-600 hover:border-slate-500 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                {t('testimonials.leaveReview')}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}