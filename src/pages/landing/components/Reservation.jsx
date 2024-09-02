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
                </button>
            </div>
        </section>
    );
}

export default Reservation;