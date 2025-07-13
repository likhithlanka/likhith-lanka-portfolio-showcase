
import type { Config } from "tailwindcss";
import designSystem from "./src/lib/design-system";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': [designSystem.typography.fonts.primary],
				'serif': [designSystem.typography.fonts.secondary],
				'mono': [designSystem.typography.fonts.mono],
			},
			colors: {
				// Design System Colors
				'ds-primary': designSystem.colors.primary,
				'ds-secondary': designSystem.colors.secondary,
				'ds-accent': designSystem.colors.accent,
				'ds-neutral': designSystem.colors.neutral,
				'ds-semantic': designSystem.colors.semantic,
				
				// Existing shadcn colors
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				// Design System Border Radius
				'ds-sm': designSystem.borderRadius.sm,
				'ds-base': designSystem.borderRadius.base,
				'ds-md': designSystem.borderRadius.md,
				'ds-lg': designSystem.borderRadius.lg,
				'ds-xl': designSystem.borderRadius.xl,
				'ds-2xl': designSystem.borderRadius['2xl'],
				'ds-3xl': designSystem.borderRadius['3xl'],
				'ds-full': designSystem.borderRadius.full,
				
				// Existing shadcn radius
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			spacing: {
				// Design System Spacing
				'ds-1': designSystem.spacing[1],
				'ds-2': designSystem.spacing[2],
				'ds-3': designSystem.spacing[3],
				'ds-4': designSystem.spacing[4],
				'ds-5': designSystem.spacing[5],
				'ds-6': designSystem.spacing[6],
				'ds-8': designSystem.spacing[8],
				'ds-10': designSystem.spacing[10],
				'ds-12': designSystem.spacing[12],
				'ds-16': designSystem.spacing[16],
				'ds-20': designSystem.spacing[20],
				'ds-24': designSystem.spacing[24],
				'ds-32': designSystem.spacing[32],
				'ds-40': designSystem.spacing[40],
				'ds-48': designSystem.spacing[48],
				'ds-56': designSystem.spacing[56],
				'ds-64': designSystem.spacing[64],
			},
			boxShadow: {
				// Design System Shadows
				'ds-sm': designSystem.shadows.sm,
				'ds-base': designSystem.shadows.base,
				'ds-md': designSystem.shadows.md,
				'ds-lg': designSystem.shadows.lg,
				'ds-xl': designSystem.shadows.xl,
				'ds-2xl': designSystem.shadows['2xl'],
				'ds-inner': designSystem.shadows.inner,
			},
			fontSize: {
				// Design System Typography
				'ds-xs': designSystem.typography.sizes.xs,
				'ds-sm': designSystem.typography.sizes.sm,
				'ds-base': designSystem.typography.sizes.base,
				'ds-lg': designSystem.typography.sizes.lg,
				'ds-xl': designSystem.typography.sizes.xl,
				'ds-2xl': designSystem.typography.sizes['2xl'],
				'ds-3xl': designSystem.typography.sizes['3xl'],
				'ds-4xl': designSystem.typography.sizes['4xl'],
				'ds-5xl': designSystem.typography.sizes['5xl'],
				'ds-6xl': designSystem.typography.sizes['6xl'],
			},
			fontWeight: {
				// Design System Font Weights
				'ds-light': designSystem.typography.weights.light,
				'ds-normal': designSystem.typography.weights.normal,
				'ds-medium': designSystem.typography.weights.medium,
				'ds-semibold': designSystem.typography.weights.semibold,
				'ds-bold': designSystem.typography.weights.bold,
				'ds-extrabold': designSystem.typography.weights.extrabold,
			},
			transitionDuration: {
				// Design System Animation Durations
				'ds-fast': designSystem.animations.duration.fast,
				'ds-normal': designSystem.animations.duration.normal,
				'ds-slow': designSystem.animations.duration.slow,
				'ds-slower': designSystem.animations.duration.slower,
			},
			keyframes: {
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				}
			},
			animation: {
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'slide-in-left': 'slide-in-left 0.7s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
