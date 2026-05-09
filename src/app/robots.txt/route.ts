export function GET() {
  return new Response('User-agent: *\nAllow: /\nDisallow: /admin\n\nSitemap: https://nuevo-rentals.ca/sitemap.xml\n', {
    headers: { 'Content-Type': 'text/plain' },
  })
}
