import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const els = document.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero" style={{ backgroundImage: "url('/images/about_exterior.png')" }}>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="section-tag">Who We Are</span>
          <h1 className="section-title">About Us</h1>
          <p className="breadcrumb"><a href="/">Home</a> / About</p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="section">
        <div className="container">
          <div className="about-story-grid">
            <div className="fade-in">
              <span className="section-tag">Our Story</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Born from Passion, Built on Hospitality</h2>
              <div className="divider" style={{ justifyContent: 'flex-start', marginLeft: 0 }}><span>✦</span></div>
              <p>Durbar Restro is a vibrant restaurant and bar dedicated to delivering great food, warm hospitality, and memorable experiences. Inspired by the richness of local flavors and modern dining culture, we bring together taste, comfort, and ambiance under one roof.</p>
              <p>Our menu features a carefully curated selection of delicious dishes and refreshing beverages, prepared using quality ingredients and served with care. Whether you're joining us for a family meal, a casual get-together with friends, or an evening of live music and entertainment, Durbar Restro offers the perfect setting.</p>
              <p>At Durbar Restro, we believe dining is more than just food — it's about connection, celebration, and enjoyment. With a welcoming atmosphere, attentive service, and a passion for excellence, we strive to make every visit special.</p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '28px' }}>Visit Us Today</Link>
            </div>
            <div className="about-story-imgs fade-in">
              <img src="/images/hero_interior.png" alt="Inside Durbar Restro" className="story-img-main" />
              <img src="/images/about_exterior.png" alt="Durbar Restro Exterior" className="story-img-secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section values-section">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">What Drives Us</span>
            <h2 className="section-title">Our Core Values</h2>
            <div className="divider"><span>✦</span></div>
          </div>
          <div className="values-grid">
            {[
              { icon: '🍽', title: 'Quality First', desc: 'We source the finest ingredients and prepare each dish with precision, love, and unwavering commitment to quality.' },
              { icon: '🤝', title: 'Genuine Hospitality', desc: 'Every guest who walks through our doors is family. We go above and beyond to ensure your comfort and happiness.' },
              { icon: '🌿', title: 'Local Roots', desc: 'We celebrate Nepal\'s rich culinary heritage, supporting local farmers and embracing traditional flavors with a modern twist.' },
              { icon: '🎵', title: 'Vibrant Experiences', desc: 'From live music nights to festive celebrations, we curate experiences that go beyond the dining table.' },
              { icon: '♻', title: 'Sustainability', desc: 'We are committed to responsible practices — minimizing waste, energy efficiency, and caring for our community.' },
              { icon: '⭐', title: 'Continuous Excellence', desc: 'We never stop improving. Every plate, every interaction is an opportunity to be better than yesterday.' },
            ].map(v => (
              <div className="value-card fade-in" key={v.title}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section timeline-section">
        <div className="container">
          <div className="timeline-inner">
            <div className="fade-in">
              <span className="section-tag">Our Journey</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Milestones That Define Us</h2>
              <div className="divider" style={{ justifyContent: 'flex-start', marginLeft: 0 }}><span>✦</span></div>
              <div className="timeline">
                {[
                  { year: '2019', title: 'The Beginning', desc: 'Durbar Restro opens its doors in Birtamode-4, Laxman Market, with a dream to redefine dining in the region.' },
                  { year: '2020', title: 'Growing Community', desc: 'Despite challenges, we grow a loyal community of guests who become part of the Durbar family.' },
                  { year: '2021', title: 'Live Music Nights Launch', desc: 'We introduce live music evenings, transforming Durbar into the most vibrant entertainment spot in town.' },
                  { year: '2022', title: 'Menu Expansion', desc: 'Our chef\'s team expands the menu to 200+ items, blending Nepali traditions with continental innovation.' },
                  { year: '2024', title: 'Growing Strong', desc: 'With over 10,000 happy guests served, we continue to grow with new experiences, events, and offerings.' },
                ].map(t => (
                  <div className="timeline-item" key={t.year}>
                    <div className="timeline-dot" />
                    <div className="timeline-year">{t.year}</div>
                    <h3>{t.title}</h3>
                    <p>{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="timeline-side fade-in">
              <img src="/images/live_music.png" alt="Live Music at Durbar Restro" />
              <div className="timeline-side-badge">
                <div className="tsb-num">10K+</div>
                <div className="tsb-lbl">Happy Guests Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section values-section">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">The People</span>
            <h2 className="section-title">Meet Our Team</h2>
            <div className="divider"><span>✦</span></div>
            <p className="section-subtitle">The heart and soul behind every dish, every smile, and every memorable moment at Durbar Restro.</p>
          </div>
          <div className="team-grid">
            {[
              { emoji: '👨‍🍳', name: 'Chef Ramesh K.', role: 'Head Chef' },
              { emoji: '👩‍🍳', name: 'Sita Thapa', role: 'Sous Chef' },
              { emoji: '🧑‍💼', name: 'Bikram Rai', role: 'Restaurant Manager' },
              { emoji: '🎸', name: 'Aman Sharma', role: 'Live Music Curator' },
            ].map(m => (
              <div className="team-card fade-in" key={m.name}>
                <div className="team-avatar">{m.emoji}</div>
                <h4>{m.name}</h4>
                <span>{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip-about">
        <div className="container text-center">
          <span className="section-tag">Come Visit Us</span>
          <h2 className="section-title">Experience the Durbar Difference</h2>
          <p style={{ color: 'var(--light-muted)', marginBottom: '34px' }}>Book a table, explore our menu, or just walk in — we're always happy to see you.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">📅 Reserve a Table</Link>
            <Link to="/menu" className="btn btn-outline">🍽 View Full Menu</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
