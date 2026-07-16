/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    // Container centre par defaut, gouttieres genereuses.
    container: {
      center: true,
      padding: 'clamp(1.25rem, 5vw, 4rem)',
      screens: {
        '2xl': '1240px',
      },
    },
    extend: {
      colors: {
        green: {
          900: 'var(--green-900)',
          800: 'var(--green-800)',
          700: 'var(--green-700)',
          brand: 'var(--green-brand)',
        },
        cream: {
          DEFAULT: 'var(--cream)',
          soft: 'var(--cream-soft)',
        },
        gold: {
          DEFAULT: 'var(--gold)',
          soft: 'var(--gold-soft)',
        },
        ink: {
          DEFAULT: 'var(--ink)',
          muted: 'var(--ink-muted)',
        },
        'on-dark': 'var(--on-dark)',
        line: 'var(--line)',
      },
      fontFamily: {
        display: ['"Clash Display"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1240px',
      },
      spacing: {
        section: 'clamp(5rem, 10vw, 9rem)',
        gutter: 'clamp(1.25rem, 5vw, 4rem)',
      },
      letterSpacing: {
        eyebrow: '0.22em',
        button: '0.1em',
        nav: '0.02em',
        display: '-0.02em',
        h2: '-0.01em',
      },
      transitionTimingFunction: {
        smooth: 'var(--ease)',
      },
      transitionDuration: {
        reveal: 'var(--dur-reveal)',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        kenburns: 'kenburns 14s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
