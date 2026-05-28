/**
 * Single source of truth for company contact info.
 *
 * Import this object instead of hardcoding phone, address, email, licenses,
 * or partner URLs. When something changes, update it here and every page
 * picks it up automatically.
 */

export const COMPANY = {
  name: "Scanio Moving & Storage",
  shortName: "Scanio",
  tagline: "Moving & Storage — Since 1941",

  phone: {
    /** Pretty form used in display copy. */
    display: "212.722.6850",
    /** Digits-only form used in tel: links. */
    tel: "2127226850",
  },

  email: "info@scaniomoving.com",

  address: {
    line1: "450 7th Ave",
    line2: "New York, NY 10001",
  },

  hours: "Monday – Friday: 9:00 AM – 6:00 PM",

  licenses: [
    { label: "NY DOT", value: "T11495" },
    { label: "ICC Interstate", value: "MC93512" },
    { label: "NJ", value: "39PC00099002" },
    { label: "US DOT", value: "537054" },
  ],

  designerPortal: "https://designers.scaniomoving.com",

  /** International moves are handled by our sister company. */
  sisterCompany: {
    name: "Sea & Air International",
    url: "https://sea-air.net/",
  },
} as const;

/** Convenience: tel: href for the company phone. */
export const TEL_HREF = `tel:${COMPANY.phone.tel}`;

/** Convenience: mailto: href for general inquiries. */
export const MAILTO_HREF = `mailto:${COMPANY.email}`;
