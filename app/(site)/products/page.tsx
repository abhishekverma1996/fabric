import type { Metadata } from 'next'
import Products from '../../Products'
import ContactStrip from '../../ContactStrip'
import PageIntro from '../../PageIntro'

export const metadata: Metadata = {
  title: 'Products | Regal Weaves',
  description: 'Browse the main fabric categories developed by Regal Weaves for furnishing, garments, and specialty use.',
}

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Products"
        title="Fabric categories for"
        accent="buyers and sourcing teams"
        description="A clearer product page for home furnishing, garmenting, warp knitting, digital printing, and custom fabric developments."
      />
      <Products />
      <ContactStrip />
    </>
  )
}
