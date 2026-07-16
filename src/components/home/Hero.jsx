import React from "react";
import myphoto from "/myImage.png";
import ServiceCard from "./ServiceCard";

function Hero() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };
    return (
        <section className="bg-background py-8 md:pt-8">
            <div className="max-w-7xl mx-auto pt-2 lg:px-8 grid lg:grid-cols-2 gap-2 md:gap-16 items-center ">
                {/* Left */}
                <div className="relative z-40 space-y-5 text-center lg:text-left flex flex-col items-center justify-center lg:items-start lg:justify-start">
                    {/* Tag */}
                    <div>
                        <span className="inline-flex items-center rounded-full bg-accent/40 border border-border px-4 py-2 text-sm font-medium text-primary">
                            Business Website Development
                        </span>
                    </div>

                    {/* Heading */}
                    <div className="space-y-3">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-17 text-heading">
                            Your Business Deserves More Than Just a
                            <span className="block text-primary">Social Media Page.</span>
                        </h1>

                        <p className="max-w-xl text-base md:text-lg text-muted leading-8">
                            Build a modern website that showcases your business, builds
                            customer trust, and makes it easy for people to contact you from
                            anywhere.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-1 md:gap-4">
                        <button className="rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg hover:bg-primary-hover hover:-translate-y-0.5 transition-all">
                            Chat on WhatsApp
                        </button>

                        <button
                            onClick={() => scrollToSection("projects")}
                            className="rounded-xl border border-primary bg-surface px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-white transition-all">
                            View My Work
                        </button>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-3 justify-center lg:justify-start">
                        {[
                            "📱 Mobile Friendly",
                            "🎨 Custom Design",
                            "⚡ Fast Delivery",
                            "🤝 Long-term Support",
                        ].map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text shadow-sm"                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    {/* About */}
                    <div className="max-w-xl rounded-2xl border border-border bg-surface p-5 shadow-sm">
                        <p className="text-muted leading-7">
                            Hi, I'm <strong className="text-text">Mayank Soni</strong>,
                            founder of{" "}
                            <strong className="text-primary">Build With Mayank</strong>. I
                            help local businesses create fast, modern websites that build
                            trust and generate more enquiries.
                        </p>
                    </div>
                </div>

                {/* tab Right */}

                <div className="relative hidden md:flex justify-center items-end">
                    <div className="absolute -right-5 top-10 h-56 w-72 rounded-3xl bg-secondary/40 blur-sm"></div>

                    <div className="absolute left-5 bottom-16 h-44 w-64 rounded-3xl bg-accent/50 blur-sm"></div>

                    <div className="absolute right-0 bottom-5 h-36 w-56 rounded-3xl bg-primary/10 blur-sm"></div>

                    <img
                        src={myphoto}
                        alt="Mayank Soni"
                        className="relative -bottom-12 z-20 drop-shadow-2xl"
                    />
                </div>
                {/* mobile right */}
                <div className="relative md:hidden justify-center items-end">
                    {/* <div className="absolute hidden md:block -right-8 top-10 w-72 h-52 rounded-3xl bg-secondary"></div>

                    <div className="absolute hidden md:block left-2 lg: top-50 w-64 h-44 rounded-3xl bg-surface"></div>

                    <div className="absolute w-60 h-40 rounded-3xl bg-accent"></div> */}
                    <div className="w-full aspect-4/5">
                        <img
                            src={myphoto}
                            alt="Mayank Soni"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>
            </div>

            <ServiceCard />
        </section>
    );
}

export default Hero;
