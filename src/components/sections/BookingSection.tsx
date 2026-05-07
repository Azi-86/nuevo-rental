import BookingForm from '@/components/booking/BookingForm'

export default function BookingSection() {
  return (
    <section className="book" id="book">
      <div className="book-inner">
        <div className="book-text">
          <p className="section-tag">Book</p>
          <h2 className="section-title">Ready to stay?</h2>
          <p>Send us your dates and we&apos;ll get back to you within a few hours to confirm availability and details.</p>
          <div className="book-rules">
            <div className="rule"><span>Check-in</span><span>3:00 PM</span></div>
            <div className="rule"><span>Check-out</span><span>12:00 PM</span></div>
            <div className="rule"><span>Minimum stay</span><span>30 nights</span></div>
            <div className="rule"><span>Pets</span><span>Not allowed</span></div>
            <div className="rule"><span>Smoking</span><span>Not allowed</span></div>
          </div>
        </div>
        <BookingForm />
      </div>
    </section>
  )
}
