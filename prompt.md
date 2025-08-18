# Build "The Good Shepherd" Construction Company Website

Please create a complete Next.js website for "The Good Shepherd", a faith-based family construction company. 

## Tech Requirements
- **Next.js** with App Router for maximum SSR and SEO optimization
- **Tailwind CSS** for styling with smooth animations and micro-animations
- **TypeScript** for type safety
- **Responsive design** optimized for mobile users
- **Internationalization** (English/Spanish) with easy language switcher
- **Component-based architecture** ready for future CMS integration

## Website Structure & Pages

### 1. Home Page (`/`)
- Hero section with "The Good Shepherd" branding and faith-based messaging
- Company values section (integrity, faith, family, quality)
- Services overview with links to individual service pages
- Recent work highlights
- Customer testimonials preview
- Contact section with call-to-action

### 2. About Page (`/about`)
- Story of the owner: pastor with 10 years of construction experience
- Family business aspect - works with his children
- Faith-driven approach to business
- Photo gallery section for family/team photos
- Mission and values

### 3. Services Section
Create individual pages for each service with SEO-optimized URLs:
- `/services/home-contracting` - Full-service general contracting
- `/services/drywall` - Drywall installation and repair
- `/services/painting` - Interior and exterior painting
- `/services/snow-removal` - Snow removal services
- `/services/flooring` - Flooring installation and repair
- `/services/roofing` - Roofing services
- `/services/deck-building` - Deck building and repair
- `/services/air-conditioning` - AC installation and service
- `/services/electrical` - Electrical services
- `/services/plumbing` - Plumbing services
- `/services/concrete` - Concrete work

Each service page should include:
- Service description and details
- Image gallery (multiple photos per service)
- Process overview
- Pricing information section
- Related services
- Contact form specific to that service

### 4. Testimonials Page (`/testimonials`)
- Customer testimonials with quotes and photos
- Star ratings display
- Google Reviews integration (if possible, otherwise testimonial cards)
- Filter by service type
- "Leave a Review" call-to-action

### 5. Before & After Page (`/before-after`)
- Before/after photo comparisons
- Project descriptions for each transformation
- Filter by service type
- Detailed project information

### 6. Gallery Page (`/gallery`)
- General work portfolio
- Categorized by service type
- Image descriptions and project details
- Lightbox functionality for full-size viewing

### 7. Contact Page (`/contact`)
- Contact form
- Business information
- Service area map
- Emergency contact information
- Business hours

## Key Features to Implement

### Language Support
- Language switcher in header (English/Spanish)
- All content translated
- Use Next.js internationalization features
- Maintain SEO for both languages

### Data Structure (Future CMS Ready)
Design data structures as if connecting to a CMS:

```typescript
// Example interfaces
interface Service {
  id: string;
  slug: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  images: Image[];
  featured: boolean;
}

interface Project {
  id: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  beforeImage: Image;
  afterImage: Image;
  serviceCategory: string;
}

interface Testimonial {
  id: string;
  name: string;
  text: { en: string; es: string };
  rating: number;
  service: string;
  image?: Image;
}
```

### Animations & UI
- Smooth page transitions
- Scroll-triggered animations for sections
- Hover effects on service cards
- Loading animations
- Micro-animations for buttons and interactions
- Mobile-optimized touch interactions

### SEO Optimization
- Proper meta tags for all pages
- Structured data for services and reviews
- Optimized images with alt text
- Sitemap generation
- Open Graph tags
- Local business schema markup

### Performance
- Image optimization with Next.js Image component
- Lazy loading for images
- Component code splitting
- Font optimization
- Critical CSS inlining

## Styling Guidelines
- Follow the general style of the html page @style.html. Feel free to change the design if improvements should be made. Make sure the site will work well on mobile devices
- Faith-based color scheme (blues, whites, earth tones)
- Professional typography
- Card-based layouts
- Clean, modern design similar to the provided reference
- Consistent spacing and visual hierarchy
- Accessibility compliance (WCAG 2.1)

## Content Placeholders
For now, use:
- Lorem ipsum text for descriptions
- Placeholder images from Unsplash or similar
- Mock testimonials and reviews
- Sample before/after photos
- Hardcoded service information

Structure the code so content can easily be replaced with dynamic data from a future CMS without code changes.

## Additional Requirements
- Error pages (404, 500)
- Loading states
- Form validation
- Mobile navigation menu
- Breadcrumb navigation
- Footer with all important links
- Cookie consent (if needed)
- Contact form with email functionality setup

Please create the complete file structure, components, pages, and styling needed for this professional construction company website. Focus on clean, maintainable code that follows Next.js best practices and is ready for production deployment.