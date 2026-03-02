import type { Metadata } from 'next'
import { Source_Sans_3, Montserrat } from 'next/font/google'
import './globals.css'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mallika in Dubai — Intelligent Investment Platform',
  description: 'Experience the future of Dubai real estate investment intelligence. AI-powered analysis, institutional-grade tools, and personalized investor experiences.',
  openGraph: {
    title: 'Mallika in Dubai — Intelligent Investment Platform',
    description: 'Experience the future of Dubai real estate investment intelligence.',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased" style={{ fontFamily: 'var(--font-primary)' }}>
        {children}
      </body>
    </html>
  )
}
