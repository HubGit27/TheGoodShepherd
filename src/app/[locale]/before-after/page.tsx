'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { ArrowRight, Filter, Calendar } from 'lucide-react'
import { projects } from '@/data/projects'
import { services } from '@/data/services'
import AnimatedSection from '@/components/AnimatedSection'

export default function BeforeAfterPage() {
  const t = useTranslations()
  const locale = useLocale()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.serviceCategory === selectedCategory)

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
              {t('navigation.beforeAfter')}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              See the transformative power of faith-driven craftsmanship through our completed projects
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

      {/* Projects Grid */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={0.1 + (index * 0.1)}>
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* Before/After Images */}
                  <div className="grid grid-cols-2">
                    <div className="relative aspect-square">
                      <Image
                        src={project.beforeImage.src}
                        alt={project.beforeImage.alt[locale as 'en' | 'es']}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-2 left-2">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Before
                        </span>
                      </div>
                    </div>
                    <div className="relative aspect-square">
                      <Image
                        src={project.afterImage.src}
                        alt={project.afterImage.alt[locale as 'en' | 'es']}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-2 right-2">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          After
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-xl text-slate-900">
                        {project.title[locale as 'en' | 'es']}
                      </h3>
                      <div className="flex items-center space-x-1 text-slate-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {project.description[locale as 'en' | 'es']}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                        {services.find(s => s.slug === project.serviceCategory)?.title[locale as 'en' | 'es'] || 'General'}
                      </span>
                      
                      <button
                        onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                      >
                        {selectedProject === project.id ? 'Show Less' : 'View Details'}
                      </button>
                    </div>
                    
                    {/* Expanded Details */}
                    {selectedProject === project.id && (
                      <div className="mt-6 pt-6 border-t border-slate-200">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-slate-900 mb-2">Project Highlights:</h4>
                            <ul className="text-slate-600 text-sm space-y-1">
                              <li>• Professional craftsmanship with attention to detail</li>
                              <li>• High-quality materials for lasting results</li>
                              <li>• Completed on time and within budget</li>
                              <li>• Customer satisfaction guaranteed</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">
                No projects found for the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl font-semibold text-slate-900 mb-8 tracking-tight">
              Our Transformation Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Consultation', description: 'Free initial assessment and planning' },
                { step: '2', title: 'Design', description: 'Detailed project design and material selection' },
                { step: '3', title: 'Execute', description: 'Professional construction with quality materials' },
                { step: '4', title: 'Deliver', description: 'Final inspection and project completion' }
              ].map((process, index) => (
                <AnimatedSection key={index} delay={0.3 + (index * 0.1)}>
                  <div className="text-center">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {process.step}
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{process.title}</h3>
                    <p className="text-slate-600 text-sm">{process.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl font-semibold mb-6 tracking-tight">
              Ready for Your Transformation?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Let us help you transform your space with the same quality and care shown in these projects.
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
                href={`/${locale}/gallery`}
                className="border border-slate-600 hover:border-slate-500 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                View Full Gallery
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}