'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { ArrowRight, Phone, Cross } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function HeroSection() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.3}>
            <div className="flex items-center space-x-2 mb-6">
              <Cross className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
              <span className="text-blue-600 font-medium text-sm">
                {t('hero.subtitle')}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                href={`/${locale}/contact`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>{t('hero.startProject')}</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <a
                href="tel:+14438587904"
                className="border border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                <span>(443) 858-7904</span>
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.5}>
            <div className="relative">
              <Image
                src="/images/hero/main-hero.jpg"
                alt="The Good Shepherd Construction team at work"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}