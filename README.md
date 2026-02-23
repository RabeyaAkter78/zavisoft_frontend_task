# ZaviSoft Frontend Task

A modern, responsive e-commerce frontend application built with Next.js 15, React 19, and TypeScript. This project showcases a product catalog with dynamic cart functionality, product details, and a clean user interface.

## 🚀 Live URL

[https://your-deployment-url.com](https://your-deployment-url.com) *(Replace with actual deployment URL)*

## 📋 Overview

This e-commerce application features:
- **Product Catalog**: Browse products with dynamic filtering and search
- **Product Details**: Detailed product pages with image galleries, size/color selection
- **Shopping Cart**: Full cart functionality with localStorage persistence
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Modern UI**: Clean interface with Ant Design components
- **State Management**: Redux Toolkit for global state, localStorage for cart persistence

## 🛠 Tech Stack

### Core Technologies
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.4
- **Component Library**: Ant Design 6.3
- **Icons**: React Icons 5.5
- **State Management**: Redux Toolkit 2.11
- **HTTP Client**: RTK Query (Redux Toolkit Query)
- **Image Carousel**: Swiper 12.1

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint 9 with Next.js config
- **Build Tool**: Next.js built-in bundler
- **Type Checking**: TypeScript compiler

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── cart/              # Shopping cart page
│   ├── product/           # Product pages
│   │   └── [id]/         # Dynamic product detail pages
│   ├── layout.tsx        # Root layout component
│   └── globals.css       # Global styles
├── components/            # Reusable UI components
│   ├── PageComponents/   # Page-specific components
│   └── common/          # Shared components
├── redux/               # Redux store and configuration
│   ├── api/            # RTK Query API definitions
│   ├── feature/        # Redux feature slices
│   └── store.ts        # Redux store configuration
├── assets/             # Static assets (images, etc.)
└── providers/          # React context providers
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/zavisoft_frontend_task.git
   cd zavisoft_frontend_task
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Add your environment variables
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🏗 Architecture & Patterns

### Component Architecture
- **Atomic Design**: Components organized by reusability and scope
- **Server Components**: Leveraging Next.js 15 App Router for optimal performance
- **Client Components**: Strategic use of "use client" for interactivity

### State Management
- **Global State**: Redux Toolkit for application-wide state
- **Local State**: React hooks for component-specific state
- **Cart Persistence**: localStorage for cart data across sessions

### Data Flow
- **API Layer**: RTK Query for data fetching and caching
- **Type Safety**: Full TypeScript implementation throughout
- **Error Handling**: Comprehensive error boundaries and user feedback

## 🎨 Design System

### Styling Approach
- **Utility-First**: Tailwind CSS for rapid development
- **Component Library**: Ant Design for complex UI components
- **Responsive Design**: Mobile-first approach with breakpoints
- **Theme Consistency**: Design tokens for colors, spacing, typography

### UI Components
- **Product Cards**: Consistent product display across the app
- **Navigation**: Intuitive navigation with active states
- **Forms**: Controlled components with validation
- **Feedback**: Loading states, error messages, success notifications

## 🛒 Cart Functionality

### Features
- **Add to Cart**: Products with size and color variants
- **Quantity Management**: Increment/decrement with validation
- **Cart Persistence**: Data saved in localStorage
- **Price Calculation**: Automatic total and subtotal computation
- **Item Management**: Remove items and clear cart functionality

### Implementation Details
- **LocalStorage**: Cart data persists across browser sessions
- **Unique Identification**: Items identified by ID, size, and color combination
- **Quantity Logic**: Automatic quantity increment for duplicate items
- **Price Updates**: Real-time price calculations on quantity changes

## 📦 Key Dependencies

### Production Dependencies
- `next`: React framework
- `react`: UI library
- `typescript`: Type safety
- `tailwindcss`: Utility-first CSS
- `antd`: UI component library
- `@reduxjs/toolkit`: State management
- `react-redux`: React bindings for Redux
- `react-icons`: Icon library
- `swiper`: Carousel/slider component

### Development Dependencies
- `@types/*`: TypeScript definitions
- `eslint`: Code linting
- `postcss`: CSS processing
- `autoprefixer`: CSS vendor prefixes

## 🔧 Development Guidelines

### Code Standards
- **TypeScript**: Strict mode enabled for type safety
- **ESLint**: Configured with Next.js recommended rules
- **Component Naming**: PascalCase for components, camelCase for functions
- **File Organization**: Grouped by feature and functionality

### Best Practices
- **Performance**: Image optimization, lazy loading, code splitting
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **SEO**: Meta tags, structured data, proper heading hierarchy
- **Error Handling**: Graceful degradation and user feedback

## 🚀 Deployment

### Build Process
```bash
npm run build
```

### Environment Setup
- **Production**: Optimized build with minification
- **Environment Variables**: Proper configuration for different environments
- **Static Assets**: Optimized images and assets

### Deployment Platforms
- **Vercel**: Recommended for Next.js applications
- **Netlify**: Alternative static hosting
- **AWS**: Custom deployment with S3 and CloudFront

## 🐛 Troubleshooting

### Common Issues
- **Node Version**: Ensure Node.js 18+ is installed
- **Dependencies**: Clear cache with `npm cache clean --force`
- **Port Conflicts**: Change port if 3000 is occupied
- **TypeScript Errors**: Check `tsconfig.json` configuration

### Development Tips
- **Hot Reload**: Automatic on file changes
- **Type Checking**: `npx tsc --noEmit` for type validation
- **Performance**: Use React DevTools for profiling
- **Debugging**: Browser DevTools and React DevTools

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation for common solutions

---

**Built with ❤️ using Next.js, React, and TypeScript**
