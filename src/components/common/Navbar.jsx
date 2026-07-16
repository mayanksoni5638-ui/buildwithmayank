import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LuMenu } from "react-icons/lu";
import { VscChromeClose } from "react-icons/vsc";
import logo from "/logo.png"
function Navbar() {
    const [open, setopen] = useState(false)

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    const toggleNavbar = (id) => {
        scrollToSection(id)
        setopen(false)
    }

    return (
        <header className="pt-2" id='top'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-surface border border-border shadow-sm rounded-2xl">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="text-heading text-xl leading-5 font-bold flex gap-2 items-center">
                        <img src={logo} alt="logo" className='w-8 h-8' />
                        <span className='hidden md:block'><span className="text-primary block">Build</span> With Mayank</span>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-6 text-text font-medium">

                        <Link
                            onClick={() => scrollToSection("services")}
                            to="/"
                            className="transition hover:text-primary"
                        >
                            Services
                        </Link>

                        <Link
                            onClick={() => scrollToSection("projects")}
                            to="/"
                            className="transition hover:text-primary"
                        >
                            Projects
                        </Link>

                        <Link
                            onClick={() => scrollToSection("process")}
                            to="/"
                            className="transition hover:text-primary"
                        >
                            Process
                        </Link>

                        <Link
                            onClick={() => scrollToSection("about")}
                            to="/"
                            className="transition hover:text-primary"
                        >
                            About Me
                        </Link>

                        <Link
                            onClick={() => scrollToSection("faq")}
                            to="/"
                            className="transition hover:text-primary"
                        >
                            FAQs
                        </Link>

                    </nav>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <a
                            href="https://wa.me/919116389911"
                            target='_blank'
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-primary-hover text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setopen(prev => !prev)}
                        className="md:hidden text-heading text-3xl">
                        {open ? <VscChromeClose /> : <LuMenu />}
                    </button>

                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <nav className="absolute top-20 left-4 right-4 md:hidden bg-surface border border-border rounded-2xl shadow-lg p-6 space-y-5 z-50 text-center">

                    <Link
                        onClick={() => toggleNavbar("services")}
                        className="block hover:text-primary" >
                        Services
                    </Link>

                    <Link
                        onClick={() => toggleNavbar("projects")}
                        className="block hover:text-primary">
                        Projects
                    </Link>

                    <Link
                        onClick={() => toggleNavbar("process")}
                        className="block hover:text-primary" >
                        Process
                    </Link>

                    <Link
                        onClick={() => toggleNavbar("about")}
                        className="block hover:text-primary" >
                        About Me
                    </Link>
                    <Link
                        onClick={() => toggleNavbar("faq")}
                        className="block hover:text-primary" >
                        FAQs
                    </Link>

                    <a
                        href="https://wa.me/919116389911"
                        target='_blank'
                        rel="noopener noreferrer"
                        onClick={() => setopen(false)}
                        className="block text-center bg-primary hover:bg-primary-hover text-white font-semibold py-3 rounded-xl"
                    >
                        Get Started
                    </a>

                </nav>
            )}
        </header>
    )
}

export default Navbar