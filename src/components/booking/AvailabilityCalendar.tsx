'use client'

import { useEffect, useState } from 'react'
import { DayPicker, DateRange } from 'react-day-picker'
import { fetchUnavailableDates } from '@/lib/availability'
import { addDays, startOfDay } from 'date-fns'

interface Props {
  selected: DateRange | undefined
  onSelect: (range: DateRange | undefined) => void
}

export default function AvailabilityCalendar({ selected, onSelect }: Props) {
  const [unavailable, setUnavailable] = useState<Date[]>([])
  const [month, setMonth] = useState(new Date())

  useEffect(() => {
    const prev = new Date(month.getFullYear(), month.getMonth() - 1)
    const next = new Date(month.getFullYear(), month.getMonth() + 1)
    Promise.all([
      fetchUnavailableDates(prev.getFullYear(), prev.getMonth() + 1),
      fetchUnavailableDates(month.getFullYear(), month.getMonth() + 1),
      fetchUnavailableDates(next.getFullYear(), next.getMonth() + 1),
    ]).then(([a, b, c]) => setUnavailable([...a, ...b, ...c]))
  }, [month])

  const today = startOfDay(new Date())

  return (
    <div className="calendar-wrapper">
      <DayPicker
        mode="range"
        selected={selected}
        onSelect={onSelect}
        month={month}
        onMonthChange={setMonth}
        disabled={[
          { before: addDays(today, 1) },
          ...unavailable,
        ]}
        numberOfMonths={1}
        showOutsideDays
      />
    </div>
  )
}
