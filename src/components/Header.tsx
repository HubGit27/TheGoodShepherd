'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Menu, X, Cross, Phone } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslations()
  const locale = useLocale()

  const navigation = [
    { name: t('navigation.home'), href: `/${locale}` },
    { name: t('navigation.about'), href: `/${locale}/about` },
    { name: t('navigation.services'), href: `/${locale}/services` },
    { name: t('navigation.testimonials'), href: `/${locale}/testimonials` },
    { name: t('navigation.beforeAfter'), href: `/${locale}/before-after` },
    { name: t('navigation.gallery'), href: `/${locale}/gallery` },
    { name: t('navigation.contact'), href: `/${locale}/contact` },
  ]

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'es' : 'en'
    window.location.href = window.location.pathname.replace(`/${locale}`, `/${newLocale}`)
  }

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={`/${locale}`} className="flex items-center space-x-3">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-lg tracking-tight">
              <Cross className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-semibold text-lg text-slate-900 tracking-tight">
                {t('site.title')}
              </h1>
              <p className="text-xs text-slate-500">{t('site.tagline')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium text-sm"
            >
              {t('navigation.language')}
            </button>
            <Link
              href={`/${locale}/contact`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>{t('navigation.getQuote')}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-slate-200 pt-2 mt-2">
                <button
                  onClick={toggleLanguage}
                  className="block w-full text-left px-3 py-2 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md font-medium"
                >
                  {t('navigation.language')}
                </button>
                <Link
                  href={`/${locale}/contact`}
                  className="block w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md font-medium mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('navigation.getQuote')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}