import React from 'react'
import myphoto from '/myImage.png'
import ServiceCard from './ServiceCard'

function Hero() {
    return (
        <section className="py-8 md:py-20">

            <div className="max-w-7xl mx-auto pt-6 lg:px-8 grid lg:grid-cols-2 gap-2 md:gap-16 items-center ">

                {/* Left */}
                <div className="relative z-40 space-y-7 text-center lg:text-left flex flex-col items-center justify-center">

                    {/* Tag */}
                    <div>
                        <span className="inline-flex items-center rounded-full bg-secondary/70 px-2 py-1.5 md:px-4 md:py-2 text-sm font-medium text-primary">
                            Business Website Development
                        </span>
                    </div>

                    {/* Heading */}
                    <div className="space-y-3">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none text-text max-w-2xl">
                            Your Business Deserves More Than Just a
                            <span className="block text-primary">
                                Social Media Page.
                            </span>
                        </h1>

                        <p className="max-w-xl text-sm md:text-lg text-muted leading-6 md:leading-8">
                            Build a modern website that showcases your business,
                            builds customer trust, and makes it easy for people to
                            contact you from anywhere.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-1 md:gap-4">

                        <button className="rounded-xl bg-primary  px-2 md:px-7 py-1 md:py-3 font-semibold text-white transition hover:scale-105">
                            Chat on WhatsApp
                        </button>

                        <button className="rounded-xl border-2 border-primary px-2 md:px-7 py-1 md:py-3 font-semibold text-primary transition hover:bg-primary hover:text-white">
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
                                className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-text"
                            >
                                {item}
                            </span>
                        ))}

                    </div>

                    {/* About */}
                    <div className="max-w-xl border-l-4 border-primary pl-5">

                        <p className="text-muted leading-7">
                            Hi, I'm <strong className="text-text">Mayank Soni</strong>,
                            founder of <strong className="text-primary">Build With Mayank</strong>.
                            I help local businesses create fast, modern websites that
                            build trust and generate more enquiries.
                        </p>

                    </div>
                </div>


                {/* tab Right */}

                <div className="relative hidden md:flex justify-center items-end">

                    <div className="absolute hidden md:block -right-3 top-10 w-72 h-52 rounded-3xl bg-secondary"></div>

                    <div className="absolute hidden md:block left-2 lg: top-50 w-64 h-44 rounded-3xl bg-surface"></div>

                    <div className="absolute hidden md:block -right-8 lg:right-0 bottom-10 w-60 h-40 rounded-3xl bg-accent"></div>

                    <img
                        src={myphoto}
                        alt="Mayank Soni"
                        className="relative -bottom-10 z-20"
                    />
                </div>
                {/* mobile right */}
                <div className="relative md:hidden justify-center items-end">

                    {/* <div className="absolute hidden md:block -right-8 top-10 w-72 h-52 rounded-3xl bg-secondary"></div>

                    <div className="absolute hidden md:block left-2 lg: top-50 w-64 h-44 rounded-3xl bg-surface"></div>

                    <div className="absolute w-60 h-40 rounded-3xl bg-accent"></div> */}
                    <div className="">

                        <img
                            src={myphoto}
                            alt="Mayank Soni"
                            className="relative -bottom-4 md:bottom-8 w-full"
                        />
                    </div>
                </div>


            </div>

            <ServiceCard />
        </section>
    )
}

export default Hero