import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nuevo-rentals.ca'
  const lastModified = new Date()

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/#space`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/#amenities`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/#location`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/#pricing`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/#book`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
  ]
}
