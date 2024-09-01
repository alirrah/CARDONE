import "./Reservation.scss";
import Url from "../../../assets/fake-data/url.jsx";
import {Link} from "react-router-dom";

const Reservation = () => {
    return (
        <section className='reservation'>
            <h3>کار را به کاردان بسپارید</h3>

            <p>این اطمینان خاطر را به شما می‌دهیم که بهترین ها را به شایستگی یک تجربه دلپذیر برایتان رقم بزنیم</p>

            <div>
                <Link to={`${Url}/`} className='login-btn'>رزرو خدمات</Link>

                <Link to={`${Url}/`}>درخواست دمو</Link>
            </div>
        </section>
    );
}

export default Reservation;