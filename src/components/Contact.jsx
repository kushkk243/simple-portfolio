import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message. I will respond shortly.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="py-32 sm:py-40">
            <div className="w-full mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    <div>
                        <p className="text-xs tracking-[0.3em] text-neutral-500 uppercase mb-4">Contact</p>
                        <h2 className="text-3xl sm:text-4xl font-extralight text-white tracking-tight mb-8">
                            Get in Touch
                        </h2>
                        <div className="w-16 h-px bg-neutral-700 mb-12"></div>
                        
                        <p className="text-neutral-500 leading-relaxed mb-12 max-w-md">
                            Interested in collaboration or have a project in mind? 
                            I am available for consulting, full-time opportunities, 
                            and select freelance projects.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <p className="text-xs tracking-[0.2em] text-neutral-600 uppercase mb-2">Email</p>
                                <a href="mailto:kushkushwaha52@gmail.com" className="text-neutral-300 hover:text-white transition-colors">
                                    kushkushwaha52@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="text-xs tracking-[0.2em] text-neutral-600 uppercase mb-2">Location</p>
                                <p className="text-neutral-300">Baltimore, USA</p>
                            </div>
                            <div>
                                <p className="text-xs tracking-[0.2em] text-neutral-600 uppercase mb-4">Connect</p>
                                <div className="flex gap-6">
                                    <a
                                        href="https://github.com/kushkk243"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neutral-500 hover:text-white transition-colors text-sm tracking-wider"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/kush-kumar-kushwaha"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neutral-500 hover:text-white transition-colors text-sm tracking-wider"
                                    >
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <label htmlFor="name" className="block text-xs tracking-[0.2em] text-neutral-600 uppercase mb-3">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-800 focus:border-neutral-500 focus:outline-none text-white placeholder-neutral-700 transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs tracking-[0.2em] text-neutral-600 uppercase mb-3">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-800 focus:border-neutral-500 focus:outline-none text-white placeholder-neutral-700 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs tracking-[0.2em] text-neutral-600 uppercase mb-3">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-800 focus:border-neutral-500 focus:outline-none text-white placeholder-neutral-700 transition-colors resize-none"
                                    placeholder="Your message"
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-10 py-4 bg-white text-neutral-900 text-sm tracking-wider uppercase hover:bg-neutral-200 transition-colors duration-300 mt-4"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
