export default {
  theme: {
    extend: {
      keyframes: {
        slideX: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slideX: 'slideX 8s linear infinite',
      },
    },
  },
};