import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function Faq() {
    const [open, setOpen] = useState(0);

    const faqs = [
        {
            question: "How much does a website cost?",
            answer:
                "The cost depends on your requirements. Most business websites start from ₹3,000. Contact me for a free quote.",
        },
        {
            question: "How long does it take to build a website?",
            answer:
                "Most websites are completed within 5–10 days, depending on the number of pages and features required.",
        },
        {
            question: "Will my website work on mobile phones?",
            answer:
                "Yes. Every website I build is fully responsive and works perfectly on mobiles, tablets, and desktops.",
        },
        {
            question: "Can I update my website later?",
            answer:
                "Yes. I can make updates for you, or build the website so it's easy to maintain in the future.",
        },
        {
            question: "Do you provide domain and hosting?",
            answer:
                "Yes. I can help you purchase a domain, set up hosting, and deploy your website.",
        },
        {
            question: "Do you offer support after launch?",
            answer:
                "Yes. I provide post-launch support to fix issues, make small changes, and ensure everything runs smoothly.",
        },
    ];

    return (
        <section id="faq" className="py-20">
            <div className="container mx-auto max-w-4xl px-6">
                {/* Heading */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-heading md:text-4xl">
                        Frequently Asked Questions
                    </h2>

                    <p className="mt-4 text-muted">
                        Everything you need to know before getting your business website.
                    </p>
                </div>

                {/* FAQs */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
                        >
                            <button
                                onClick={() => setOpen(open === index ? -1 : index)}
                                className="flex w-full items-center justify-between p-6 text-left"
                            >
                                <span className="text-lg font-semibold text-heading">
                                    {faq.question}
                                </span>

                                <FiChevronDown
                                    className={`h-6 w-6 text-primary transition-transform duration-300 ${open === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`grid transition-all duration-300 ${open === index
                                    ? "grid-rows-[1fr]"
                                    : "grid-rows-[0fr]"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="px-6 pb-6 leading-7 text-muted">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faq;