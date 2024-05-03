import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/landing/lading.jsx";
import LoginPage from "./pages/login/login.jsx";
import DashboardPage from "./pages/dashboard/dashboard.jsx";
import NotFoundPage from "./pages/not-found/not-found.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path='/' index element={<LandingPage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/dashboard' element={<DashboardPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;