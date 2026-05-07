import type { Metadata } from 'next'
import PageIntro from '../../PageIntro'
import ContactStrip from '../../ContactStrip'
import { certificationCards } from '../../_data/site'

export const metadata: Metadata = {
  title: 'Certifications | Regal Weaves',
  description: 'Dedicated certifications and compliance page for future verified documents, audit readiness, and quality systems.',
}

export default function CertificationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Certifications"
        title="Quality and compliance"
        accent="presentation page"
        description="This page is ready for your verified certificate names, numbers, and renewal dates. Right now it provides a clean structure instead of leaving the route missing."
      />

      <section className="page-section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Compliance Deck</p>
              <h2 className="section-title">
                A route prepared for <em>real certification records</em>
              </h2>
            </div>
            <p className="section-copy">
              I have intentionally kept this content claim-safe. You can now replace these blocks with actual
              certificates, document IDs, and validity dates once confirmed.
            </p>
          </div>

          <div className="card-grid card-grid-2">
            {certificationCards.map((card) => (
              <article key={card.title} className="feature-card">
                <span className="eyebrow">Verified Content Slot</span>
                <h3>{card.title}</h3>
                <p>{card.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  )
}
