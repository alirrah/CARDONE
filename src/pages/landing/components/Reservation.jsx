import "./Reservation.scss";
import Url from "../../../assets/fake-data/url.jsx";
import {Link} from "react-router-dom";

const Reservation = ({refrance}) => {
    return (
        <section className='reservation'>
            <h3>کار را به کاردان بسپارید</h3>

            <p>این اطمینان خاطر را به شما می‌دهیم که بهترین ها را به شایستگی یک تجربه دلپذیر برایتان رقم بزنیم</p>

            <div>
                <Link to={`${Url}/`}>رزرو خدمات</Link>

                <button onClick={() => {
                    refrance.current.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}>درخواست دمو
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </button>
            </div>
        </section>
    );
}

export default Reservation;