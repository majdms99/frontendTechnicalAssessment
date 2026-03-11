# 🚀 Next.js Authentication Dashboard

A modern, fully-featured authentication system built with Next.js 16 App Router, TypeScript, and Tailwind CSS. This project demonstrates best practices for server-side rendering, protected routes, and responsive design with smooth animations.

## ✨ Features

### 🔐 Authentication System
- **Server-Side Authentication** with cookie-based sessions
- **Protected Dashboard** with middleware route protection
- **Form Validation** using Zod schemas
- **Error Handling** with toast notifications
- **Responsive Design** with mobile-first approach

### 🎨 User Interface
- **Modern Dashboard** with sidebar and navbar layout
- **Dark Mode Support** with theme persistence
- **Smooth Animations** using Framer Motion
- **Interactive Components** with hover effects and transitions
- **Professional Design** with Tailwind CSS

### 🛠️ Technical Stack
- **Next.js 16.1.6** with App Router
- **TypeScript** for type safety
- **TailwindCSS 4** for styling
- **Framer Motion** for animations
- **React Hook Form** with Zod validation
- **Shadcn UI** components
- **next-themes** for dark mode

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-auth-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔑 Login Credentials

Use the following credentials to access the dashboard:

**Email:** `admin@example.com`  
**Password:** `password123`

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/login/page.tsx     # Login page
│   ├── (dashboard)/dashboard/    # Protected dashboard
│   │   ├── page.tsx              # Dashboard main page
│   │   └── layout.tsx            # Dashboard layout
│   ├── middleware.ts             # Route protection middleware
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page (redirect)
├── components/
│   ├── layout/                   # Layout components
│   │   ├── Navbar.tsx            # Top navigation bar
│   │   └── Sidebar.tsx           # Sidebar navigation
│   ├── ui/                       # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── label.tsx
│   └── dashboard/                # Dashboard components
│       └── StatsCard.tsx         # Statistics card component
├── lib/
│   ├── actions/
│   │   └── auth.ts               # Server actions for auth
│   ├── validations/
│   │   └── auth.ts               # Form validation schemas
│   └── utils.ts                  # Utility functions
└── styles/
    └── globals.css               # Global styles
```

## 🎯 Key Features

### Authentication Flow
1. **Login Page** - Beautiful form with validation
2. **Server Action** - Secure authentication on server
3. **Cookie Storage** - Session persistence
4. **Middleware Protection** - Route-level security
5. **Dashboard Access** - Protected content area

### Dashboard Features
- **Responsive Sidebar** with collapse animation
- **Professional Navbar** with search and profile
- **Statistics Cards** with hover effects
- **Recent Activity** feed
- **Quick Actions** panel
- **Dark Mode Toggle** with theme persistence

### Animations & Interactions
- **Page Transitions** with Framer Motion
- **Sidebar Collapse** smooth animation
- **Card Hover Effects** with scale and shadow
- **Button Loading States** with spinner
- **Toast Notifications** for user feedback

## 🛠️ Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
```

### Tailwind CSS Configuration
The project uses Tailwind CSS 4 with custom configuration in `tailwind.config.js`.

### TypeScript Configuration
TypeScript is configured in `tsconfig.json` with strict mode enabled.

## 🎨 Customization

### Colors Theme
The project uses a professional color palette:
- **Primary**: Blue (slate-900/500/100)
- **Success**: Green (emerald-600/100)
- **Warning**: Orange (amber-600/100)
- **Error**: Red (rose-600/100)
- **Neutral**: Slate colors for text and backgrounds

### Dark Mode
Dark mode is implemented using `next-themes` with:
- **System Preference** detection
- **Local Storage** persistence
- **Smooth Transitions** between themes
- **Scope Limited** to dashboard only

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
# Build the project
npm run build

# Start the production server
npm run start
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Shadcn UI](https://ui.shadcn.com/) - Component library
- [Lucide React](https://lucide.dev/) - Icon library

---

**Built with ❤️ using modern web technologies**
