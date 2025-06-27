# Global AI Hackathon Website

A modern, responsive website for the Global AI Hackathon 2025 - bringing together developers, researchers, and innovators from around the world for the ultimate AI coding challenge.

## 🌟 Overview

The Global AI Hackathon is a 24-hour online coding sprint featuring multiple tracks, expert judges, and over $5000 in prizes. This website serves as the central hub for registration, information, and community engagement.

## ✨ Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Built with shadcn/ui components and Tailwind CSS
- **Interactive Sections**: 
  - Hero section with dynamic animations
  - Competition tracks overview
  - Speaker and judge profiles
  - Prize information
  - Event schedule
  - FAQ section
- **Performance Optimized**: Fast loading with Vite bundler
- **Accessibility**: WCAG compliant design patterns
- **SEO Ready**: Optimized meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Routing**: React Router DOM 6
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: TanStack Query 5
- **Charts**: Recharts 2
- **Animations**: Tailwind CSS animations + custom keyframes
- **CAPTCHA**: Cloudflare Turnstile for spam protection

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NFroehlich1/GlobalAIHackathon.git
   cd GlobalAIHackathon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   # Copy the example environment file
   cp env-example.txt .env.local
   
   # Edit .env.local and add your Cloudflare Turnstile site key
   # For development, you can use the test key: 1x00000000000000000000AA
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📦 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🏗️ Project Structure

```
src/
├── components/
│   └── ui/                 # shadcn/ui components
│       ├── turnstile.tsx   # Cloudflare Turnstile CAPTCHA
│       ├── contact-form.tsx # Contact form with CAPTCHA
│       └── hackathon-signup.tsx # Hackathon signup form
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── pages/                  # Page components
│   ├── Index.tsx          # Main landing page
│   ├── Partnership.tsx    # Partnership information (with contact form)
│   └── NotFound.tsx       # 404 page
├── App.tsx                # Main app component
├── main.tsx              # App entry point
└── index.css             # Global styles & design system

public/
├── images/               # Static images (hackathon graphics, speakers, etc.)
└── favicon.ico          # Favicon

```

## 🔒 CAPTCHA Configuration

The website includes Cloudflare Turnstile CAPTCHA for spam protection on forms:

### Setup Instructions

1. **Get a Cloudflare Turnstile Site Key**:
   - Visit [Cloudflare Turnstile Dashboard](https://dash.cloudflare.com/turnstile)
   - Create a new site and get your site key

2. **Configure Environment Variables**:
   ```bash
   # Add to your .env.local file
   VITE_TURNSTILE_SITE_KEY=your_actual_site_key_here
   ```

3. **Development Testing**:
   - Use test key: `1x00000000000000000000AA` for development
   - This always passes validation without user interaction

### Features

- **Contact Forms**: Partnership inquiry form with CAPTCHA verification
- **Hackathon Signup**: Registration form with CAPTCHA protection
- **Theme Support**: Dark theme CAPTCHA matches site design
- **Error Handling**: Graceful fallbacks for CAPTCHA failures

## 🎨 Design System

The project uses a comprehensive design system built on Tailwind CSS:

- **Colors**: Custom color palette with dark theme support
- **Typography**: Responsive font scaling and hierarchy
- **Components**: Reusable UI components from shadcn/ui
- **Animations**: Custom keyframes and transitions
- **Spacing**: Consistent spacing scale

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder ready for deployment.

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Traditional Hosting**: Upload `dist/` contents to your web server

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use existing UI components from shadcn/ui when possible
- Maintain responsive design principles
- Test across different devices and browsers
- Follow the established code style (ESLint configuration)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Event Information

**Global AI Hackathon 2025**
- **Date**: August 9-10, 2025 (ET)
- **Format**: 24-hour online hackathon
- **Prizes**: Over $5000 in total prizes
- **Tracks**: 4 specialized competition tracks
- **Registration**: Free and open globally

## 🔗 Links

- **Live Website**: [Coming Soon]
- **Registration**: [Coming Soon]
- **GitHub Repository**: [https://github.com/NFroehlich1/GlobalAIHackathon](https://github.com/NFroehlich1/GlobalAIHackathon)

## 📞 Contact

For questions about the website or hackathon, please reach out through:
- GitHub Issues
- Event organizers

---

**Built with ❤️ for the AI community**
