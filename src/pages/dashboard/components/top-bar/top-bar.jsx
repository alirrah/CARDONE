import {Robot, CarFront, PersonAdd} from "react-bootstrap-icons";
import {Link} from "react-router-dom";
import "./top-bar.scss";
import URL from "../../../../assets/fake-data/url.jsx";

const TopBar = () => {
    return (
        <div className='top-bar'>
            <div className='container'>
                <Link to={`${URL}/`} >
                    <img src="src/assets/image/empty-logo.webp" alt="cardone logo"/>
                </Link>

                <div>
                    <Link to={`${URL}/create-lead`}>
                        <Robot/>
                    </Link>

                    <Link to={`${URL}/create-car`}>
                        <CarFront/>
                    </Link>

                    <Link to={`${URL}/create-customer`}>
                        <PersonAdd />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TopBar;