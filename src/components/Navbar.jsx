import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled ? 'bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-800' : 'bg-transparent'
        }`}>
            <div className="w-full mx-auto py-6 sm:py-7 lg:py-8 flex items-center justify-between px-6">
                <a href="#home" className="text-lg lg:text-xl tracking-[0.15em] text-white uppercase font-light">
                    Kush K.
                </a>

                {/* Desktop navigation */}
                <div className="hidden md:flex items-center gap-8 lg:gap-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm lg:text-base tracking-[0.15em] text-neutral-400 uppercase hover:text-white transition-colors duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-5 h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`}></span>
                    <span className={`block w-5 h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`}></span>
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden transition-all duration-300 overflow-hidden ${
                isMobileMenuOpen ? 'max-h-96 border-b border-neutral-800' : 'max-h-0'
            }`}>
                <div className="bg-neutral-950/95 backdrop-blur-sm px-6 py-8 flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="text-sm tracking-[0.15em] text-neutral-400 uppercase hover:text-white transition-colors duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
