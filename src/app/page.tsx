import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Space from '@/components/sections/Space'
import Amenities from '@/components/sections/Amenities'
import Location from '@/components/sections/Location'
import Pricing from '@/components/sections/Pricing'
import Reviews from '@/components/sections/Reviews'
import BookingSection from '@/components/sections/BookingSection'
import FadeIn from '@/components/FadeIn'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <FadeIn><Space /></FadeIn>
      <FadeIn><Amenities /></FadeIn>
      <FadeIn><Location /></FadeIn>
      <FadeIn><Pricing /></FadeIn>
      <FadeIn><Reviews /></FadeIn>
      <BookingSection />
      <Footer />
    </>
  )
}
