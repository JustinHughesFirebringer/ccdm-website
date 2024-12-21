import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://ccdmservices.com'),
  title: {
    default: 'CCDM Services - Management Consulting & FinTech Excellence',
    template: '%s | CCDM Services'
  },
  description: 'CCDM Services LLC provides expert Management Consulting, FinTech services, and Lean Six Sigma solutions to optimize costs and drive growth.',
  keywords: ['Management Consulting', 'FinTech Services', 'Lean Six Sigma', 'Cost Optimization', 'BPO Solutions', 'Debt Management', 'Financial Services'],
  authors: [{ name: 'CCDM Services LLC' }],
  creator: 'CCDM Services LLC',
  publisher: 'CCDM Services LLC',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ccdmservices.com',
    siteName: 'CCDM Services LLC',
    title: 'CCDM Services - Management Consulting & FinTech Excellence',
    description: 'Expert Management Consulting, FinTech services, and Lean Six Sigma solutions.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CCDM Services LLC'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CCDM Services - Management Consulting & FinTech Excellence',
    description: 'Expert Management Consulting, FinTech services, and Lean Six Sigma solutions.',
    images: ['/images/twitter-image.jpg'],
  }
}
