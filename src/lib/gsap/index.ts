import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2
const RECIPROCAL_GR = 1 / GOLDEN_RATIO
const DURATION = Number(RECIPROCAL_GR.toFixed(3))

// if (process.env.NODE_ENV === 'development') {
//   import('gsap/dist/GSDevTools').then((GSDevToolsLib) => {
//     GSDevTools = GSDevToolsLib.GSDevTools
//     gsap.registerPlugin(GSDevTools)
//   })
// }

if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin)
}

gsap.defaults({
  duration: DURATION,
  ease: 'expo.out',
})

gsap.config({
  nullTargetWarn: false,
  autoSleep: Infinity,
})

export { DURATION, gsap }
