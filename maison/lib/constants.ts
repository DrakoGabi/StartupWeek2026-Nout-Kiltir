/**
 * ✏️ CONSTANTES — Nout' Kiltir
 * Modifiez ce fichier pour changer le contenu du site
 */

export const BRAND_NAME = "Nout' Kiltir"
export const BRAND_SLOGAN = "Parce que la Réunion se partage"
export const BRAND_DESCRIPTION = "Découvrez et partagez la culture réunionnaise authentique — artisanat, gastronomie, art et traditions de l'île intense."

export const NAV_LINKS = [
  { label: 'La Boutique',   href: '/boutique'    },
  { label: 'Artisanat',     href: '/collection'  },
  { label: 'Notre Histoire',href: '/univers'     },
  { label: 'Contact',       href: '/contact'     },
]

export const HEADER_SECONDARY = [
  { label: 'Mon Panier',  href: '/panier'  },
  { label: 'Connexion',   href: '/compte'  },
]

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook',  href: 'https://facebook.com'  },
  { label: 'TikTok',    href: 'https://tiktok.com'    },
]

export const FOOTER_NAV = [
  {
    title: 'Découvrir',
    links: [
      { label: 'La Boutique',    href: '/boutique'   },
      { label: 'Artisanat',      href: '/collection' },
      { label: 'Notre Histoire', href: '/univers'    },
    ],
  },
  {
    title: 'Service',
    links: [
      { label: 'Livraison',  href: '/livraison' },
      { label: 'Retours',    href: '/retours'   },
      { label: 'FAQ',        href: '/faq'       },
      { label: 'Contact',    href: '/contact'   },
    ],
  },
]

export const COPYRIGHT = `© ${new Date().getFullYear()} Nout' Kiltir — Tous droits réservés`
