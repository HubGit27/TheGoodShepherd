'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  const locale = useLocale()

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl font-bold text-blue-600">404</span>
          </div>
          
          <h1 className="text-2xl font-semibold text-slate-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-slate-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          
          <div className="space-y-3">
            <Link
              href={`/${locale}`}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Home className="w-4 h-4" strokeWidth={1.5} />
              <span>Go Home</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="w-full border border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}