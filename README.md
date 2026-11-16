# Portfoli d'Anna Mongelos

Web personal feta amb Vite, React i Tailwind CSS v4. Disponible en català, castellà i anglès, amb mode clar i fosc.

Web publicada: https://annamongelos.github.io/Portfoli/

## Desenvolupament

```bash
npm install
npm run dev       # servidor local
npm run build     # genera dist/
npm run deploy    # construeix i publica a la branca gh-pages
```

## Què toques per actualitzar-lo
- **Textos i idiomes:** `src/data.js` (objecte `T`, un bloc per idioma).
- **Enllaços als repositoris dels projectes:** `REPOS` a `src/data.js` (si és `null`, el botó no es mostra).
- **Color principal:** `--color-accent` a `src/index.css` (clar i fosc).
- **CV:** substitueix `public/cv_anna_mongelos.pdf`.
- **Nom del repositori:** si no es diu `Portfoli`, canvia `base` a `vite.config.js` i la ruta del favicon a `index.html`.

## Publicar a GitHub Pages
1. Crea un repositori buit a GitHub anomenat `Portfoli` (públic, sense README).
2. Al terminal, dins la carpeta del projecte:
   ```bash
   git init
   git add .
   git commit -m "Portfoli nou"
   git branch -M main
   git remote add origin https://github.com/annamongelos/Portfoli.git
   git push -u origin main --force
   npm run deploy
   ```
3. A GitHub: Settings, Pages, Source "Deploy from a branch", branca `gh-pages`, carpeta `/ (root)`, Save.
4. Al cap d'1 o 2 minuts la web és a https://annamongelos.github.io/Portfoli/
