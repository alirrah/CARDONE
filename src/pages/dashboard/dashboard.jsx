import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import SideBar from "../../components/side-bar/side-bar.jsx";
import './dashborad.scss';

const DashboardPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem('token') ?? '';

        if (token === '') {
            navigate(`${Url}/login`);
        } else {
            //TODO: check is correct or not
        }
    }, [navigate]);

    return (
        <main className='dashboard'>
            <SideBar/>
        </main>
    );
}

export default DashboardPage;