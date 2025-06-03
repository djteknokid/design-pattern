// Joules Design System Tokens
// These values should match your Figma design kit

export const colors = {
  // Primary colors
  primary: {
    main: '#0070F2', // Replace with actual Joules primary color
    light: '#4D9FFF',
    dark: '#0057D2',
  },
  // Secondary colors
  secondary: {
    main: '#36A41D', // Replace with actual Joules secondary color
    light: '#6BCE6B',
    dark: '#2B7D2B',
  },
  // Neutral colors
  neutral: {
    white: '#FFFFFF',
    gray100: '#F5F6F7',
    gray200: '#E5E6E7',
    gray300: '#D5D6D7',
    gray400: '#C5C6C7',
    gray500: '#A5A6A7',
    gray600: '#858687',
    gray700: '#656667',
    gray800: '#454647',
    gray900: '#252627',
    black: '#000000',
  },
  // Semantic colors
  semantic: {
    success: '#36A41D',
    warning: '#FFB300',
    error: '#E9730C',
    info: '#0070F2',
  },
  // Chat specific colors
  chat: {
    userBubble: '#0070F2',
    userText: '#FFFFFF',
    botBubble: '#F5F6F7',
    botText: '#252627',
    timestamp: '#656667',
  }
};

export const typography = {
  fontFamily: {
    primary: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    '4xl': '2.25rem', // 36px
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};

export const spacing = {
  xs: '0.25rem',  // 4px
  sm: '0.5rem',   // 8px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  '2xl': '2.5rem',// 40px
  '3xl': '3rem',  // 48px
};

export const borderRadius = {
  none: '0',
  sm: '0.125rem',  // 2px
  md: '0.25rem',   // 4px
  lg: '0.5rem',    // 8px
  xl: '0.75rem',   // 12px
  full: '9999px',
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

export const transitions = {
  fast: '150ms',
  normal: '250ms',
  slow: '350ms',
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// Component-specific tokens
export const components = {
  chat: {
    bubble: {
      maxWidth: '70%',
      padding: spacing.md,
      borderRadius: borderRadius.lg,
    },
    input: {
      height: '48px',
      padding: `${spacing.sm} ${spacing.md}`,
      borderRadius: borderRadius.full,
    },
    avatar: {
      size: '32px',
      borderRadius: borderRadius.full,
    },
  },
  button: {
    height: {
      sm: '32px',
      md: '40px',
      lg: '48px',
    },
    padding: {
      sm: `${spacing.xs} ${spacing.md}`,
      md: `${spacing.sm} ${spacing.lg}`,
      lg: `${spacing.md} ${spacing.xl}`,
    },
    borderRadius: borderRadius.full,
  },
};

// Export all tokens as a single object
export const joulesDesignSystem = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  transitions,
  components,
}; 