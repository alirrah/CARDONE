import {Link} from "react-router-dom";
import Url from "../../assets/fake-data/url.jsx";

const LandingPage = () => {
    return (
        <Link to={`${Url}/login`} >ورود به برنامه</Link>
    );
}

export default LandingPage;