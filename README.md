# IT Club — Құлан АЖК

Құлан АЖК IT Club лендингі: hex фон, hero, жобалар, клубқа қосылу формасы.

**Сайт (GitHub Pages):** [https://mastermt1990-ai.github.io/it-clab/](https://mastermt1990-ai.github.io/it-clab/)

**Railway deploy (бір рет басыңыз):** [railway.com/new/github?repo=mastermt1990-ai/it-clab](https://railway.com/new/github?repo=mastermt1990-ai/it-clab) → содан кейін **Generate Domain** → live URL

## Қарау

`index.html` файлын браузерде ашыңыз немесе жоғарыдағы GitHub Pages сілтемесін ашыңыз.

## Құрылым

- `index.html` — hero, stats, about, tracks, ecosystem, projects, join
- `css/style.css` — hex grid, glass UI, workstation, IT фото карточкалар
- `js/main.js` — nav, counters, form
- `assets/college-logo.png` — колледж логотипі
- `assets/it/` — hero және about суреттері
- `assets/projects/` — жоба суреттері

## GitHub Pages

1. Repo: `it-clab`
2. Settings → Pages → Source: **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)`

## Railway деплой

1. [railway.com](https://railway.com/) → тіркелу / кіру
2. **New Project** → **Deploy from GitHub repo**
3. `mastermt1990-ai/it-clab` репосын таңдаңыз
4. Railway `package.json` және `railway.toml` бойынша автоматты build жасайды
5. Сервисте **Settings → Networking → Generate Domain** басып, public URL алыңыз

Локальді тексеру:

```bash
npm install
npm run dev
```

Содан кейін `http://localhost:3000` ашыңыз.