import React from "react";

function Process() {
    const process = [
        {
            step: "1",
            color: "green",
            title: "Discover",
            description: "Understand your business, goals, and target audience.",
        },
        {
            step: "2",
            color: "orange",
            title: "Plan",
            description: "Plan the website structure, content, and overall strategy.",
        },
        {
            step: "3",
            color: "blue",
            title: "Design",
            description: "Create a modern, user-friendly design that represents your brand.",
        },
        {
            step: "4",
            color: "purple",
            title: "Develop",
            description: "Build a fast, responsive, and SEO-friendly website.",
        },
        {
            step: "5",
            color: "red",
            title: "Review",
            description: "Test everything and make revisions based on your feedback.",
        },
        {
            step: "6",
            color: "emerald",
            title: "Launch",
            description: "Deploy your website and provide post-launch support.",
        },
    ];

    const colorClasses = {
        green: {
            bg: "bg-green-50",
            text: "text-green-600",
        },
        orange: {
            bg: "bg-orange-50",
            text: "text-orange-600",
        },
        blue: {
            bg: "bg-blue-50",
            text: "text-blue-600",
        },
        purple: {
            bg: "bg-purple-50",
            text: "text-purple-600",
        },
        red: {
            bg: "bg-red-50",
            text: "text-red-600",
        },
        emerald: {
            bg: "bg-emerald-50",
            text: "text-emerald-600",
        },
    };

    return (
        <section id="process" className="py-20">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <h2 className="text-3xl font-bold text-heading md:text-4xl">
                        Development Process
                    </h2>

                    <p className="mt-4 text-muted">
                        A simple and transparent process that keeps your project on track
                        from idea to launch.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {process.map((item) => (
                        <div
                            key={item.step}
                            className="rounded-3xl border border-border bg-surface p-8 py-12 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl"
                        >
                            <div className="space-y-8">
                                <div
                                    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${colorClasses[item.color].bg}`}
                                >
                                    <span
                                        className={`text-xl font-bold ${colorClasses[item.color].text}`}
                                    >
                                        {item.step}
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-2xl font-semibold text-heading">
                                        {item.title}
                                    </h3>

                                    <p className="leading-relaxed text-muted">
                                        {item.description}
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

export default Process;