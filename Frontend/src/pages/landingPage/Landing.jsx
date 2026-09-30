import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import Stats from "../../components/common/Stats";
import Features from "../../components/common/Features";
import HowItWorks from "../../components/common/HowItWork";
import CTA from "../../components/common/CTA";
import Footer from "../../components/common/Footer";


function Landing() {
    return (
        <>
            <Navbar showNavigation={true}/>
            <Hero />
            <Stats />
            <Features />
            <HowItWorks />
            <CTA />
            <Footer />
        </>
    );
}

export default Landing;