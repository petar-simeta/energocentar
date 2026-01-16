# ENERGOCENTAR d.o.o. - Web stranica

Web stranica za tvrtku ENERGOCENTAR d.o.o. koja nudi usluge izrade energetskih certifikata, procjene nekretnina i etažiranja.

## O projektu

- **Tehnologije:** Next.js, React, TypeScript, Tailwind CSS
- **Hosting:** Vercel
- **URL:** https://www.energocentar.com

### Struktura projekta

```
energocentar/
├── app/                    # Stranice (svaki folder = jedna stranica)
├── components/             # React komponente
├── content/pages/          # Markdown datoteke s tekstom stranica
├── lib/                    # Pomoćne funkcije i konfiguracija
├── public/                 # Slike i drugi statički sadržaj
└── package.json            # Popis dependency-a
```

---

## Kako promijeniti tekst na stranici

Većina tekstova nalazi se u **Markdown datotekama** unutar foldera `content/pages/`. To su obične tekstualne datoteke koje možeš uređivati.

### Popis datoteka s tekstom:

| Datoteka | Stranica |
|----------|----------|
| `content/pages/home.md` | Početna stranica |
| `content/pages/energetski-certifikat.md` | Energetski certifikati |
| `content/pages/procjena-nekretnine.md` | Procjena nekretnina |
| `content/pages/etaziranje.md` | Etažiranje |
| `content/pages/faq.md` | Česta pitanja |
| `content/pages/cjenik.md` | Cjenik |
| `content/pages/o-nama.md` | O nama |
| `content/pages/kontakt.md` | Kontakt |
| `content/pages/privatnost.md` | Politika privatnosti |
| `content/pages/kolacici.md` | Politika kolačića |
| `content/pages/uvjeti.md` | Uvjeti korištenja |

### Korak po korak: Kako promijeniti tekst

1. **Otvori datoteku** koju želiš urediti (npr. `content/pages/o-nama.md`)
2. **Uredi tekst** - datoteka koristi Markdown format:
   - `# Naslov` = veliki naslov
   - `## Podnaslov` = manji naslov
   - `**podebljano**` = podebljani tekst
   - Obični tekst = obični paragraf
3. **Spremi datoteku**
4. **Commitaj i pushaj promjene** (vidi upute za Git ispod)

### Primjer Markdown datoteke:

```markdown
---
title: "Naslov stranice"
description: "Opis za Google"
---

# Glavni naslov

Ovo je paragraf teksta. Možeš pisati **podebljano** ili *kurziv*.

## Podnaslov

- Prva stavka liste
- Druga stavka liste
- Treća stavka liste
```

### Gdje promijeniti kontakt podatke?

Kontakt podaci (telefon, email, OIB) nalaze se na jednom mjestu:
**`lib/config/site.ts`**

```typescript
export const siteConfig = {
  name: "ENERGOCENTAR d.o.o.",
  oib: "33876995825",
  phone: {
    display: "099 2265 707",
    href: "+385992265707",
  },
  email: "certifikati@energocentar.com",
  // ...
}
```

---

## Postavljanje projekta (za početnike)

### Preduvjeti

Trebaš instalirati:
1. **Node.js** - https://nodejs.org (preuzmi LTS verziju)
2. **Git** - https://git-scm.com/downloads
3. **VS Code** (preporučeno) - https://code.visualstudio.com

### Korak 1: Kloniraj projekt

Otvori Terminal (Mac) ili Command Prompt (Windows) i upiši:

```bash
cd ~/Desktop
git clone https://github.com/petar-simeta/energocentar.git
cd energocentar
```

### Korak 2: Instaliraj dependencies

```bash
npm install
```

### Korak 3: Pokreni lokalni server

```bash
npm run dev
```

Otvori browser i idi na: **http://localhost:3000**

Sada možeš vidjeti stranicu lokalno. Kad napraviš promjene u kodu, stranica će se automatski osvježiti.

### Korak 4: Zaustavi server

Pritisni `Ctrl + C` u terminalu.

---

## Rad s Gitom (za početnike)

Git je sustav za verzioniranje koda. Omogućuje ti da:
- Spremaš promjene (commit)
- Šalješ promjene na server (push)
- Vraćaš se na prethodne verzije ako nešto pođe po zlu

### Osnovni Git workflow

#### 1. Provjeri status (što je promijenjeno)

```bash
git status
```

#### 2. Dodaj sve promjene

```bash
git add .
```

#### 3. Spremi promjene (commit)

```bash
git commit -m "Opis što si promijenio"
```

Primjeri dobrih poruka:
- `"Ažuriran tekst na stranici O nama"`
- `"Promijenjen broj telefona"`
- `"Dodana nova slika na početnu stranicu"`

#### 4. Pošalji na server (push)

```bash
git push
```

### Sve u jednoj naredbi

Ako želiš brzo commitati i pushati sve promjene:

```bash
git add . && git commit -m "Opis promjene" && git push
```

### Ako dobiješ grešku prilikom pusha

Možda netko drugi napravio promjene. Prvo povuci najnoviju verziju:

```bash
git pull
```

Pa onda opet:

```bash
git push
```

---

## Deployment (objava na internet)

Stranica se automatski objavljuje na Vercel kada pushamo promjene na `main` branch.

1. Napravi promjene lokalno
2. Commitaj i pushaj (`git add . && git commit -m "..." && git push`)
3. Vercel automatski detektira promjene i objavljuje novu verziju
4. Za 1-2 minute nova verzija je live na https://www.energocentar.com

---

## Korisni linkovi

- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Repo:** https://github.com/petar-simeta/energocentar
- **Markdown Guide:** https://www.markdownguide.org/basic-syntax/

---

## Pomoć

Ako zapneš ili trebaš pomoć, javi se na email ili pogledaj SPEC.md datoteku za detaljnu specifikaciju projekta.
