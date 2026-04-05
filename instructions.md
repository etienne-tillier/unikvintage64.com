## Description
## Unikvintage64.com - Site de référence sur l'univers vintage

Unikvintage64.com est un site de contenu dédié à l'univers du vintage dans toute sa diversité. Le site couvre l'ensemble des objets et produits vintage : mobilier des années 1900, électroménager rétro, vinyles et CD, luminaires spoutnik, jukebox, téléviseurs anciens, jeux vidéo rétro, et bien d'autres trésors du passé.

### Objectif et public cible

Le site vise à devenir LA référence pour les passionnés de vintage, collectionneurs, chineurs et vendeurs. L'objectif principal est de générer du trafic SEO qualifié en répondant aux questions concrètes des visiteurs : où trouver des objets vintage, comment les authentifier, les évaluer, les entretenir et les revendre. Le contenu se compose de guides pratiques, comparatifs, analyses de prix, conseils d'achat et de vente, ainsi qu'un blog lifestyle autour de la culture vintage. La monétisation se fait via l'affiliation avec des sites de vente d'objets vintage, brocantes en ligne et services d'expertise.

## Prompt IA
Tu es un assistant de développement full-stack ET designer UI/UX chargé de configurer et d'adapter un template Next.js pour un nouveau site de contenu.

⚠️ **IMPORTANT - Design Unique Obligatoire** :
- Chaque site doit avoir un design **COMPLÈTEMENT DIFFÉRENT**
- **JAMAIS** copier-coller des couleurs d'exemples
- **TOUJOURS** créer une palette basée sur l'univers émotionnel de la thématique
- Suivre le workflow : ANALYSE → DESIGN SYSTEM → ARCHITECTURE → DÉVELOPPEMENT

## 0. Contexte du projet
- Nom du projet : Unikvintage64.com
- Domaine : unikvintage64.com
- Type de site : Money site / site de contenu SEO
- Thématiques : Art, Maison, Vintage, Collectibles
- Objectif business : Génération de trafic SEO + affiliation produits vintage
- Audience cible : Passionnés de vintage, collectionneurs, chineurs, vendeurs d'objets anciens

## 1. Identité visuelle & Design System (PHASE CRITIQUE)

⚠️ **À FAIRE EN PREMIER, AVANT TOUT CODE**

### Univers visuel à créer
- **5 adjectifs** décrivant l'ambiance du site : authentique, nostalgique, chaleureux, sophistiqué, intemporel
- **Références visuelles mentales** : brocantes parisiennes, greniers de famille, boutiques d'antiquaires, vinyles dorés sous la lumière chaude, cuir patiné, bois vieilli, métal oxydé avec patine noble
- **Émotions à évoquer** chez le visiteur : nostalgie positive, découverte de trésors, expertise reconnue, confiance dans l'authenticité

### Palette de couleurs
⚠️ **NE PAS proposer de codes HEX directement**

À partir de l'univers visuel ci-dessus, l'agent développeur devra :
1. Identifier les couleurs naturellement associées à ces références (tons chauds dorés, bruns cuivrés, verts patinés, crèmes vieillis)
2. Créer une palette UNIQUE avec :
   - Couleur principale (primary) : inspirée du cuivre patiné ou de l'or vieilli
   - Couleur secondaire (secondary) : ton brun chaud comme le cuir vintage
   - Couleur d'accent (accent) : vert-de-gris ou bleu délavé vintage
   - Couleur de fond (background) : crème ou beige parcheminé
   - Variante hover : version plus saturée de la couleur principale
3. Assurer un contraste suffisant pour l'accessibilité

### Typographie
- Proposer une Google Font adaptée à l'univers vintage :
  - Pour les titres : Playfair Display ou Libre Baskerville (élégance vintage)
  - Pour le texte : Source Serif Pro ou Crimson Text (lisibilité + caractère)

## 2. SEO & métadonnées
- **Titre SEO principal** pour la home : "Unikvintage64 - Guide complet des objets vintage et antiquités"
- **Méta-description principale** : "Découvrez l'univers du vintage : guides d'achat, prix, authentification et conseils pour meubles, vinyles, objets anciens. Expertise vintage depuis 1900."
- **Open Graph title** : "Unikvintage64 - Votre expert en objets vintage"

