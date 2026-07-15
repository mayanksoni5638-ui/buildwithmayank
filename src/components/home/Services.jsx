import React from "react";
import { HiComputerDesktop } from "react-icons/hi2";

function Services() {
    const services = [
        {
            icon: <HiComputerDesktop />,
            title: "Business Website",
            text: "Professional websites that build trust and generate more enquiries.",
        },
        {
            icon: <HiComputerDesktop />,
            title: "Landing Pages",
            text: "High-converting landing pages designed for campaigns and promotions.",
        },
        {
            icon: <HiComputerDesktop />,
            title: "Portfolio Websites",
            text: "Showcase your work with a clean and modern online portfolio.",
        },
        {
            icon: <HiComputerDesktop />,
            title: "Website Redesign",
            text: "Transform outdated websites into modern, mobile-friendly experiences.",
        },
    ];

    return (
        <section className="py-16">
            {/* Heading */}
            <div className="flex flex-col items-center text-center ">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                    Services
                </p>

                <h2 className="mt-3 text-3xl font-bold text-text md:text-4xl">
                    Websites Designed Around Your Business.
                </h2>

                <p className="mt-3 text-muted">
                    Every business is different. That's why every website is designed
                    specifically for your goals.
                </p>
            </div>


            <div className="container mx-auto px-6">
                {/* Cards */}
                <div className="mt-10 flex gap-6 overflow-x-auto pb-2 no-scrollbar">

                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="group min-w-[290px] rounded-2xl border border-secondary/60 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl"
                        >
                            {/* Icon */}
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-3xl text-primary transition group-hover:bg-primary group-hover:text-white">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="mt-6 text-xl font-semibold text-text">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-3 leading-7 text-muted">
                                {service.text}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Services;