import {Link} from "react-router-dom";
import './not-found.scss';

const NotFoundPage = () => {
    return (
        <div className="not-found">
                <h1 className="not-found-title">404</h1>
                <p className="not-found-message">متاسفانه صفحه مورد نظر شما یافت نشد</p>
                <Link to="/CARDONE/dashboard/" className="not-found-link">بازگشت به صفحه اصلی</Link>
            
        </div>
    );
}

export default NotFoundPage;
