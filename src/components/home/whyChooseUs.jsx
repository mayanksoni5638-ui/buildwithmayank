import React from "react";
import {
    IoMdPricetag,
    IoMdFlash,
    IoMdPhonePortrait,
    IoMdRocket,
    IoMdChatboxes,
} from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
function WhyChooseUs() {
    const features = [
        {
            icon: IoMdPricetag,
            title: "Affordable Pricing",
            highlight: "Pricing",
            description: "Professional websites at a price that makes sense for small businesses.",
        },
        {
            icon: IoMdRocket,
            title: "Fast Delivery",
            highlight: "Delivery",
            description: "Get your website designed and launched quickly without compromising quality.",
        },
        {
            icon: IoMdPhonePortrait,
            title: "Mobile Friendly",
            highlight: "Friendly",
            description: "Your website looks perfect on phones, tablets, and desktops.",
        },
        {
            icon: IoMdFlash,
            title: "Fast Performance",
            highlight: "Performance",
            description: "Optimized websites that load quickly and provide a smooth experience.",
        },
        {
            icon: IoMdChatboxes,
            title: "Direct Support",
            highlight: "Support",
            description: "Work directly with me throughout the project with quick communication.",
        },
        {
            icon: IoShieldCheckmarkOutline,
            title: "Reliable Service",
            highlight: "Service",
            description: "Clean code, modern design, and post-launch support you can trust.",
        },
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-2 lg:px-6">
                {/* Heading */}
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <h2 className="text-3xl font-bold text-heading md:text-4xl">
                        Why Work With Me?
                    </h2>

                    <p className="mt-4 text-muted">
                        I build modern, fast, and conversion-focused websites that help
                        your business look professional and generate more enquiries.
                    </p>
                </div>

                {/* Cards */}
                <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar lg:grid lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="min-w-50 shrink-0 snap-center rounded-2xl border border-border bg-surface p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl lg:min-w-0"
                            >
                                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent/30 text-primary">
                                    <Icon className="h-8 w-8" />
                                </div>

                                <h3 className="text-xl font-semibold text-heading">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 max-w-55 mx-auto text-muted">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;