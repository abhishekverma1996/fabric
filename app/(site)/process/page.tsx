import type { Metadata } from 'next'
import Process from '../../Process'
import ContactStrip from '../../ContactStrip'
import PageIntro from '../../PageIntro'

export const metadata: Metadata = {
  title: 'Process | Regal Weaves',
  description: 'See how Regal Weaves moves from yarn sourcing to weaving, quality control, and dispatch.',
}

export default function ProcessPage() {
  return (
    <>
      <PageIntro
        eyebrow="Process"
        title="From yarn intake to"
        accent="timely dispatch"
        description="The manufacturing process is now isolated on its own page so teams can review operations without the homepage clutter."
      />
      <Process />
      <ContactStrip />
    </>
  )
}
