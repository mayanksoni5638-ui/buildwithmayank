import React from 'react'
import { VscChevronUpCompact } from "react-icons/vsc";
function ToTop() {

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div className='fixed bottom-5 right-3 z-50 cursor-pointer flex flex-col items-center bg-secondary text-heading px-3 py-3 md:px-2 md:py-2  rounded-full hover:text-white transition duration-200'
            onClick={() => scrollToSection("top")}>
            <VscChevronUpCompact className='w-5 h-5' />
            <span className='hidden md:block'>ToTop</span>
        </div>
    )
}

export default ToTop