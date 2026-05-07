import type { Metadata } from 'next'
import PageIntro from '../../PageIntro'
import { contactDetails } from '../../_data/site'

export const metadata: Metadata = {
  title: 'Contact | Regal Weaves',
  description: 'Get in touch with Regal Weaves for samples, pricing, product development, and fabric enquiries.',
}

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact Us"
        title="Let buyers reach your team"
        accent="without friction"
        description="The site now has a dedicated contact page with enquiry prompts, business details, and a ready-to-style form section."
      />

      <section className="page-section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="site-container contact-layout">
          <div className="contact-panel">
            <p className="eyebrow">Direct Details</p>
            <h2 className="section-title">
              Samples, pricing, and production <em>discussions start here</em>
            </h2>
            <p className="section-copy">
              Replace the placeholder phone and email with your live business details when you are ready.
            </p>

            <div className="contact-list">
              {contactDetails.map((item) => (
                <div key={item.label} className="contact-item">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              <span>Company</span>
              <input type="text" placeholder="Company or buying house" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@company.com" />
            </label>
            <label>
              <span>Requirement</span>
              <textarea rows={6} placeholder="Tell us the fabric category, quantity, finish, or timeline you need." />
            </label>
            <button type="submit">Send Enquiry</button>
          </form>
        </div>
      </section>
    </>
  )
}
