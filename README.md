# Farghan Digital Marketing — Situs + CMS

Situs jasa website marketing (mobile-first, bilingual ID/EN, hand-coded) dengan **Decap CMS** untuk edit konten tanpa sentuh kode.

## Struktur
- `public/` — situs statis (HTML + gambar) yang disajikan Worker
- `content/site.json` — konten yang bisa diedit klien (hero, layanan, kontak)
- `public/admin/` — panel Decap CMS (dimuat dari CDN)
- `worker.js` + `wrangler.jsonc` — deploy Cloudflare Workers

## Cara edit konten
1. Buka `https://farghan.lokersprasan.workers.dev/admin/`
2. Login dengan GitHub (OAuth)
3. Edit "Konten Utama" → simpan → otomatis commit ke repo ini
4. Situs membaca `content/site.json` langsung dari repo → langsung berubah

## Teknologi
- Cloudflare Workers (gratis) — hosting
- Decap CMS (open source) — panel edit
- GitHub OAuth — login
- Konten bilingual (ID/EN) via atribut `data-en`
