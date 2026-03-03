# ⏳ TimeTravel Agency - Webapp Interactive

PROJET RÉALISÉ PAR FALLEK Maxime - MOREL Oskar - YNOV

> Agence de voyage temporel de luxe • Projet pédagogique M1/M2 Digital & IA

Une webapp moderne et interactive présentant une agence de voyage temporel fictive avec 3 destinations fascinantes à travers les époques.

---

## 🌟 Aperçu du Projet

TimeTravel Agency est une expérience web immersive qui transporte les visiteurs à travers le temps. Cette webapp combine design premium, animations fluides et intelligence artificielle pour créer une expérience utilisateur exceptionnelle.

**🔗 URL Déployée :** _https://timetravel-agency-ka9juvaln-maximefallek1-2369s-projects.vercel.app/_

---

## 🎯 Destinations Temporelles

### 🏛️ Ancient Rome - 27 BC

- **Époque :** 27 avant J.-C.
- **Highlights :** Forum romain, combats de gladiateurs, dîners avec les empereurs
- **Durée :** 7 jours
- **Prix :** À partir de 2.4M crédits temporels
- **Localisation :** Empire Romain

### 🌆 Cyberpunk Tokyo - 2099

- **Époque :** 2099
- **Highlights :** Skylines holographiques, conscience synthétique, marchés de Neo-Shibuya
- **Durée :** 5 jours
- **Prix :** À partir de 3.1M crédits temporels
- **Localisation :** Neo-Japan

### 🎨 Renaissance Paris - 1503

- **Époque :** 1503
- **Highlights :** Ateliers de maîtres, cours royales, naissance de l'art moderne
- **Durée :** 6 jours
- **Prix :** À partir de 1.8M crédits temporels
- **Localisation :** Royaume de France

---

## ✨ Features Implémentées

### 🎨 Interface & Design

