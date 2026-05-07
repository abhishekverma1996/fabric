import Link from 'next/link'
import Hero from '../Hero'
import Marquee from '../Marquee'
import CountUp from '../CountUp'
import { aboutFacts, navLinks } from '../_data/site'

const highlights = navLinks.filter((link) => link.href !== '/')

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      <section className="page-section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Site Structure</p>
              <h2 className="section-title">
                The one-page flow is now split into <em>dedicated pages</em>
              </h2>
            </div>
            <p className="section-copy">
              Each key area now has its own route so buyers can directly open the exact information they need without
              scrolling through the entire site.
            </p>
          </div>

          <div className="card-grid card-grid-3">
            {highlights.map((link) => (
              <Link key={link.href} href={link.href} transitionTypes={['nav-forward']} className="feature-card premium-card">
                <span className="eyebrow">{link.label}</span>
                <h3>{link.label}</h3>
                <p>Open the dedicated {link.label.toLowerCase()} page.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container two-column-panel">
          <div>
            <p className="eyebrow">Quick Snapshot</p>
            <h2 className="section-title">
              Textile scale with a <em>cleaner navigation flow</em>
            </h2>
            <p className="section-copy">
              The homepage now acts like an entry point instead of a full long-scroll brochure, while the detailed
              sections live on their own pages.
            </p>
          </div>

          <div className="facts-grid">
            {aboutFacts.map((fact) => (
              <div key={fact.label} className="fact-card">
                <CountUp value={fact.value} className="fact-card-value" />
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
