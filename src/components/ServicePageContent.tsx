'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { 
  ArrowRight, 
  CheckCircle, 
  Phone,
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
} from 'lucide-react'
import { Service } from '@/types'
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

interface ServicePageContentProps {
  service: Service
}

export default function ServicePageContent({ service }: ServicePageContentProps) {
  const t = useTranslations()
  const locale = useLocale()
  
  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Home
  const relatedServices = services
    .filter(s => s.id !== service.id && s.featured)
    .slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.3}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <IconComponent className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h1 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">
                    {service.title[locale as 'en' | 'es']}
                  </h1>
                </div>
              </div>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {service.description[locale as 'en' | 'es']}
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link
                  href={`/${locale}/contact`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                >
                  <span>{t('services.getQuote')}</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
                <a
                  href="tel:+15551234567"
                  className="border border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" strokeWidth={1.5} />
                  <span>(555) 123-4567</span>
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={service.images[0]?.src || 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop'}
                  alt={service.images[0]?.alt[locale as 'en' | 'es'] || service.title[locale as 'en' | 'es']}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      {service.process && (
        <section className="bg-slate-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection delay={0.2} className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
                Our Process
              </h2>
              <p className="text-slate-600">
                We follow a proven process to ensure quality results and customer satisfaction
              </p>
            </AnimatedSection>
            
            <div className="space-y-6">
              {service.process.map((step, index) => (
                <AnimatedSection key={index} delay={0.3 + (index * 0.1)}>
                  <div className="flex items-start space-x-4 bg-white p-6 rounded-xl border border-slate-200">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-700 font-medium">
                        {step[locale as 'en' | 'es']}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2} className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
              Why Choose The Good Shepherd?
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Faith-Driven Service', description: 'We approach every project with Christian values and integrity' },
              { title: 'Licensed & Insured', description: 'Fully bonded with comprehensive insurance coverage' },
              { title: 'Quality Materials', description: 'We use only the best materials for lasting results' },
              { title: 'Satisfaction Guaranteed', description: 'We stand behind our work with comprehensive warranties' }
            ].map((benefit, index) => (
              <AnimatedSection key={index} delay={0.3 + (index * 0.1)}>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection delay={0.2} className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
                Related Services
              </h2>
              <p className="text-slate-600">
                Other ways we can help serve your construction needs
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService, index) => {
                const RelatedIconComponent = iconMap[relatedService.icon as keyof typeof iconMap] || Home
                return (
                  <AnimatedSection key={relatedService.id} delay={0.3 + (index * 0.1)}>
                    <Link 
                      href={`/${locale}/services/${relatedService.slug}`}
                      className="block bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow duration-300 group"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                          <RelatedIconComponent className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-semibold text-lg text-slate-900">
                          {relatedService.title[locale as 'en' | 'es']}
                        </h3>
                      </div>
                      <p className="text-slate-600 mb-4">
                        {relatedService.shortDescription[locale as 'en' | 'es']}
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
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl font-semibold mb-6 tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Contact us today for a free consultation and detailed quote for your {service.title[locale as 'en' | 'es'].toLowerCase()} project.
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
                href="tel:+15551234567"
                className="border border-slate-600 hover:border-slate-500 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                <span>Call Now</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}