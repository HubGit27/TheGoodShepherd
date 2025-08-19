import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'The Good Shepherd Construction - Faith-Driven Building Services',
  description: 'Faith-driven family construction company serving our community with integrity, quality, and Christian values. Pastor-owned business specializing in home repairs, renovations, and new construction.',
  keywords: ['construction', 'home improvement', 'faith-based', 'Christian contractor', 'family business'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
