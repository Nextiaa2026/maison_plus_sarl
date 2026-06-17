/** Curated real-estate imagery from Unsplash & Pexels */

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

const pexels = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

export const images = {
  hero: {
    villa: unsplash('photo-1613490493576-7fde63acd811'),
    penthouse: unsplash('photo-1502672260266-1c1ef2d93688'),
    construction: unsplash('photo-1541888946425-d81bb19240f5'),
    skyline: pexels(1396122),
    luxuryHome: pexels(106399),
  },
  interiors: {
    livingRoom: unsplash('photo-1600210492486-724fe5c67fb0'),
    bedroom: unsplash('photo-1616486338812-3dadae4b4ace'),
    kitchen: pexels(1571460),
    loft: unsplash('photo-1600585154340-be6161a56a0c'),
    bathroom: pexels(1457842),
    dining: pexels(2724749),
  },
  exteriors: {
    villaPool: unsplash('photo-1613977257363-707ba9348227'),
    modernHouse: pexels(259588),
    balcony: pexels(2102587),
    facade: pexels(323780),
  },
  btp: {
    site: unsplash('photo-1541888946425-d81bb19240f5'),
    plans: unsplash('photo-1504307651254-35680f356dfd'),
    structure: pexels(159306),
    tools: pexels(585419),
  },
  team: {
    architect: pexels(3184292),
    engineer: pexels(38630),
    concierge: pexels(774909),
    tech: pexels(1181690),
    group: pexels(3184418),
  },
  breadcrumb: {
    about: pexels(2102587),
    services: pexels(323780),
    projects: unsplash('photo-1600585154340-be6161a56a0c'),
    teams: pexels(3184418),
    contact: pexels(106399),
  },
} as const

export type ImageSource = 'unsplash' | 'pexels'
