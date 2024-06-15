export default function Bubbles() {
    return <div className="w-[52%] h-[475px] mt-[65px] dbg-amber-200 relative">
        <div className="image bg-neutral-700 shadow-xl rounded-full h-[30vw] w-[30vw] z-[50] relative opacity-0 animate-rollIn"
            style={{ animationDelay: '1.1s' }}>
            <img src="/bubble-image-1.jpg" className="w-full h-full object-cover origin-left rounded-full" />
        </div>
        <div className="image bg-neutral-700 shadow-xl rounded-full h-[20vw] w-[20vw] absolute left-[46%] -top-12 opacity-0 animate-rollIn"
            style={{ animationDelay: '1.0s' }}>
            <img src="/bubble-image-2.jpg" className="w-full h-full object-cover origin-left rounded-full" />
        </div>
        <div className="image bg-neutral-700 shadow-xl rounded-full h-[13vw] w-[13vw] absolute left-[75%] top-12 z-10 opacity-0 animate-rollIn"
            style={{ animationDelay: '0.9s' }}>
            <img src="/bubble-image-3.jpg" className="w-full h-full object-cover origin-left rounded-full" />
        </div>
        <div className="image bg-neutral-700 shadow-xl rounded-full h-[11vw] w-[11vw] absolute z-[9] opacity-0 animate-rollIn"
            style={{ left: '82%', top: '37%', animationDelay: '0.8s' }}>
            <img src="/bubble-image-4.jpg" className="w-full h-full object-cover origin-left rounded-full" />
        </div>
        <div className="image bg-neutral-700 shadow-xl rounded-full h-[10vw] w-[10vw] absolute opacity-0 animate-rollIn"
            style={{ left: '72%', top: '56%', animationDelay: '0.7s' }}>
            <img src="/bubble-image-5.jpg" className="w-full h-full object-cover origin-left rounded-full" />
        </div>
        <div className="image bg-neutral-700 shadow-xl rounded-full h-[9vw] w-[9vw] absolute opacity-0 animate-rollIn"
            style={{ left: '72%', top: '79%', animationDelay: '0.6s' }}>
            <img src="/bubble-image-6.jpg" className="w-full h-full object-cover origin-left rounded-full" />
        </div>
        <div className="image bg-neutral-700 shadow-xl rounded-full h-[8vw] w-[8vw] absolute opacity-0 animate-rollIn"
            style={{ left: '63%', top: '92%', animationDelay: '0.5s' }}>
            <img src="/bubble-image-7.jpg" className="w-full h-full object-cover origin-left rounded-full" />
        </div>
        <div className="image bg-neutral-700 shadow-xl rounded-full h-[7vw] w-[7vw] absolute opacity-0 animate-rollIn"
            style={{ left: '63%', top: '110%', animationDelay: '0.4s' }}>
            <img src="/bubble-image-2.jpg" className="w-full h-full object-cover origin-left rounded-full" />
        </div>
        <div className="image bg-neutral-700 shadow-xl rounded-full h-[6vw] w-[6vw] absolute opacity-0 animate-rollIn"
            style={{ left: '56%', top: '121%', animationDelay: '0.3s' }}>
            <img src="/bubble-image-3.jpg" className="w-full h-full object-cover origin-left rounded-full" />
        </div>
        <div className="image bg-neutral-700 shadow-xl rounded-full h-[5vw] w-[5vw] absolute opacity-0 animate-rollIn"
            style={{ left: '57%', top: '136%', animationDelay: '0.2s' }}>
            <img src="/bubble-image-4.jpg" className="w-full h-full object-cover origin-left rounded-full" />
        </div>
        <div className="image bg-neutral-700 shadow-xl rounded-full h-[4vw] w-[4vw] absolute opacity-0 animate-rollIn"
            style={{ left: '52%', top: '144%', animationDelay: '0.1s' }}>
            <img src="/bubble-image-5.jpg" className="w-full h-full object-cover origin-left rounded-full" />
        </div>
    </div>
}