import { useEffect, useRef } from 'react';
import { animate, createScope } from 'animejs';
import selfimg from '../assets/self.webp';

export default function Hero() {
    const subtitleRef = useRef(null);
    const imageRef = useRef(null);
    const lineRef = useRef(null);
    const headingRef = useRef(null);
    const descRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const scope = createScope({ root: document.body });

        scope.add(() => {
            animate(lineRef.current, {
                scaleX: [0, 1],
                duration: 1200,
                ease: 'easeOutExpo',
            });

            animate(headingRef.current, {
                opacity: [0, 1],
                translateY: [40, 0],
                duration: 1000,
                delay: 200,
                ease: 'easeOutExpo',
            });

            animate(subtitleRef.current, {
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 1000,
                delay: 400,
                ease: 'easeOutExpo',
            });

            animate(descRef.current, {
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 1000,
                delay: 600,
                ease: 'easeOutExpo',
            });

            animate(ctaRef.current, {
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 1000,
                delay: 800,
                ease: 'easeOutExpo',
            });

            animate(imageRef.current, {
                opacity: [0, 1],
                duration: 1200,
                delay: 600,
                ease: 'easeOutExpo',
            });
        });

        return () => scope.revert();
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-36 lg:pt-40 pb-24">
            <div className="w-full mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <div ref={lineRef} className="w-full max-w-xl h-px bg-white mb-10 origin-left"></div>
                        <h1
                            ref={headingRef}
                            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-tight text-white mb-6 opacity-0"
                        >
                            Kush Kumar Kushwaha
                        </h1>
                        <h2
                            ref={subtitleRef}
                            className="text-lg sm:text-xl text-neutral-400 font-light tracking-wide mb-8 opacity-0"
                        >
                            Robotics Engineer | MSE Robotics, Johns Hopkins University
                        </h2>
                        <p ref={descRef} className="text-neutral-500 text-base leading-relaxed max-w-md mb-12 opacity-0">
                            Specializing in human-robot interaction, autonomous systems,
                            and computer vision. Building intelligent robots that work
                            alongside people.
                        </p>
                        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 opacity-0">
                            <a
                                href="#projects"
                                className="px-8 py-4 hover:text-slate-950 text-sm tracking-wider uppercase border-neutral-700 hover:border-2 hover:border-white border transition-colors duration-300 text-center"
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 border border-neutral-700 text-neutral-300 text-sm tracking-wider uppercase hover:border-white hover:text-white transition-all duration-300 text-center"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                    <div
                        ref={imageRef}
                        className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0"
                    >
                        <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
                            <img
                                src={selfimg}
                                alt="Kush Kumar Kushwaha"
                                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 border border-neutral-700 -translate-x-4 -translate-y-4 -z-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
