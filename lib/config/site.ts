export const siteConfig = {
  name: "ENERGOCENTAR d.o.o.",
  shortName: "ENERGOCENTAR",
  oib: "33876995825",
  phone: {
    display: "099 2265 707",
    href: "+385992265707",
  },
  email: "info@energocentar.hr",
  address: {
    street: "Ulica Petra Kružića 6",
    city: "Zagreb",
    postalCode: "10000",
    country: "Hrvatska",
    display: "Ulica Petra Kružića 6, Zagreb",
  },
  url: "https://energocentar.hr",
  priceRange: "€€",
  areaServed: ["Zagreb", "Zagrebačka županija", "Hrvatska"],
  description:
    "ENERGOCENTAR d.o.o. – izrada energetskih certifikata, procjena vrijednosti nekretnina i etažiranje stanova i zgrada u Zagrebu i cijeloj Hrvatskoj.",
  workingHours: {
    dayOfWeek: [
      "https://schema.org/Monday",
      "https://schema.org/Tuesday",
      "https://schema.org/Wednesday",
      "https://schema.org/Thursday",
      "https://schema.org/Friday",
    ],
    opens: "08:00",
    closes: "16:00",
  },
} as const;

export type SiteConfig = typeof siteConfig;
