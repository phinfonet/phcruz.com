/**
 * Location and contact information by locale
 *
 * TODO: Add Chilean addresses when available
 * - Update chile.offices array with actual addresses
 * - Verify email addresses for each locale
 * - Add phone numbers if needed
 */

export interface Office {
  id: string
  city: string
  address?: string
  postalCode?: string
  phone?: string
  timezone: string
}

export interface LocationData {
  country: string
  countryCode: string
  email: string
  offices: Office[]
  calendarUrl?: string
}

export const locations: Record<string, LocationData> = {
  'pt-br': {
    country: 'Brasil',
    countryCode: 'BR',
    email: 'contato@phcruz.com',
    calendarUrl: 'https://cal.com/phcruz',
    offices: [
      {
        id: 'br-main',
        city: 'São Paulo',
        timezone: 'America/Sao_Paulo'
      }
    ]
  },
  'es-cl': {
    country: 'Chile',
    countryCode: 'CL',
    email: 'contacto@phcruz.com', // TODO: Consider locale-specific email like contacto@phcruz.cl
    calendarUrl: 'https://cal.com/phcruz',
    offices: [
      // TODO: Add Chilean offices when addresses are available
      // Example structure:
      // {
      //   id: 'cl-santiago-1',
      //   city: 'Santiago',
      //   address: 'Av. Providencia 1234, Oficina 567',
      //   postalCode: '7500000',
      //   phone: '+56 2 1234 5678',
      //   timezone: 'America/Santiago'
      // },
      // {
      //   id: 'cl-santiago-2',
      //   city: 'Santiago',
      //   address: 'Pending address',
      //   timezone: 'America/Santiago'
      // }
    ]
  },
  'en': {
    country: 'International',
    countryCode: 'INTL',
    email: 'contact@phcruz.com',
    calendarUrl: 'https://cal.com/phcruz',
    offices: []
  }
}

/**
 * Get location data for current locale
 */
export function getLocationData(locale: string): LocationData {
  return locations[locale] || locations['pt-br']
}

/**
 * Get primary email for locale
 */
export function getEmail(locale: string): string {
  return locations[locale]?.email || locations['pt-br'].email
}

/**
 * Get all offices for a locale
 */
export function getOffices(locale: string): Office[] {
  return locations[locale]?.offices || []
}
