'use client'; // hate
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { gsap } from "~/lib/gsap";
import { NavItem } from "./_components/NavItem";


export default function Home() {
  useIsomorphicLayoutEffect(() => {
    const tween1 = gsap.to('h1', { duration: 3, text: 'Jacob Sides' })
    const tween2 = gsap.to('.subheading', { delay: 2, duration: 3, text: 'Creator first, Full-stack Dev second' })
    return () => {
        tween1.revert();
        tween2.revert();
    };
  }, [])
  return (
    <main className="flex flex-col p-4 pb-0 h-screen bg-zinc-900">
      <div className="flex-shrink-0">
        <div className="flex w-full border-b border-white">
          <div className="flex-1 w-1/2 h-full border-r border-white relative">
            <h2 className="text-3xl">Work</h2>
            <div className="flex overflow-x-auto p-2 pb-8 pr-24">
              <NavItem title="MergerAI" description="Lorem ispum su epium de criatus lorem ispum su epium de criatus lorem ispum su epium de criatus" />
              <NavItem title="ReserveNow" description="Lorem ispum su epium de criatus lorem ispum su epium de criatus lorem ispum su epium de criatus" />
              <NavItem title="DRC" description="Lorem ispum su epium de criatus lorem ispum su epium de criatus lorem ispum su epium de criatus" />
              <NavItem title="Pyxl" description="Lorem ispum su epium de criatus lorem ispum su epium de criatus lorem ispum su epium de criatus" />
              <NavItem title="MakeMeModern" description="Lorem ispum su epium de criatus lorem ispum su epium de criatus lorem ispum su epium de criatus" />
            </div>
            <div className="fade pointer-events-none bg-gradient-to-l from-zinc-900 to-transparent absolute h-full w-[200px] right-0 inset-y-0 ml-auto"></div>
          </div>
          <div className="flex-1 w-1/2 h-full px-8">
            <h2 className="text-3xl">Personal</h2>
            <div className="flex overflow-x-auto p-2 pb-8 pr-24">
              <NavItem title="Portfolio" description="Lorem ispum su epium de criatus lorem ispum su epium de criatus lorem ispum su epium de criatus" />
              <NavItem title="Newies" description="Lorem ispum su epium de criatus lorem ispum su epium de criatus lorem ispum su epium de criatus" />
              <NavItem title="Snowdoku" description="Lorem ispum su epium de criatus lorem ispum su epium de criatus lorem ispum su epium de criatus" />
              <NavItem title="OurJams" description="Lorem ispum su epium de criatus lorem ispum su epium de criatus lorem ispum su epium de criatus" />
              <NavItem title="Advent of Code" description="Lorem ispum su epium de criatus lorem ispum su epium de criatus lorem ispum su epium de criatus" />
            </div>
            <div className="pointer-events-none bg-gradient-to-l from-zinc-900 to-transparent absolute h-full w-[200px] right-0 inset-y-0 ml-auto"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 z-10 relative -translate-y-5 overflow-hidden">
        <div className="flex-1 h-full pt-12">
          <h1 className="text-6xl" aria-label="Jacob Sides"></h1>
          <h2 className="subheading mt-3 text-3xl" aria-label="Creator first, Full-stack Dev second"></h2>
        </div>
        <div className="side-bar flex flex-col pt-12 w-[200px] border-l border-white pl-4 relative">
          <h2 className="flex-shrink-0 text-3xl top-0 sticky dbg-zinc-900 py-2">Tech / Skills</h2>
          <div className="overflow-y-auto flex-1">
            <ul className="space-y-2 text-sm font-['Helvetica','Arial','sans-serif']">
              <li>Typescript</li>
              <li>React/Next.js</li>
              <li>HTML/CSS</li>
              <li>AWS</li>
              <li>Git</li>
              <li>Netlify</li>
              <li>Vercel</li>
              <li>Headless and SSG sites</li>
            </ul>
          </div>
          <div className="pointer-events-none bg-gradient-to-t from-zinc-900 to-transparent absolute bottom-0 h-[200px] w-[calc(100%+1.25rem)] -translate-x-5"></div>
        </div>
      </div>
    </main>
  );
}