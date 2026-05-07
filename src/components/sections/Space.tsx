import Image from 'next/image'

export default function Space() {
  return (
    <section className="space" id="space">
      <div className="space-inner">
        <div className="space-header">
          <p className="section-tag">The Space</p>
          <h2 className="section-title">Designed for comfort, built for privacy.</h2>
          <p className="space-desc">A fully self-contained apartment with its own private entrance. Thoughtfully designed with everything you need for a relaxed, comfortable stay — whether you&apos;re relocating, in town for work, or simply need a comfortable home base for a month or more.</p>
        </div>

        <div className="space-gallery">
          <div className="gallery-hero">
            <Image src="/images/PXL_20260110_174652339.jpg" alt="Living room with sofa, fireplace and smart TV" fill sizes="100vw" style={{ objectFit: 'cover' }} />
          </div>
          <div className="gallery-trio">
            <div className="gallery-trio-img"><Image src="/images/PXL_20260110_174802084.jpg" alt="Open-plan living, dining and kitchen area" fill sizes="33vw" style={{ objectFit: 'cover' }} /></div>
            <div className="gallery-trio-img"><Image src="/images/PXL_20251220_190259621.jpg" alt="Kitchen with island and stainless steel appliances" fill sizes="33vw" style={{ objectFit: 'cover' }} /></div>
            <div className="gallery-trio-img"><Image src="/images/PXL_20251220_190409447.jpg" alt="Kitchen stove, oven and quartz countertops" fill sizes="33vw" style={{ objectFit: 'cover' }} /></div>
          </div>
          <div className="gallery-duo">
            <div className="gallery-duo-img"><Image src="/images/PXL_20260110_174638792.jpg" alt="Bedroom with queen bed and mini-split AC" fill sizes="50vw" style={{ objectFit: 'cover' }} /></div>
            <div className="gallery-duo-img"><Image src="/images/PXL_20251220_190649054.jpg" alt="Bathroom with glass shower and gold fixtures" fill sizes="50vw" style={{ objectFit: 'cover' }} /></div>
          </div>
          <div className="gallery-quad">
            <div className="gallery-quad-img"><Image src="/images/PXL_20251220_190730642.jpg" alt="Bathroom vanity with round mirror" fill sizes="25vw" style={{ objectFit: 'cover' }} /></div>
            <div className="gallery-quad-img"><Image src="/images/PXL_20251220_190459627.jpg" alt="Workspace with standing desk" fill sizes="25vw" style={{ objectFit: 'cover' }} /></div>
            <div className="gallery-quad-img"><Image src="/images/PXL_20251220_190605048.jpg" alt="In-suite washer and dryer" fill sizes="25vw" style={{ objectFit: 'cover' }} /></div>
            <div className="gallery-quad-img"><Image src="/images/PXL_20251220_190618471.jpg" alt="Linen closet with fresh towels and bedding" fill sizes="25vw" style={{ objectFit: 'cover' }} /></div>
          </div>
        </div>

        <div className="space-rooms">
          <div className="room-card"><span className="room-icon">🛏</span><h3 className="room-name">Bedroom</h3><p>Queen-size bed with premium linen, blackout curtains, and ample wardrobe space.</p></div>
          <div className="room-card"><span className="room-icon">🛋</span><h3 className="room-name">Living Area</h3><p>Open-plan living with a comfortable sofa, smart TV, electric fireplace, and a dedicated workspace.</p></div>
          <div className="room-card"><span className="room-icon">🍳</span><h3 className="room-name">Kitchen</h3><p>Fully equipped kitchen with stovetop, microwave, fridge, coffee maker, and all the essentials.</p></div>
          <div className="room-card"><span className="room-icon">🚿</span><h3 className="room-name">Bathroom</h3><p>Private bathroom with walk-in shower, fresh towels, and toiletries provided.</p></div>
        </div>
      </div>
    </section>
  )
}
