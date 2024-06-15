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
        fade: 'fadeIn 1s ease-in-out forwards',
        rollIn: 'rollIn 1s ease-in-out forwards',
      },
      animationDelay: {
        '200': '2000ms'
      },

      // that is actual animation
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        rollIn: {
          '0%': { opacity: '0', transform: 'scale(0) rotate(90deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
