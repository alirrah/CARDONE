import {Link} from "react-router-dom";
import {Robot, CarFront, PersonAdd} from "react-bootstrap-icons";
import Url from "../../../../assets/fake-data/url.jsx";
import Image from "../../../../assets/image/empty-logo.webp";
import "./top-bar.scss";

const TopBar = () => {
    return (
        <div className='top-bar'>
            <div className='container'>
                <Link to={`${Url}/`} >
                    <img src={Image} alt="cardone logo"/>
                </Link>

                <div>
                    <Link to={`${Url}/create-lead`}>
                        <Robot/>
                    </Link>

                    <Link to={`${Url}/create-car`}>
                        <CarFront/>
                    </Link>

                    <Link to={`${Url}/create-customer`}>
                        <PersonAdd />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TopBar;