# Mark Dev Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. This website showcases my skills, projects, and experience as a Full Stack Developer.

## 🚀 Features

### Core Features
- **Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **Dark/Light Theme**: Toggle between dark and light modes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Components**: Hover effects, smooth scrolling, and micro-interactions
- **Performance Optimized**: Optimized for mobile and desktop performance

### Mobile Optimizations
- **Touch-Friendly Interface**: 44px minimum touch targets for all interactive elements
- **Mobile-First Layout**: Responsive grid systems and flexible layouts
- **Optimized Typography**: Scalable text sizes for different screen sizes
- **Mobile Navigation**: Slide-out mobile menu with smooth animations
- **Performance Enhancements**: Reduced animations on mobile for better performance
- **Viewport Optimization**: Proper meta tags and mobile-specific CSS

### Sections
- **Hero Section**: Eye-catching introduction with animated elements
- **About Me**: Personal information and background
- **Skills**: Technical skills with progress bars
- **Projects**: Portfolio showcase with project details
- **Contact**: Contact form and social media links
- **Footer**: Additional links and information

## 🛠️ Technologies Used

- **Frontend Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Build Tool**: Next.js built-in bundler
- **Deployment**: GitHub Pages

## 📱 Mobile Responsiveness

### Breakpoints
- **Mobile**: 320px - 640px
- **Small**: 640px - 768px
- **Medium**: 768px - 1024px
- **Large**: 1024px - 1280px
- **Extra Large**: 1280px+

### Mobile Features
- Responsive navigation with hamburger menu
- Touch-optimized buttons and form elements
- Mobile-first CSS architecture
- Optimized images and animations
- Fast loading on mobile devices

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Mark-Prog238/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
# or
yarn build
```

### Export for Static Hosting

```bash
npm run export-gh-pages
# or
yarn export-gh-pages
```

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and mobile optimizations
│   │   ├── layout.tsx           # Root layout with theme provider
│   │   └── page.tsx             # Main page component
│   ├── components/
│   │   ├── Header.tsx           # Navigation with mobile menu
│   │   ├── Hero.tsx             # Hero section with animations
│   │   ├── About.tsx            # About me section
│   │   ├── Skills.tsx           # Skills showcase
│   │   ├── gallery.tsx          # Projects portfolio
│   │   ├── Contact.tsx          # Contact form
│   │   ├── Footer.tsx           # Footer component
│   │   ├── ThemeToggle.tsx      # Theme switcher
│   │   └── ParticleBackground.tsx # Animated background
│   └── contexts/
│       └── ThemeContext.tsx     # Theme management
├── public/                       # Static assets
├── tailwind.config.js           # Tailwind configuration
├── next.config.js               # Next.js configuration
└── package.json                 # Dependencies and scripts
```

## 🎨 Customization

### Colors
The website uses a consistent color scheme defined in Tailwind CSS:
- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Accent: Pink (#EC4899)
- Background: Gray scale with dark mode support

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Fallback**: System UI fonts
- **Responsive Sizing**: Mobile-first text scaling

### Animations
- **Framer Motion**: Smooth page transitions and component animations
- **CSS Animations**: Background effects and micro-interactions
- **Performance**: Reduced animations on mobile devices

## 📱 Mobile Optimizations

### Touch Targets
- All buttons and interactive elements are at least 44px in size
- Proper spacing between touch targets
- Hover states optimized for touch devices

### Performance
- Reduced animations on mobile for better performance
- Optimized images and assets
- Efficient CSS with mobile-first approach

### Layout
- Flexible grid systems that adapt to screen size
- Responsive typography that scales appropriately
- Mobile-optimized spacing and padding

## 🚀 Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Export for static hosting:
```bash
npm run export-gh-pages
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The static files will be in the `out/` directory
3. Upload the contents to your hosting provider

## 🔧 Configuration

### Next.js Config
The project is configured for static export with:
- `output: 'export'` for static file generation
- `distDir: 'out'` for output directory
- `trailingSlash: true` for proper routing

### Tailwind Config
- Custom breakpoints for better mobile support
- Extended animations and keyframes
- Custom spacing and sizing utilities
- Mobile-first responsive design

## 📊 Performance

### Lighthouse Scores
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

### Mobile Performance
- Optimized for mobile devices
- Reduced bundle size
- Efficient CSS and JavaScript
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on multiple devices
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: marksalamon01@gmail.com
- **GitHub**: [Mark-Prog238](https://github.com/Mark-Prog238)
- **LinkedIn**: [Mark Salamon](https://linkedin.com/in/mark-salamon-b8a09435a)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- The open-source community for inspiration and tools

---

Built with ❤️ by Mark Dev
