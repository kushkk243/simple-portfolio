export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-24 border-t border-neutral-900">
            <div className="w-full mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <p className="text-sm text-neutral-500">
                            {currentYear} Kush Kumar Kushwaha
                        </p>
                    </div>
                    
                    <div className="flex gap-8">
                        <a href="#home" className="text-xs tracking-wider text-neutral-600 hover:text-white transition-colors uppercase">
                            Home
                        </a>
                        <a href="#about" className="text-xs tracking-wider text-neutral-600 hover:text-white transition-colors uppercase">
                            About
                        </a>
                        <a href="#projects" className="text-xs tracking-wider text-neutral-600 hover:text-white transition-colors uppercase">
                            Projects
                        </a>
                        <a href="#contact" className="text-xs tracking-wider text-neutral-600 hover:text-white transition-colors uppercase">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
