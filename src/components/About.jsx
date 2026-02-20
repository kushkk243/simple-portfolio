export default function About() {
    const stats = [
        { label: 'Years Experience', value: '3+' },
        { label: 'Projects Completed', value: '10+' },
        { label: 'Patents Published', value: '2' },
    ];

    return (
        <section id="about" className="py-32 sm:py-40">
            <div className="w-full mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    <div>
                        <p className="text-xs tracking-[0.3em] text-neutral-500 uppercase mb-4">About</p>
                        <h2 className="text-3xl sm:text-4xl font-extralight text-white mb-8 tracking-tight">
                            Engineering the Future
                            <br />
                            <span className="font-normal">of Robotics</span>
                        </h2>
                        <div className="w-16 h-px bg-neutral-700 mb-8"></div>
                    </div>

                    <div className="space-y-6">
                        <p className="text-neutral-400 leading-relaxed">
                            I am a robotics engineer with a B.Tech in Computer Science Engineering 
                            specializing in AI and Robotics from VIT Chennai, currently pursuing 
                            an MSE in Robotics at Johns Hopkins University.
                        </p>
                        <p className="text-neutral-400 leading-relaxed">
                            My research at the Intuitive Computing Laboratory at JHU focuses on 
                            human-robot interaction, autonomous manipulation, and multimodal 
                            systems. I have hands-on experience with ROS, computer vision, 
                            deep learning, and embedded systems.
                        </p>
                        
                        <div className="pt-8">
                            <a 
                                href="/KUSH_KUMAR_KUSHWAHA_RESUME.pdf" 
                                download
                                className="inline-flex items-center gap-3 text-sm text-white tracking-wider uppercase border-b border-neutral-700 pb-2 hover:border-white transition-colors duration-300"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-8 sm:gap-12 mt-24 pt-16 border-t border-neutral-800">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <p className="text-3xl sm:text-4xl font-extralight text-white mb-2">{stat.value}</p>
                            <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
