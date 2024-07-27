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

const LandingPage = () => {
    return (
        <>
            <Header/>

            <main>
                <Banner/>

                <CooperationBrand/>

                <OurAdvantages/>

                <WorkStep/>

                <BusinessStep/>

                <Investment/>

                <Reservation/>

                <DemoRequest/>
            </main>

            <Footer/>
        </>
    );
}

export default LandingPage;