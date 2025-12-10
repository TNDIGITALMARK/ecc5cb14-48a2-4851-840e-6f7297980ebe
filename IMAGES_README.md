# Image System Documentation

## Overview
This project now includes a comprehensive image system with professional, AI-generated visuals throughout the site.

## Image Directory Structure

```
public/images/
├── hero/
│   └── hero-background.png (1.2MB) - Premium geometric background for hero section
├── showcase/
│   ├── beauty-showcase.png (1.4MB) - Luxury skincare product photography
│   ├── fashion-showcase.png (1.7MB) - Sustainable fashion boutique
│   ├── food-showcase.png (1.6MB) - Gourmet food presentation
│   └── tech-showcase.png (1.2MB) - Modern SaaS dashboard interface
├── testimonials/
│   ├── client-1.png (1.4MB) - Professional business portrait (Sarah Johnson)
│   └── client-3.png (1.4MB) - Professional business portrait (Emma Patel)
├── brand/
│   └── logo.png (841KB) - Michelle Louis brand logo with shield and gold/navy colors
└── decorative/
    └── social-media-marketing.png (1.2MB) - Digital marketing concept image
```

## Implementation Details

### Homepage (`src/app/page.tsx`)
- **Hero Section**: Background image with overlay gradient for professional depth
- **Portfolio Preview**: Real showcase images with hover effects
- **Testimonials**: Professional client portraits integrated into testimonial cards
- **Proper lazy loading**: Hero image uses `priority` prop, others load on demand

### Navigation (`src/components/navigation.tsx`)
- **Brand Logo**: Michelle Louis logo integrated with hover animation
- **Responsive**: Logo scales and maintains quality across all screen sizes

### Gallery Page (`src/app/gallery/page.tsx`)
- **Showcase Grid**: All showcase items use local images
- **Modal View**: Full-size image display with before/after comparison
- **Optimized Loading**: Next.js Image component with proper aspect ratios

### Mock Data (`src/lib/data/mock-data.ts`)
- **Updated References**: All Unsplash URLs replaced with local image paths
- **Consistent Paths**: Using `/images/showcase/` prefix for all showcase items

## Image Specifications

### Generated Images
- **Format**: PNG with transparency support where needed
- **Quality**: Professional photography-level quality
- **Style**: Cohesive design language matching brand aesthetic
- **Aspect Ratios**:
  - Hero: 16:9 (1792x1024)
  - Showcase: 4:3 (1536x1152)
  - Testimonials: 1:1 (1024x1024)

### Performance Optimization
- Next.js Image component provides automatic optimization
- `unoptimized: true` in next.config.ts ensures compatibility
- Proper `fill` or `width/height` props prevent layout shift
- Strategic use of `priority` prop for above-the-fold images

## Usage Guidelines

### Adding New Images
1. Place images in appropriate subdirectory
2. Use descriptive filenames (kebab-case)
3. Reference using relative path: `/images/category/filename.png`
4. Always provide alt text for accessibility

### Image Component Pattern
```tsx
import Image from 'next/image';

// Fixed size
<Image
  src="/images/showcase/example.png"
  alt="Descriptive alt text"
  width={800}
  height={600}
  className="object-cover"
/>

// Responsive container
<div className="relative h-64 w-full">
  <Image
    src="/images/showcase/example.png"
    alt="Descriptive alt text"
    fill
    className="object-cover"
  />
</div>
```

## Design System Integration

### Color Harmony
All images selected/generated to complement the brand colors:
- Deep Navy (#2B3A4F)
- Gold Accent (#D4AF37)
- Soft neutrals and earth tones

### Visual Consistency
- Professional photography style
- Clean, modern compositions
- Consistent lighting and mood
- Premium brand positioning

## Future Enhancements

### Recommended Additions
1. **Favicon**: Convert logo to favicon.ico
2. **Open Graph Images**: Create social sharing images (1200x630)
3. **About Page**: Michelle Louis portrait/team photos
4. **Process Steps**: Visual diagrams or illustrations
5. **Client Logos**: Partner brand logos for credibility

### Optimization Opportunities
1. WebP format conversion for smaller file sizes
2. Responsive image sets for different screen sizes
3. Progressive loading placeholders
4. Image CDN integration for global performance

## Maintenance

### File Management
- Regular audit of unused images
- Maintain consistent naming conventions
- Document image sources and licensing
- Version control for brand assets

### Performance Monitoring
- Check Core Web Vitals for LCP (Largest Contentful Paint)
- Monitor image load times
- Optimize images exceeding 500KB where possible
- Use performance DevTools to identify bottlenecks
