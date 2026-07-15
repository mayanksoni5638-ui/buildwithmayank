import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header className="pt-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-linear-to-r from-primary via-primary to-secondary shadow-lg rounded-2xl">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="text-white text-2xl font-bold">
                        Build With Mayank
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8 text-white font-medium">
                        <Link to="/" className="transition hover:text-accent">
                            Home
                        </Link>

                        <Link to="/" className="transition hover:text-accent">
                            About
                        </Link>

                        <Link to="/" className="transition hover:text-accent">
                            Services
                        </Link>

                        <Link to="/" className="transition hover:text-accent">
                            Contact
                        </Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            to="/"
                            className="bg-surface text-primary font-semibold px-5 py-2.5 rounded-xl hover:bg-accent hover:text-white transition-all duration-300"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white text-3xl">
                        ☰
                    </button>

                </div>
            </div>

            {/* Mobile Menu */}
            <nav className="hidden md:hidden max-w-7xl mx-auto mt-2 px-6 py-4 bg-primary rounded-2xl space-y-3">

                <Link className="block text-white hover:text-accent" to="/">
                    Home
                </Link>

                <Link className="block text-white hover:text-accent" to="/">
                    About
                </Link>

                <Link className="block text-white hover:text-accent" to="/">
                    Services
                </Link>

                <Link className="block text-white hover:text-accent" to="/">
                    Contact
                </Link>

                <Link
                    to="/"
                    className="block text-center bg-surface text-primary font-semibold py-2 rounded-xl hover:bg-accent hover:text-white transition"
                >
                    Get Started
                </Link>

            </nav>
        </header>
    )
}

export default Navbar