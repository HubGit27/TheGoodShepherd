'use client'

import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Cross, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const t = useTranslations()
  const locale = useLocale()

  const services = [
    { name: 'Home Contracting', href: `/${locale}/services/home-contracting` },
    { name: 'Drywall', href: `/${locale}/services/drywall` },
    { name: 'Painting', href: `/${locale}/services/painting` },
    { name: 'Roofing', href: `/${locale}/services/roofing` },
    { name: 'Flooring', href: `/${locale}/services/flooring` },
    { name: 'Deck Building', href: `/${locale}/services/deck-building` },
  ]

  const quickLinks = [
    { name: t('navigation.about'), href: `/${locale}/about` },
    { name: t('navigation.testimonials'), href: `/${locale}/testimonials` },
    { name: t('navigation.beforeAfter'), href: `/${locale}/before-after` },
    { name: t('navigation.gallery'), href: `/${locale}/gallery` },
  ]

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-lg tracking-tight">
                <Cross className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white tracking-tight">
                  {t('site.title')}
                </h3>
                <p className="text-xs text-slate-400">{t('site.tagline')}</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-md text-sm">
              {t('footer.description')}
            </p>
            <p className="text-sm text-slate-500">{t('footer.licensing')}</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('navigation.services')}</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('navigation.contact')}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-0.5 text-blue-400" />
                <div>
                  <p className="text-slate-300">(555) 123-4567</p>
                  <p className="text-slate-500">Mon - Fri, 7AM - 6PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-0.5 text-blue-400" />
                <div>
                  <p className="text-slate-300">info@thegoodshepherd.com</p>
                  <p className="text-slate-500">We'll respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-400" />
                <div>
                  <p className="text-slate-300">
                    123 Faith Street<br />
                    Your City, ST 12345
                  </p>
                  <p className="text-slate-500">By appointment only</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-500 text-sm">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}