# PRYSM

A modern, responsive landing page for a community platform built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, responsive design
- 🚀 Smooth animations with Framer Motion
- 🎯 Tailwind CSS for styling
- 📱 Mobile-first approach
- ⚡ Fast development with Vite

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open your browser:**
   The application will automatically open in your default browser at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── HeroSection.tsx # Hero section component
│   ├── CommunityOverview.tsx # Community overview
│   ├── UserLevels.tsx  # User ecosystem component
│   └── Footer.tsx      # Footer component
├── styles/             # CSS styles
│   └── globals.css     # Global styles and CSS variables
├── src/                # Source files
│   └── main.tsx        # Application entry point
├── App.tsx             # Main App component
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Radix UI** - Accessible UI primitives

## Customization

The project uses CSS custom properties (variables) for theming. You can customize colors, spacing, and other design tokens by modifying the variables in `styles/globals.css`.

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🤝 Contributing

We welcome contributions to Innoverse.you! This repository is protected with branch protection rules to ensure code quality and security.

### 📋 Contribution Guidelines

#### **🚫 Direct Commits to Main Branch are NOT Allowed**

- The `main` branch is protected and requires Pull Requests
- All changes must go through the PR review process
- Direct pushes to `main` will be rejected

#### **✅ How to Contribute**

1. **Fork the Repository**

   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/innoverse.you.git
   cd innoverse.you
   ```

2. **Set Up Your Development Environment**

   ```bash
   # Install dependencies
   npm install

   # Start development server
   npm run dev
   ```

3. **Create a Feature Branch**

   ```bash
   # Create and switch to a new branch
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Make Your Changes**

   - Follow the existing code style and conventions
   - Test your changes locally
   - Ensure the build passes: `npm run build`
   - Run linting: `npm run lint`

5. **Commit Your Changes**

   ```bash
   git add .
   git commit -m "feat: add your descriptive commit message"
   ```

6. **Push to Your Fork**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your branch and provide a detailed description
   - Wait for review and approval

#### **📝 PR Requirements**

Your Pull Request must:

- ✅ Have a clear, descriptive title
- ✅ Include a detailed description of changes
- ✅ Pass all status checks and builds
- ✅ Be reviewed and approved by a maintainer
- ✅ Have all conversations resolved
- ✅ Be up to date with the main branch

#### **🎯 Commit Message Convention**

Use conventional commits for clear history:

```
feat: add new component
fix: resolve navigation issue
docs: update README
style: improve responsive design
refactor: optimize component structure
```

#### **🛡️ Branch Protection Rules**

The `main` branch has the following protections:

- Requires pull request reviews (minimum 1 approval)
- Requires status checks to pass
- Requires branches to be up to date
- Restricts direct pushes
- Requires conversation resolution

#### **🐛 Reporting Issues**

Found a bug or have a feature request?

1. Check existing issues first
2. Create a new issue with detailed information
3. Use appropriate labels (bug, enhancement, etc.)

#### **💬 Questions?**

- Join our [WhatsApp Community](https://chat.whatsapp.com/DE0qy17AB6t1Qdalf1D2iL)
- Connect with us on [LinkedIn](https://www.linkedin.com/company/innoverse-you/)
- Email us at: info.innoversyou@gmail.com

## 📞 Contact

- **Email**: info.innoversyou@gmail.com
- **Phone**: +91 9227590139 / +91 9909405694
- **Location**: Ahmedabad, India
- **WhatsApp Community**: [Join Here](https://chat.whatsapp.com/DE0qy17AB6t1Qdalf1D2iL)
- **LinkedIn**: [Innoverse.you](https://www.linkedin.com/company/innoverse-you/)

## License

This project is open source and available under the [MIT License](LICENSE).
