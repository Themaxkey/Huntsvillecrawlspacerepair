/**
 * THE ONLY FILE THAT CHANGES BETWEEN SITES.
 *
 * Everything else in this repository reads from here: page copy, meta titles,
 * schema, internal links, the phone number, the colors.
 *
 * ==================== WHY THIS SITE LEADS ON CRAWL SPACE ====================
 * Huntsville's crawl space cluster is bigger and softer than its foundation
 * one. Foundation repair Huntsville is 100/mo at KD 12, contested by AFS
 * (a Groundworks subsidiary) and Ox. Crawl space repair, encapsulation,
 * waterproofing, insulation, moisture control and the rest total 250+/mo with
 * no meaningful difficulty score on most of them — and crawl space
 * encapsulation averages ~$5,500 a job against ~$5,176 for foundation repair.
 * Bigger, easier, worth the same.
 *
 * Leading on a different trade also stops this being the third
 * "<City> Foundation Repair" site, which is the footprint we agreed to avoid.
 * Foundation work is still covered — it is just not the front door.
 * ============================================================================
 */

export const site = {
  business: {
    name:      'Huntsville Crawl Space Repair',
    shortName: 'HSV Crawl Space',
    phone:     '(256) 270-0146',
    phoneRaw:  '+12562700146',
    email:     'info@huntsvillecrawlspacerepair.com',
    domain:    'huntsvillecrawlspacerepair.com',
  },

  location: {
    city:      'Huntsville',
    state:     'Alabama',
    stateAbbr: 'AL',
    zip:       '35801',
    county:    'Madison County',
    lat:        34.7304,
    lng:       -86.5861,
    radiusMi:   40,
  },

  trade: {
    noun:       'crawl space repair',
    nounPlural: 'crawl space and foundation services',
    schemaType: 'HomeAndConstructionBusiness',
  },

  /**
   * Deliberately unlike Birmingham's navy and red. Three sites sharing one
   * template should not also share a palette — different colors are the
   * cheapest, most visible way to make them read as separate businesses.
   *
   * Contrast checked, not guessed:
   *   teal #0f5257 + white text  = 8.88:1  (AA body)
   *   CTA  #c2410c + white text  = 5.18:1  (AA body)
   *   marker #fbbf24 on teal     = 5.32:1  (well over the 3:1 UI minimum)
   * Do NOT use the CTA orange as a marker on the teal header — #c2410c on
   * #0f5257 is 1.71:1 and fails even the UI threshold. That is what the amber
   * is for.
   */
  brand: {
    primary:   '#0f5257',   // header + footer
    primaryDk: '#0a3b3f',
    red:       '#c2410c',   // CTA and phone button — kept as `red` so the
    redDk:     '#9a3412',   // shared stylesheet does not need renaming
    marker:    '#fbbf24',   // current-page underline on the header only
    accent:    '#0891b2',
    ink:       '#111827',
    body:      '#374151',
    surface:   '#f5faf9',
    logo:      '/images/logo.png',
  },

  legal: {
    disclosure:
      'Requests submitted through this website are shared with local, licensed and insured crawl space and foundation contractors, who will contact you directly using the details you provide.',
  },

  /** Root-level service pages, in nav order. Crawl space first, deliberately. */
  services: [
    { slug: 'crawl-space-repair',           name: 'Crawl Space Repair' },
    { slug: 'crawl-space-encapsulation',    name: 'Crawl Space Encapsulation' },
    { slug: 'crawl-space-waterproofing',    name: 'Crawl Space Waterproofing' },
    { slug: 'crawl-space-moisture-control', name: 'Crawl Space Moisture Control' },
    { slug: 'crawl-space-insulation',       name: 'Crawl Space Insulation' },
    { slug: 'crawl-space-mold-removal',     name: 'Crawl Space Mold Removal' },
    { slug: 'vapor-barrier-installation',   name: 'Vapor Barrier Installation' },
    { slug: 'sump-pump-installation',       name: 'Sump Pump Installation' },
    { slug: 'basement-waterproofing',       name: 'Basement Waterproofing' },
    { slug: 'foundation-repair',            name: 'Foundation Repair' },
  ],

  /**
   * Suburbs served. Slug pattern stays `crawl-space-repair-<town>-al`.
   *
   * Only Decatur and Madison have volume Ahrefs can see — Decatur is much the
   * strongest (crawl space repair 50/mo, encapsulation 30/mo, and foundation
   * repair 60/mo at KD 0 with a $50 CPC, the highest click value in any market
   * we have looked at).
   *
   * The rest are included anyway, which reverses the call made on the
   * Birmingham build. Reason: Ahrefs reported ZERO organic keywords for
   * bgtreeremoval.com while Search Console showed it genuinely ranking for
   * "russellville ky tree removal" and "tree pruning warren county ky". Ahrefs
   * zeroes are not evidence of no demand at this granularity, they are the
   * floor of its sampling. A town page costs one markdown file, and Bowling
   * Green's best positions by far are its town pages.
   */
  towns: [
    { slug: 'crawl-space-repair-decatur-al',           name: 'Decatur' },
    { slug: 'crawl-space-repair-madison-al',           name: 'Madison' },
    { slug: 'crawl-space-repair-athens-al',            name: 'Athens' },
    { slug: 'crawl-space-repair-harvest-al',           name: 'Harvest' },
    { slug: 'crawl-space-repair-meridianville-al',     name: 'Meridianville' },
    { slug: 'crawl-space-repair-hazel-green-al',       name: 'Hazel Green' },
    { slug: 'crawl-space-repair-new-market-al',        name: 'New Market' },
    { slug: 'crawl-space-repair-owens-cross-roads-al', name: 'Owens Cross Roads' },
  ],

  /** Standalone pages that are not services, towns or FAQs. */
  staticPages: [
    { slug: 'services',                 name: 'Services' },
    { slug: 'service-area',             name: 'Service Area' },
    { slug: 'crawl-space-repair-cost',  name: 'Costs' },
    { slug: 'about',                    name: 'About' },
    { slug: 'contact',                  name: 'Contact' },
    { slug: 'privacy-policy',           name: 'Privacy Policy' },
    { slug: 'sms-terms-and-conditions', name: 'SMS Terms and Conditions' },
  ],

  nav: [
    { href: '/',                         label: 'Home' },
    { href: '/services/',                label: 'Services' },
    { href: '/service-area/',            label: 'Service Area' },
    { href: '/crawl-space-repair-cost/', label: 'Costs' },
    { href: '/faq/',                     label: 'FAQ' },
    { href: '/about/',                   label: 'About' },
    { href: '/contact/',                 label: 'Contact' },
  ],
} as const;

export type Site = typeof site;
export default site;
