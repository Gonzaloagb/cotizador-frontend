import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

interface GeoRequest extends NextRequest {
  geo?: {
    country?: string
  }
}

export function middleware(request: GeoRequest) {
  const country = request.geo?.country ?? 'XX'

  const blockedCountries = ['IN', 'RU', 'BY', 'CN']

  if (blockedCountries.includes(country)) {
    return new Response(
      'Acceso denegado: esta aplicación no está disponible en tu país.',
      {
        status: 403,
        headers: {
          'Content-Type': 'text/plain',
        },
      }
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*'],
}
