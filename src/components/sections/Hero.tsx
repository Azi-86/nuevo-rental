export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <p className="hero-label">Private Apartment · Garden Level</p>
        <h1 className="hero-title">Your quiet retreat in the city.</h1>
        <div className="hero-actions">
          <a href="#book" className="btn btn--accent">Book Now</a>
          <a href="#space" className="btn btn--ghost">Explore the Space</a>
        </div>
      </div>
      <div className="hero-meta">
        <div className="hero-stat"><span className="hero-stat-num">1</span><span className="hero-stat-label">Bedroom</span></div>
        <div className="hero-stat"><span className="hero-stat-num">2</span><span className="hero-stat-label">Guests</span></div>
        <div className="hero-stat"><span className="hero-stat-num">1</span><span className="hero-stat-label">Bathroom</span></div>
        <div className="hero-stat"><span className="hero-stat-num">★ 5.0</span><span className="hero-stat-label">Rating</span></div>
      </div>
    </section>
  )
}
