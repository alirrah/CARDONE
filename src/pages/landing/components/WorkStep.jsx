import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Url from "../../../assets/fake-data/url.jsx";
import "./WorkStep.scss";

const WorkStep = ({refrance}) => {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setNumber(prevNumber => {
                if (prevNumber < 3) {
                    return prevNumber + 1;
                } else {
                    return 0; // بعد از 3 به 0 برگردد
                }
            });
        }, 3000); // هر 1000 میلی‌ثانیه (1 ثانیه)

        return () => clearInterval(interval); // تمیز کردن با‌قیمانده‌های تایمر
    }, []);

    const workItem = [
        {
            id: 0,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.5 11.3V7.04001C20.5 3.01001 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01001 3.5 7.04001V18.3C3.5 20.96 4.96001 21.59 6.73001 19.69L6.73999 19.68C7.55999 18.81 8.80999 18.88 9.51999 19.83L10.53 21.18" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 7H16" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 11H15"   stroke="inherit"         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.211 14.7703L14.671 18.3103C14.531 18.4503 14.401 18.7103 14.371 18.9003L14.181 20.2503C14.111 20.7403 14.451 21.0803 14.941 21.0103L16.291 20.8203C16.481 20.7903 16.751 20.6603 16.881 20.5203L20.421 16.9803C21.031 16.3703 21.321 15.6603 20.421 14.7603C19.531 13.8703 18.821 14.1603 18.211 14.7703Z"   stroke="inherit"         stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.6992 15.2803C17.9992 16.3603 18.8392 17.2003 19.9192 17.5003"   stroke="inherit"         stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            title: "نام دلخواه انتخاب کن",
            body: "کافیه برای برای شروع نام نمایشگاه یا برندی که تمایل دارید مخاطبان با آن شما را بشناسند را انتخاب کنید."
        },
        {
            id: 1,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.47 19V5C21.47 3 20.47 2 18.47 2H14.47C12.47 2 11.47 3 11.47 5V19C11.47 21 12.47 22 14.47 22H18.47C20.47 22 21.47 21 21.47 19Z" stroke="inherit" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M11.47 6H16.47" stroke="inherit" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M11.47 18H15.47" stroke="inherit" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M11.47 13.95L16.47 14" stroke="inherit" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M11.47 10H14.47" stroke="inherit" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M5.49 2C3.86 2 2.53 3.33 2.53 4.95V17.91C2.53 18.36 2.72 19.04 2.95 19.43L3.77 20.79C4.71 22.36 6.26 22.36 7.2 20.79L8.02 19.43C8.25 19.04 8.44 18.36 8.44 17.91V4.95C8.44 3.33 7.11 2 5.49 2Z" stroke="inherit" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M8.44 7H2.53" stroke="inherit" stroke-width="1.5" stroke-linecap="round"/>
            </svg>,
            title: "صفحه خودتان را شخصی سازی کنید",
            body: ""
        },
        {
            id: 2,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z"   stroke="inherit"         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59004 18.3099 9.35003 16.9399 9.59003"   stroke="inherit"         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z"   stroke="inherit"         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003"   stroke="inherit"         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.46997 11.91 9.46997C13.34 9.46997 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z"   stroke="inherit"         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z"   stroke="inherit"         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            title: "همکاران و تیم خود را تعریف کنید",
            body: ""
        },
        {
            id: 3,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16.96 6.17004C18.96 7.56004 20.34 9.77004 20.62 12.32" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.48999 12.37C3.74999 9.82997 5.10999 7.61997 7.08999 6.21997"   stroke="inherit"         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.19 20.9399C9.35 21.5299 10.67 21.8599 12.06 21.8599C13.4 21.8599 14.66 21.5599 15.79 21.0099"   stroke="inherit"         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.06 7.70001C13.5954 7.70001 14.84 6.45537 14.84 4.92001C14.84 3.38466 13.5954 2.14001 12.06 2.14001C10.5247 2.14001 9.28003 3.38466 9.28003 4.92001C9.28003 6.45537 10.5247 7.70001 12.06 7.70001Z"   stroke="inherit"         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.82999 19.92C6.36534 19.92 7.60999 18.6753 7.60999 17.14C7.60999 15.6046 6.36534 14.36 4.82999 14.36C3.29464 14.36 2.04999 15.6046 2.04999 17.14C2.04999 18.6753 3.29464 19.92 4.82999 19.92Z"   stroke="inherit"         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.17 19.92C20.7054 19.92 21.95 18.6753 21.95 17.14C21.95 15.6046 20.7054 14.36 19.17 14.36C17.6347 14.36 16.39 15.6046 16.39 17.14C16.39 18.6753 17.6347 19.92 19.17 19.92Z"   stroke="inherit"         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            title: "صفحه را به اشتراک بگذارید",
            body: ""
        }
    ];
    return (
        <section className='work-step'>
            <div className="container">
                <div className='title'>
                    <h3>Business profile</h3>

                    <p>از ایده تا اجرا نهایت یک دقیقه</p>
                </div>

                <div className='body'>
                    <div>
                        {workItem.map((item) => {
                            return (
                                <div key={item.id} className={number === item.id && "active"}>
                                    <div className='image'>{item.icon}</div>

                                    <div>
                                        <p>{item.title}</p>

                                        <p>{item.body}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div ></div>
                </div>

                <div className='buttons'>
                    <Link to={`${Url}/`}>رایگان امتحان کنید</Link>

                    <button onClick={() => {
                        refrance.current.scrollIntoView({
                            behavior: 'smooth'
                        })
                    }}>درخواست دمو
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                </div>
            </div>
        </section>
    );
}

export default WorkStep;