- ✅ Landing page premium avec design dark mode luxueux
- ✅ Hero section avec image de fond et animations
- ✅ Galerie de 3 destinations avec cards interactives
- ✅ Pages détaillées pour chaque destination
- ✅ Effets hover et transitions fluides
- ✅ Design 100% responsive (mobile-first)
- ✅ Palette de couleurs : Obsidian (#0a0a0a) + Gold (#c9a96e) + Champagne (#f5f0e8)

### 🤖 Intelligence Artificielle

- ✅ **Chatbot conversationnel "Chronos" alimenté par IA**
  - Interface UI élégante avec widget flottant
  - **Powered by Groq API + Llama 3.3 70B Versatile**
  - Réponses intelligentes contextualisées sur les destinations
  - Personnalité de guide temporel professionnel
  - Quick replies pour démarrer la conversation
  - Gestion d'historique de conversation

- ✅ **Quiz de recommandation personnalisée**
  - 4 questions interactives
  - Algorithme de matching intelligent
  - Résultat personnalisé avec explication détaillée
  - Design avec barre de progression

### 🎭 Animations & Interactions

- ✅ Animations CSS personnalisées (shimmer, float, pulse-gold)
- ✅ Smooth scroll entre les sections
- ✅ Fade-in au scroll des cards
- ✅ Hover effects sur les destinations
- ✅ Transitions fluides sur toute l'interface
- ✅ Glass morphism effects

### 📱 Sections de la Webapp

- ✅ Navigation fixe avec effet glass au scroll
- ✅ Hero section avec CTA
- ✅ Section Destinations avec 3 cards
- ✅ Section Quiz interactif
- ✅ Section Experience (À propos)
- ✅ Footer avec informations
- ✅ Chat widget persistant avec IA

---

## 🛠️ Technologies Utilisées

### Frontend

- **Framework :** Next.js 16.1.6 (App Router)
- **Language :** TypeScript 5.7.3
- **Styling :** Tailwind CSS 4.2.0
- **UI Components :** Radix UI + Shadcn/ui
- **Icons :** Lucide React
- **Animations :** CSS Animations personnalisées

### Backend & IA

- **API Routes :** Next.js API Routes
- **Chatbot IA :** Groq API (groq-sdk)
- **Modèle LLM :** Llama 3.3 70B Versatile

### Typographies

- **Serif :** Playfair Display (titres élégants)
- **Sans-serif :** Inter (textes & UI)

### Outils de Développement

- **Package Manager :** pnpm
- **Linting :** ESLint
- **Turbopack :** Activé pour des builds ultra-rapides

---

## 🤖 Outils IA Utilisés (Transparence)

### Génération de Code & Design

- **v0.dev (Vercel)** - Génération de la maquette initiale et structure de base
- **Claude Sonnet 4.5 (Anthropic)** - Architecture, développement complet et refactoring

### Chatbot Conversationnel

- **Groq API** - Infrastructure d'inférence LLM ultra-rapide
- **Llama 3.3 70B Versatile (Meta)** - Modèle de langage pour le chatbot Chronos
  - Température : 0.7 (équilibre créativité/cohérence)
  - Max tokens : 500 (réponses concises)
  - Système de prompts personnalisé pour la personnalité du guide

### Génération d'Images

- **Midjourney / DALL-E** - Visuels des destinations (Ancient Rome, Cyberpunk Tokyo, Renaissance Paris)
- **Images sous licence commerciale**

### Code Assistant

- **GitHub Copilot / Claude Code** - Assistance au développement

---

## 🚀 Installation & Lancement

### Prérequis

- Node.js 18+ installé
- pnpm installé (`npm install -g pnpm`)
- Clé API Groq (gratuite) : [console.groq.com/keys](https://console.groq.com/keys)

### Installation

```bash
cd timetravel-agency

# Installer les dépendances
pnpm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local et ajouter votre GROQ_API_KEY
```

### Lancement

```bash
# Lancer en développement
pnpm dev
```

L'application sera disponible sur **http://localhost:3000**

### Build Production

```bash
# Créer le build optimisé
pnpm build

# Lancer en production
pnpm start
```

---

## 📦 Déploiement

### Vercel (Recommandé)

```bash
# Installation de Vercel CLI
pnpm add -g vercel

# Déploiement
vercel

# Déploiement en production
vercel --prod
```

**Important :** N'oubliez pas d'ajouter la variable d'environnement `GROQ_API_KEY` dans les paramètres du projet Vercel.

**Ou via l'interface web :**

1. Connectez votre repo GitHub sur [vercel.com](https://vercel.com)
2. Import du projet
3. Ajoutez `GROQ_API_KEY` dans Environment Variables
4. Déploiement automatique ✅

---

## 📁 Structure du Projet

```
timetravel-agency/
├── app/
│   ├── layout.tsx                    # Layout principal avec fonts
│   ├── page.tsx                      # Page d'accueil
│   ├── globals.css                   # Styles globaux & variables CSS
│   ├── api/
│   │   └── chat/
│   │       └── route.ts              # API Route pour le chatbot (Groq)
│   └── destinations/
│       ├── ancient-rome/page.tsx     # Page Rome Antique
│       ├── cyberpunk-tokyo/page.tsx  # Page Tokyo Cyberpunk
│       └── renaissance-paris/page.tsx # Page Paris Renaissance
├── components/
│   ├── navbar.tsx                    # Navigation avec glass effect
│   ├── hero-section.tsx              # Hero avec image de fond
│   ├── destinations-section.tsx      # Galerie des 3 destinations
│   ├── quiz-section.tsx              # Quiz de recommandation
│   ├── experience-section.tsx        # Section À propos
│   ├── footer.tsx                    # Footer
│   ├── chat-widget.tsx               # Chatbot conversationnel IA
│   └── ui/                           # Composants UI Radix/Shadcn
├── public/
│   └── images/                       # Images des destinations
│       ├── ancient-rome.jpg
│       ├── cyberpunk-tokyo.jpg
│       ├── renaissance-paris.jpg
│       └── hero-paris.jpg
├── lib/
│   └── utils.ts                      # Utilitaires (cn, etc.)
├── hooks/
│   └── use-toast.ts                  # Hook pour notifications
├── .env.example                      # Template variables d'environnement
├── .env.local                        # Variables d'environnement (non versionné)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🎨 Design System

### Couleurs

| Nom            | Hex       | Usage                      |
| -------------- | --------- | -------------------------- |
| **Obsidian**   | `#0a0a0a` | Background principal       |
| **Charcoal**   | `#1a1a1a` | Background secondaire      |
| **Gold**       | `#c9a96e` | Couleur primaire (accents) |
| **Gold Light** | `#d4b97a` | Hover states               |
| **Champagne**  | `#f5f0e8` | Texte principal            |

### Typographie

- **Headings :** Playfair Display (serif) - 4xl à 8xl
- **Body :** Inter (sans-serif) - sm à lg
- **Uppercase :** Tracking-widest pour le luxe

### Spacing

- Sections : `py-32` (128px)
- Cards : Gap de `1.5rem` (24px)
- Conteneur max-width : `7xl` (1280px)

---

## 📄 Crédits

### APIs & Services

- **Groq API** - Infrastructure d'inférence LLM ([groq.com](https://groq.com))
- **Llama 3.3 70B** - Modèle de langage © Meta AI
- **Vercel** - Hébergement et déploiement
- **Next.js** - Framework React © Vercel

### UI & Design

- **Shadcn/ui** - Composants UI © shadcn ([ui.shadcn.com](https://ui.shadcn.com))
- **Radix UI** - Primitives UI accessibles
- **Lucide Icons** - Icônes © Lucide
- **Tailwind CSS** - Framework CSS utilitaire

### Assets & Médias

- **Images des destinations** - Générées avec Midjourney/DALL-E
- **Fonts** - Google Fonts (Playfair Display, Inter)

### Développement

- **v0.dev** - Générateur de composants IA © Vercel
- **Claude Sonnet 4.5** - Assistant de développement © Anthropic

---

## 🔧 Améliorations Possibles

### Court Terme

- [ ] Ajouter plus de destinations temporelles
- [ ] Système de réservation avec calendrier
- [ ] Page de profil utilisateur
- [ ] Notifications push

### Moyen Terme

- [ ] Système de témoignages clients
- [ ] Galerie photos immersive par destination
- [ ] Animations avec Framer Motion
- [ ] Mode clair/sombre toggle
- [ ] Multilingue (FR/EN)

### Long Terme

- [ ] Backend avec base de données (Prisma + PostgreSQL)
- [ ] Système de paiement (Stripe)
- [ ] Dashboard administrateur
- [ ] Programme de fidélité

---

## 👥 Équipe

**Développé par :** FALLEK Maxime - MOREL Oskar
**École :** YNOV
**Programme :** M1/M2 Digital & IA
**Année :** 2025-2026

---

## 📄 Licence

Projet pédagogique - Tous droits réservés © 2026

**Technologies tierces sous leurs licences respectives :**

- Next.js - MIT License
- React - MIT License
- Tailwind CSS - MIT License
- Radix UI - MIT License

---

## 📞 Support & Contact

Pour toute question sur le projet :

- 📧 Email : [maxime.fallek@ynov.com]
- 📧 Email : [oskar.morel@ynov.com]
- 🐙 GitHub : [https://github.com/maxime64100/chronos]

---

## 🎓 Contexte Académique

Ce projet a été réalisé dans le cadre du module "Webapp Interactive" du Master Digital & IA.

**Objectifs pédagogiques atteints :**

- ✅ Utilisation d'outils de génération de code IA (v0.dev, Claude)
- ✅ Intégration d'une API IA tierce (Groq + Llama)
- ✅ Création d'une expérience utilisateur moderne et immersive
- ✅ Déploiement en production sur infrastructure cloud
- ✅ Documentation technique complète
- ✅ Transparence sur l'utilisation de l'IA

**Technologies & Concepts Appliqués :**

- React Server Components
- API Routes Next.js
- Responsive Design
- TypeScript
- Tailwind CSS
- LLM Integration
- UX/UI Design

---

<div align="center">

**⏳ Made with AI & Time Travel Magic ✨**

[🚀 Voir le site déployé](#) • [📖 Documentation](#) • [🐛 Signaler un bug](#)

</div>
