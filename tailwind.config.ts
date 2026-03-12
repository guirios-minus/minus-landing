import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#667eea',
          violet: '#764ba2',
          black: '#0a0a0a',
          white: '#fafafa',
        },
      },
      fontFamily: {
        space: ['var(--font-space-grotesk)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        brutal: '4px 4px 0 0 #0a0a0a',
        'brutal-sm': '2px 2px 0 0 #0a0a0a',
        'brutal-lg': '6px 6px 0 0 #0a0a0a',
        'brutal-purple': '4px 4px 0 0 #667eea',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};

export default config;
