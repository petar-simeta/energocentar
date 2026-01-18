export const pricingTables = [
  {
    title: "Energetski certifikati",
    items: [
      { service: "Stan do 50 m²", price: "od 80 €" },
      { service: "Stan 50-100 m²", price: "od 100 €" },
      { service: "Stan preko 100 m²", price: "od 120 €" },
      { service: "Kuća do 150 m²", price: "od 120 €" },
      { service: "Kuća preko 150 m²", price: "od 150 €" },
      { service: "Poslovni prostor", price: "Po dogovoru" },
    ],
    note: "Hitna izrada (isti dan): +30 €",
  },
  {
    title: "Procjena nekretnina",
    items: [
      { service: "Procjena stana", price: "od 200 €" },
      { service: "Procjena kuće", price: "od 300 €" },
      { service: "Procjena zemljišta", price: "od 150 €" },
      { service: "Procjena poslovnog prostora", price: "Po dogovoru" },
    ],
  },
  {
    title: "Etažiranje",
    items: [
      { service: "Etažiranje (do 4 stana)", price: "od 500 €" },
      { service: "Etažiranje (5-10 stanova)", price: "od 800 €" },
      { service: "Etažiranje (preko 10 stanova)", price: "Po dogovoru" },
    ],
  },
]

export const priceFactors = [
  {
    title: "Veličina nekretnine",
    description: "Veće nekretnine zahtijevaju više vremena za pregled i analizu",
  },
  {
    title: "Lokacija",
    description: "Udaljenije lokacije mogu uključivati dodatne putne troškove",
  },
  {
    title: "Složenost",
    description: "Nestandardne nekretnine zahtijevaju dodatnu analizu",
  },
  {
    title: "Hitnost",
    description: "Hitne izrade imaju dodatnu naknadu",
  },
]
