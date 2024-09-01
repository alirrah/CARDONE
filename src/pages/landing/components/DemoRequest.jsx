import CardoneLogo from "./../../../assets/image/empty-logo.webp";
import "./DemoRequest.scss";



const DemoRequest = () => {

    const text = "CARDONE\tCARDONE\tCARDONE\tCARDONE\tCARDONE\tCARDONE\tCARDONE\tCARDONE\tCARDONE\tCARDONE\tCARDONE\tCARDONE\tCARDONE\tCARDONE\t";
    return (
        <section className='demo'>
            <div>
                {[...Array(8)].map((_,i) => <p key={i} className='back-text'> <pre>{text}</pre></p>)}
            </div>

            <div className='card'>
                <img src={CardoneLogo} alt="CARDONE logo"/>

                <h3>درخواست جلسه دمو</h3>

                <p>از حسن انتخاب و اعتماد شما سپاسگزاریم</p>

                <form action="">
                    <input type="tel" required/>

                    <input type="submit" value='ارسال'/>
                </form>
            </div>
        </section>
    );
}

export default DemoRequest;