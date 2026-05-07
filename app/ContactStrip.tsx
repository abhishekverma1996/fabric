import Link from 'next/link'

export default function ContactStrip() {
  return (
    <section className="contact-strip">
      <div className="site-container contact-strip-inner">
        <div>
          <p className="eyebrow">Start a Conversation</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300 }}>
            Need samples, pricing, or buyer support?
          </h2>
        </div>
        <Link className="primary-link" href="/contact" transitionTypes={['nav-forward']}>
          Contact Us
        </Link>
      </div>
    </section>
  )
}
