
import { animate, createScope, svg, cubicBezier } from "animejs"
import { useEffect, useRef } from "react"
export default function PageCard({content, sizeclass = "w-full h-full ",paddingclass = "p-2", borderclr = "#efefef", ease = cubicBezier(0.7, 0.1,0.5,0.9)}) {
    const root = useRef(null);
    const scope = useRef(null);
    useEffect(()=>{
        scope.current = createScope({root}).add(_ => {
            animate(svg.createDrawable('rect'), {
                draw: '0 1',
                ease: ease,
                duration: 5000,
                loop: false,
                
            });
            return() => scope.current.revert();
        });
    }, [ease]);
    return(
        <div className={`${sizeclass} ${paddingclass} rounded-xl relative`}>
            <svg className="h-full w-full brdr -z-10 absolute top-0 right-0 bottom-0 left-0" ref={root} overflow="visible">
                <rect x={0} y={0} width="100%" height="100%" fill="none" stroke={borderclr} strokeWidth={3} rx={25} ry={30}/>
            </svg>
            {content}
        </div>
    )
}