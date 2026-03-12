/**
 * Client logos configuration.
 *
 * To add a real logo:
 * 1. Place the image file inside /public/logos/ (PNG or SVG recommended, white/light version for dark background)
 * 2. Set `imagePath` to the filename, e.g. '/logos/acme.png'
 * 3. Set `alt` to the company name for accessibility
 * 4. Optionally remove `font` and `style` — they are only used for text fallback
 *
 * Image dimensions: aim for ~140px wide × 40px tall max (they will be rendered at h-8 / h-10)
 */

export interface LogoEntry {
  /** Unique key and display name (used as text fallback) */
  name: string;
  /** Path to image inside /public, e.g. '/logos/acme.svg'. Leave undefined to show text. */
  imagePath?: string;
  /** Accessible alt text when imagePath is set */
  alt?: string;
  /** Tailwind font classes used only when imagePath is not set */
  font?: string;
  /** Inline style applied only when imagePath is not set */
  style?: React.CSSProperties;
}

const logos: LogoEntry[] = [
  {
    name: 'Nexo Digital',
    font: 'font-space font-black',
    style: { letterSpacing: '-0.04em' },
  },
  {
    name: 'Vettor Studio',
    font: 'font-inter font-light',
    style: { letterSpacing: '0.12em', textTransform: 'uppercase' },
  },
  {
    name: 'DataBridge',
    font: 'font-space font-bold',
    style: { letterSpacing: '0.01em' },
  },
  {
    name: 'Compasso',
    font: 'font-inter font-black italic',
    style: {},
  },
  {
    name: 'Forma Agency',
    font: 'font-space font-semibold',
    style: { letterSpacing: '0.06em' },
  },
  {
    name: 'Pixels & Co',
    font: 'font-inter font-bold',
    style: { letterSpacing: '-0.02em' },
  },
];

export default logos;
