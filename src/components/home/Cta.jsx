import React from "react";
import { SiWhatsapp } from "react-icons/si";

function Cta() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-secondary px-8 py-16 text-center text-white shadow-xl md:px-16">
                    <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
                        🚀 Let's Build Your Website
                    </span>

                    <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
                        Ready to Give Your Business a Professional Online Presence?
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
                        Get a modern, mobile-friendly website that builds trust, attracts
                        customers, and helps your business grow.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4">
                        <a
                            href="https://wa.me/919116389911"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 rounded-xl bg-surface px-8 py-4 text-lg font-semibold text-primary transition hover:-translate-y-1 hover:bg-accent hover:text-primary hover:shadow-xl"
                        >
                            <SiWhatsapp className="h-7 w-7 text-green-500" />
                            Chat on WhatsApp
                        </a>

                        <span className="text-sm text-white/80">
                            Free consultation • No obligation
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta;