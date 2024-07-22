'use client'; 

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "~/hooks/use-isomorphic-layout-effect";
import { gsap } from "~/lib/gsap";

interface Props {
    img?: StaticImport
    video?: string
    url: string
    title: string
    dir?: 'left' | 'right'
}
export default function WorkItem({img, video, title, dir = 'left'}: Props) {
    const imgElm = useRef(null)
    const contentElm = useRef(null)
    const dirVal = dir === 'right' ? -1 : 1
    useIsomorphicLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        if(!imgElm.current || !contentElm.current) return

        gsap.from(imgElm.current, {
            rotate: -3 * dirVal,
        })
        gsap.to(imgElm.current, {
            scrollTrigger: {
                trigger: imgElm.current,
                start: "top 90%",
                end: "bottom top", // Add an end point
                scrub: true, // Tie animation progress to scroll
                // markers: true, // For debugging, remove in production
            },
            // duration: 10,
            // rotate: 3 * dirVal,
            rotate: 0,
            y: -150,
        })
    })
    return <div className={`flex items-start ${dir === 'right' && 'flex-row-reverse'} relative px-4 mb-48`}>
        {img && <Image ref={imgElm} className="w-[60%] shadow-md " src={img} alt="work" /> }
        {video && <video ref={imgElm} className="w-[60%] shadow-md h-auto" src={video} autoPlay loop muted/> }
        <div ref={contentElm} className="pb-64 pl-20 pr-12 text-black">
            <h4 className="text-6xl">{title}</h4>
            <ul className="list-disc p-8">
                <li className="text-2xl">AWS w/ SST</li>
                <li className="text-2xl">Next.js</li>
            </ul>

        </div>
    </div>
}