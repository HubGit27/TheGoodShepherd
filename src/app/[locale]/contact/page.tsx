'use client'

import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { services } from '@/data/services'
import AnimatedSection from '@/components/AnimatedSection'

export default function ContactPage() {
  const t = useTranslations()
  const locale = useLocale()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2} className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimatedSection delay={0.3}>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-900">
                      {t('contact.phone')}
                    </h3>
                    <p className="text-slate-700 mb-1 text-lg">(555) 123-4567</p>
                    <p className="text-sm text-slate-500">Monday - Friday, 7AM - 6PM</p>
                    <p className="text-sm text-slate-500">Emergency services available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-900">
                      {t('contact.email')}
                    </h3>
                    <p className="text-slate-700 mb-1 text-lg">info@thegoodshepherd.com</p>
                    <p className="text-sm text-slate-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-900">
                      {t('contact.address')}
                    </h3>
                    <p className="text-slate-700 mb-1">
                      123 Faith Street<br />
                      Your City, ST 12345
                    </p>
                    <p className="text-sm text-slate-500">By appointment only</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-900">
                      {t('contact.hours')}
                    </h3>
                    <div className="text-slate-700 space-y-1">
                      <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: Emergency calls only</p>
                    </div>
                  </div>
                </div>

                {/* Service Area */}
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-3">Service Area</h4>
                  <p className="text-slate-600 mb-3">
                    We proudly serve the greater metropolitan area and surrounding communities within a 50-mile radius.
                  </p>
                  <p className="text-sm text-slate-500">
                    Contact us to confirm service availability in your area.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.5}>
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {t('contact.form.success')}
                    </h3>
                    <p className="text-slate-600">
                      We'll contact you within 24 hours to discuss your project.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-slate-900">
                          {t('contact.form.firstName')} *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-slate-900">
                          {t('contact.form.lastName')} *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-900">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-slate-900">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2 text-slate-900">
                        {t('contact.form.service')}
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      >
                        <option value="">Select a service</option>
                        {services.map(service => (
                          <option key={service.id} value={service.slug}>
                            {service.title[locale as 'en' | 'es']}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-900">
                        {t('contact.form.message')} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder={t('contact.form.messagePlaceholder')}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" strokeWidth={1.5} />
                          <span>{t('contact.form.submit')}</span>
                        </>
                      )}
                    </button>

                    <p className="text-sm text-slate-500 text-center">
                      * Required fields. We respect your privacy and will never share your information.
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl font-semibold mb-6 tracking-tight">
              Emergency Services Available
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Need immediate assistance? We offer 24/7 emergency services for urgent construction and repair needs.
            </p>
            <a
              href="tel:+15551234567"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" strokeWidth={1.5} />
              <span>Emergency: (555) 123-4567</span>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}