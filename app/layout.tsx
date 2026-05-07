import type { Metadata } from 'next'
import './globals.css'
import { SiteProvider } from './SiteContext'

export const metadata: Metadata = {
  title: 'Regal Weaves | Premium Fabric House, Surat',
  description: 'Premium polyester and woven greige fabrics crafted in the heart of Surat for garment houses and sourcing teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" data-fontsize="md">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  )
}
