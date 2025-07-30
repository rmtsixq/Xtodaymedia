# Professional Media/News Website

A modern, clean, and professional media website built with Next.js, TypeScript, and Tailwind CSS. This platform functions as a comprehensive news outlet featuring articles, videos, podcasts, and multimedia content, similar in structure to major publications like The New York Times.

## 🌟 Features

### Main Sections
- **Home Page** (`/`) - Hero article, editor's picks, latest news, featured video & podcast embeds
- **Articles Page** (`/articles`) - Grid/list view with category filters and search
- **Individual Article Pages** (`/articles/[slug]`) - Full article with author info, related articles, and social sharing
- **Videos Page** (`/videos`) - YouTube embedded videos with descriptions and categories
- **Podcasts Page** (`/podcasts`) - Spotify embedded episodes with clean podcast-style layout

### About Us Section
Each with separate, fully designed pages:
- `/about-us/aim-and-scope` - Mission and vision of the publication
- `/about-us/our-team` - Team member profile cards with photos and bios
- `/about-us/publishing-standards` - General publishing philosophy
- `/about-us/editorial-guidelines` - Specific writing and editorial rules
- `/about-us/copyright-policy` - Copyright usage and policies

### Get Involved Section
- `/get-involved/contact-us` - Professional contact form with response times
- `/get-involved/join-us` - Job listings and application form
- `/get-involved/faq` - Comprehensive FAQ with accordion format

### User Profiles
- `/users/[username]` - Individual user pages showing published articles, videos, and podcasts

## 🎨 Design & Aesthetics

### Color Scheme
- **Primary Color**: `#eeb6d8` (used only for highlights and accents)
- **Background**: White
- **Text**: Black and dark gray hierarchy
- **Clean, minimalistic design with generous white space**

### Typography
- **Headings**: Lora (serif) for elegant, readable headlines
- **Body Text**: Inter (sans-serif) for clean, modern readability
- **Fully responsive design** for mobile, tablet, and desktop

### Navigation
- **Hamburger menu** for all screen sizes
- **Smooth animations** and hover effects
- **Dropdowns** for About Us and Get Involved sections

## 🚀 Technical Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Components**: Reusable React components
- **Images**: Next.js Image optimization
- **Icons**: Custom SVG icons
- **Fonts**: Google Fonts (Lora & Inter)

## 📁 Project Structure

```
src/
├── app/
│   ├── about-us/
│   │   ├── aim-and-scope/page.tsx
│   │   ├── our-team/page.tsx
│   │   ├── publishing-standards/page.tsx
│   │   ├── editorial-guidelines/page.tsx
│   │   └── copyright-policy/page.tsx
│   ├── articles/
│   │   ├── [slug]/page.tsx
│   │   └── page.tsx
│   ├── get-involved/
│   │   ├── contact-us/page.tsx
│   │   ├── join-us/page.tsx
│   │   └── faq/page.tsx
│   ├── users/
│   │   └── [username]/page.tsx
│   ├── videos/page.tsx
│   ├── podcasts/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── ArticleCard.tsx
│   ├── VideoCard.tsx
│   └── PodcastCard.tsx
├── data/
│   └── mockData.ts
└── types/
    └── index.ts
```

## 🎯 Key Features

### Content Management
- **Article System**: Full-featured articles with metadata, tags, categories
- **Video Integration**: YouTube embeds with descriptions and view counts
- **Podcast Integration**: Spotify embeds with episode information
- **Author Profiles**: Individual contributor pages with content portfolios

### User Experience
- **Responsive Design**: Works perfectly on all devices
- **Fast Loading**: Optimized images and components
- **Accessibility**: WCAG compliant with proper ARIA labels
- **SEO Optimized**: Proper meta tags and structured data

### Professional Features
- **Editorial Workflow**: Clear publishing standards and guidelines
- **Contact System**: Professional contact forms and information
- **Job Board**: Current openings and application system
- **FAQ System**: Comprehensive help and information

## 🛠 Installation & Setup

1. **Clone and Install**:
```bash
git clone <repository-url>
cd media-website
npm install
```

2. **Run Development Server**:
```bash
npm run dev
```

3. **Build for Production**:
```bash
npm run build
npm start
```

## 📱 Logo Assets

The website includes three logo variations:
- `Logo.png` - Full logo with pink background
- `blackedlogo.png` - Black version for light backgrounds
- `Yazili logo.png` - Text-based logo for footer/about pages

## 🔧 Customization

### Colors
Edit `tailwind.config.ts` to modify the color scheme:
```typescript
colors: {
  primary: "#eeb6d8", // Main accent color
  // ... other colors
}
```

### Content
Update mock data in `src/data/mockData.ts` with real content:
- Articles with actual content and authors
- Video and podcast metadata
- Team member information

### Styling
Modify global styles in `src/app/globals.css` for custom styling needs.

## 🌟 Professional Standards

This website follows industry best practices for:
- **Clean Code**: Well-structured, commented, and maintainable
- **Performance**: Optimized loading and rendering
- **SEO**: Search engine friendly structure
- **Accessibility**: Inclusive design principles
- **Security**: Safe data handling and form processing

## 📈 Future Enhancements

Potential additions for production use:
- **Content Management System** (CMS) integration
- **User Authentication** and subscription system
- **Comment System** for articles
- **Search Functionality** with full-text search
- **Newsletter Integration** with email service
- **Analytics Integration** for traffic monitoring
- **Social Media Auto-posting** for content promotion

## 📞 Support

For questions about implementation or customization, refer to the comprehensive FAQ section on the website or contact through the provided contact forms.

---

**Built with ❤️ using modern web technologies for professional journalism and media organizations.**