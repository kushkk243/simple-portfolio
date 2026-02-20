export default function Experience() {
    const experiences = [
        {
            title: 'Graduate Research Assistant',
            company: 'Intuitive Computing Laboratory, Johns Hopkins University',
            period: 'Oct 2025 -- Present',
            description: 'Developing motion and control workflows for coffee preparation tasks in a Coffee Robot System. Implementing task sequencing logic for autonomous multi-step manipulation with ROS. Assisting with setup and configuration of a Fourier GR3 Humanoid for HRI research.',
        },
        {
            title: 'AI and ML Engineering Intern',
            company: 'Reliance Industries Limited',
            period: 'Aug 2023 -- Nov 2023',
            description: 'Developed and fine-tuned large language models using Python. Applied quantization techniques to improve LLM inference speed by 50% on CPU. Deployed LLaMA and Falcon 40B models on Azure cloud infrastructure.',
        },
    ];

    const education = [
        {
            degree: 'MSE in Robotics',
            school: 'Johns Hopkins University, Baltimore',
            period: '2025 -- 2027',
            description: 'GPA: 3.67. Focus on human-robot interaction, autonomous systems, and intelligent robotics.',
        },
        {
            degree: 'B.Tech in CSE (AI and Robotics)',
            school: 'Vellore Institute of Technology, Chennai',
            period: '2021 -- 2025',
            description: 'GPA: 9.56/10. Specialization in Artificial Intelligence and Robotics.',
        },
    ];

    return (
        <section id="experience" className="py-32 sm:py-40 bg-neutral-950">
            <div className="w-full mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    <div>
                        <p className="text-xs tracking-[0.3em] text-neutral-500 uppercase mb-4">Background</p>
                        <h2 className="text-3xl sm:text-4xl font-extralight text-white tracking-tight mb-8">
                            Experience
                        </h2>
                        <div className="w-16 h-px bg-neutral-700 mb-16"></div>

                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <div key={index} className="group">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-white font-light">{exp.title}</h3>
                                        <span className="text-xs text-neutral-600 tracking-wider whitespace-nowrap ml-4">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-sm text-neutral-500 mb-3">{exp.company}</p>
                                    <p className="text-sm text-neutral-500 leading-relaxed">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-xs tracking-[0.3em] text-neutral-500 uppercase mb-4">Academic</p>
                        <h2 className="text-3xl sm:text-4xl font-extralight text-white tracking-tight mb-8">
                            Education
                        </h2>
                        <div className="w-16 h-px bg-neutral-700 mb-16"></div>

                        <div className="space-y-12">
                            {education.map((edu, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-white font-light">{edu.degree}</h3>
                                        <span className="text-xs text-neutral-600 tracking-wider whitespace-nowrap ml-4">
                                            {edu.period}
                                        </span>
                                    </div>
                                    <p className="text-sm text-neutral-500 mb-3">{edu.school}</p>
                                    <p className="text-sm text-neutral-500 leading-relaxed">{edu.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20">
                            <p className="text-xs tracking-[0.3em] text-neutral-500 uppercase mb-8">Certifications</p>
                            <div className="space-y-4">
                                {['Meta React Native Specialization', 'Deep Learning Specialization', 'Enterprise Automation Certification', 'Computer Vision', 'Data Visualization', 'Advanced SQL'].map((cert, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-center gap-3 text-sm text-neutral-500"
                                    >
                                        <span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
                                        {cert}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
