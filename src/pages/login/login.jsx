import {Link, useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import {EyeFill, EyeSlashFill, ArrowRepeat} from "react-bootstrap-icons";
import Url from "../../assets/fake-data/url.jsx";
import Image from "../../assets/image/cardone-white.svg";
import Google from "../../assets/image/google.svg";
import './login.scss';

const LoginPage = () => {

    const submitRef = useRef(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        submitRef.current.disabled = true;
        setShowLoading(true);

        let form = event.target;
        let username = form.username.value;
        let password = form.password.value;

        console.log({"Username": username, "Password": password});
        localStorage.setItem('token', '12345678');
        //TODO: request back, get token, and save in localStorage

        setTimeout(() => {
            submitRef.current.disabled = false;
            setShowLoading(false);

            navigate(`${Url}/dashboard`);
        }, 2000);
    }

    const changePasswordType = (event) => {
        event.preventDefault();

        setShowPassword(!showPassword);
    }

    return (
        
        <main className='login'>
            <div className="icon-box">
                <Link to={`${Url}/`} className="logo-link">
                    <img src={Image} alt="cardone logo"/>
                    <p>کـــــــــــــاردان</p>
                </Link>
            </div>
            <div>
            <div className='box'>
                <h3>ثبت نام</h3>
                <p>کافیه برای ورود ایمیل و رمز عبور  وارد کنی</p>

                <button className="google-login">
                    <img src={Google} alt="Google" />
                    ثبت نام با اکانت گوگل
                </button>

                <div className="separator">
                    <span>یا</span>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-fields">
                        <div className="input-group">
                            <label htmlFor='username'>ایمیل<span>*</span></label>
                            <input type='text' id='username' name='username' required placeholder="mail@cardone.com"/>
                        </div>

                        <div className="input-group">
                            <label htmlFor='password'>رمز عبور<span>*</span></label>
                            <div className='password-box'>
                                <input type={showPassword ? 'text' : 'password'} id='password' name='password' required placeholder="Min. 8 characters"/>
                                <button onClick={changePasswordType} className="password-toggle">
                                    {showPassword ? <EyeFill/> : <EyeSlashFill/>}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="form-actions">
                        <div className="remember-forgot">
                            <label className="checkbox">
                                <span>به خاطر بسپار</span>
                                <input type="checkbox" />
                            </label>
                            <a href="#" className="forgot-password">فراموشی رمز عبور</a>
                        </div>

                        <button type='submit' ref={submitRef} className="submit-btn">ورود {showLoading && <ArrowRepeat/>}</button>
                    </div>
                </form>

                <p className="signup-link">
                    هنوز ثبت نام نکردی؟ <a href="#">ساختن حساب جدید</a>
                </p>
            </div>
            </div>
        </main>
    );
}

export default LoginPage;
