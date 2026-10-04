import React from "react";
import myPhoto from "/myImage.png";

function AboutMe() {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-6">
                <div className="grid items-center gap-14 lg:grid-cols-2">
                    {/* Image */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 -rotate-6 rounded-3xl bg-accent/40"></div>

                            <img
                                src={myPhoto}
                                alt="Mayank - Website Developer"
                                className="relative w-full max-w-md rounded-3xl object-cover shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <span className="inline-block rounded-full bg-accent/30 px-4 py-1 text-sm font-semibold text-primary">
                            About Me
                        </span>

                        <h2 className="mt-5 text-4xl font-bold leading-tight text-heading">
                            Hi, I'm <span className="text-primary">Mayank</span>
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-muted">
                            I help small businesses build modern websites that create a
                            professional online presence and generate more customer
                            enquiries.
                        </p>

                        <p className="mt-5 leading-8 text-muted">
                            Whether you're a restaurant, travel agency, doctor, salon, or
                            local business, I create websites that are fast, mobile-friendly,
                            SEO-ready, and designed to convert visitors into customers.
                        </p>

                        <p className="mt-5 leading-8 text-muted">
                            I work directly with every client, keeping the process simple,
                            transparent, and focused on delivering real business value—not
                            just a beautiful design.
                        </p>

                        {/* Stats */}
                        <div className="mt-10 grid grid-cols-3 gap-6">
                            <div className="rounded-2xl bg-surface border border-border p-5 text-center">
                                <h3 className="text-3xl font-bold text-primary">100%</h3>
                                <p className="mt-1 text-sm text-muted">
                                    Mobile Friendly
                                </p>
                            </div>

                            <div className="rounded-2xl bg-surface border border-border p-5 text-center">
                                <h3 className="text-3xl font-bold text-primary">Fast</h3>
                                <p className="mt-1 text-sm text-muted">
                                    Website Delivery
                                </p>
                            </div>

                            <div className="rounded-2xl bg-surface border border-border p-5 text-center">
                                <h3 className="text-3xl font-bold text-primary">1:1</h3>
                                <p className="mt-1 text-sm text-muted">
                                    Direct Support
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;