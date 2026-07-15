import React from 'react'

function Reason() {
    return (
        <section className="relative overflow-hidden py-16 md:py-20">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface/80 blur-2xl" />
                <div className="absolute top-8 right-15 h-32 w-32 rounded-full bg-accent/40 blur-2xl hidden md:block" />
                <div className="absolute bottom-15 left-20 h-40 w-40 rounded-full bg-[#bded8d]/50 blur-3xl hidden md:block" />
            </div>

            <div className="container mx-auto max-w-3xl px-6 text-center flex flex-col items-center justify-center ">

                <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary bg-accent/30 px-2 py-1 rounded-2xl w-fit border border-gray-100">
                    YOU CAME HERE FOR A REASON
                </p>

                <h2 className="mt-6 text-3xl font-bold leading-tight text-text md:text-5xl">
                    You're visiting my website.
                </h2>

                <p className="mt-5 text-xl text-muted md:text-2xl">
                    Your customers should be able to visit yours.
                </p>

                <button className="mt-10 rounded-xl bg-primary px-8 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    Build My Website
                </button>

            </div>
        </section>
    )
}

export default Reason