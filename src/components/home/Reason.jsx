import React from 'react'
import { motion } from 'framer-motion'
import { fadeDown } from '../../motionAnimation/variants'


function Reason() {
    return (
        <section className="relative overflow-hidden bg-background py-20 md:py-28">

            {/* Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">

                <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/20 blur-3xl" />

                <div className="absolute right-20 top-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl hidden md:block" />

                <div className="absolute left-10 bottom-10 h-52 w-52 rounded-full bg-primary/10 blur-3xl hidden md:block" />

            </div>

            <div className="mx-auto max-w-4xl px-6 text-center overflow-x-hidden">

                {/* Badge */}
                <motion.span
                    variants={fadeDown(0.1, 0.3, 100)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary shadow-sm">
                    YOU CAME HERE FOR A REASON
                </motion.span>

                {/* Heading */}
                <motion.h2
                    variants={fadeDown(0.2, 0.3, 100)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-8 text-4xl font-extrabold leading-tight text-heading md:text-6xl">
                    You're visiting
                    <span className="block text-primary">
                        my website.
                    </span>
                </motion.h2>

                {/* Subheading */}
                <motion.p
                    variants={fadeDown(0.3, 0.3, 100)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted md:text-2xl">
                    If people can find my business online,
                    <span className="font-semibold text-heading">
                        they should be able to find yours too.
                    </span>
                </motion.p>

                {/* CTA */}
                <motion.a
                    variants={fadeDown(0.4, 0.2, 100)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    href="https://wa.me/919116389911" target='_blank' className=" inline-block mt-10 rounded-xl bg-primary px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover hover:shadow-xl">
                    Build My Website
                </motion.a>

            </div>

        </section>
    )
}

export default Reason