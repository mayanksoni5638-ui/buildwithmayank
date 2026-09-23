import React from 'react'

function Footer() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <footer className="bg-gray-50 border-t border-gray-200 text-gray-600 py-12 px-6 mt-20">
            <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8">

                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-8 font-medium text-sm md:text-base">
                    {["services", "projects", "process", "about", "faq"].map((id) => (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className="hover:text-indigo-600 transition-colors capitalize cursor-pointer"
                        >
                            {id === "faq" ? "FAQs" : id === "about" ? "About Me" : id}
                        </button>
                    ))}
                </nav>

                {/* Contact Info (Mobile No.) & Socials */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                    {/* Mobile Number */}
                    <a
                        href="tel:+919116389911"
                        className="flex items-center gap-2 hover:text-indigo-600 transition-colors font-medium"
                    >
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +91 91163 89911
                    </a>

                    <span className="hidden sm:inline text-gray-300">|</span>

                    {/* Instagram Link */}
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://www.instagram.com/build.with.mayank/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                        >
                            <img
                                src="https://img.icons8.com/fluent/24/000000/instagram-new.png"
                                alt="Instagram icon"
                            />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <p className="text-xs text-gray-500 text-center font-medium">
                    &copy; 2026 build with mayank. All rights reserved.
                </p>

            </div>
        </footer>
    )
}

export default Footer