# TechAscension Website - Vercel Deployment Guide

## Overview
This guide will help you deploy your TechAscension website to Vercel and connect your custom domain `TechAscension.com`.

## What You Have
- ✅ A complete, responsive single-page website
- ✅ Modern React application built with Vite
- ✅ Professional design inspired by TheKiln's aesthetic
- ✅ Direct response psychology elements for high conversion
- ✅ Mobile-responsive design
- ✅ Smooth scrolling navigation
- ✅ Production-ready build

## Deployment Options

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from the project directory**
   ```bash
   cd techascension-website
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N`
   - Project name: `techascension-website` (or your preferred name)
   - In which directory is your code located? `./`

5. **Production deployment**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub + Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - TechAscension website"
   git branch -M main
   git remote add origin https://github.com/yourusername/techascension-website.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"

## Custom Domain Setup

### Step 1: Add Domain in Vercel
1. Go to your project dashboard on Vercel
2. Click on the "Domains" tab
3. Add `techascension.com` and `www.techascension.com`

### Step 2: Update DNS Settings
Update your domain's DNS settings with your domain registrar:

**For the root domain (techascension.com):**
- Type: `A`
- Name: `@`
- Value: `76.76.19.19`

**For the www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

**Alternative (if A record doesn't work):**
- Type: `CNAME`
- Name: `@`
- Value: `cname.vercel-dns.com`

### Step 3: Verify Domain
- DNS changes can take up to 48 hours to propagate
- Vercel will automatically issue SSL certificates
- Your site will be available at both `techascension.com` and `www.techascension.com`

## Project Structure
```
techascension-website/
├── public/
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── App.jsx          # Main application component
│   ├── App.css          # Styles
│   └── main.jsx         # Entry point
├── dist/                # Production build (generated)
├── package.json
└── vite.config.js
```

## Key Features Implemented

### Design & Aesthetics
- Clean, modern design inspired by TheKiln
- Professional typography and spacing
- Subtle gradients and hover effects
- Responsive grid layouts

### Direct Response Psychology
- Compelling headline with clear value proposition
- Social proof with company logos and testimonials
- Problem/solution framework
- Strong calls-to-action throughout
- FAQ section addressing common objections
- Urgency and scarcity elements

### Technical Features
- Smooth scrolling navigation
- Responsive design (mobile-first)
- Fast loading times
- SEO-friendly structure
- Accessible design patterns

## Content Sections

1. **Hero Section**
   - Main headline: "Land Your Dream Tech Role in 90 Days"
   - Value proposition and CTAs
   - Social proof indicators

2. **Social Proof Bar**
   - Company logos where candidates work

3. **Problem Section**
   - "Tired of Applying and Getting Ghosted?"
   - Lists common pain points

4. **Solution Section**
   - "The TechAscension Method"
   - 3-pillar system explanation

5. **Results Section**
   - Key statistics and metrics
   - Social proof numbers

6. **Testimonials**
   - Client success stories
   - 5-star ratings

7. **FAQ Section**
   - Addresses common objections
   - Builds trust and credibility

8. **Final CTA**
   - Strong call-to-action
   - Risk reversal elements

## Customization Guide

### Updating Content
- Edit `src/App.jsx` to modify text, headlines, and structure
- All content is in plain text within the component

### Styling Changes
- Modify `src/App.css` for global styles
- Use Tailwind CSS classes in the JSX for component-specific styling

### Adding Images
- Place images in `src/assets/`
- Import and use in components
- Update testimonial avatars and company logos

### Analytics Integration
Add tracking code to `index.html` or use Vercel Analytics:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## Performance Optimization

The website is already optimized for:
- ✅ Fast loading times
- ✅ Mobile responsiveness
- ✅ SEO best practices
- ✅ Accessibility standards

## Support & Maintenance

### Regular Updates
- Keep dependencies updated: `npm update`
- Monitor Vercel dashboard for deployment status
- Test website functionality regularly

### Backup Strategy
- Keep source code in version control (Git)
- Export Vercel project settings
- Document any custom configurations

## Troubleshooting

### Common Issues
1. **Build Failures**: Check console for errors, ensure all dependencies are installed
2. **Domain Not Working**: Verify DNS settings, wait for propagation
3. **Styling Issues**: Clear browser cache, check CSS imports

### Getting Help
- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: Available through dashboard
- Community: Vercel Discord and GitHub discussions

## Next Steps

1. Deploy the website using one of the methods above
2. Set up your custom domain
3. Test all functionality on the live site
4. Set up analytics and monitoring
5. Plan content updates and A/B testing

Your TechAscension website is ready for high-converting lead generation!

