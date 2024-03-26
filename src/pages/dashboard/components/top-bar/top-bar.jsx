import {Search, GearFill, BellFill} from "react-bootstrap-icons";
import {Link} from "react-router-dom";
import "./top-bar.scss";

function TopBar() {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className='top-bar'>
            <div className='container'>
                <Link to='/'>
                    <img src="/logo.webp" alt="cardone logo"/>
                </Link>

                <div>
                    <form onSubmit={handleSubmit}>
                        <input type='text' placeholder='جستجو...'/>

                        <button type='submit'><Search/></button>
                    </form>

                    <button><GearFill/></button>

                    <button><BellFill/></button>

                    <button className='blue'></button>
                </div>
            </div>
        </div>
    );
}

export default TopBar;