# Beginner Guide: Build a Salon Website with React + Vite

If you are a beginner, follow this exactly from top to bottom.

---

## 0) What you are building

A simple salon website with:
- Header (menu)
- Hero section (welcome text + button)
- Services section
- Dashboard section (salon stats)
- Footer (contact)

---

## 1) Open this project folder

```bash
cd /workspace/Salon-website
```

---

## 2) Install Node modules (required first time)

```bash
npm install
```

> This downloads React + Vite packages into `node_modules`.

---

## 3) Run website in development mode

```bash
npm run dev
```

You will see a URL like:

```text
http://localhost:5173
```

Open it in browser. Your salon website should appear.

---

## 4) Understand the folder structure

```text
salon-website/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── Services.jsx
        ├── Dashboard.jsx
        └── Footer.jsx
```

- `src/main.jsx` = app entry point.
- `src/App.jsx` = combines all sections.
- `src/components/*` = each page section.
- `src/styles.css` = all styling.

---

## 5) Beginner editing workflow (important)

1. Keep terminal running `npm run dev`.
2. Open files in editor.
3. Edit any component in `src/components/`.
4. Save file.
5. Browser auto-refreshes with your change.

Example: change salon name in `src/components/Header.jsx`.

---

## 6) Full code reference (copy/paste if needed)

### `src/App.jsx`

```jsx
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}
```

### `src/components/Header.jsx`

```jsx
export default function Header() {
  return (
    <header className="header">
      <h1>Glow & Grace Salon</h1>
      <nav>
        <a href="#services">Services</a>
        <a href="#dashboard">Dashboard</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
```

### `src/components/Hero.jsx`

```jsx
export default function Hero() {
  return (
    <section className="hero">
      <h2>Your Beauty, Our Passion</h2>
      <p>Book expert salon services for hair, skin, and nails in one place.</p>
      <button type="button">Book Appointment</button>
    </section>
  );
}
```

### `src/components/Services.jsx`

```jsx
const services = [
  { name: 'Hair Styling', price: '$45' },
  { name: 'Facial Treatment', price: '$60' },
  { name: 'Manicure & Pedicure', price: '$50' },
  { name: 'Bridal Makeup', price: '$120' },
];

export default function Services() {
  return (
    <section id="services" className="section-card">
      <h3>Popular Services</h3>
      <div className="grid">
        {services.map((service) => (
          <article key={service.name} className="card">
            <h4>{service.name}</h4>
            <p>Starting at {service.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
```

### `src/components/Dashboard.jsx`

```jsx
const stats = [
  { label: 'Appointments Today', value: 12 },
  { label: 'Staff Available', value: 7 },
  { label: 'Products in Stock', value: 136 },
  { label: 'Customer Rating', value: '4.9 / 5' },
];

export default function Dashboard() {
  return (
    <section id="dashboard" className="section-card">
      <h3>Salon Dashboard</h3>
      <div className="grid">
        {stats.map((item) => (
          <article key={item.label} className="card">
            <p className="metric-value">{item.value}</p>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
```

### `src/components/Footer.jsx`

```jsx
export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <p>📍 22 Rose Street, New York</p>
      <p>📞 +1 (212) 555-0198</p>
      <p>© {new Date().getFullYear()} Glow & Grace Salon</p>
    </footer>
  );
}
```

---

## 7) Build for production (when ready)

```bash
npm run build
```

This creates optimized files in `dist/`.

---

## 8) Preview production build

```bash
npm run preview
```

---

## 9) If install fails with 403 error

This environment may block npm registry.

Try:

```bash
npm config get registry
npm config delete proxy
npm config delete https-proxy
npm cache clean --force
npm install
```

If still blocked, run the project on a machine/network with normal npm access.

---

## 10) What to do next (beginner roadmap)

1. Add images in hero and services.
2. Connect booking button to a form page.
3. Add React Router for multiple pages.
4. Save appointments in a backend/database.

You now have a strong beginner-friendly foundation.