## 3. Rôle du template
- Le projet part d'un template Next.js existant
- Fichiers à mettre à jour :
  - `config/site.ts` (name: "Unikvintage64", description, domain: "unikvintage64.com")
  - `app/globals.css` (créer la palette vintage UNIQUE selon méthodologie section 1)
  - contenus de démo dans `content/data/*` et MDX
  - configuration blog Supabase (SITE_DOMAIN: "unikvintage64.com")

## 4. Contenu & structure à mettre en place
- Types de contenus : blog vintage, guides d'achat, comparatifs d'objets, analyses de prix, conseils d'entretien
- **Sections obligatoires sur la page d'accueil** (/) :
  - Hero : "Découvrez l'art du vintage" avec CTA "Explorer nos guides"
  - Section "Catégories vintage" : Mobilier, Électronique, Vinyles/CD, Luminaires, Objets déco
  - Section "Guides populaires" : Comment évaluer un meuble ancien, Où acheter du vintage
  - Section "Derniers articles" : mise en avant blog
  - Section "Expertise" : bloc de confiance sur l'authenticité et l'évaluation

### Images pré-générées - À TÉLÉCHARGER ET INTÉGRER

**Page d'accueil :**
- Hero principal : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/unikvintage64-com-home-hero-vintage-collection.jpeg
- Section mobilier vintage : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/unikvintage64-com-home-furniture-mid-century.jpeg
- Section vinyles et musique : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/unikvintage64-com-home-music-vinyl-collection.jpeg
- Section luminaires : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/unikvintage64-com-home-lighting-spoutnik.jpeg
- Section objets décoratifs : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/unikvintage64-com-home-decoration-antique-objects.jpeg

**Pages catégories :**
- Page Mobilier : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/unikvintage64-com-mobilier-hero-vintage-furniture.jpeg
- Page Electronics : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/unikvintage64-com-electronics-hero-retro-devices.jpeg
- Page About : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/unikvintage64-com-about-hero-expert-vintage.jpeg

- Clusters thématiques : Mobilier vintage, Électronique rétro, Vinyles & Musique, Luminaires, Objets déco, Jeux vidéo rétro

## 5. Domaine expiré - URLs à reconstruire
- Aucune URL expirée à reconstruire (site.expired_urls: null)

## 6. Consignes éditoriales
- Ton à respecter : Expert passionné, authentique, accessible mais pointu
- Types d'articles attendus : Guides d'achat, évaluations de prix, conseils d'entretien, histoire des objets, où acheter/vendre
- Contraintes à éviter : Survendre des objets sans valeur, donner des estimations sans expertise, promesses de gains rapides

## 7. Checklist technique
- Configuration `.env` (clés Supabase, SITE_DOMAIN="unikvintage64.com", BLOG_API_SECRET)
- Mise à jour `config/site.ts`
- **Création de la palette vintage UNIQUE** dans `app/globals.css` selon méthodologie
- Logos vintage (`/public/logo.svg`, `/app/icon.svg`)
- Intégration blog Supabase (filtrage par domaine)
- Vérifier `npm run lint` et `npm run build`
- Configuration déploiement

## 8. Anti-patterns à éviter
❌ Commencer à coder avant d'avoir créé le design system vintage
❌ Copier-coller des couleurs modernes ou tech
❌ Utiliser des polices sans-serif trop modernes
❌ Créer un design "brocante cheap" au lieu de "vintage sophistiqué"
❌ Laisser des placeholders de couleurs dans le code final

## URLs à rediriger
unikvintage64.com/product/meuble-hymnus-hifi-stereo-telefunken-annee-1958/
unikvintage64.com/product/fauteuil-pomare-emmanuelle/

## Instructions redirection
Chaque URL doit rediriger vers la version blog.
Insérer /blog/ entre le domaine et le slug.
Les segments après le domaine sont concaténés avec des tirets pour former le slug.
IMPORTANT: si l'URL contient des caractères encodés (%C3%A9, etc.), décoder d'abord l'URL puis slugifier normalement (ne jamais garder des morceaux c3a9/c3a8 dans le slug).
Exemples:
www.offreslg.fr/tv-oled-c2g2 -> www.offreslg.fr/blog/tv-oled-c2g2
www.offreslg.fr/tv/check-status -> www.offreslg.fr/blog/tv-check-status
www.site.fr/guide-conf%C3%A9rence -> www.site.fr/blog/guide-conference