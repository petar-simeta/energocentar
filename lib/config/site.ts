export const siteConfig = {
  name: "ENERGOCENTAR d.o.o.",
  shortName: "ENERGOCENTAR",
  oib: "33876995825",
  phone: {
    display: "099 2265 707",
    href: "+385992265707",
  },
  email: "certifikati@energocentar.com",
  url: "https://www.energocentar.com",
  areaServed: ["Zagreb", "Zagrebačka županija", "Hrvatska"],
  description:
    "Vaš pouzdan partner za energetske certifikate, procjene nekretnina i etažiranje u Zagrebu i cijeloj Hrvatskoj. Radimo brzo, stručno i po pristupačnim cijenama.",
} as const

export type SiteConfig = typeof siteConfig
