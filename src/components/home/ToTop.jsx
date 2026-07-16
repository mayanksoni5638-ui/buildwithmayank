import React from 'react'
import { VscChevronUpCompact } from "react-icons/vsc";
function ToTop() {

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div className='fixed bottom-5 right-3 z-50 cursor-pointer flex flex-col items-center bg-secondary text-heading px-2 py-2 rounded-full'
            onClick={() => scrollToSection("top")}>
            <VscChevronUpCompact />
            <span className='hidden md:block'>ToTop</span>
        </div>
    )
}

export default ToTop