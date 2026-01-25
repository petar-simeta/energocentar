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
  workingHours: {
    weekdays: "8:00 - 18:00",
    saturday: "9:00 - 13:00",
    display: "Radnim danom od 8:00 do 18:00 · Subotom od 9:00 do 13:00",
  },
} as const

export type SiteConfig = typeof siteConfig
