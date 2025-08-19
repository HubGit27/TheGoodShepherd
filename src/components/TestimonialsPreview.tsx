'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Star, ArrowRight } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import AnimatedSection from './AnimatedSection'

export default function TestimonialsPreview() {
  const t = useTranslations()
  const locale = useLocale()
  
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={0.2} className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
            {t('testimonials.title')}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={0.4 + (index * 0.2)}>
              <div className="bg-white p-8 rounded-xl border border-slate-200">
                <div className="flex items-center space-x-4 mb-6">
                  {testimonial.image && (
                    <Image
                      src={testimonial.image.src}
                      alt={testimonial.image.alt[locale as 'en' | 'es']}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center space-x-1">
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
                <p className="text-slate-600 italic">
                  "{testimonial.text[locale as 'en' | 'es']}"
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={1.0} className="text-center mt-12">
          <Link
            href={`/${locale}/testimonials`}
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <span>{t('testimonials.viewAll')}</span>
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}