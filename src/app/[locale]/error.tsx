'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  const locale = useLocale()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-red-600" strokeWidth={1.5} />
          </div>
          
          <h1 className="text-2xl font-semibold text-slate-900 mb-4">
            Something Went Wrong
          </h1>
          
          <p className="text-slate-600 mb-8">
            We're sorry, but something unexpected happened. Please try again or contact us if the problem persists.
          </p>
          
          <div className="space-y-3">
            <button
              onClick={reset}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <RefreshCw className="w-4 h-4" strokeWidth={1.5} />
              <span>Try Again</span>
            </button>
            
            <Link
              href={`/${locale}`}
              className="w-full border border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Home className="w-4 h-4" strokeWidth={1.5} />
              <span>Go Home</span>
            </Link>
          </div>
          
          {error.digest && (
            <p className="mt-6 text-xs text-slate-400">
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}