import { type Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
       // that is animation class
       animation: {
        fade: 'fadeIn 1s ease-in-out',
      },
      animationDelay: {
        '200': '2000ms'
      },

      // that is actual animation
      keyframes:{
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
