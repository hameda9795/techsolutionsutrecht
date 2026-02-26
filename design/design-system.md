# 🎨 Design System - TechSolutionsUtrecht

**تاریخ:** 2026-02-26  
**فلسفه:** مدرن، منحصربه‌فرد، حرفه‌ای — نه کلیشه‌ای مثل رقبا  
**استراتژی:** Dark mode default با accent colors متفاوت

---

## 🎯 Design Philosophy

### مشکل رقبا
- 80% سایت‌ها **آبی** هستند
- Hero sections تکراری (stock photo + headline)
- بدون personality
- Animations ضعیف یا اصلاً نیست

### راه‌حل ما
✅ **رنگ غیرمنتظره:** نارنجی-قرمز (tech energy) + بنفش (trust)  
✅ **Dark mode default:** برای tech audience جذاب‌تر  
✅ **Micro-interactions:** hover effects، loading states  
✅ **3D elements:** abstract tech shapes  
✅ **Typography bold:** Modern sans-serif با weight بالا

---

## 🌈 Color Palette

### Primary Colors

```css
/* Main Brand Color */
--color-primary: #FF5722;        /* Deep Orange - Energy */
--color-primary-light: #FF8A65;
--color-primary-dark: #E64A19;

/* Secondary - Trust */
--color-secondary: #7C4DFF;      /* Deep Purple - Trust/Tech */
--color-secondary-light: #B388FF;
--color-secondary-dark: #651FFF;

/* Accent */
--color-accent: #00E5FF;         /* Cyan - Digital */
--color-accent-light: #6EFFFF;
```

### Dark Theme (Default)

```css
--bg-primary: #0D1117;           /* GitHub dark */
--bg-secondary: #161B22;
--bg-tertiary: #21262D;
--bg-card: #1C2128;

--text-primary: #F0F6FC;
--text-secondary: #8B949E;
--text-muted: #6E7681;

--border: #30363D;
--border-hover: #8B949E;
```

### Light Theme (Toggle)

```css
--bg-primary: #FFFFFF;
--bg-secondary: #F6F8FA;
--bg-tertiary: #EAEEF2;
--bg-card: #FFFFFF;

--text-primary: #1F2328;
--text-secondary: #656D76;
--text-muted: #8C959F;

--border: #D0D7DE;
```

### Semantic Colors

```css
--success: #238636;              /* Green */
--warning: #F0883E;              /* Orange */
--error: #DA3633;                /* Red */
--info: #58A6FF;                 /* Blue */
```

---

## 🔤 Typography

### Font Families

```css
/* Headings - Bold, Modern */
--font-heading: 'Inter', system-ui, -apple-system, sans-serif;

/* Body - Clean, Readable */
--font-body: 'Inter', system-ui, -apple-system, sans-serif;

/* Monospace - Code */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale

```css
/* Display - Hero */
--text-display: 4.5rem;          /* 72px */
--text-display-mobile: 2.5rem;   /* 40px */
--font-display: 800;             /* Extra Bold */
--line-display: 1.1;

/* H1 */
--text-h1: 3rem;                 /* 48px */
--text-h1-mobile: 2rem;          /* 32px */
--font-h1: 700;
--line-h1: 1.2;

/* H2 */
--text-h2: 2.25rem;              /* 36px */
--text-h2-mobile: 1.5rem;        /* 24px */
--font-h2: 700;
--line-h2: 1.25;

/* H3 */
--text-h3: 1.5rem;               /* 24px */
--text-h3-mobile: 1.25rem;       /* 20px */
--font-h3: 600;
--line-h3: 1.3;

/* Body Large */
--text-body-lg: 1.25rem;         /* 20px */
--font-body-lg: 400;
--line-body-lg: 1.6;

/* Body */
--text-body: 1rem;               /* 16px */
--font-body: 400;
--line-body: 1.6;

