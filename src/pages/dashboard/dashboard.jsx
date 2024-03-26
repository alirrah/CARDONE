import TopBar from "./components/top-bar/top-bar.jsx";
import ChatBox from "./components/chat-box/chat-box.jsx";
import './dashborad.scss';
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function DashboardPage () {
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem('token') ?? '';

        if (token == null || token === '') {
            navigate('/');
        } else {
            //TODO: check is correct or not
        }
    }, []);

    return(
        <main className='dashboard'>
            <TopBar />
            <ChatBox />
        </main>
    );
}

export default DashboardPage;