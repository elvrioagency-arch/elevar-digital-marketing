# Elevar Digital Marketing Agency Website

A modern, SEO-optimized website for a digital marketing agency built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

### SEO Optimizations
- **Comprehensive Meta Tags**: Each page has detailed meta descriptions, titles, and Open Graph tags
- **Structured Data**: JSON-LD schema markup for better search engine understanding
- **Sitemap Generation**: Automatic XML sitemap generation
- **Robots.txt**: Proper crawler guidance
- **Canonical URLs**: Prevents duplicate content issues
- **Performance Optimized**: Fast loading times with Next.js optimizations

### Technical Features
- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG compliant components
- **Modern UI**: Clean, professional design with animations

### Pages & Content
- **Homepage**: Hero section, statistics, services overview, testimonials
- **Services Page**: Detailed service offerings with pricing
- **Contact Page**: Contact form with business information
- **SEO-Optimized**: Each page targets specific keywords

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd elevar-digital-marketing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Homepage
│   ├── services/
│   │   └── page.tsx        # Services page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   └── ui/
│       ├── button.tsx      # Reusable button component
│       └── sheet.tsx       # Mobile navigation component
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Colors & Branding
The website uses a dark theme with yellow accents. To customize:

1. **Update colors in `tailwind.config.ts`**
2. **Modify brand colors in `app/globals.css`**
3. **Update logo and branding in components**

### Content Updates
- **Homepage**: Edit `app/page.tsx` for main content
- **Services**: Modify service data in `app/services/page.tsx`
- **Contact**: Update contact information in `app/contact/page.tsx`

### SEO Optimization
- **Meta Tags**: Update metadata in each page's `export const metadata`
- **Structured Data**: Modify JSON-LD schemas for your business
- **Keywords**: Update keyword arrays for better targeting

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📊 SEO Features Implemented

### Technical SEO
- ✅ Semantic HTML structure
- ✅ Meta tags optimization
- ✅ Open Graph and Twitter Cards
- ✅ Structured data (JSON-LD)
- ✅ XML sitemap
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Fast loading times
- ✅ Mobile-friendly design

### Content SEO
- ✅ Keyword optimization
- ✅ Internal linking
- ✅ Alt text for images
- ✅ Descriptive URLs
- ✅ Content hierarchy (H1, H2, H3)
- ✅ Rich snippets support

### Performance
- ✅ Next.js Image optimization
- ✅ CSS and JS minification
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Compression enabled

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific settings:

```env
NEXT_PUBLIC_SITE_URL=https://elevar-digital.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Analytics
To add Google Analytics:

1. Add your GA4 measurement ID to environment variables
2. Implement tracking in `app/layout.tsx`

## 📈 Performance Monitoring

The website is optimized for:
- **Core Web Vitals**: LCP, FID, CLS
- **SEO Score**: 90+ on Lighthouse
- **Accessibility**: WCAG 2.1 AA compliant
- **Mobile Performance**: Optimized for mobile devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
- Email: hello@elevar-digital.com
- Phone: +44 (0) 20 1234 5678

---

**Built with ❤️ by Elevar Digital Marketing** 