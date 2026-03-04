# Complete Website Design Prompt - From Scratch

> **Note**: This prompt provides a complete blueprint for creating a new website. Remove the theme/color section and customize colors based on your project brand. All component structures are documented below.

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Core Components](#core-components)
3. [Page Structures](#page-structures)
4. [Navigation System](#navigation-system)
5. [Component Architecture](#component-architecture)
6. [Data Structure](#data-structure)
7. [Utility Functions](#utility-functions)
8. [Build & Deployment](#build--deployment)

---

## 🎯 Project Overview

### Project Type
- **Single Page Application (SPA)** with client-side routing
- **Framework**: React 19.2.3 with TypeScript
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS (utility-first)
- **State Management**: React hooks (useState, useEffect, useRef)
- **Icons**: lucide-react for UI icons

### Core Features
- Multi-page navigation without server-side routing
- Component library with 45+ designs
- Search and filter functionality
- Copy-to-clipboard code snippets
- Mobile-responsive design
- Offline support with Service Worker
- Dark mode ready
- Command palette for navigation

### Deployment
- **Platform**: Vercel
- **CDN**: jsDelivr for package distribution
- **Repository**: GitHub (public)

---

## 🧩 Core Components

### 1. **Header Component** (`Header.tsx`)
**Purpose**: Navigation bar and branding

**Features**:
- Logo with brand name (clickable, goes to home)
- Desktop navigation menu with links to main sections
- Mobile hamburger menu
- Social links (GitHub, NPM)
- Sticky positioning (z-50)
- Backdrop blur effect

**Props Interface**:
```typescript
interface HeaderProps {
  onNavigateHome: () => void;
  onNavigate?: (view: string) => void;
}
```

**Key Functions**:
- `handleNavigate(path)` - History-based navigation
- Mobile menu state management
- Responsive breakpoints (hidden on mobile, shown on lg)

**Styling**:
- Background: `bg-brand-dark/95 backdrop-blur-sm`
- Text: Orange accent for highlights
- Hover effects on links
- Selection colors

---

### 2. **Footer Component** (`Footer.tsx`)
**Purpose**: Site footer with links and information

**Structure**:
- 4-column grid layout (responsive)
- Logo positioned on top border
- **Column 1 - Brand**: Company description
- **Column 2 - Collections**: Category links
- **Column 3 - Resources**: Guide, Packages, Showcase links
- **Column 4 - Features**: Bullet-point features with indicators

**Features**:
- Newsletter signup form (optional)
- Social media links
- Copyright notice
- Link to legal pages (Privacy, Terms)
- Responsive grid (1 col mobile → 4 cols desktop)

---

### 3. **LandingPage Component** (`LandingPage.tsx`)
**Purpose**: Homepage with hero section and feature showcase

**Sections**:

#### 3.1 Hero Section
- Dynamic background with animated gradients
- Logo animation
- Rotating button showcase (auto-cycles through styles)
- Call-to-action buttons (Explore, Copy Code)
- Stats display

#### 3.2 Features Section
Grid of 4 feature cards:
- Icon + Title + Description
- Features: Designs, Copy & Paste, Zero Dependencies, Fully Responsive
- Interactive hover effects

#### 3.3 Testimonials Section
- 3-column testimonial cards
- User name, role, and quote
- Star ratings
- Responsive carousel on mobile

#### 3.4 FAQ Section
- Accordion-style expandable questions
- Smooth animations
- 4 common questions answered
- Search functionality (optional)

#### 3.5 CTA Section
- Call-to-action with button showcase
- Explore button
- Code snippet preview

**State Management**:
```typescript
const [currentStyleIdx, setCurrentStyleIdx] = useState(0);
const [isHovered, setIsHovered] = useState(false);
const [openFaq, setOpenFaq] = useState<number | null>(null);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
```

**Key Features**:
- Auto-rotating button styles (2-second intervals)
- Pause on hover
- Responsive layout
- Smooth transitions
- Icon integration with lucide-react

---

### 4. **ButtonCard Component** (`ButtonCard.tsx`)
**Purpose**: Individual button component card in grid view

**Props**:
```typescript
interface ButtonCardProps {
  button: ButtonDesign;
  onSelect: (button: ButtonDesign) => void;
}
```

**Features**:
- Thumbnail preview of button
- Button name and category badge
- Hover effect with shadow
- Click to view details
- Copy code button
- Live button preview

**Styling**:
- Card layout with border and shadow
- Category-based badge colors
- Hover state with scale/shadow
- Dark background with border

---

### 5. **ButtonDetail Component** (`ButtonDetail.tsx`)
**Purpose**: Detailed view of single button with code

**Sections**:
- **Preview Section**: Live button display
- **Info Panel**: 
  - Button name and category
  - Description
  - Tags/Features
- **Code Tabs**:
  - React (TSX)
  - HTML
  - CSS
  - Tailwind
  - JavaScript
- **Copy Button**: Copy specific code
- **Related Buttons**: Show similar buttons
- **Navigation**: Previous/Next buttons

**Features**:
- Code syntax highlighting
- Copy-to-clipboard with feedback
- Responsive code block scrolling
- Multiple code format options

---

### 6. **CommandPalette Component** (`CommandPalette.tsx`)
**Purpose**: Quick navigation with search

**Features**:
- Keyboard shortcut to open (Cmd/Ctrl + K)
- Search all buttons by name
- Filter by category
- Quick navigation to pages
- Recent searches
- Arrow key navigation
- Enter to select

**Styling**:
- Modal overlay
- Search input field
- Results list
- Keyboard hints

---

### 7. **Guide Component** (`Guide.tsx`)
**Purpose**: Complete usage documentation

**Sections**:
- **Installation**: npm/CDN setup instructions
- **Basic Usage**: Getting started code
- **Multiple Styles**: Mixing different button styles
- **Event Handling**: Click and interaction handling
- **Advanced Patterns**: Reusable button utilities
- **Tips & Best Practices**: Performance and accessibility
- **React Guide**: React-specific implementation
- **Vanilla JS Guide**: Pure JavaScript usage
- **Customization**: Theming and styling options

**Features**:
- Tab-based React/Vanilla JS sections
- Code blocks with copy buttons
- Live examples
- Terminal-style code formatting

---

### 8. **Showcase Component** (`Showcase.tsx`)
**Purpose**: Gallery view of all buttons

**Features**:
- Grid layout (responsive columns)
- All 45+ buttons in one view
- Search bar
- Category filters
- Sort options (A-Z, Newest, Popular)
- Quick preview on hover

---

### 9. **Packages Component** (`Packages.tsx`)
**Purpose**: Package information and download links

**Sections**:
- **@coolbuttons/react**: React components package
- **@coolbuttons/vanilla**: Vanilla JS package
- **NPM Installation**: Code block
- **CDN Links**: Direct link inclusion
- **Version Info**: Current versions
- **Features**: Package-specific features
- **Links**: GitHub, NPM registry

**Features**:
- Installation code with copy button
- Version badges
- Feature comparisons
- Size information
- Compatibility matrix

---

### 10. **Pricing Component** (`Pricing.tsx`)
**Purpose**: Pricing tiers (if applicable)

**Features**:
- 3 pricing tiers (or 2)
- Feature comparison table
- Price display
- CTA buttons
- Highlight popular tier
- FAQ section below

---

### 11. **About Component** (`About.tsx`)
**Purpose**: Project and team information

**Sections**:
- Mission statement
- Why Cool Buttons
- Features highlight
- Team members (if applicable)
- Call-to-action
- Contact info

---

### 12. **Contact Component** (`Contact.tsx`)
**Purpose**: Contact form and information

**Features**:
- Contact form (name, email, message)
- Form validation
- Social links
- Email address
- Response confirmation
- Spam protection

---

### 13. **Legal Pages**

#### 13.1 Privacy Component (`Privacy.tsx`)
- Privacy policy
- Data collection info
- GDPR compliance
- Cookie policy
- Last updated date

#### 13.2 Terms Component (`Terms.tsx`)
- Terms of service
- Usage rights
- Limitations
- Disclaimer
- Last updated date

#### 13.3 License Component (`License.tsx`)
- License type (MIT)
- Full license text
- Usage permissions
- Attribution requirements
- Link to GitHub

---

### 14. **Pro Kit Component** (`ProKit.tsx`)
**Purpose**: Premium features or advanced options (if applicable)

---

### 15. **Error Pages**

#### 15.1 NotFound Component (`NotFound.tsx`)
- 404 error message
- "Go back" button
- Suggestions for next steps
- Styled error graphic

#### 15.2 NoConnection Component (`NoConnection.tsx`)
- Offline indicator
- Connection lost message
- Retry button
- Local content fallback

---

## 📑 Page Structures

### Page Type Definition
```typescript
type ViewType = 
  | 'landing' 
  | 'buttons' 
  | 'button' 
  | 'showcase' 
  | 'pricing' 
  | 'about' 
  | 'terms' 
  | 'privacy' 
  | 'contact' 
  | 'prokit' 
  | 'packages' 
  | 'guide' 
  | 'license' 
  | 'not-found' 
  | 'no-connection';
```

### Page Routing Structure

| Route | View Type | Component | Purpose |
|-------|-----------|-----------|---------|
| `/` | landing | LandingPage | Homepage with hero |
| `/buttons` | buttons | ButtonCard Grid | Browse all buttons |
| `/buttons/:slug` | button | ButtonDetail | View single button |
| `/buttons/:category` | buttons | ButtonCard Grid | View category |
| `/showcase` | showcase | Showcase | Gallery view |
| `/pricing` | pricing | Pricing | Pricing info |
| `/about` | about | About | About us |
| `/guide` | guide | Guide | Documentation |
| `/packages` | packages | Packages | NPM packages |
| `/prokit` | prokit | ProKit | Premium features |
| `/license` | license | License | License info |
| `/privacy` | privacy | Privacy | Privacy policy |
| `/terms` | terms | Terms | Terms of service |
| `/contact` | contact | Contact | Contact form |
| `*` | not-found | NotFound | 404 page |

---

## 🗺️ Navigation System

### URL-Based Navigation
- Uses browser History API (`window.history.pushState`)
- Dispatches `popstate` events for routing
- URL slug generation from button names
- Category URL routing

### Navigation Functions

```typescript
const toSlug = (name: string): string => {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
};

const findButtonBySlug = (slug: string): ButtonDesign | null => {
  return buttonLibrary.find(btn => toSlug(btn.name) === slug) || null;
};

const handleNavigate = (path: string) => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo(0, 0);
};
```

### Active View Management
- Central state in `App.tsx`
- Updates on URL change
- Scroll to top on navigation
- Loading state for transitions

---

## 🏗️ Component Architecture

### Component Hierarchy

```
App.tsx (Main container)
├── Header
├── [Page Components]
│   ├── LandingPage
│   │   └── Footer
│   ├── ButtonCard[] (Grid)
│   ├── ButtonDetail
│   │   ├── CodeBlock[]
│   │   └── Related Buttons
│   ├── Showcase
│   ├── Guide
│   │   ├── React Guide
│   │   └── Vanilla Guide
│   ├── Packages
│   ├── Pricing
│   ├── About
│   ├── Contact
│   ├── Privacy
│   ├── Terms
│   ├── License
│   ├── NotFound
│   └── NoConnection
├── CommandPalette (Modal overlay)
└── Footer (On all pages)
```

### Component Props Pattern

**Callback Props**:
```typescript
interface ComponentProps {
  onNavigate?: (view: string) => void;
  onSelect?: (item: T) => void;
  onClose?: () => void;
}
```

**State Lifting**:
- View state in App.tsx
- Selected button in App.tsx
- Search/filter in component state
- UI state (modals, menus) in component state

---

## 📊 Data Structure

### ButtonDesign Interface

```typescript
export interface ButtonDesign {
  id: string;                  // Unique identifier
  name: string;                // Button name (e.g., "Claymorphic")
  category: ButtonCategory;    // Enum category
  component: React.FC;         // React component
  description: string;         // Brief description
  code: string;               // Default code format
  tailwind?: string;          // Tailwind-only version
  typescript?: string;        // Full TSX code
  react?: string;             // React JSX code
  html?: string;              // Plain HTML version
  css?: string;               // CSS version
  javascript?: string;        // Vanilla JS version
}
```

### ButtonCategory Enum

```typescript
export enum ButtonCategory {
  ESSENTIAL = 'Essential',
  NEUMORPHIC = 'Neumorphic',
  GLASSMORPHIC = 'Glassmorphic',
  SKEUOMORPHIC = 'Skeuomorphic',
  RETRO = 'Retro',
  GRADIENT = 'Gradient',
  ANIMATED = 'Animated',
  MINIMAL = 'Minimal',
  EXPERIMENTAL = 'Experimental'
}
```

### Button Library
**File**: `data/buttonLib.tsx`

- Array of 45+ ButtonDesign objects
- Organized by category
- Includes all code variations
- Accessible globally via `import { buttonLibrary }`

---

## 🛠️ Utility Functions

### Location: `utils/offlineUtils.ts`

#### Service Worker Functions
```typescript
registerServiceWorker()              // Register SW for caching
monitorConnectionStatus(callback)    // Monitor online/offline
syncOfflineData()                    // Sync when back online
```

#### Data Persistence
```typescript
storeOfflineData(data)              // Save to localStorage
getOfflineData()                    // Retrieve stored data
clearOfflineData()                  // Clear cache
```

#### Analytics
```typescript
recordPageVisit(pageName)           // Log page visits
recordUserAction(action, details)   // Log user interactions
recordApiCall(endpoint, data)       // Log API calls
getLastSyncTime()                   // Get last sync timestamp
```

### Navigation Helpers

```typescript
handleNavigate(path)                // Browser history routing
toSlug(name)                        // Convert to URL slug
findButtonBySlug(slug)              // Find button by URL slug
```

### Clipboard Functions

```typescript
copyToClipboard(text)               // Copy text to clipboard
showCopyNotification()              // User feedback on copy
```

---

## 🎨 Styling Architecture

### CSS Framework
- **Tailwind CSS**: Utility-first CSS
- **PostCSS**: Processing pipeline
- **Autoprefixer**: Browser compatibility

### Global Styles Location
**File**: `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-brand-light: #fdfaf5;
  --color-brand-dark: #0a0a0a;
  --color-brand-accent: #ff7a00;
  --transition-smooth: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-fast: 0.3s ease;
}
```

### Common Tailwind Classes Used

```
Backgrounds:
bg-brand-dark, bg-brand-light, bg-black/40, bg-zinc-800/50, bg-orange-500

Text:
text-white, text-zinc-300, text-orange-500, text-xl, font-black

Spacing:
px-6, py-4, gap-4, mb-6, mt-8

Effects:
backdrop-blur-sm, shadow-xl, rounded-lg, border border-white/5

Responsive:
hidden md:block, grid-cols-1 md:grid-cols-4, text-sm md:text-lg
```

### Component Styling Patterns

**Card Pattern**:
```tsx
<div className="bg-zinc-900/50 border border-white/10 rounded-lg p-4 hover:border-white/20 transition-colors">
  {content}
</div>
```

**Button Pattern**:
```tsx
<button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors">
  {label}
</button>
```

**Grid Pattern**:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => <Item key={item.id} {...item} />)}
</div>
```

---

## 📦 Build & Deployment

### Build Configuration

**File**: `vite.config.ts`

```typescript
export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.')
    }
  }
});
```

### Build Scripts

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

### Deployment Platforms

#### Vercel
- **File**: `vercel.json`
- Zero-config deployment
- Automatic git deployment
- Environment variables supported

#### Alternative: GitHub Pages
- Build and push dist folder
- Configure GitHub Actions

#### Alternative: Netlify
- Connect GitHub repo
- Auto-deploy on push
- Configure build command

---

## 🔧 Development Workflow

### Local Development
```bash
npm install
npm run dev
# Server runs on http://localhost:3000
```

### Production Build
```bash
npm run build
# Output: dist/ folder
npm run preview  # Test production build
```

### Code Organization
```
/components     - React components
/data          - Data and library
/utils         - Utility functions
/public        - Static assets
/dist          - Built output
```

---

## 📋 Checklist for New Website Creation

### Setup
- [ ] Initialize React + TypeScript project with Vite
- [ ] Install dependencies (React, Tailwind, lucide-react)
- [ ] Configure TypeScript (tsconfig.json)
- [ ] Setup Tailwind CSS configuration
- [ ] Create color variables in index.css

### Components
- [ ] Create Header component with navigation
- [ ] Create Footer component
- [ ] Create LandingPage with hero section
- [ ] Create ButtonCard for grid display
- [ ] Create ButtonDetail for single view
- [ ] Create CommandPalette for search
- [ ] Create Guide documentation
- [ ] Create all page components (Pricing, About, etc.)
- [ ] Create error pages (404, No Connection)

### Data
- [ ] Create ButtonDesign interface (types.ts)
- [ ] Create ButtonCategory enum
- [ ] Populate buttonLibrary with items
- [ ] Add code snippets for each button

### Features
- [ ] Implement URL-based routing
- [ ] Add search functionality
- [ ] Add copy-to-clipboard
- [ ] Setup Service Worker
- [ ] Implement offline support
- [ ] Add analytics

### Deployment
- [ ] Setup Vercel project
- [ ] Configure environment variables
- [ ] Test production build locally
- [ ] Deploy to Vercel
- [ ] Configure domain
- [ ] Setup SSL certificate

### Polish
- [ ] Mobile responsiveness testing
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Accessibility audit
- [ ] Browser compatibility check

---

## 🎯 Quick Reference

### Key Files to Create
1. `App.tsx` - Main application container
2. `types.ts` - TypeScript interfaces
3. `index.html` - HTML entry point
4. `index.css` - Global styles
5. `vite.config.ts` - Build configuration
6. `tsconfig.json` - TypeScript config
7. `components/*.tsx` - React components
8. `data/buttonLib.tsx` - Button library
9. `utils/offlineUtils.ts` - Utilities

### Key Dependencies
```json
{
  "react": "^19.2.3",
  "react-dom": "^19.2.3",
  "lucide-react": "^0.475.0"
}
```

### Dev Dependencies
```json
{
  "typescript": "~5.8.2",
  "vite": "^6.2.0",
  "@vitejs/plugin-react": "^5.0.0"
}
```

---

## 📞 Support & Resources

- **Documentation**: `/guide` page
- **Examples**: View component code in Detail page
- **Packages**: NPM registry for @coolbuttons/react
- **GitHub**: Source code repository
- **Contact**: Contact form on website

---

**Last Updated**: February 1, 2026
**Version**: 1.0.0
**Template Created From**: Cool Buttons Project v1.0.4

