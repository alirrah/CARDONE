import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/landing/lading.jsx";
import LoginPage from "./pages/login/login.jsx";
import DashboardPage from "./pages/dashboard/dashboard.jsx";
import NotFoundPage from "./pages/not-found/not-found.jsx";
import Url from "./assets/fake-data/url.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path={`${Url}/`} index element={<LandingPage/>}/>
                    <Route path={`${Url}/login`} element={<LoginPage/>}/>
                    <Route path={`${Url}/dashboard`} element={<DashboardPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;