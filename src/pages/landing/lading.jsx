import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import CooperationBrand from "./components/CooperationBrand.jsx";
import OurAdvantages from "./components/OurAdvantages.jsx";
import WorkStep from "./components/WorkStep.jsx";
import BusinessStep from "./components/BusinessStep.jsx";
import Investment from "./components/Investment.jsx";
import Reservation from "./components/Reservation.jsx";
import DemoRequest from "./components/DemoRequest.jsx";
import Footer from "./components/Footer.jsx";
import "./landing.scss";
import {useRef} from "react";

const LandingPage = () => {
    const demoRef = useRef();

    return (
        <section className='landing-page'>
            <main>
                <div>
                    <Header/>

                    <Banner refrance={demoRef}/>

                    <CooperationBrand/>
                </div>

                <OurAdvantages/>

                <WorkStep refrance={demoRef}/>

                <BusinessStep refrance={demoRef}/>

                <Investment/>

                <Reservation refrance={demoRef}/>

                <DemoRequest refrance={demoRef}/>
            </main>

            <Footer/>
        </section>
    );
}

export default LandingPage;