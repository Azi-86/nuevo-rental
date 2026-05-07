export async function fetchUnavailableDates(year: number, month: number): Promise<Date[]> {
  const res = await fetch(`/api/availability?year=${year}&month=${month}`, { cache: 'no-store' })
  if (!res.ok) return []
  const dates: string[] = await res.json()
  return dates.map(d => new Date(d + 'T12:00:00'))
}
