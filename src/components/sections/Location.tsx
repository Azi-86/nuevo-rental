export default function Location() {
  return (
    <section className="location" id="location">
      <div className="location-inner">
        <div className="location-text">
          <p className="section-tag">Location</p>
          <h2 className="section-title">Stittsville, Ottawa — quiet neighbourhood, easy access.</h2>
          <p>Located in Stittsville, one of Ottawa&apos;s most welcoming west-end communities. Surrounded by residential streets and green space, with Main Street&apos;s cafés and shops just minutes away.</p>
          <ul className="location-list">
            <li><span className="loc-dot"></span><span>5 min — Main Street Stittsville (cafés &amp; dining)</span></li>
            <li><span className="loc-dot"></span><span>5 min — OC Transpo bus stop (Routes 261, 262, 263)</span></li>
            <li><span className="loc-dot"></span><span>5 min — Walmart Kanata South (Fernbank Rd)</span></li>
            <li><span className="loc-dot"></span><span>10 min — Grant Crossing (Winners, HomeSense, Dollarama, Rona &amp; more)</span></li>
            <li><span className="loc-dot"></span><span>10 min walk — Trans Canada Trail (great for biking &amp; walking)</span></li>
            <li><span className="loc-dot"></span><span>15 min — Farm Boy &amp; Kanata shopping</span></li>
            <li><span className="loc-dot"></span><span>25 min — Downtown Ottawa (by car)</span></li>
          </ul>
        </div>
        <div className="location-map">
          <div className="map-placeholder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.0!2d-75.9!3d45.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDE1JzM2LjAiTiA3NcKwNTQnMDAuMCJX!5e0!3m2!1sen!2sca!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="map-note">Exact address shared after booking confirmation.</p>
        </div>
      </div>
    </section>
  )
}
