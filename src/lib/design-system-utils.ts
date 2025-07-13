import designSystem from './design-system';

// Helper function to apply design system typography
export const applyTypography = (
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'bodyLarge' | 'caption' | 'small'
) => {
  const headingStyles = designSystem.components.heading;
  const textStyles = designSystem.components.text;
  
  switch (element) {
    case 'h1':
      return headingStyles.h1;
    case 'h2':
      return headingStyles.h2;
    case 'h3':
      return headingStyles.h3;
    case 'h4':
      return headingStyles.h4;
    case 'h5':
      return headingStyles.h5;
    case 'h6':
      return headingStyles.h6;
    case 'body':
      return textStyles.body;
    case 'bodyLarge':
      return textStyles.bodyLarge;
    case 'caption':
      return textStyles.caption;
    case 'small':
      return textStyles.small;
    default:
      return textStyles.body;
  }
};

// Helper function to apply design system colors
export const applyColor = (color: string) => {
  // Handle design system color references
  if (color.includes('.')) {
    const [category, shade] = color.split('.');
    return designSystem.colors[category as keyof typeof designSystem.colors]?.[shade as any];
  }
  return color;
};

// Helper function to apply design system spacing
export const applySpacing = (spacing: keyof typeof designSystem.spacing) => {
  return designSystem.spacing[spacing];
};

// Helper function to apply design system shadows
export const applyShadow = (shadow: keyof typeof designSystem.shadows) => {
  return designSystem.shadows[shadow];
};

// Helper function to apply design system border radius
export const applyBorderRadius = (radius: keyof typeof designSystem.borderRadius) => {
  return designSystem.borderRadius[radius];
};

// Helper function to create consistent button styles
export const createButtonStyle = (
  variant: 'primary' | 'secondary' = 'primary',
  size: 'sm' | 'md' | 'lg' = 'md'
) => {
  const baseStyle = designSystem.components.button[variant];
  
  const sizeStyles = {
    sm: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
    md: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
    lg: { padding: '1rem 2rem', fontSize: '1.125rem' }
  };
  
  return {
    ...baseStyle,
    ...sizeStyles[size],
    transition: `all ${designSystem.animations.duration.normal} ${designSystem.animations.easing.easeInOut}`,
  };
};

// Helper function to create consistent card styles
export const createCardStyle = (
  variant: 'base' | 'elevated' = 'base',
  interactive: boolean = false
) => {
  const baseStyle = designSystem.components.card[variant];
  
  return {
    ...baseStyle,
    transition: `all ${designSystem.animations.duration.normal} ${designSystem.animations.easing.easeInOut}`,
    ...(interactive && {
      cursor: 'pointer',
      ':hover': {
        transform: 'translateY(-2px)',
        boxShadow: variant === 'base' ? designSystem.shadows.lg : designSystem.shadows['2xl'],
      }
    })
  };
};

// Helper function to create consistent gradients
export const createGradient = (gradientKey: keyof typeof designSystem.gradients) => {
  return designSystem.gradients[gradientKey];
};

// Helper function to create responsive text sizes
export const createResponsiveText = (
  mobileSize: string,
  desktopSize: string,
  weight?: keyof typeof designSystem.typography.weights
) => {
  return {
    fontSize: `clamp(${mobileSize}, 4vw, ${desktopSize})`,
    fontWeight: weight ? designSystem.typography.weights[weight] : designSystem.typography.weights.normal,
    fontFamily: designSystem.typography.fonts.primary,
    lineHeight: designSystem.typography.lineHeights.normal,
  };
};

// Helper function to create animation styles
export const createAnimation = (
  duration: keyof typeof designSystem.animations.duration = 'normal',
  easing: keyof typeof designSystem.animations.easing = 'easeInOut'
) => {
  return `all ${designSystem.animations.duration[duration]} ${designSystem.animations.easing[easing]}`;
};

// Helper function to get skill size styles
export const getSkillSizeStyle = (size: 'large' | 'medium' | 'small' | 'tiny') => {
  return designSystem.components.skill[size];
};

// Helper function to apply consistent focus styles
export const applyFocusStyles = () => {
  return {
    outline: `2px solid ${designSystem.colors.primary[500]}`,
    outlineOffset: '2px',
  };
};

// Helper function to apply consistent hover styles
export const applyHoverStyles = (intensity: 'subtle' | 'medium' | 'strong' = 'medium') => {
  const styles = {
    subtle: {
      transform: 'translateY(-1px)',
      boxShadow: designSystem.shadows.md,
    },
    medium: {
      transform: 'translateY(-2px)',
      boxShadow: designSystem.shadows.lg,
    },
    strong: {
      transform: 'translateY(-4px)',
      boxShadow: designSystem.shadows.xl,
    },
  };
  
  return {
    ...styles[intensity],
    transition: createAnimation('fast', 'easeOut'),
  };
};

export default {
  applyTypography,
  applyColor,
  applySpacing,
  applyShadow,
  applyBorderRadius,
  createButtonStyle,
  createCardStyle,
  createGradient,
  createResponsiveText,
  createAnimation,
  getSkillSizeStyle,
  applyFocusStyles,
  applyHoverStyles,
};
