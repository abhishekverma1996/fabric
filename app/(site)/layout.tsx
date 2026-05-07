import type { ReactNode } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '96px' }}>{children}</main>
      <Footer />
    </>
  )
}
