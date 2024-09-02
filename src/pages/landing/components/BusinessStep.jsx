import {Link} from "react-router-dom";
import Url from "../../../assets/fake-data/url.jsx";
import "./BusinessStep.scss";
import {useEffect, useState} from "react";

const BusinessStep = ({refrance}) => {
    const businessSteps = [
        {
            id: 0,
            title: "کاتالوگ آنلاین خودت رو بساز",
            text: "یک پروفایل در اختیارت قرار گرفته، میتونی براساس نیاز تغییرات دلخواه خودت رو وارد کنی.",
        },
        {
            id: 1,
            title: "کارها رو در جریان بگذار",
            text: "محصولات و خدمات خودت رو در قالب یک پیشنهاد برای مخاطبان هدف مشخص کن.",
        },
        {
            id: 2,
            title: "پیگیر مشتری باش",
            text: "پیگیری های لازم از ست شدن جلسه تا نحوه دریافت وجه از مخاطب رو مشخص کن.",
        },
        {
            id: 3,
            title: "خداقوت؛ کار به کاردان سپرده شد",
            text: "از اینجا به بعد سیستم معرفی، فروش و بازاریابی شما به صورت اتوماتیک انجام خواهد شد، از درآمد غیر فعال لذت ببرید.",
        }
    ];

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

    return (
        <section className='business-step'>
            <div className="container">
                <div className='title'>
                    <h3>به پشتوانه کاردان درآمد غیرفعال بسازید</h3>

                    <p>کل سیستم به صورت خودکار فعالیت میکنه فقط کافیه به صورت دستی اطلاعات خودتون رو وارد کنید</p>
                </div>

                <div className='card'>
                    <div className='line'></div>
                    {businessSteps.map((item) => {
                        return (
                            <div key={item.id} className={number === item.id && "active"}>
                                <p>{item.id + 1}</p>

                                <div>
                                    <p className='card-tittle'>{item.title}</p>

                                    <p className='card-sub-tittle'>{item.text}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className='buttons'>
                    <Link to={`${Url}/`}>رایگان امتحان کنید</Link>

                    <button onClick={() => {
                        refrance.current.scrollIntoView({
                            behavior: 'smooth'
                        })
                    }}>درخواست دمو
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008"
                                stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round"/>
                        </svg></button>
                </div>
            </div>
        </section>
    );
}

export default BusinessStep;