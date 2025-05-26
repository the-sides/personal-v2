'use client';

import { JetBrains_Mono } from 'next/font/google';
import '~/css/animations.scss'
import { gsap } from '~/lib/gsap';
import { useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from '~/hooks/use-isomorphic-layout-effect';
import WorkItem from './_components/WorkItem';
import mergerAiImg from '~/public/mergerai-planner.png'
import empowerImg from '~/public/empower-home.png'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const mono = JetBrains_Mono({
  weight: ['400'],
  subsets: ['latin']
})


export default function Home() {

  const headerRoot = useRef<HTMLDivElement>(null)
  const [atTop, setAtTop] = useState(true)

  useIsomorphicLayoutEffect(() => {
    if (!headerRoot.current || headerRoot.current.children.length < 3) return;
    const lenis = new Lenis()

    const header = headerRoot.current.children[0] as HTMLElement;;
    const subheader = headerRoot.current.children[1] as HTMLElement;;
    const devheader = headerRoot.current.children[2] as HTMLElement;;

    lenis.on('scroll', ScrollTrigger.update)
    lenis.on('scroll', (e: any) => {
      if (e.targetScroll !== 0) {
        setAtTop(false)
      } else {
        setAtTop(true)
      }
    })

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.to(header, { duration: 2, text: 'Jacob Sides' })
      .to(subheader, { duration: 1, text: 'Creator by ambition & thought' })
      .to(devheader, { duration: 1, delay: 0.5, text: 'Full-stack Web Developer by experience & skill' });

    return () => { tl.revert(); };
  }, [])


  return (
    <main className="flex flex-col min-h-screen bg-[#F6F5E2] relative">
      {/* Grid lines */}
      <div className="grow-down absolute left-16 h-full bg-[#2C2C2C] w-px"></div>
      <div className="grow-down animation-delay-1 absolute right-16 h-full bg-[#2C2C2C] w-px"></div>
      <div className="grow-right absolute top-16 h-px w-full bg-[#2C2C2C]"></div>

      {/* Nav Social Icons*/}
      <svg className={`fixed left-[1.125rem] top-[5.25rem] transition-transform ${!atTop && '-translate-y-16'}`} width="30" height="150" viewBox="0 0 30 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className='opacity-0 animate-[fadeIn_1s_ease-in-out_200ms_forwards]' clipPath="url(#clip0_15_51)">
          <path d="M15.006 0.0823889C11.4634 0.0579103 8.02875 1.29068 5.32264 3.55798C2.61654 5.82528 0.817418 8.97757 0.250334 12.4453C-0.31675 15.9131 0.385598 19.4677 2.23049 22.4668C4.07537 25.4659 6.94113 27.7118 10.31 28.7987C11.0522 28.9192 11.2951 28.4241 11.2951 28.0628V25.6006C7.20634 26.457 6.34271 23.6469 6.34271 23.6469C5.60053 21.9207 4.61545 21.439 4.61545 21.439C3.37398 20.5692 4.75039 20.5692 4.75039 20.5692C6.23475 20.5692 7.08489 22.0412 7.08489 22.0412C8.32635 24.2491 10.5529 23.6469 11.4165 23.2722C11.4159 22.903 11.4922 22.5377 11.6409 22.1992C11.7895 21.8606 12.0072 21.5563 12.2802 21.3052C8.94709 20.9439 5.47908 19.7128 5.47908 13.9455C5.47908 12.4735 6.09981 11.1354 7.09838 10.1452C6.83376 9.5249 6.69741 8.85827 6.69741 8.18479C6.69741 7.51131 6.83376 6.84468 7.09838 6.22442C7.09838 6.22442 8.32635 5.84975 11.2951 7.69637C13.724 7.04069 16.2879 7.04069 18.7169 7.69637C21.5507 5.84975 22.7921 6.22442 22.7921 6.22442C23.0568 6.84468 23.1931 7.51131 23.1931 8.18479C23.1931 8.85827 23.0568 9.5249 22.7921 10.1452C23.9122 11.1354 24.4114 12.4735 24.4114 14.0793C24.4114 19.7128 20.9434 20.9439 17.6104 21.3052C18.2176 21.8003 18.7169 22.5363 18.7169 24.0082V28.0628C18.7169 28.4241 18.8518 28.9192 19.702 28.7987C23.0708 27.7118 25.9366 25.4659 27.7815 22.4668C29.6264 19.4677 30.3287 15.9131 29.7616 12.4453C29.1946 8.97757 27.3954 5.82528 24.6893 3.55798C21.9832 1.29068 18.5486 0.0579103 15.006 0.0823889Z" fill="#2C2C2C" />
        </g>
        <g className='opacity-0 animate-[fadeIn_1s_ease-in-out_400ms_forwards]' clipPath="url(#clip1_15_51)">
          <path d="M25.5 42C26.2956 42 27.0587 42.3161 27.6213 42.8787C28.1839 43.4413 28.5 44.2044 28.5 45V66C28.5 66.7956 28.1839 67.5587 27.6213 68.1213C27.0587 68.6839 26.2956 69 25.5 69H4.5C3.70435 69 2.94129 68.6839 2.37868 68.1213C1.81607 67.5587 1.5 66.7956 1.5 66V45C1.5 44.2044 1.81607 43.4413 2.37868 42.8787C2.94129 42.3161 3.70435 42 4.5 42H25.5ZM24.75 65.25V57.3C24.75 56.0031 24.2348 54.7593 23.3178 53.8422C22.4007 52.9252 21.1569 52.41 19.86 52.41C18.585 52.41 17.1 53.19 16.38 54.36V52.695H12.195V65.25H16.38V57.855C16.38 56.7 17.31 55.755 18.465 55.755C19.022 55.755 19.5561 55.9762 19.9499 56.3701C20.3438 56.7639 20.565 57.298 20.565 57.855V65.25H24.75ZM7.32 50.34C7.98835 50.34 8.62932 50.0745 9.10191 49.6019C9.5745 49.1293 9.84 48.4883 9.84 47.82C9.84 46.425 8.715 45.285 7.32 45.285C6.64768 45.285 6.00289 45.5521 5.52748 46.0275C5.05208 46.5029 4.785 47.1477 4.785 47.82C4.785 49.215 5.925 50.34 7.32 50.34ZM9.405 65.25V52.695H5.25V65.25H9.405Z" fill="#2C2C2C" />
        </g>
        <path className='opacity-0 animate-[fadeIn_1s_ease-in-out_600ms_forwards]' d="M29.2636 87.4002C28.2136 87.8727 27.0818 88.1832 25.9091 88.3317C27.1091 87.6162 28.0363 86.4822 28.4727 85.1187C27.3409 85.7937 26.0863 86.2662 24.7636 86.5362C23.6863 85.3752 22.1727 84.7002 20.4545 84.7002C17.25 84.7002 14.6318 87.2922 14.6318 90.4917C14.6318 90.9507 14.6863 91.3962 14.7818 91.8147C9.92724 91.5717 5.60451 89.2632 2.72724 85.7667C2.22269 86.6172 1.93633 87.6162 1.93633 88.6692C1.93633 90.6807 2.95906 92.4627 4.54087 93.4752C3.57269 93.4752 2.67269 93.2052 1.88178 92.8002V92.8407C1.88178 95.6487 3.89996 97.9977 6.57269 98.5242C5.71459 98.7567 4.81373 98.789 3.94087 98.6187C4.31125 99.7695 5.03661 100.777 6.01499 101.498C6.99337 102.22 8.17557 102.62 9.39542 102.642C7.32764 104.262 4.7645 105.138 2.12724 105.126C1.6636 105.126 1.19996 105.099 0.736328 105.045C3.32724 106.692 6.40906 107.65 9.70906 107.65C20.4545 107.65 26.3591 98.8212 26.3591 91.1667C26.3591 90.9102 26.3591 90.6672 26.3454 90.4107C27.4909 89.6007 28.4727 88.5747 29.2636 87.4002Z" fill="#2C2C2C" />
        <g className='opacity-0 animate-[fadeIn_1s_ease-in-out_800ms_forwards]' clipPath="url(#clip2_15_51)">
          <path d="M25.5919 125.765H4.48281C3.03156 125.765 1.85737 126.982 1.85737 128.471L1.84418 144.706C1.84418 146.194 3.03156 147.412 4.48281 147.412H25.5919C27.0432 147.412 28.2305 146.194 28.2305 144.706V128.471C28.2305 126.982 27.0432 125.765 25.5919 125.765ZM25.5919 131.176L15.0374 137.941L4.48281 131.176V128.471L15.0374 135.235L25.5919 128.471V131.176Z" fill="#2C2C2C" />
        </g>
        <defs>
          <clipPath id="clip0_15_51">
            <rect width="30" height="29" fill="white" />
          </clipPath>
          <clipPath id="clip1_15_51">
            <rect width="27" height="27" fill="white" transform="translate(1.5 42)" />
          </clipPath>
          <clipPath id="clip2_15_51">
            <rect width="27" height="28" fill="white" transform="translate(1.5 122)" />
          </clipPath>
        </defs>
      </svg>

      <section className="flex gap-x-4 text-[#2C2C2C] w-full justify-end">
        <header ref={headerRoot} className="w-[920px] py-[148px] px-[110px] ">
          <h1 className="block  text-8xl font-bold min-h-[96px]"> </h1>
          <h2 className='subheading text-3xl mt-8 min-h-9'> </h2>
          <h2 className={`devheading text-2xl mt-4 pl-0.5 min-h-8 ${mono.className} `}> </h2>
        </header>
      </section>
      <section className="w-full mt-12 ">
        <div className="h-[400px] relative overflow-hidden">
          <h3 className={`text-8xl text-black transition-transform absolute inset-y-0 my-auto whitespace-nowrap  marquee-left`}>&nbsp;- WORK - PORTFOLIO - EXPERIENCE - WORK - PORTFOLIO - EXPERIENCE - WORK - PORTFOLIO - EXPERIENCE - WORK - PORTFOLIO - EXPERIENCE</h3>
        </div>
        <WorkItem img={mergerAiImg} url='' title='MergerAI' />
        <WorkItem video={'/hagler-home.mp4'} url='' title='Hagler Process' dir='right' />
        <WorkItem img={empowerImg} url='' title='Empower-U-Consulting' />
      </section>
    </main>
  );
}