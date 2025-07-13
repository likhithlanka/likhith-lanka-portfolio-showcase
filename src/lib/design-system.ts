/**
 * Design System for Likhith Lanka Portfolio
 * Unified typography, colors, spacing, and component styles
 */

export const designSystem = {
  // Typography Scale
  typography: {
    // Font Families
    fonts: {
      primary: '"Inter", system-ui, -apple-system, sans-serif',
      secondary: '"Playfair Display", serif',
      mono: '"JetBrains Mono", "Fira Code", monospace',
    },

    // Font Sizes (rem-based for consistency)
    sizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
    },

    // Font Weights
    weights: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },

    // Line Heights
    lineHeights: {
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },

    // Letter Spacing
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },

  // Color Palette
  colors: {
    // Primary Brand Colors
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },

    // Secondary Brand Colors
    secondary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7c3aed',
      800: '#6b21a8',
      900: '#581c87',
    },

    // Accent Colors
    accent: {
      emerald: {
        400: '#34d399',
        500: '#10b981',
        600: '#059669',
      },
      orange: {
        400: '#fb923c',
        500: '#f97316',
        600: '#ea580c',
      },
      red: {
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
      },
    },

    // Neutral Grays
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },

    // Semantic Colors
    semantic: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
  },

  // Spacing Scale
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
    40: '10rem',    // 160px
    48: '12rem',    // 192px
    56: '14rem',    // 224px
    64: '16rem',    // 256px
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  },

  // Component Specific Styles
  components: {
    // Typography Components
    heading: {
      h1: {
        fontSize: '3rem',
        fontWeight: '800',
        lineHeight: '1.25',
        letterSpacing: '-0.025em',
      },
      h2: {
        fontSize: '2.25rem',
        fontWeight: '700',
        lineHeight: '1.25',
        letterSpacing: '-0.025em',
      },
      h3: {
        fontSize: '1.875rem',
        fontWeight: '600',
        lineHeight: '1.375',
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: '600',
        lineHeight: '1.375',
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: '600',
        lineHeight: '1.375',
      },
      h6: {
        fontSize: '1.125rem',
        fontWeight: '600',
        lineHeight: '1.375',
      },
    },

    // Text Components
    text: {
      body: {
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '1.5',
      },
      bodyLarge: {
        fontSize: '1.125rem',
        fontWeight: '400',
        lineHeight: '1.625',
      },
      caption: {
        fontSize: '0.875rem',
        fontWeight: '400',
        lineHeight: '1.375',
      },
      small: {
        fontSize: '0.75rem',
        fontWeight: '400',
        lineHeight: '1.25',
      },
    },

    // Button Components
    button: {
      primary: {
        backgroundColor: '#0ea5e9',
        color: '#ffffff',
        fontWeight: '600',
        borderRadius: '0.5rem',
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        lineHeight: '1.5',
      },
      secondary: {
        backgroundColor: 'transparent',
        color: '#0ea5e9',
        fontWeight: '600',
        borderRadius: '0.5rem',
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        lineHeight: '1.5',
        border: '1px solid #0ea5e9',
      },
    },

    // Card Components
    card: {
      base: {
        backgroundColor: '#ffffff',
        borderRadius: '1rem',
        padding: '1.5rem',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
      elevated: {
        backgroundColor: '#ffffff',
        borderRadius: '1.5rem',
        padding: '2rem',
        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
    },

    // Skills Section Specific
    skill: {
      large: {
        fontSize: '1rem',
        fontWeight: '700',
        padding: '0.75rem',
      },
      medium: {
        fontSize: '0.875rem',
        fontWeight: '600',
        padding: '0.5rem',
      },
      small: {
        fontSize: '0.75rem',
        fontWeight: '500',
        padding: '0.5rem',
      },
      tiny: {
        fontSize: '0.6875rem',
        fontWeight: '500',
        padding: '0.375rem',
      },
    },
  },

  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    leadership: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
    product: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
    analytics: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    tools: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
    sunset: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
    ocean: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },

  // Animations
  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '800ms',
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

// Helper functions for using the design system
export const ds = {
  // Typography helpers
  text: (size: keyof typeof designSystem.typography.sizes, weight?: keyof typeof designSystem.typography.weights) => ({
    fontSize: designSystem.typography.sizes[size],
    fontWeight: weight ? designSystem.typography.weights[weight] : designSystem.typography.weights.normal,
    fontFamily: designSystem.typography.fonts.primary,
  }),

  // Color helpers
  color: (color: string) => color,

  // Spacing helpers
  space: (size: keyof typeof designSystem.spacing) => designSystem.spacing[size],

  // Shadow helpers
  shadow: (size: keyof typeof designSystem.shadows) => designSystem.shadows[size],

  // Border radius helpers
  radius: (size: keyof typeof designSystem.borderRadius) => designSystem.borderRadius[size],
};

export default designSystem;
