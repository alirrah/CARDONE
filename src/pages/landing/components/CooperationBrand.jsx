import cardoneLogo from "./../../../assets/image/cardone-white.svg";
import "./CooperationBrand.scss";
const CooperationBrand = () => {

    const brandLogos = [cardoneLogo, cardoneLogo, cardoneLogo, cardoneLogo, cardoneLogo, cardoneLogo, cardoneLogo, cardoneLogo, cardoneLogo];

    return (
        <section className='brands'>
            <div className="container">
                <h3>همکاران با برندهای مطرح</h3>

                <div>
                    {brandLogos.map((item, index) => <img key={index} alt='brand logo' src={item}/>)}
                </div>

                <p>جای شما در کنار بهترین ها خالیست!</p>
            </div>
        </section>
    );
}

export default CooperationBrand;