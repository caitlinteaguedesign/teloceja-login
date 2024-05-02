import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '32rem': '32rem',
        '48rem': '48rem',
      },
      fontFamily: {
        default: ['var(--font-barlow)', 'sans-serif'],
        heading: ['var(--font-gg)', 'serif'],
      },
      colors: {
        accent: '#4285F4',
        danger: {
          100: '#FEE8D8',
          400: '#EA4335',
        },
        parchment: {
          100: '#FFF5E7',
          500: '#D29D78',
          600: '#8F6D61',
          700: '#431512',
          800: '#270E05',
          900: '#120602',
        },
      },
    },
  },
  plugins: [],
};
export default config;
