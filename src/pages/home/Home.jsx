import React from 'react'
import Hero from '../../components/home/Hero'
import Services from '../../components/home/Services'
import FeaturedProject from '../../components/home/FeaturedProject'
import WhyChooseUs from '../../components/home/whyChooseUs'
import Process from '../../components/home/Process'
import AboutMe from '../../components/home/AboutMe'
import Faq from '../../components/home/Faq'
import Cta from '../../components/home/Cta'
import Reason from '../../components/home/Reason'
// import ToTop from '../../components/home/ToTop'

function Home() {
    return (
        <>
            <Hero />
            <Reason />
            <Services />
            <FeaturedProject />
            <WhyChooseUs />
            <Process />
            <AboutMe />
            <Faq />
            <Cta />
            {/* <ToTop /> */}

        </>
    )
}

export default Home