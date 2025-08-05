# Hexagonal Background Concept

A collection of interactive hexagonal background animations and patterns built with HTML, CSS, and JavaScript. This project demonstrates various approaches to creating dynamic hexagonal grid layouts for web backgrounds.

## Overview

This project explores different hexagonal background concepts through multiple implementations:

- **`index.html`** - CSS-based hexagonal grid with masking effects and transformations
- **`index-2.html`** - Alternative hexagonal layout with rounded corners and different styling
- **`index-3.html`** - JavaScript-generated dynamic hexagonal grid with pulse animations

## Features

- 🎨 **Multiple Hexagonal Patterns** - Three different approaches to hexagonal backgrounds
- 📱 **Responsive Design** - Grid adapts to different viewport sizes
- ✨ **CSS Animations** - Smooth transitions and visual effects
- 🎯 **Dynamic Generation** - JavaScript-powered hexagon creation and positioning
- 🌈 **Customizable Variables** - Easy theming through CSS custom properties

## Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Advanced grid layouts, custom properties, and animations
- **JavaScript** - Dynamic element generation and interactive effects
- **Vite** - Fast development server and build tool
- **TypeScript** - Type-safe development environment

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- pnpm (preferred) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hexagonal-background-concept
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

### Development

Start the development server:
```bash
pnpm dev
# or
npm run dev
```

The application will be available at `http://localhost:3000`

### Build

Create a production build:
```bash
pnpm build
# or
npm run build
```

### Preview

Preview the production build:
```bash
pnpm preview
# or
npm run preview
```

## Project Structure

```
hexagonal-background-concept/
├── index.html          # Main hexagonal grid with CSS masking
├── index-2.html        # Alternative hexagonal layout
├── index-3.html        # Dynamic JavaScript-generated hexagons
├── package.json        # Project dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## CSS Custom Properties

The hexagonal grids use CSS custom properties for easy customization:

```css
:root {
  --hex-width: 10rem;                    /* Hexagon width */
  --hex-height: calc(var(--hex-width) * 1.8);  /* Hexagon height */
  --hex-border-radius: 0;                /* Border radius for rounded corners */
  --hex-color: #333;                     /* Hexagon color */
  --hex-scale: 0.96;                     /* Scale factor for sizing */
}
```

## Implementation Details

### CSS Grid Approach (`index.html`)
- Uses CSS Grid for layout positioning
- Implements masking for gradient fade effects
- Absolute positioning for precise hexagon placement

### Rounded Hexagons (`index-2.html`)
- Similar to the main implementation but with rounded corners
- Dark theme with different color scheme
- Modified border-radius calculations

### Dynamic JavaScript (`index-3.html`)
- Calculates viewport dimensions for responsive hexagon generation
- Creates hexagons programmatically based on screen size
- Implements pulse animations and interactive effects

## Browser Support

- Modern browsers with CSS Grid support
- ES6+ JavaScript features
- CSS Custom Properties support

## Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by hexagonal design patterns in modern web design
- Built with Vite for optimal development experience
- Utilizes modern CSS features for efficient rendering
