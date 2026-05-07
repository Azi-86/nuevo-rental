export type BookingStatus = 'pending' | 'confirmed' | 'cancelled'

export interface Booking {
  id: string
  guest_name: string
  guest_email: string
  check_in: string
  check_out: string
  guests: number
  message: string | null
  status: BookingStatus
  created_at: string
}

export interface BlockedDate {
  id: string
  date: string
  reason: string | null
  created_at: string
}

export interface BookingFormData {
  guest_name: string
  guest_email: string
  check_in: string
  check_out: string
  guests: number
  message: string
}
