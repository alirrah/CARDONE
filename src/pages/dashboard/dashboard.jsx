import TopBar from "./components/top-bar/top-bar.jsx";
import ChatBox from "./components/chat-box/chat-box.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import './dashborad.scss';
import URL from "../../assets/fake-data/url.jsx";

const DashboardPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem('token') ?? '';

        if (token === '') {
            navigate(`${URL}/login`);
        } else {
            //TODO: check is correct or not
        }
    }, [navigate]);

    return (
        <main className='dashboard'>
            <TopBar/>
            <ChatBox/>
        </main>
    );
}

export default DashboardPage;