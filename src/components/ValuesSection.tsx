'use client'

import { useTranslations } from 'next-intl'
import { Heart, Users, ShieldCheck } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function ValuesSection() {
  const t = useTranslations()

  const values = [
    {
      icon: Heart,
      title: t('values.integrity.title'),
      description: t('values.integrity.description'),
      delay: 0.4
    },
    {
      icon: Users,
      title: t('values.community.title'),
      description: t('values.community.description'),
      delay: 0.6
    },
    {
      icon: ShieldCheck,
      title: t('values.excellence.title'),
      description: t('values.excellence.description'),
      delay: 0.8
    }
  ]

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={0.2} className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
            {t('values.title')}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('values.subtitle')}
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <AnimatedSection key={index} delay={value.delay}>
              <div className="bg-white p-8 rounded-xl border border-slate-200 text-center group hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-lg text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}