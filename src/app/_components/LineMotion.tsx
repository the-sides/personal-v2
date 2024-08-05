'use client';

import * as PIXI from 'pixi.js';
import { useEffect, useRef, useState } from 'react';

const lineWidth = 16;
const lineRadius = lineWidth * 0.5;

export default function LineMotion() {
    const root = useRef<HTMLDivElement | null>(null);
    const appRef = useRef<PIXI.Application<PIXI.Renderer> | null>(null);
    const [oldMinCellsX, setOldMinCellsX] = useState(0);
    const [oldMinCellsY, setOldMinCellsY] = useState(0);
    
    function resizeCanvas(app:any) {
        appRef.current && console.log("Resize?", app)
        appRef.current && appRef.current.resize()
        updateLines();
    }

    function buildLines() {
        const lines: PIXI.Container[] = [];

        const minCellsX = Math.ceil(window.innerWidth / lineWidth);
        const minCellsY = Math.ceil(window.innerHeight / lineWidth);
        setOldMinCellsX(minCellsX);
        setOldMinCellsY(minCellsY);

        for (let i = 0; i < minCellsX; i++) {
            for (let j = 0; j < minCellsY + 1; j++) {
                const div = new PIXI.Container();
                const line = new PIXI.Graphics();
                const border = new PIXI.Graphics();
                
                border.rect(0, 0, lineWidth, lineWidth);
                border.fill({ color: 0xffffff, alpha: 0 });

                line.moveTo(-lineRadius, 0);
                line.lineTo(lineRadius, 0);
                line.stroke({ width: 2, color: 0xffffff, alpha: 0.2 });
                line.angle = ((i + j) / Math.PI) * 180;
                line.position.set(8, 8);
                
                div.position.set(i * lineWidth, j * lineWidth);

                div.eventMode = 'static';
                div.cursor = 'pointer';

                div.on('pointerdown', () => {
                    (div.getChildAt(1) as PIXI.Graphics).alpha = 0.5;
                });
                div.on('pointerenter', () => {
                    (div.getChildAt(0) as PIXI.Graphics).alpha = 0.5;
                });
                div.on('pointerleave', () => {
                    (div.getChildAt(0) as PIXI.Graphics).alpha = 0;
                });

                div.addChild(border, line);
                lines.push(div);
            }
        }
        return lines;
    }

    function updateLines() {
        // See if with the new screen size, if we need to update the lines
        const newMinCellsX = Math.ceil(window.innerWidth / lineWidth);
        const newMinCellsY = Math.ceil(window.innerHeight / lineWidth);

        console.log("Updating lines", newMinCellsX, newMinCellsY, oldMinCellsX, oldMinCellsY)
        if (newMinCellsX !== oldMinCellsX || newMinCellsY !== oldMinCellsY) {
            const lines = buildLines();
            
            if(appRef.current) {
                console.log("Removing and adding lines")
                appRef.current.stage.removeChildren();
                appRef.current.stage.addChild(...lines);

                const speed = 0.003;
                appRef.current.ticker.add(() => {
                    lines.forEach((div) => {
                        const line = div.getChildAt(1) as PIXI.Graphics;
                        line.alpha = Math.min((line.angle * 0.25 / 1000) % 1, 1 - ((line.angle * 0.25 / 1000) % 1));
                        line.angle += speed * 200 / Math.PI;
                    });
                });
            }  
        }


    }

    useEffect(() => {
        let isMounted = true;


        async function initializeApp() {
            if (!root.current || appRef.current) return;

            const app = new PIXI.Application();
            
            await app.init({ 
                resizeTo: window, 
                // background: '#141516',
                antialias: true,
            });

            if (!isMounted) {
                app.destroy(true, { children: true, texture: true });
                return;
            }

            appRef.current = app;
            root.current.appendChild(app.canvas);

            // const lines: PIXI.Container[] = [];

            const lines = buildLines();

            app.stage.addChild(...lines);
            const speed = 0.003;

            // Abstract this, or at least just the alpha calc
            app.ticker.add(() => {
                lines.forEach((div) => {
                    const line = div.getChildAt(1) as PIXI.Graphics;
                    line.alpha = Math.min((line.angle * 0.25 / 1000) % 1, 1 - ((line.angle * 0.25 / 1000) % 1));
                    line.angle += speed * 200 / Math.PI;
                });
            });

            window.addEventListener('resize', resizeCanvas)
           
        }

        initializeApp();

        return () => {
            isMounted = false;
            if (appRef.current) {
                window.removeEventListener('resize', resizeCanvas)
                appRef.current.destroy(true, { children: true, texture: true });
                if (root.current && root.current.contains(appRef.current.canvas)) {
                    root.current.removeChild(appRef.current.canvas);
                }
                appRef.current = null;
            }
        };
    }, []);

    return <div ref={root} className="editor-stage pointer-events-none fixed inset-0 h-screen w-screen flex-1 -z-10" />;
}




            // for (let i = 0; i < minCellsX; i++) {
            //     for (let j = 0; j < minCellsY + 1; j++) {
            //         const div = new PIXI.Container();
            //         const line = new PIXI.Graphics();
            //         const border = new PIXI.Graphics();
                    
            //         border.rect(0, 0, lineWidth, lineWidth);
            //         border.fill({ color: 0xffffff, alpha: 0 });

            //         line.moveTo(-lineRadius, 0);
            //         line.lineTo(lineRadius, 0);
            //         line.stroke({ width: 2, color: 0xffffff, alpha: 0.2 });
            //         line.angle = ((i + j) / Math.PI) * 180;
            //         line.position.set(8, 8);
                    
            //         div.position.set(i * lineWidth, j * lineWidth);

            //         div.eventMode = 'static';
            //         div.cursor = 'pointer';

            //         div.on('pointerdown', () => {
            //             (div.getChildAt(1) as PIXI.Graphics).alpha = 0.5;
            //         });
            //         div.on('pointerenter', () => {
            //             (div.getChildAt(0) as PIXI.Graphics).alpha = 0.5;
            //         });
            //         div.on('pointerleave', () => {
            //             (div.getChildAt(0) as PIXI.Graphics).alpha = 0;
            //         });

            //         div.addChild(border, line);
            //         lines.push(div);
            //     }
            // }