/* Small */
--text-sm: 0.875rem;             /* 14px */
--text-xs: 0.75rem;              /* 12px */
```

### Typography Patterns

```css
/* Gradient Text for Headlines */
.gradient-text {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Glow Effect */
.text-glow {
  text-shadow: 0 0 40px rgba(255, 87, 34, 0.3);
}
```

---

## 🧩 Components

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: linear-gradient(135deg, #FF5722 0%, #E64A19 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(255, 87, 34, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 87, 34, 0.6);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: white;
}

/* Ghost Button */
.btn-ghost {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
}
```

### Cards

```css
/* Service Card */
.card-service {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.card-service::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.card-service:hover::before {
  transform: scaleX(1);
}

.card-service:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
```

### Navigation

```css
/* Navbar - Transparent to Solid on Scroll */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 1rem 0;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(13, 17, 23, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

/* Nav Links */
.nav-link {
  color: var(--text-secondary);
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link:hover::after {
  width: 100%;
}
```

---

## ✨ Animations & Effects

### Hero Background
```css
/* Animated Gradient Mesh */
.hero-bg {
  background: 
    radial-gradient(ellipse at 20% 20%, rgba(255, 87, 34, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 80%, rgba(124, 77, 255, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(0, 229, 255, 0.05) 0%, transparent 70%);
  animation: meshMove 20s ease-in-out infinite;
}

@keyframes meshMove {
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(30px, -30px); }
  66% { transform: translate(-20px, 20px); }
}
```

### Floating Elements
```css
/* Floating Animation for Icons */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.float-animation {
  animation: float 4s ease-in-out infinite;
}
```

### Hover Effects
```css
/* Image Zoom */
.img-zoom {
  transition: transform 0.5s ease;
}

.img-zoom:hover {
  transform: scale(1.05);
}

/* Glow on Hover */
.glow-hover {
  transition: box-shadow 0.3s ease;
}

.glow-hover:hover {
  box-shadow: 0 0 30px rgba(255, 87, 34, 0.4);
}
```

### Scroll Animations
```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-on-scroll {
  opacity: 0;
}

.animate-on-scroll.visible {
  animation: fadeInUp 0.6s ease forwards;
}
```

---

## 📐 Layout Guidelines

### Container
```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.container-narrow {
  max-width: 768px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
```

### Spacing Scale
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Section Spacing
```css
.section {
  padding: var(--space-24) 0;  /* 96px top/bottom */
}

.section-lg {
  padding: var(--space-20) 0;  /* 80px */
}
```

### Grid Patterns
```css
/* Services Grid */
.grid-services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 1024px) {
  .grid-services {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .grid-services {
    grid-template-columns: 1fr;
  }
}

/* Bento Grid for Features */
.grid-bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
}

.grid-bento .item-large {
  grid-column: span 2;
  grid-row: span 2;
}
```

---

## 🖼️ Image Guidelines

### Hero Images
- **Style:** Abstract tech shapes, dark background
- **Treatment:** Gradient overlays with brand colors
- **Format:** WebP with JPG fallback
- **Sizes:** 
  - Desktop: 1920x1080
  - Mobile: 750x1334

### Service Icons
- **Style:** Lucide icons or Phosphor icons
- **Size:** 48px default, 64px for featured
- **Color:** Gradient fill or solid accent color

### Team/About Images
- **Style:** Professional but approachable
- **Background:** Neutral or office environment
- **Format:** WebP, square aspect ratio

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Small laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

### Mobile Adaptations
- Navigation → Hamburger menu
- Hero text → Smaller, stacked
- Service grid → 1 column
- Reduce animation complexity

---

## 🎯 Unique Design Elements

### 1. Gradient Border Cards
Cards with animated gradient borders instead of static lines.

### 2. Glowing Stats
Numbers that pulse with a subtle glow effect.

### 3. Tech Grid Background
Subtle grid pattern in hero background (like blueprint/tech drawing).

### 4. Morphing Shapes
Abstract SVG shapes that slowly morph/animate in the background.

### 5. Terminal-style CTA
Command-line inspired call-to-action for the tech audience.
```
$ contact --service=website --urgency=high
```

---

## 🧪 A/B Test Ideas

1. **Dark vs Light default theme**
2. **Orange vs Purple primary CTA**
3. **Gradient headline vs solid headline**
4. **Card hover effects intensity**

---

## 📁 Assets Needed

### Icons (Lucide)
- Globe (websites)
- ShoppingCart (webshop)
- Code (maatwerk)
- Laptop (repair)
- Smartphone (phone repair)
- Wrench (tools)
- Zap (speed)
- Shield (security)
- TrendingUp (SEO)

### Images to Source
1. Hero background (abstract tech)
2. Service illustrations (6 total)
3. Testimonial avatars (3-6)
4. About page team photo
5. Location/office photo

---

*Design System توسط: Hooshang AI Agent*  
*فایل بعدی: تکمیل Next.js project files*
