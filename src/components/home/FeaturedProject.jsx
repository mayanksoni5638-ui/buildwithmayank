import React from "react";

function FeaturedProject() {
    const details = [
        {
            tag: "Travel Agency",
            title: "Travel Website",
            desc: "A modern travel agency website designed to showcase tour packages and generate more enquiries.",
        },
        {
            tag: "Restaurant",
            title: "Restaurant Website",
            desc: "A stylish restaurant website with menu, gallery, reservations and WhatsApp enquiry.",
        },
        {
            tag: "Business",
            title: "Business Website",
            desc: "A professional business website built to establish trust and generate quality leads.",
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
                    {details.map(({ tag, title, desc }, i) => (
                        <div
                            key={i}
                            className="group relative h-[500px] overflow-hidden rounded-3xl border border-border bg-surface shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* Image */}
                            <div className="h-full w-full bg-accent/30 transition duration-700 group-hover:scale-105" />

                            {/* Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-heading/95 via-heading/45 to-transparent" />

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
                                    <button className="rounded-xl bg-primary px-5 py-3 font-medium text-white transition hover:scale-105">
                                        Live Demo
                                    </button>

                                    <button className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-medium backdrop-blur transition hover:bg-white hover:text-heading">
                                        View Project
                                    </button>
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