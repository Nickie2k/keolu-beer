# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

Navigate to the project directory first: `cd my-react-app`

- **Development server**: `npm run dev` - Starts Vite development server
- **Build**: `npm run build` - Creates production build in `dist/` directory
- **Lint**: `npm run lint` - Runs ESLint with custom config from `./config/.eslintrc.cjs`
- **Preview**: `npm run preview` - Preview production build locally
- **Deploy**: `npm run deploy` - Builds and deploys to GitHub Pages using gh-pages (manual)
- **Auto Deploy**: GitHub Actions workflow deploys automatically on push to main branch

## Project Architecture

This is a React application built with Vite, focused on displaying information about Keolu Beer.

### Directory Structure

```
src/
├── App.jsx              # Main app component
├── main.jsx             # React entry point
├── index.css            # Global styles
├── config/
│   ├── eslint.config.js # ESLint configuration
│   └── Notes.md         # Development notes
└── main/
    ├── Header/          # Header component with address link
    │   ├── Header.jsx
    │   └── Header.css
    └── Beach/           # Beach image component
        ├── bCocktail.jsx
        ├── beachCocktail.css
        └── beach-cocktail.jpg
```

### Component Structure

- **App.jsx**: Root component that renders Header and BeachPic components
- **Header**: Simple header with Google Maps link to Keolu Beers location
- **BeachPic**: Displays beach cocktail image with "Keolu Beer" text overlay

### Build Configuration

- Uses Vite with React plugin
- Base path configured for GitHub Pages deployment: `/keolu-beer`
- CSS minification disabled in build config
- ESLint configured with React hooks and refresh plugins

### Styling Approach

- Component-specific CSS files alongside JSX components
- Global styles in `index.css`
- Uses className-based styling

### Development Notes

The project uses ESLint and Prettier for code quality. Custom ESLint rules include ignoring unused variables that follow uppercase naming pattern.

### Warning Alert

Alert me when I am low on tokens and give me an estimate of how many prompts I have left until next cycle
