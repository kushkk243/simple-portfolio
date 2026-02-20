import { useEffect, useRef } from 'react';
import { animate, createScope } from 'animejs';

export default function Projects() {
    const sectionRef = useRef(null);

    const projects = [
        {
            number: '01',
            title: 'Shadow Controlled Robotic Humanoid Arm',
            description: 'Built and assembled a 3D printed robotic arm for motion replication. Implemented computer vision based hand tracking to enable shadow control using ML and deep learning models in real time.',
            tags: ['Python', 'Embedded C', 'Computer Vision', 'Deep Learning'],
            link: '#',
        },
        {
            number: '02',
            title: 'Robotic Humanoid Hand Payload for UAV',
            description: 'Developed a robotic humanoid hand with an embedded camera for visual object detection. Implemented real-time tracking and autonomous grasping, integrated as a payload on a UAV platform.',
            tags: ['Python', 'ROS2', 'MicroPython', 'Computer Vision'],
            link: '#',
        },
        {
            number: '03',
            title: 'Head Tracking Bot',
            description: 'Built a head-shaped robotic prototype with a mounted camera capable of tracking and following head or hand movements. Used for outreach sessions with elementary school students.',
            tags: ['Python', 'Embedded C', 'Computer Vision', 'Robotics'],
            link: '#',
        },
        {
            number: '04',
            title: 'Audio-Video Emotion Recognition',
            description: 'Developed emotion recognition models using both audio and visual inputs for HRI systems. Worked with RAVDESS and FER datasets to train multimodal approaches.',
            tags: ['Python', 'TensorFlow', 'Deep Learning', 'HRI'],
            link: '#',
        },
        {
            number: '05',
            title: 'COTS Detection and Elimination AUV',
            description: 'Crown-of-Thorns Starfish Detection and Elimination Glider. Autonomous underwater vehicle system. Patent Published.',
            tags: ['ROS1', 'Python', 'Embedded C', 'Patent'],
            link: '#',
        },
        {
            number: '06',
            title: 'Armament Neutralization System',
            description: 'An autonomous and remotely operated IED diffuser system with long range remote connectivity capabilities. Patent Published.',
            tags: ['Python', 'Embedded C', 'Autonomous Systems', 'Patent'],
            link: '#',
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('.project-card');
                        const scope = createScope({ root: entry.target });
                        scope.add(() => {
                            animate(cards, {
                                opacity: [0, 1],
                                translateY: [40, 0],
                                delay: (_, i) => i * 100,
                                duration: 900,
                                ease: 'easeOutExpo',
                            });
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" className="py-32 sm:py-40" ref={sectionRef}>
            <div className="w-full mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
                <div className="mb-20">
                    <p className="text-xs tracking-[0.3em] text-neutral-500 uppercase mb-4">Portfolio</p>
                    <h2 className="text-3xl sm:text-4xl font-extralight text-white tracking-tight">
                        Selected Projects
                    </h2>
                    <div className="w-16 h-px bg-neutral-700 mt-8"></div>
                </div>

                <div className="space-y-0">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="project-card opacity-0 group border-t border-neutral-800 py-10 hover:bg-neutral-900/50 transition-colors duration-300"
                        >
                            <div className="grid lg:grid-cols-12 gap-6 items-start">
                                <div className="lg:col-span-1">
                                    <span className="text-xs text-neutral-600 font-light">{project.number}</span>
                                </div>
                                <div className="lg:col-span-4">
                                    <h3 className="text-lg text-white font-light group-hover:text-neutral-300 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="lg:col-span-5">
                                    <p className="text-sm text-neutral-500 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span 
                                                key={tagIndex}
                                                className="text-xs text-neutral-500 tracking-wider"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="lg:col-span-2 lg:text-right">
                                    <a 
                                        href={project.link}
                                        className="inline-flex items-center text-xs text-neutral-500 tracking-wider uppercase hover:text-white transition-colors group/link"
                                    >
                                        View
                                        <svg className="w-3 h-3 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
