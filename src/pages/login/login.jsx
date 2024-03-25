import {useNavigate} from "react-router-dom";
import './login.scss';
import {useRef} from "react";

function LoginPage() {

    const navigate = useNavigate();
    const submitRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        submitRef.current.disabled = true;

        let form = event.target;

        let username = form.username.value;
        let password = form.password.value;

        console.log({"Username": username, "Password": password});

        setTimeout(() => {
            submitRef.current.disabled = false;
            navigate('/dashboard');
        }, 2000);
    }

    return (
        <main className='login'>
            <img src="src/assets/image/logo.webp" alt="cardone logo"/>

            <div className='box'>
                <h3>ورود به حساب کاربری</h3>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='username'>نام کابری</label>
                        <input type='text' id='username' required/>
                    </div>

                    <div>
                        <label htmlFor='password'>رمز عبور</label>
                        <input type='password' id='password'/>
                    </div>

                    <input type='submit' value='ورود' ref={submitRef}/>
                </form>
            </div>
        </main>
    );
}

export default LoginPage;
