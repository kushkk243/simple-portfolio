import { useEffect, useRef } from 'react';
import { animate, createScope } from 'animejs';

export default function Skills() {
    const sectionRef = useRef(null);

    const skillCategories = [
        {
            title: 'Programming',
            skills: ['Python', 'C', 'C++', 'Java', 'Dart', 'Embedded C', 'JavaScript'],
        },
        {
            title: 'Robotics',
            skills: ['ROS1', 'ROS2', 'MicroPython', 'MQTT'],
        },
        {
            title: 'Machine Learning',
            skills: ['Scikit-learn', 'Pandas', 'NumPy'],
        },
        {
            title: 'Deep Learning',
            skills: ['TensorFlow', 'PyTorch'],
        },
        {
            title: 'Computer Vision',
            skills: ['OpenCV'],
        },
        {
            title: 'Tools',
            skills: ['Git', 'Linux', 'Docker'],
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('.skill-card');
                        const scope = createScope({ root: entry.target });
                        scope.add(() => {
                            animate(cards, {
                                opacity: [0, 1],
                                translateY: [30, 0],
                                delay: (_, i) => i * 80,
                                duration: 800,
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
        <section id="skills" className="py-32 sm:py-40 bg-neutral-950" ref={sectionRef}>
            <div className="w-full mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
                <div className="mb-20">
                    <p className="text-xs tracking-[0.3em] text-neutral-500 uppercase mb-4">Expertise</p>
                    <h2 className="text-3xl sm:text-4xl font-extralight text-white tracking-tight">
                        Technical Skills
                    </h2>
                    <div className="w-16 h-px bg-neutral-700 mt-8"></div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-card opacity-0">
                            <h3 className="text-sm tracking-[0.15em] text-neutral-300 uppercase mb-6">
                                {category.title}
                            </h3>
                            <ul className="space-y-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <li 
                                        key={skillIndex}
                                        className="text-neutral-500 text-sm flex items-center gap-3"
                                    >
                                        <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
