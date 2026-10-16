# BeOne — Personal Portfolio & Web Solutions

> **"Your Work Deserves to Be Seen."**  
> BeOne membantu individu, profesional, kreator, dan bisnis membangun kehadiran digital profesional melalui website portofolio custom dan solusi web modern.

Production Website: [https://beone-here.vercel.app](https://beone-here.vercel.app)  
Repository: [https://github.com/Albaihaqi354/beone](https://github.com/Albaihaqi354/beone)

---

## 📌 Tentang BeOne

BeOne adalah brand penyedia layanan pembuatan website dan solusi digital kustom. Berfokus pada kemudahan akses bagi pelanggan pertama, BeOne menawarkan paket website portofolio terjangkau (mulai Rp199.000) untuk membantu:
- **Web Developer & Programmer**: Memamerkan live demo proyek web dan keahlian teknis.
- **UI/UX & Graphic Designer**: Menampilkan showcase visual karya, studi kasus, dan tools desain.
- **Freelancer & Kreator**: Membangun personal branding yang kredibel dan memudahkan klien menghubungi langsung.
- **Mahasiswa & Fresh Graduate**: Memiliki resume interaktif modern untuk memikat recruiter.
- **Pelaku Usaha & Bisnis**: Membangun landing page, company profile, e-commerce, hingga web app kustom.

---

## ✨ Katalog Layanan & Hirarki Harga

### 1. Layanan Entry-Level (Cepat Online & Modal Terjangkau)
- **Desain Konten Promosi (Rp75.000–100.000)**: Paket lengkap 5 (lima) desain konten promosi siap posting media sosial (Feed 1:1 atau Story 9:16), 1–2x revisi minor, file high-res JPG/PNG. *Bukan harga per desain, melainkan paket hemat 5 desain.*
- **Katalog Digital UMKM (Mulai Rp150.000)**: Katalog produk atau menu online sederhana, foto, nama, harga, deskripsi singkat, tombol order WhatsApp, mobile-friendly, hosting gratis tanpa biaya sewa server bulanan.
- **Website Portofolio Pribadi Starter (Mulai Rp150.000)**: Single page terstruktur, bio profesional, riwayat pendidikan/pengalaman, keahlian, maksimal 3 proyek, tombol kontak WhatsApp, responsive design, publikasi cloud gratis (Vercel/Netlify). Estimasi 1–3 hari kerja.
- **Landing Page Bisnis (Rp350.000–500.000)**: Satu halaman bisnis fokus konversi, hero penawaran utama, info layanan/produk, poin keunggulan bisnis, tombol call-to-action WhatsApp/kontak, responsive design, hosting gratis.

### 2. Website Portofolio Lanjutan
- **Portfolio Professional (Rp349.000 — Rekomendasi Utama)**: Desain personal & terkurasi, section lengkap (About, Skills, Projects maks 6 karya interaktif, Experience, Contact), animasi halus, responsive mobile-first, bantuan setup custom domain, 2x revisi.
- **Portfolio Premium (Mulai Rp599.000)**: Arsitektur desain kompleks, studi kasus proyek mendalam, halaman/section ekstra sesuai kesepakatan, integrasi fitur khusus, 3x revisi.

### 3. Solusi Bisnis & Development Lanjutan
- **Company Profile** (Mulai Rp2.500.000): 5–6 halaman profesional, custom UI/UX, domain & hosting 1 tahun.
- **Business Website Lengkap** (Mulai Rp4.000.000): Hingga 10 halaman, katalog dinamis, blog berita, search & filter, CMS konten, domain & hosting 1 tahun.
- **E-Commerce / Toko Online** (Mulai Rp6.000.000): Toko online lengkap, katalog produk, keranjang, checkout, dashboard admin stok & order.
- **Custom Web Application** (Mulai Rp7.500.000): Aplikasi bisnis kustom (Inventory, POS, Booking, HR, SaaS) dengan arsitektur database & REST API.
- **Mobile Application** (Mulai Rp8.000.000): Aplikasi mobile Android & iOS kustom.


---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Library UI**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting / Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Panduan Menjalankan Proyek Lokal

### Persyaratan Sistem
- Node.js versi 18.18 atau lebih baru (direkomendasikan Node.js LTS v20+)
- Package manager: `npm`, `yarn`, `pnpm`, atau `bun`

### Langkah Instalasi

1. **Clone repository:**
   ```bash
   git clone https://github.com/Albaihaqi354/beone.git
   cd beone
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```

4. Buka peramban di [http://localhost:3000](http://localhost:3000).

---

## ⚙️ Konfigurasi Kontak & WhatsApp

Seluruh konfigurasi kontak dan tautan WhatsApp dapat disesuaikan pada berkas:
`src/lib/config.ts`

```typescript
export const siteConfig = {
  name: "BeOne",
  tagline: "Your Work Deserves to Be Seen.",
  supportingText: "Personal Portfolio & Web Solutions",
  description: "BeOne membantu individu, kreator, dan bisnis membangun kehadiran digital profesional melalui website portofolio custom dan solusi web modern.",
  url: "https://beone-here.vercel.app",

  /** Nomor WhatsApp dengan format internasional tanpa tanda '+' */
  whatsappNumber: "6287727726316",
  whatsappMessage: "Halo BeOne, saya ingin konsultasi mengenai pembuatan website portofolio.",

  email: "bianalbaihaqi190@gmail.com",

  social: {
    instagram: "https://www.instagram.com/bian.disini/",
    github: "https://github.com/Albaihaqi354",
  },
} as const;
```

> **Catatan Keamanan:** Jangan pernah menyimpan API key, secret token, atau kredensial sensitif di dalam berkas konfigurasi publik atau repository.

---

## 📦 Scripts yang Tersedia

| Script | Deskripsi |
| --- | --- |
| `npm run dev` | Menjalankan server development lokal |
| `npm run build` | Menghasilkan production bundle teroptimasi |
| `npm run start` | Menjalankan server production lokal setelah build |
| `npm run lint` | Menjalankan ESLint untuk memeriksa kualitas kode |

---

## 🌐 Deployment

Proyek ini telah dikonfigurasi untuk deployment instan di platform **Vercel**:
1. Hubungkan repository GitHub `Albaihaqi354/beone` ke akun Vercel.
2. Vercel secara otomatis mendeteksi framework **Next.js**.
3. Build command: `npm run build`
4. Output directory: `.next`

Setiap push ke branch utama (`main`) akan memicu deployment otomatis ke URL produksi [https://beone-here.vercel.app](https://beone-here.vercel.app).

---

## 📄 Lisensi & Hak Cipta

© BeOne. All rights reserved.
