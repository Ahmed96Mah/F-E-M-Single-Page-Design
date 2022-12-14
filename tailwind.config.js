/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-purple': '#755CDE',
        'soft-orange': '#F6A560',
        'soft-rose': '#F39E9E',
        'soft-red': '#EB7565',
        cyan: '#61C4B7',
        'dark-mauve': '#552049',
        black: '#030303',
        'grayish-orange': '#7A746E',
        'off-white': '#FFF7F0',
        white: '#FFFFFF',
      },
      fontFamily: {
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        'sm-mob': [
          '14px',
          {
            lineHeight: '28px',
            fontWeight: '700',
          },
        ],
        'sm-dsk': [
          '16px',
          {
            lineHeight: '28px',
            fontWeight: '700',
          },
        ],
        'base-mob': [
          '16px',
          {
            lineHeight: '26px',
            fontWeight: '500',
          },
        ],
        'base-dsk': [
          '18px',
          {
            lineHeight: '28px',
            fontWeight: '500',
          },
        ],
        '2xl-mob': [
          '24px',
          {
            lineHeight: '30px',
            fontWeight: '700',
          },
        ],
        '3xl-mob': [
          '26px',
          {
            lineHeight: '33px',
            fontWeight: '700',
          },
        ],
        '3xl-dsk': [
          '32px',
          {
            lineHeight: '40px',
            fontWeight: '700',
          },
        ],
        '4xl-mob': [
          '36px',
          {
            lineHeight: '45px',
            fontWeight: '700',
          },
        ],
        '4xl-dsk': [
          '40px',
          {
            lineHeight: '51px',
            fontWeight: '700',
          },
        ],
        '5xl-dsk': [
          '44px',
          {
            lineHeight: '56px',
            fontWeight: '700',
          },
        ],
        '6xl-dsk': [
          '56px',
          {
            lineHeight: '70px',
            fontWeight: '700',
          },
        ],
      },
      height: {
        90: '360px',
      },
      padding: {
        19: '76px',
      },
      margin: {
        34: '136px',
        89: '356px',
      },
    },
  },
  plugins: [],
};
