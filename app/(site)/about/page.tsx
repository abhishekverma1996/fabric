import type { Metadata } from 'next'
import About from '../../About'
import ContactStrip from '../../ContactStrip'
import PageIntro from '../../PageIntro'

export const metadata: Metadata = {
  title: 'About | Regal Weaves',
  description: 'Learn about Regal Weaves, its Surat roots, production scale, and manufacturing approach.',
}

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Us"
        title="Built in Surat for"
        accent="consistent fabric supply"
        description="This page carries the company story, operating scale, and core production strengths in a focused layout."
      />
      <About />
      <ContactStrip />
    </>
  )
}
