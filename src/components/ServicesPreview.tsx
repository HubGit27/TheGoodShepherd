'use client'

import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { 
  Home, 
  Square, 
  Brush, 
  Grid3x3, 
  TreePine, 
  Building,
  ArrowRight 
} from 'lucide-react'
import { services } from '@/data/services'
import AnimatedSection from './AnimatedSection'

const iconMap = {
  Home,
  Square,
  Brush,
  Grid3x3,
  TreePine,
  Building
}

export default function ServicesPreview() {
  const t = useTranslations()
  const locale = useLocale()
  
  const featuredServices = services.filter(service => service.featured).slice(0, 6)

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={0.2} className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
            {t('services.title')}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Home
            return (
              <AnimatedSection key={service.id} delay={0.3 + (index * 0.2)}>
                <Link 
                  href={`/${locale}/services/${service.slug}`}
                  className="group hover:shadow-lg transition-shadow duration-300 p-6 rounded-xl border border-slate-200 block"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                    <h3 className="font-semibold text-lg text-slate-900">
                      {service.title[locale as 'en' | 'es']}
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    {service.shortDescription[locale as 'en' | 'es']}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
                    <span>{t('services.learnMore')}</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>
        
        <AnimatedSection delay={1.0} className="text-center mt-12">
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <span>{t('services.viewAll')}</span>
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}