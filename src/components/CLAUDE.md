# Components

## Layout
| File | Purpose |
|---|---|
| `layout/Nav.tsx` | Fixed top nav — transparent over hero, white background when scrolled. Mobile hamburger menu at ≤600px. |
| `layout/Footer.tsx` | Footer with logo, address, navigation links, Airbnb link, and Call Us button. Phone number is hidden — only exposed via `tel:` href. |

## Sections (assembled in `src/app/page.tsx`)
| File | Purpose |
|---|---|
| `sections/Hero.tsx` | Full-height hero with photo background, title, Book Now + Explore buttons, and stats (bedroom, guests, bathroom, rating). |
| `sections/Space.tsx` | Photo gallery (hero, trio, duo, quad) and four room cards (Bedroom, Living, Kitchen, Bathroom). |
| `sections/Amenities.tsx` | Dark-background amenities grid. Toiletries note: provided for first week only. |
| `sections/Location.tsx` | Embedded map and nearby places list. |
| `sections/Pricing.tsx` | Single monthly pricing card — $2,550/month, 30-night minimum. |
| `sections/Reviews.tsx` | Guest review cards. Only real reviews — no fake ones. |
| `sections/BookingSection.tsx` | Booking rules, Call Us button, and the BookingForm. |

## Booking
| File | Purpose |
|---|---|
| `booking/BookingForm.tsx` | Booking request form. Fetches and displays next available date. Validates 30-night minimum. |
| `booking/AvailabilityCalendar.tsx` | react-day-picker in range mode. Fetches unavailable dates for previous, current, and next month on each month change. |

## Admin
| File | Purpose |
|---|---|
| `admin/LoginForm.tsx` | Password form that posts to `/api/admin/auth`. |
| `admin/BookingsTable.tsx` | Table listing all booking requests with status badges. |
| `admin/BlockedDatesManager.tsx` | UI to add and remove manually blocked dates. |

## Utilities
| File | Purpose |
|---|---|
| `FadeIn.tsx` | Wraps any section in a scroll-triggered fade-in animation using IntersectionObserver. |
