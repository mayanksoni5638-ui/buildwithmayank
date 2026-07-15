import React from 'react'
import { BsShop } from "react-icons/bs";
import { SlPlane } from "react-icons/sl";
import { LuUtensils, LuRocket } from "react-icons/lu";
import { PiStethoscopeBold } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { IoSchoolOutline } from "react-icons/io5";

function ServiceCard() {


    const services = [
        {
            text: "small",
            text2: "businesses",
            icon: <BsShop className='h-8 w-8' />
        },
        {
            text: "travel",
            text2: "Agencies",
            icon: <SlPlane className='h-8 w-8' />
        },
        {
            text: "restaurants",
            text2: "",
            icon: <LuUtensils className='h-8 w-8' />
        },
        {
            text: "Doctors",
            text2: "",
            icon: <PiStethoscopeBold className='h-8 w-8' />
        },
        {
            text: "Coaches",
            text2: "",
            icon: <CiUser className='h-8 w-8' />
        },
        {
            text: "Schools",
            text2: "",
            icon: <IoSchoolOutline className='h-8 w-8' />
        },
        {
            text: "Startups",
            text2: "",
            icon: <LuRocket className='h-8 w-8' />
        },

    ]

    return (
        <div className="relative md:top-10 -mt-8 md:mt-0 z-40">

            <div className="container mx-auto rounded-3xl bg-accent">

                <div className="md:flex items-center px-6 py-4 text-gray-800">


                    <div className="md:pr-6 mb-2 md:mb-0 ">
                        <p className="text-center md:text-left leading-tight">
                            <span className="md:block">Helping businesses across</span>
                            {" "}
                            <span className="md:block">different industries</span>
                        </p>
                    </div>

                    <span className="self-stretch w-px bg-gray-200" />

                    <div className="flex overflow-x-auto gap-4 pb-2 no-scrollbar">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className="min-w-[140px] flex items-center gap-3 rounded-xl bg-white/10 p-4"
                            >
                                {service.icon}
                                <div>
                                    <p>{service.text}</p>
                                    {service.text2 && <p>{service.text2}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard