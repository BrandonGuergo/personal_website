# Brandon Guergo's Personal Website

A modern, responsive portfolio website built with **React**, **Tailwind CSS**, and **Vite**.

## Tech Stack

- **Framework**: React 18
- **Styling**: Tailwind CSS 3
- **Build Tool**: Vite
- **Deployment**: GitHub Pages (via GitHub Actions)

## Development

### Prerequisites
- Node.js 18+ and npm

### Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start dev server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for production**:
   ```bash
   npm run build
   ```
   Output goes to the `dist/` folder

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── main.jsx              # React entry point
├── App.jsx               # Main app component
├── index.css             # Global styles (Tailwind)
└── components/
    ├── Header.jsx        # Navigation header with mobile drawer
    ├── Hero.jsx          # Hero section with animations
    ├── About.jsx         # About section
    ├── Projects.jsx      # Projects showcase
    ├── Gallery.jsx       # Photography gallery
    └── Footer.jsx        # Footer
```

## Features

✨ **Smooth Scrolling**: Anchor links smooth-scroll to sections  
📱 **Responsive Design**: Mobile-first design with hamburger menu  
🎨 **Tailwind CSS**: Modern utility-first styling  
✅ **Built-in Scroll Offset**: Header-aware section scrolling  
🚀 **Hot Module Replacement**: Fast dev experience with Vite  
⚡ **Optimized Build**: Minified production bundles  

## Deployment

The site auto-deploys to GitHub Pages when you push to `main` thanks to the GitHub Actions workflow in `.github/workflows/deploy.yml`.

To enable:
1. Ensure GitHub Pages is enabled in repo settings
2. Set the "Deploy from" source to "GitHub Actions"
3. Push your changes—deployment happens automatically

## Customization

- **Colors**: Edit color variables in `tailwind.config.js`
- **Fonts**: Configure in `tailwind.config.js` and `src/index.css`
- **Images**: Place in `images/` folder and reference in components
- **Content**: Update component files in `src/components/`

---

Built with ❤️ using React & Tailwind CSS
