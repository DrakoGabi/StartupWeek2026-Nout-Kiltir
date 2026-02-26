# Maison — Template Next.js

Site marchand immersif inspiré de getout.fr, construit avec Next.js 14 + Framer Motion.

---

## 🚀 Installation

```bash
# 1. Cloner / copier ce dossier
cd maison

# 2. Installer les dépendances
npm install

# 3. Lancer en développement
npm run dev
# → http://localhost:3000

# 4. Build production
npm run build
npm start
```

---

## 📁 Structure des fichiers

```
maison/
│
├── app/                          ← Pages (Next.js App Router)
│   ├── layout.tsx                ← Layout global (header, menu, fonts)
│   ├── page.tsx                  ← Page d'accueil /
│   ├── page.module.css           ← Styles de l'accueil
│   ├── collection/
│   │   └── page.tsx              ← Page /collection
│   ├── boutique/
│   │   └── page.tsx              ← Page /boutique
│   ├── produit/
│   │   └── [slug]/page.tsx       ← Page produit dynamique /produit/veste-atelier
│   ├── panier/
│   │   └── page.tsx              ← Page /panier
│   ├── contact/
│   │   └── page.tsx              ← Page /contact
│   └── univers/
│       └── page.tsx              ← Page /univers (notre histoire)
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            ← Header fixe avec logo + menu btn
│   │   ├── Header.module.css
│   │   ├── MenuOverlay.tsx       ← Menu plein écran animé
│   │   └── MenuOverlay.module.css
│   │
│   ├── animations/
│   │   ├── PageTransition.tsx    ← Voile de transition entre pages
│   │   └── ScrollReveal.tsx     ← Révélation au scroll (wrapper)
│   │
│   └── ui/
│       ├── Button.tsx            ← Bouton réutilisable
│       ├── Button.module.css
│       └── CustomCursor.tsx     ← Curseur personnalisé
│
├── lib/
│   ├── constants.ts              ← ✏️ TOUS vos textes/liens ici
│   └── store.ts                  ← État global (menu ouvert/fermé)
│
├── styles/
│   └── globals.css               ← Variables CSS, reset, utilitaires
│
└── public/
    └── images/                   ← Vos images statiques
```

---

## ✏️ Modifier le contenu

### Textes et navigation
Tout est centralisé dans **`lib/constants.ts`** :
- `BRAND_NAME` → nom de la marque
- `NAV_LINKS` → liens du menu overlay
- `HEADER_SECONDARY` → liens du header
- `SOCIAL_LINKS` → réseaux sociaux
- `FOOTER_NAV` → colonnes footer

### Couleurs
Dans **`styles/globals.css`**, section `:root {}` :
```css
--color-accent: #c8a96e;     /* couleur dorée */
--color-overlay-bg: #0a0a0a; /* fond menu */
```

### Ajouter une page
```bash
# Créez le dossier et le fichier
app/ma-page/page.tsx
app/ma-page/page.module.css

# Ajoutez le lien dans lib/constants.ts → NAV_LINKS
{ label: 'Ma Page', href: '/ma-page' }
```

---

## 🔗 Connexion à Laravel (API)

Dans chaque page, remplacez les données de démo par un appel API :

```typescript
// app/collection/page.tsx
// Avant (demo):
const PRODUITS_DEMO = [...]

// Après (Laravel API):
const produits = await fetch('https://votre-api.laravel.com/api/produits', {
  cache: 'no-store', // ou revalidate pour le cache
}).then(r => r.json())
```

---

## 📦 Déploiement

**Frontend (Next.js) → Vercel**
```bash
# Installez Vercel CLI
npm i -g vercel
vercel
```

**Backend (Laravel) → Railway ou Forge**
- Railway : glissez-déposez votre projet Laravel
- Forge : gérez vos serveurs DigitalOcean/AWS

---

## 🛠️ Stack complète

| Rôle | Techno |
|---|---|
| Frontend | Next.js 14 (App Router) |
| Animations scroll | Framer Motion |
| Smooth scroll | Lenis (à brancher) |
| Animations avancées | GSAP (à brancher sur hero) |
| Backend | Laravel (API REST) |
| Paiement | Stripe |
| BDD | PostgreSQL |
| Hébergement front | Vercel |
| Hébergement back | Railway / Forge |
