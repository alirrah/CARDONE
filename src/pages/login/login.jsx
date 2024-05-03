import {EyeFill, EyeSlashFill, ArrowRepeat} from "react-bootstrap-icons";
import {Link, useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
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

            navigate('/dashboard');
        }, 2000);
    }

    const changePasswordType = (event) => {
        event.preventDefault();

        setShowPassword(!showPassword);
    }

    return (
        <main className='login'>
            <Link to='/'>
                <img src="src/assets/image/logo.webp" alt="cardone logo"/>
            </Link>

            <div className='box'>
                <h3>ورود به حساب کاربری</h3>

                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <label htmlFor='username'>نام کابری</label>

                            <input type='text' id='username' name='username' required/>
                        </div>

                        <div>
                            <label htmlFor='password'>رمز عبور</label>

                            <div className='password-box'>
                                <input type={showPassword ? 'text' : 'password'} id='password' name='password' required/>

                                <button onClick={changePasswordType}>
                                    {showPassword ? <EyeFill/> : <EyeSlashFill/>}
                                </button>
                            </div>
                        </div>
                    </div>

                    <button type='submit' ref={submitRef}>ورود {showLoading && <ArrowRepeat/>}</button>
                </form>
            </div>
        </main>
    );
}

export default LoginPage;
