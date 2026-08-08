export default function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews-inner">
        <p className="section-tag">Guest Reviews</p>
        <h2 className="section-title">What guests are saying.</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>&ldquo;Great place to stay in the Ottawa area. Mokhtar and his family are very kind and you feel right at home. Will definitely rebook next time I am in town.&rdquo;</p>
            <div className="review-author">
              <div className="review-avatar"></div>
              <div><p className="review-name">Alexander</p><p className="review-date">March 2026 · North Bay, Canada</p></div>
            </div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>&ldquo;This was the first place I stayed when I moved to Ottawa, and I can&apos;t recommend it highly enough. Mokhtar and his family are among the kindest and most welcoming people I&apos;ve had the pleasure of meeting. They went out of their way to make me feel comfortable and were always prompt in answering any questions I had.<br /><br />The unit itself is spacious, spotlessly clean, and fully equipped with everything you could need for a comfortable stay. Having a dedicated parking space was also a huge bonus and incredibly convenient. I would happily recommend this place to anyone looking for accommodation in Ottawa.&rdquo;</p>
            <div className="review-author">
              <div className="review-avatar"></div>
              <div><p className="review-name">Srujan</p><p className="review-date">April–August 2026 · UK</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
