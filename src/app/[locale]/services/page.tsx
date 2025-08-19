'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { 
  Home, 
  Square, 
  Brush, 
  Snowflake,
  Grid3x3, 
  TreePine,
  Wind,
  Zap,
  Droplets,
  Building,
  ArrowRight 
} from 'lucide-react'
import { services } from '@/data/services'
import AnimatedSection from '@/components/AnimatedSection'

const iconMap = {
  Home,
  Square,
  Brush,
  Snowflake,
  Grid3x3,
  TreePine,
  Wind,
  Zap,
  Droplets,
  Building
}

export default function ServicesPage() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2} className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
              {t('services.title')}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Home
              return (
                <AnimatedSection key={service.id} delay={0.1 + (index * 0.1)}>
                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video relative">
                      <Image
                        src={service.images[0]?.src || 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop'}
                        alt={service.images[0]?.alt[locale as 'en' | 'es'] || service.title[locale as 'en' | 'es']}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-blue-50 p-2 rounded-lg">
                          <IconComponent className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-semibold text-lg text-slate-900">
                          {service.title[locale as 'en' | 'es']}
                        </h3>
                      </div>
                      
                      <p className="text-slate-600 mb-6 line-clamp-3">
                        {service.shortDescription[locale as 'en' | 'es']}
                      </p>
                      
                      <Link
                        href={`/${locale}/services/${service.slug}`}
                        className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 group"
                      >
                        <span>{t('services.learnMore')}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" strokeWidth={1.5} />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl font-semibold mb-6 tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Get in touch for a free consultation. We'd love to discuss how we can serve you and your family.
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <span>{t('navigation.getQuote')}</span>
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}