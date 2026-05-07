export default function Amenities() {
  return (
    <section className="amenities" id="amenities">
      <div className="amenities-inner">
        <p className="section-tag">Amenities</p>
        <h2 className="section-title">Everything included.</h2>
        <div className="amenities-grid">
          <div className="amenity"><span className="amenity-icon">📶</span><span>High-speed WiFi</span></div>
          <div className="amenity"><span className="amenity-icon">🔑</span><span>Private entrance</span></div>
          <div className="amenity"><span className="amenity-icon">❄️</span><span>Air conditioning</span></div>
          <div className="amenity"><span className="amenity-icon">🌡️</span><span>Central heating</span></div>
          <div className="amenity"><span className="amenity-icon">👕</span><span>Washer &amp; dryer</span></div>
          <div className="amenity"><span className="amenity-icon">📺</span><span>Smart TV</span></div>
          <div className="amenity"><span className="amenity-icon">☕</span><span>Coffee &amp; tea</span></div>
          <div className="amenity"><span className="amenity-icon">🧴</span><span>Toiletries provided <span style={{ fontSize: '0.75em', opacity: 0.65 }}>(first week only)</span></span></div>
          <div className="amenity"><span className="amenity-icon">🚗</span><span>Free parking</span></div>
          <div className="amenity"><span className="amenity-icon">📦</span><span>Luggage storage</span></div>
          <div className="amenity"><span className="amenity-icon">🔥</span><span>Electric fireplace</span></div>
        </div>
      </div>
    </section>
  )
}
