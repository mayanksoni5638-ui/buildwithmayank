import React from "react";
import khokha from '../../assets/khokha.png'
import ecom from '../../assets/ecom.png'
import vansor from '../../assets/vansor.png'

function FeaturedProject() {
    const details = [
        {
            tag: "Cafe",
            title: "3 Khakha",
            desc: "A modern café website designed to showcase the menu, highlight the brand, and encourage customer visits.",
            image: khokha,
            link: "https://3khokadummy.vercel.app/"
        },
        {
            tag: "E-commerce",
            title: "Forever",
            desc: "A clean and responsive online store with product listings, shopping cart, and a seamless shopping experience.",
            image: ecom,
            link: "https://e-commerse-frontend-one.vercel.app/"
        },
        {
            tag: "Export",
            title: "Vansor Impex",
            desc: "A professional export business website showcasing global trade products, company reliability, and client inquiry options.",
            image: vansor,
            link: "https://vansorimpex.com/"
        },
    ];

    return (
        <section id="projects" className="py-16">
            {/* Heading */}
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-3xl font-bold text-heading md:text-4xl">
                    Featured Projects
                </h2>

                <div className="h-1 w-16 rounded-full bg-primary" />
            </div>

            {/* Container */}
            <div className="container mx-auto mt-12 px-6">

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {details.map(({ tag, title, desc, image, link }, i) => (
                        <div
                            key={i}
                            className="group relative h-125 overflow-hidden rounded-3xl border border-border bg-surface shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* Image */}
                            <img src={image} alt="" className="h-full w-full object-cover bg-accent/30 transition duration-700 group-hover:scale-105" />

                            {/* Gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-heading/95 via-heading/45 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                                <span className="rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur">
                                    {tag}
                                </span>

                                <h3 className="mt-4 text-3xl font-bold">
                                    {title}
                                </h3>

                                <p className="mt-3 text-white/80">
                                    {desc}
                                </p>

                                <div className="mt-6 flex gap-3">
                                    <a href={link} target="_blank" className="rounded-xl bg-primary px-5 py-3 font-medium text-white transition hover:scale-105">
                                        Live Demo
                                    </a>

                                    {/* <button className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-medium backdrop-blur transition hover:bg-white hover:text-heading">
                                        View Project
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default FeaturedProject;