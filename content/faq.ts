interface FaqItem {
  question: string;
  answer: string;
}

interface FaqGroup {
  title: string;
  slug: string;
  faqs: FaqItem[];
}

export const faqGroups: FaqGroup[] = [
  {
    title: "Energetski certifikati",
    slug: "energetski-certifikati",
    faqs: [
      {
        question: "Koliko vrijedi energetski certifikat u Hrvatskoj?",
        answer:
          "Energetski certifikat vrijedi 10 godina od dana izdavanja, pod uvjetom da na nekretnini nisu napravljene značajne rekonstrukcije koje utječu na energetsku učinkovitost.",
      },
      {
        question:
          "Je li energetski certifikat obavezan pri prodaji nekretnine?",
        answer:
          "Da. Energetski certifikat je zakonski obavezan pri prodaji nekretnine u Hrvatskoj, sukladno Zakonu o gradnji i Pravilniku o energetskom certificiranju zgrada.",
      },
      {
        question:
          "Treba li energetski certifikat za iznajmljivanje stana ili apartmana?",
        answer:
          "Da. Energetski certifikat je obavezan i pri iznajmljivanju stana, kuće ili poslovnog prostora, bez obzira radi li se o dugoročnom ili kratkoročnom najmu (apartmani).",
      },
      {
        question: "Kolika je cijena energetskog certifikata u Zagrebu?",
        answer:
          "Cijena energetskog certifikata ovisi o vrsti i veličini nekretnine. Za stan do 50 m² cijena je od 80 €. Točna cijena definira se prema površini, vrsti objekta i složenosti.",
      },
      {
        question: "Koliko traje izrada energetskog certifikata?",
        answer:
          "Nakon obavljenog energetskog pregleda, certifikat se najčešće izrađuje u roku od 48 do 72 sata. Po potrebi je moguća i hitna izrada isti dan.",
      },
      {
        question: "Što je potrebno za izradu energetskog certifikata?",
        answer:
          "Potrebni su osnovni podaci o nekretnini (adresa, površina, godina gradnje), pristup svim prostorijama te podaci o sustavu grijanja i hlađenja ako postoje. Građevinska dokumentacija je korisna, ali nije obavezna.",
      },
      {
        question: "Tko smije izdavati energetske certifikate?",
        answer:
          "Energetske certifikate smiju izdavati isključivo ovlašteni energetski certifikatori upisani u registar nadležnog ministarstva.",
      },
      {
        question: "Vrijedi li energetski certifikat ako renoviram stan?",
        answer:
          "Ako renovacija značajno utječe na energetsku učinkovitost (npr. nova stolarija, fasada, grijanje), preporučuje se izrada novog certifikata iako stari formalno još vrijedi.",
      },
      {
        question: "Mogu li dobiti kaznu ako nemam energetski certifikat?",
        answer:
          "Da. Za prodaju ili najam nekretnine bez energetskog certifikata propisane su novčane kazne za vlasnike nekretnina.",
      },
      {
        question: "Vrijedi li energetski certifikat u cijeloj Hrvatskoj?",
        answer:
          "Da. Energetski certifikat vrijedi na području cijele Hrvatske, neovisno o gradu u kojem je izrađen, ako ga je izradio ovlašteni certifikator.",
      },
      {
        question:
          "Koji je najbrži način da dobijem ponudu za energetski certifikat?",
        answer:
          "Najbrže je poslati osnovne podatke: lokaciju, vrstu nekretnine (stan, kuća, poslovni prostor) i površinu u m². Na temelju toga možemo dati okvirnu cijenu i predložiti termin pregleda.",
      },
    ],
  },

  {
    title: "Procjena vrijednosti nekretnina",
    slug: "procjena-nekretnina",
    faqs: [
      {
        question: "Kada je potrebna procjena vrijednosti nekretnine?",
        answer:
          "Procjena je potrebna kod kupoprodaje, nasljeđivanja, diobe imovine, sudskih postupaka, osiguranja imovine ili za potrebe bankovnog kredita.",
      },
      {
        question: "Koliko traje izrada procjene nekretnine?",
        answer:
          "Procjena se u pravilu izrađuje u roku od 3 do 5 radnih dana, ovisno o složenosti nekretnine i dostupnosti dokumentacije.",
      },
      {
        question: "Tko može izrađivati procjene nekretnina?",
        answer:
          "Procjene mogu izrađivati isključivo ovlašteni sudski vještaci i procjenitelji s važećom licencom.",
      },
      {
        question: "Je li procjena nekretnine prihvatljiva za banku (kredit)?",
        answer:
          "Da. Procjene izrađene od ovlaštenih procjenitelja u pravilu su prihvatljive za sve banke i kreditne institucije u Hrvatskoj.",
      },
      {
        question: "Kolika je cijena procjene nekretnine?",
        answer:
          "Cijena procjene ovisi o vrsti nekretnine, lokaciji i složenosti predmeta procjene. Točna cijena definira se nakon uvida u osnovne podatke.",
      },
      {
        question: "Utječe li lokacija na procijenjenu vrijednost nekretnine?",
        answer:
          "Da. Lokacija je jedan od ključnih faktora u procjeni vrijednosti nekretnine, osobito u gradovima poput Zagreba i njegove okolice.",
      },
      {
        question: "Može li se procjena nekretnine koristiti na sudu?",
        answer:
          "Da. Procjena izrađena od ovlaštenog sudskog vještaka može se koristiti u sudskim i upravnim postupcima.",
      },
      {
        question: "Što je potrebno za procjenu vrijednosti nekretnine?",
        answer:
          "Potrebni su osnovni podaci o nekretnini (adresa, površina, vrsta i namjena), pristup nekretnini radi pregleda te po mogućnosti vlasnički list i tlocrt. Točan popis ovisi o svrsi procjene.",
      },
      {
        question: "Mogu li dobiti informativnu procjenu prije prodaje?",
        answer:
          "Da. Informativna procjena može pomoći pri određivanju realne prodajne cijene prema tržišnim uvjetima i usporedivim prodajama.",
      },
    ],
  },

  {
    title: "Etažiranje",
    slug: "etaziranje",
    faqs: [
      {
        question: "Što je etažiranje nekretnine?",
        answer:
          "Etažiranje je postupak kojim se posebni dijelovi zgrade (stanovi, poslovni prostori, garaže) upisuju kao samostalne vlasničke cjeline u zemljišne knjige.",
      },
      {
        question: "Kada je potrebno etažiranje?",
        answer:
          "Etažiranje je potrebno kod prodaje, kupnje ili nasljeđivanja stana u zgradi koja još nije etažirana, kao i kod upisa hipoteke.",
      },
      {
        question: "Koliko traje postupak etažiranja?",
        answer:
          "Postupak etažiranja u prosjeku traje od 30 do 90 dana, ovisno o složenosti predmeta i brzini postupanja nadležnih institucija.",
      },
      {
        question: "Trebam li suglasnost svih suvlasnika za etažiranje?",
        answer:
          "Za etažiranje je u pravilu potrebna suglasnost suvlasnika koji imaju više od 50 % suvlasničkih udjela u zgradi, ovisno o konkretnom slučaju.",
      },
      {
        question: "Može li se etažirati stara zgrada?",
        answer:
          "Da. Etažiranje je moguće i za starije zgrade, pod uvjetom da postoji odgovarajuća dokumentacija i ispunjeni zakonski uvjeti.",
      },
      {
        question: "Kolika je cijena etažiranja stana ili zgrade?",
        answer:
          "Cijena etažiranja ovisi o broju posebnih dijelova, složenosti zgrade i potrebnoj dokumentaciji. Točna cijena određuje se nakon analize slučaja.",
      },
      {
        question: "Je li etažiranje obavezno po zakonu?",
        answer:
          "Etažiranje nije obavezno u svim slučajevima, ali je nužno ako želite samostalno raspolagati stanovima ili poslovnim prostorima unutar zgrade.",
      },
      {
        question: "Što je etažni elaborat (elaborat etažiranja)?",
        answer:
          "Etažni elaborat je tehnička dokumentacija s tlocrtima, opisom posebnih dijelova i izračunom površina, koja služi kao temelj za upis etažnog vlasništva u zemljišne knjige.",
      },
      {
        question: "Što je potrebno za etažiranje (dokumentacija)?",
        answer:
          "Potrebni su osnovni podaci o zgradi, dokumentacija koju imate (projekt, tlocrt, dozvole), vlasnički list ako je dostupan, suglasnost suvlasnika (ako je potrebna) te pristup objektu radi pregleda i mjerenja.",
      },
      {
        question: "Je li etažiranje isto što i upis u gruntovnicu?",
        answer:
          "Etažiranje je postupak uspostave etažnog vlasništva, dok je upis u zemljišne knjige (gruntovnicu) završni korak u kojem se posebni dijelovi evidentiraju kao zasebne vlasničke cjeline.",
      },
    ],
  },
];

export function getServiceFaqs(slug: string) {
  const group = faqGroups.find((g) => g.slug === slug);
  return group?.faqs ?? [];
}
