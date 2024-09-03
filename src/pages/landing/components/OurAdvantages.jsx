import {useEffect, useState} from "react";
import "./OurAdvantages.scss";

const OurAdvantages = () => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setNumber(prevNumber => {
                if (prevNumber < 4) {
                    return prevNumber + 1;
                } else {
                    return 0; // بعد از 3 به 0 برگردد
                }
            });
        }, 3000); // هر 1000 میلی‌ثانیه (1 ثانیه)

        return () => clearInterval(interval); // تمیز کردن با‌قیمانده‌های تایمر
    }, []);

    const advantageItem = [
        {
            id: 0,
            title:"بازاریابی و فروش",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5.5 10V14C5.5 16 6.5 17 8.5 17H9.93C10.3 17 10.67 17.11 10.99 17.3L13.91 19.13C16.43 20.71 18.5 19.56 18.5 16.59V7.41003C18.5 4.43003 16.43 3.29003 13.91 4.87003L10.99 6.70003C10.67 6.89003 10.3 7.00003 9.93 7.00003H8.5C6.5 7.00003 5.5 8.00003 5.5 10Z" stroke="inherit" stroke-width="1.5"/>
            </svg>,
            text: "",
        },
        {
            id: 1,
            title:"ویترین آنلاین محصولات و خدمات",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 2V22" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12H22" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            text: "",
        },
        {
            id: 2,
            title:"پشتیبانی و خدمات مشتریان",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5.46005 18.49V15.57C5.46005 14.6 6.22005 13.73 7.30005 13.73C8.27005 13.73 9.14005 14.49 9.14005 15.57V18.38C9.14005 20.33 7.52005 21.9501 5.57005 21.9501C3.62005 21.9501 2.00005 20.32 2.00005 18.38V12.22C1.89005 6.60005 6.33005 2.05005 11.95 2.05005C17.57 2.05005 22 6.60005 22 12.11V18.2701C22 20.2201 20.38 21.84 18.43 21.84C16.48 21.84 14.86 20.2201 14.86 18.2701V15.46C14.86 14.49 15.62 13.62 16.7 13.62C17.67 13.62 18.54 14.38 18.54 15.46V18.49" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            text: "",
        },
        {
            id: 3,
            title:"گزارش عملکرد",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 22H21" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.59998 8.37988H4C3.45 8.37988 3 8.82988 3 9.37988V17.9999C3 18.5499 3.45 18.9999 4 18.9999H5.59998C6.14998 18.9999 6.59998 18.5499 6.59998 17.9999V9.37988C6.59998 8.82988 6.14998 8.37988 5.59998 8.37988Z" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.7999 5.18994H11.2C10.65 5.18994 10.2 5.63994 10.2 6.18994V17.9999C10.2 18.5499 10.65 18.9999 11.2 18.9999H12.7999C13.3499 18.9999 13.7999 18.5499 13.7999 17.9999V6.18994C13.7999 5.63994 13.3499 5.18994 12.7999 5.18994Z" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.9999 2H18.3999C17.8499 2 17.3999 2.45 17.3999 3V18C17.3999 18.55 17.8499 19 18.3999 19H19.9999C20.5499 19 20.9999 18.55 20.9999 18V3C20.9999 2.45 20.5499 2 19.9999 2Z" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            text: "",
        },
        {
            id: 4,
            title:"آموزش و توسعه",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 7H16" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 10.5H13" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            text: "",
        }
    ];

    return (
        <section className='advantage'>
            <div className="container">
                <p className='title'>چرا همکار خوبی برای شما هستیم؟</p>

                <p className='text'>کاردان برای شماست اگر {advantageItem[number].text}</p>

               <div>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke="inherit" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                   <div>
                       {advantageItem.map((item) => <div key={item.id} className={item.id === number && "active"}>
                           {item.icon}

                           <p>{item.title}</p>
                       </div>)}
                   </div>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <path d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008" stroke="inherit" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
               </div>
            </div>
        </section>
    );
}

export default OurAdvantages;