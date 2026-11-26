# Kavi VS | Portfolio

Static portfolio site (HTML, CSS, JavaScript). No build step, no dependencies.

## Structure
```
index.html
css/style.css
js/main.js
assets/Kavi_VS_Resume.pdf
assets/images/
favicon.svg
vercel.json
```

## Before you push
1. Open `index.html` and replace the two `href="#"` links (NARPAVI Cafe, HomeFit Hub) with your live demo URLs.
2. To update the resume, replace `assets/Kavi_VS_Resume.pdf` (keep the same file name).

## Run locally
Open `index.html` in a browser, or run `npx serve .`

## Deploy to GitHub and Vercel
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/VSkavi/kavi-portfolio.git
git push -u origin main
```
Then go to vercel.com/new, import the repo, leave Framework Preset as "Other", leave Build Command and Output Directory empty, and click Deploy.
