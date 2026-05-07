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
        </div>
      </div>
    </section>
  )
}
