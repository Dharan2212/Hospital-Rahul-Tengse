/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: '#078C8C',
        green: '#22A06B',
        navy: '#063B5C',
        blue: '#0B5CAD',
        sky: '#EAFBFF',
        white: '#FFFFFF',
        red: '#DC2626',
        gold: '#D97706',
        purple: '#7C3AED',
        text: '#374151',
        muted: '#64748B',
        border: '#CBD5E1',
        bgAlt: '#F8FAFC',
      },
      fontFamily: {
        heading: ['Poppins', 'Manrope', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        marathi: ['Noto Sans Devanagari', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        btn: '10px',
        card: '20px',
        lgx: '28px',
      },
      boxShadow: {
        card: '0 2px 16px rgba(7, 140, 140, 0.09)',
        hover: '0 8px 32px rgba(7, 140, 140, 0.18)',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
