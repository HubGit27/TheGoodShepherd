# 📸 The Good Shepherd Construction - Image Inventory

## 🎯 **Required Images for Website**

### **Hero Section (1 image)**
- `public/images/hero/main-hero.jpg` (1200x600px)
  - Description: Main hero image showing construction team or completed project
  - Usage: Homepage hero section

### **Services Images (11 images minimum)**
- `public/images/services/home-contracting.jpg` (600x400px)
- `public/images/services/drywall.jpg` (600x400px)
- `public/images/services/painting.jpg` (600x400px)
- `public/images/services/snow-removal.jpg` (600x400px)
- `public/images/services/flooring.jpg` (600x400px)
- `public/images/services/roofing.jpg` (600x400px)
- `public/images/services/deck-building.jpg` (600x400px)
- `public/images/services/air-conditioning.jpg` (600x400px)
- `public/images/services/electrical.jpg` (600x400px)
- `public/images/services/plumbing.jpg` (600x400px)
- `public/images/services/concrete.jpg` (600x400px)

### **Before & After Projects (12 images - 6 projects)**
- `public/images/before-after/kitchen-before.jpg` (600x400px)
- `public/images/before-after/kitchen-after.jpg` (600x400px)
- `public/images/before-after/bathroom-before.jpg` (600x400px)
- `public/images/before-after/bathroom-after.jpg` (600x400px)
- `public/images/before-after/exterior-before.jpg` (600x400px)
- `public/images/before-after/exterior-after.jpg` (600x400px)
- `public/images/before-after/deck-before.jpg` (600x400px)
- `public/images/before-after/deck-after.jpg` (600x400px)
- `public/images/before-after/flooring-before.jpg` (600x400px)
- `public/images/before-after/flooring-after.jpg` (600x400px)
- `public/images/before-after/roof-before.jpg` (600x400px)
- `public/images/before-after/roof-after.jpg` (600x400px)

### **Gallery Images (15-20 images)**
- `public/images/gallery/project-1.jpg` through `project-20.jpg` (800x600px)
  - Mix of different project types
  - Various stages of construction
  - Completed projects

### **Team/About Images (3-5 images)**
- `public/images/team/pastor-john.jpg` (400x400px) - Pastor Dani Bolanos
- `public/images/team/family-team.jpg` (800x600px) - Family working together
- `public/images/team/team-group.jpg` (800x600px) - Full team photo
- `public/images/team/working-photo.jpg` (600x400px) - Team at work
- `public/images/team/church-community.jpg` (600x400px) - Community service

### **Testimonial Photos (6 images)**
- `public/images/testimonials/maria-rodriguez.jpg` (100x100px)
- `public/images/testimonials/david-chen.jpg` (100x100px)
- `public/images/testimonials/sarah-williams.jpg` (100x100px)
- `public/images/testimonials/michael-johnson.jpg` (100x100px)
- `public/images/testimonials/carmen-martinez.jpg` (100x100px)
- `public/images/testimonials/robert-thompson.jpg` (100x100px)

## 📏 **Image Specifications**

### **Recommended Formats:**
- Primary: `.jpg` for photos
- Alternative: `.webp` for better compression
- Fallback: `.png` for images with transparency

### **Quality Guidelines:**
- **High Quality:** Hero images, main service images
- **Medium Quality:** Gallery, before/after images
- **Optimized:** Testimonial photos (small file size)

### **SEO Considerations:**
- Descriptive filenames (e.g., `kitchen-renovation-before.jpg`)
- Keep file sizes under 500KB
- Include alt text for accessibility

## 🔄 **Current Placeholder URLs to Replace:**

### **Services (from src/data/services.ts):**
```
https://images.unsplash.com/photo-1504307651254-35680f356dfd → /images/services/home-contracting.jpg
https://images.unsplash.com/photo-1581244277943-fe4a9c777189 → /images/services/drywall.jpg
https://images.unsplash.com/photo-1589939705384-5185137a7f0f → /images/services/painting.jpg
https://images.unsplash.com/photo-1578662996442-48f60103fc96 → /images/services/snow-removal.jpg
https://images.unsplash.com/photo-1586023492125-27b2c045efd7 → /images/services/flooring.jpg
https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8 → /images/services/roofing.jpg
https://images.unsplash.com/photo-1600607687939-ce8a6c25118c → /images/services/deck-building.jpg
https://images.unsplash.com/photo-1621905251189-08b45d6a269e → /images/services/air-conditioning.jpg
https://images.unsplash.com/photo-1621905252507-b35492cc74b4 → /images/services/electrical.jpg
https://images.unsplash.com/photo-1607472586893-edb57bdc0e39 → /images/services/plumbing.jpg
```

### **Hero Section (from src/components/HeroSection.tsx):**
```
https://images.unsplash.com/photo-1504307651254-35680f356dfd → /images/hero/main-hero.jpg
```

### **About Page (from src/app/[locale]/about/page.tsx):**
```
https://images.unsplash.com/photo-1521791136064-7986c2920216 → /images/team/team-group.jpg
```

## ✅ **Action Items:**

1. **Gather Photos:** Collect actual photos from The Good Shepherd Construction projects
2. **Resize Images:** Use tools like Photoshop, GIMP, or online tools to resize to specifications
3. **Optimize:** Compress images using TinyPNG or similar tools
4. **Organize:** Place images in the correct directories with descriptive names
5. **Update Code:** Replace URLs in data files and components

## 📞 **Photo Acquisition Ideas:**

- **Existing project photos** from company archives
- **New photos** of current/recent projects
- **Team photos** during work or at company events
- **Before/after** documentation of renovation projects
- **Customer permission** for testimonial photos
- **Professional photos** of Pastore Dani and family