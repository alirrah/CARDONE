import {Robot, CarFront, PersonAdd} from "react-bootstrap-icons";
import {Link} from "react-router-dom";
import "./top-bar.scss";

const TopBar = () => {
    return (
        <div className='top-bar'>
            <div className='container'>
                <Link to='/'>
                    <img src="/logo.webp" alt="cardone logo"/>
                </Link>

                <div>
                    <Link to='/create-lead'>
                        <Robot/>
                    </Link>

                    <Link to='/create-car'>
                        <CarFront/>
                    </Link>

                    <Link to='/create-customer'>
                        <PersonAdd />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TopBar;