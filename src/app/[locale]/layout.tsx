import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }]
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={`${inter.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}