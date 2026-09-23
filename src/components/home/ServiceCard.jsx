import React from 'react'
import { motion } from 'framer-motion'
import { BsShop } from "react-icons/bs";
import { SlPlane } from "react-icons/sl";
import { LuUtensils, LuRocket } from "react-icons/lu";
import { PiStethoscopeBold } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { IoSchoolOutline } from "react-icons/io5";
import { fadeLeft } from '../../motionAnimation/variants';

function ServiceCard() {

    const services = [
        {
            text: "small",
            icon: <BsShop className='h-8 w-8' />
        },
        {
            text: "travel",
            icon: <SlPlane className='h-8 w-8' />
        },
        {
            text: "restaurants",
            icon: <LuUtensils className='h-8 w-8' />
        },
        {
            text: "Doctors",
            icon: <PiStethoscopeBold className='h-8 w-8' />
        },
        {
            text: "Coaches",
            icon: <CiUser className='h-8 w-8' />
        },
        {
            text: "Schools",
            icon: <IoSchoolOutline className='h-8 w-8' />
        },
        {
            text: "Startups",
            icon: <LuRocket className='h-8 w-8' />
        },
    ]

    return (
        <div className="relative z-40 -mt-8 md:top-4 md:mt-0">
            <div className="container mx-auto">
                <div className="rounded-3xl border border-border bg-surface shadow-lg">
                    <div className="flex flex-col gap-6 px-6 py-5 md:flex-row md:items-center">

                        {/* Left Text */}
                        <motion.div
                            variants={fadeLeft(0.1, 0.3, 100)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="shrink-0 md:pr-6">
                            <p className="text-center md:text-left text-heading font-semibold leading-tight">
                                <span className="block">
                                    Helping businesses across
                                </span>
                                <span className="block text-primary">
                                    different industries
                                </span>
                            </p>
                        </motion.div>

                        {/* Divider */}
                        <div className="hidden h-12 w-px bg-border md:block" />

                        {/* Services Scroll Container */}
                        <div className="flex flex-1 gap-4 overflow-x-auto pb-2 no-scrollbar">
                            {services.map((service, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeLeft((i + 2) * 0.1, 0.3, 50)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, margin: "-50px" }}
                                >
                                    {/* Card Style & Interaction Wrapper */}
                                    <div className="min-w-40 h-full rounded-2xl border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                        <div className="mb-3 text-primary text-2xl">
                                            {service.icon}
                                        </div>

                                        <p className="font-medium text-heading">
                                            {service.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard