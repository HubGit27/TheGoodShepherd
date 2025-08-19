# The Good Shepherd Construction Company Website

A complete Next.js website for "The Good Shepherd", a faith-based family construction company, built with modern technologies and best practices.

## 🚀 Features

### 📱 **Responsive Design**
- Mobile-first approach with Tailwind CSS
- Smooth animations and micro-interactions using Framer Motion
- Professional design inspired by faith-based values

### 🌍 **Internationalization**
- Full bilingual support (English/Spanish)
- Language switcher in navigation
- Localized content throughout the site

### 🏗️ **Complete Service Pages**
- 11 individual service pages with detailed information:
  - Home Contracting
  - Drywall Installation & Repair
  - Interior & Exterior Painting
  - Snow Removal Services
  - Flooring Installation & Repair
  - Roofing Services
  - Deck Building & Repair
  - Air Conditioning Services
  - Electrical Services
  - Plumbing Services
  - Concrete Work

### 📸 **Gallery & Showcase**
- Before/After gallery with filtering
- General project gallery with lightbox
- Testimonials with star ratings and filtering
- Project showcase with detailed descriptions

### 📞 **Contact & Communication**
- Contact form with service selection
- Multiple contact methods (phone, email, address)
- Emergency contact information
- Business hours and service area

### 🛠️ **Technical Features**
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **next-intl** for internationalization
- **Lucide React** for icons
- **SEO optimized** with meta tags
- **Error pages** (404, 500) with loading states
- **Static generation** for performance

### 🗂️ **CMS-Ready Architecture**
- TypeScript interfaces designed for future CMS integration
- Structured data models for services, testimonials, projects
- Separation of content and presentation
- Easy content management when connecting to a CMS

## 🎨 Design & Branding

- **Faith-driven** color scheme (blues, whites, earth tones)
- **Cross icon** in branding to represent Christian values
- **Professional typography** with Inter font
- **Card-based layouts** for clean presentation
- **Consistent spacing** and visual hierarchy

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/              # Internationalized routes
│   │   ├── about/             # About page
│   │   ├── before-after/      # Before/after gallery
│   │   ├── contact/           # Contact page
│   │   ├── gallery/           # General gallery
│   │   ├── services/          # Services pages
│   │   │   └── [slug]/        # Individual service pages
│   │   └── testimonials/      # Testimonials page
│   ├── globals.css            # Global styles
│   └── layout.tsx             # Root layout
├── components/                # Reusable components
├── data/                      # Content data
├── i18n/                      # Internationalization
├── middleware.ts              # Next.js middleware
└── types/                     # TypeScript types
messages/                      # Translation files
├── en.json                   # English translations
└── es.json                   # Spanish translations
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm start
   ```

The development server runs on http://localhost:3000 (or next available port).

## 🌐 Routes

- `/` - Homepage with hero, values, services preview, testimonials
- `/about` - About page with pastor/family story
- `/services` - All services overview
- `/services/[slug]` - Individual service pages
- `/testimonials` - Customer testimonials with filtering
- `/before-after` - Before/after project gallery
- `/gallery` - General project gallery
- `/contact` - Contact form and business information

All routes support both English (`/en/...`) and Spanish (`/es/...`) with automatic language detection.

## 📋 Content Management

The site is designed to be CMS-ready:

- **Services**: Add/edit in `src/data/services.ts`
- **Testimonials**: Add/edit in `src/data/testimonials.ts`
- **Projects**: Add/edit in `src/data/projects.ts`
- **Translations**: Update `messages/en.json` and `messages/es.json`

## 🎯 SEO & Performance

- Static generation for fast loading
- Optimized images with Next.js Image component
- Proper meta tags and structured data
- Mobile-optimized responsive design
- Clean URLs with meaningful slugs

## 🔧 Customization

- **Colors**: Update Tailwind config for brand colors
- **Content**: Modify data files for services, testimonials, projects
- **Translations**: Update message files for different languages
- **Components**: Easily customizable React components

## 📞 Contact Information

Update contact information in:
- `src/components/Footer.tsx`
- `src/app/[locale]/contact/page.tsx`
- Translation files for localized addresses

## 🚀 Deployment

The site is ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any hosting platform supporting Node.js

Built with ❤️ and faith for The Good Shepherd Construction Company.
