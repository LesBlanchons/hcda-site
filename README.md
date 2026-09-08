# Site internet — Les Blanchons des Deux Alpes (Hockey Club des Deux Alpes)

Site vitrine du club, construit avec [Astro](https://astro.build) (générateur de site
statique) et un back-office [Decap CMS](https://decapcms.org) pour publier les
actualités sans coder.

## Développer en local

```bash
npm install
npm run dev
```

Le site est alors visible sur http://localhost:4321.

## Construire le site

```bash
npm run build
```

Le résultat est généré dans le dossier `dist/`.

## Mettre le code sur GitHub

Ce dossier est déjà initialisé en dépôt Git local, avec un premier commit prêt à être
poussé. Il ne reste qu'à le relier à un dépôt GitHub :

1. Créer un compte sur [github.com](https://github.com) si ce n'est pas déjà fait (gratuit).
2. Cliquer sur **New repository** (bouton `+` en haut à droite), lui donner un nom
   (ex. `hcda-site`), le laisser **vide** (ne pas cocher "Add a README" ni ".gitignore" —
   ce projet en a déjà) et cliquer sur **Create repository**.
3. GitHub affiche alors une adresse du type `https://github.com/<votre-compte>/hcda-site.git`.
   Dans un terminal, à la racine de ce dossier, lancer :

   ```bash
   git remote add origin https://github.com/<votre-compte>/hcda-site.git
   git branch -M main
   git push -u origin main
   ```

4. Après connexion (GitHub demandera un identifiant + un jeton d'accès personnel, pas le
   mot de passe du compte — GitHub explique comment en créer un si besoin), le code apparaît
   dans le dépôt en ligne.

## Mettre le site en ligne (Netlify — gratuit)

1. Créer un compte sur [netlify.com](https://www.netlify.com) (gratuit).
2. Une fois le code sur GitHub (étape précédente).
3. Sur Netlify : "Add new site" → "Import an existing project" → connecter le dépôt.
   - Build command : `npm run build`
   - Publish directory : `dist`
4. Une fois déployé, Netlify fournit une adresse temporaire (ex. `nom-du-site.netlify.app`).
   Le nom de domaine définitif (ex. `lesblanchonsdesdeuxalpes.fr`) se relie ensuite dans
   Site settings → Domain management.

## Activer le back-office (/admin/) pour publier les actualités

Le formulaire de connexion à `/admin/` a besoin de **Netlify Identity** + **Git Gateway** :

1. Dans Netlify : Site settings → Identity → **Enable Identity**.
2. Toujours dans Identity → Services → **Enable Git Gateway**.
3. Identity → Invite users → inviter l'adresse e-mail de la personne qui publiera les
   actualités (ex. Corentin).
4. Se rendre sur `https://<votre-domaine>/admin/`, se connecter avec le compte invité :
   c'est l'interface pour ajouter/modifier des articles sans toucher au code.

## Avant la mise en ligne définitive — à compléter

- `astro.config.mjs` : remplacer `SITE_URL` par le nom de domaine définitif.
- `public/robots.txt` : mettre à jour l'URL du sitemap avec le domaine définitif.
- `src/pages/mentions-legales.astro` : compléter l'adresse du siège social, le numéro
  RNA/SIRET, et le nom/adresse de l'hébergeur une fois choisi.
- `src/pages/politique-de-confidentialite.astro` : compléter la ligne sur l'hébergement
  des données et la date de dernière mise à jour.
- Vérifier que le formulaire de contact fonctionne une fois déployé sur Netlify (les
  formulaires `data-netlify="true"` ne fonctionnent qu'une fois le site hébergé sur
  Netlify, pas en local).

## Structure du projet

```
src/
  components/    Header, Footer
  content/blog/  Articles du blog (fichiers Markdown, gérés aussi via /admin/)
  layouts/       Mise en page commune + SEO (meta, Open Graph, JSON-LD)
  pages/         Une page par route du site
public/
  admin/         Interface Decap CMS (back-office)
  images/        Logo, favicon, images
```
