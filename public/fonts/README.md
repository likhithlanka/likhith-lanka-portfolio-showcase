# Fonts Directory

## Eagle Horizon Font Setup

To use the Eagle Horizon-Personal use font for "Likhith" in the hero section:

1. **Download the Eagle Horizon font** from the official source or font provider
2. **Convert the font** to web-friendly formats (WOFF2 and WOFF are recommended)
3. **Place the font files** in this directory with the following names:
   - `EagleHorizon-PersonalUse.woff2`
   - `EagleHorizon-PersonalUse.woff`

## Font Configuration

The font is already configured in `src/App.css` with:
```css
@font-face {
  font-family: 'Eagle Horizon';
  src: url('/fonts/EagleHorizon-PersonalUse.woff2') format('woff2'),
       url('/fonts/EagleHorizon-PersonalUse.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

## Fallback Fonts

If the Eagle Horizon font is not available, the system will fall back to:
1. Dancing Script (Google Font - already imported)
2. Brush Script MT
3. System cursive font

## Usage

The font is applied to the `.handwritten` class, which is used for "Likhith" in the hero section.
