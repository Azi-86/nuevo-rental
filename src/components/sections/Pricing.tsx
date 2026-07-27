export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-inner">
        <p className="section-tag">Pricing</p>
        <h2 className="section-title">Simple, transparent rates.</h2>
        <div className="pricing-cards">
          <div className="pricing-card pricing-card--highlight">
            <p className="pricing-stay">Monthly</p>
            <p className="pricing-rate">$2,400 <span>/ month</span></p>
            <ul className="pricing-details">
              <li>30-night minimum</li>
              <li>Up to 2 guests</li>

            </ul>
            <a href="#book" className="btn btn--accent">Book Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}
