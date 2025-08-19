import { notFound } from 'next/navigation'
import { services } from '@/data/services'
import ServicePageContent from '@/components/ServicePageContent'

interface ServicePageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services.find(s => s.slug === slug)
  
  if (!service) {
    notFound()
  }

  return <ServicePageContent service={service} />
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}