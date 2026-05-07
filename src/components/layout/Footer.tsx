export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <p className="footer-logo">Nuevo Premium Monthly Rentals</p>
          <p className="footer-tagline">581 Triangle St, Stittsville, Ottawa, ON</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <p className="footer-heading">Navigate</p>
            <ul>
              <li><a href="#space">The Space</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#location">Location</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-heading">Contact</p>
            <ul>
              <li><a href="#book">Book a Stay</a></li>
              <li><a href="tel:6132932327">613-293-2327</a></li>
              <li><a href="mailto:mokhtar.akbari@gmail.com">Email Us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-heading">Also on</p>
            <ul>
              <li><a href="https://www.airbnb.ca/rooms/1563474560875438587" target="_blank" rel="noopener noreferrer">Airbnb</a></li>
              <li><a href="#">VRBO</a></li>
            </ul>
          </div>
        </div>
        <p className="footer-copy">&copy; 2025 Nuevo Premium Monthly Rentals. All rights reserved.</p>
      </div>
    </footer>
  )
}
