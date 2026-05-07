export function GET() {
  return new Response('User-agent: *\nAllow: /\nDisallow: /admin\n', {
    headers: { 'Content-Type': 'text/plain' },
  })
}
