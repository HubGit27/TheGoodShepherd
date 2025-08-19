'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Star, CheckCircle } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export default function AboutPage() {
  const t = useTranslations()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.3}>
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop"
                alt="Our team"
                // src="/images/team/team-group.jpg"
                // alt="The Good Shepherd Construction team"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <div className="flex items-center space-x-2 mb-6">
                <Star className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
                <span className="text-blue-600 font-medium text-sm">
                  {t('about.experience')}
                </span>
              </div>
              <h1 className="text-3xl font-semibold text-slate-900 mb-6 tracking-tight">
                {t('about.title')}
              </h1>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t('about.description')}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-medium text-slate-900">Licensed & Insured</h4>
                    <p className="text-sm text-slate-600">Fully bonded with comprehensive insurance coverage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-medium text-slate-900">Local Family Business</h4>
                    <p className="text-sm text-slate-600">Pastor-led business serving our community with faith</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-medium text-slate-900">Quality Guarantee</h4>
                    <p className="text-sm text-slate-600">We stand behind our work with comprehensive warranties</p>
                  </div>
                </div>
              </div>
              
              <blockquote className="border-l-4 border-blue-600 pl-6 text-slate-700 italic">
                "{t('about.quote')}"
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl font-semibold text-slate-900 mb-8 tracking-tight">
              Our Mission
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              {t('about.mission')}
            </p>
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/team/pastor-john.jpg"
                    alt="Pastor Dani Bolanos - Founder & Lead Contractor"
                    width={120}
                    height={120}
                    className="rounded-full object-cover border-4 border-blue-100"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Pastor Dani Bolanos - Founder & Lead Contractor
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    With 10 years of pastoral ministry and extensive construction experience, Pastore Dani founded The Good Shepherd Construction to serve our community through skilled craftsmanship and Christian values. Working alongside his children, he teaches the importance of honest work and serving others with excellence.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2} className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              More than just construction - we're building relationships and serving our community with faith-driven excellence
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Faith-Driven",
                description: "Every project is approached with prayer and Christian values",
                delay: 0.3
              },
              {
                title: "Family Business",
                description: "Multi-generational craftsmanship passed down through our family",
                delay: 0.5
              },
              {
                title: "Community Focused",
                description: "Local business committed to strengthening our neighborhood",
                delay: 0.7
              },
              {
                title: "Quality Assured",
                description: "Licensed, bonded, and insured with comprehensive warranties",
                delay: 0.9
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={item.delay}>
                <div className="text-center p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-semibold text-lg text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}