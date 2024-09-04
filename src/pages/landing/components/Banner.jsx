import car from "./../../../assets/image/Group 1321314369.png";
import './Banner.scss';
import {Link} from "react-router-dom";
import Url from "../../../assets/fake-data/url.jsx";
import line from "./../../../assets/image/Group 33061.png";

const Banner = ({refrance}) => {
    return (
        <section className='banner'>
            <div className="container">
                <div className='title'>
                    <h3>پلت فرم تسهیلگر خرید و فروش خودرو</h3>
                    <img src={line} alt="line"/>
                </div>
                <div>
                    <p>کار را به کاردان بسپارید</p>

                    <div className='buttons'>
                        <Link to={`${Url}/`}>ثبت نام</Link>

                        <button onClick={() => {
                            refrance.current.scrollIntoView({
                                behavior: 'smooth'
                            })
                        }}>درخواست دمو
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                    </div>

                    <img src={car} alt="car"/>
                </div>
            </div>
        </section>
    );
}

export default Banner;