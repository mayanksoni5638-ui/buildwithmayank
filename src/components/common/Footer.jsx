import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };
    return (
        <footer className="flex flex-col space-y-10 justify-center m-10">

            <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                <Link className="hover:text-gray-900" onClick={() => scrollToSection("services")}>Services</Link>
                <Link className="hover:text-gray-900" onClick={() => scrollToSection("projects")}>Projects</Link>
                <Link className="hover:text-gray-900" onClick={() => scrollToSection("process")}>Process</Link>
                <Link className="hover:text-gray-900" onClick={() => scrollToSection("about")}>About Me</Link>
                <Link className="hover:text-gray-900" onClick={() => scrollToSection("faq")}>FAQs</Link>
            </nav>

            <div className="flex justify-center space-x-5">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
                </Link>
                <Link href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
                </Link>
            </div>
            <p className="text-center text-gray-700 font-medium">&copy; 2026 build with mayank. All rights reservered.</p>
        </footer>
    )
}

export default Footer