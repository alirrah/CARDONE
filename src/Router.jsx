import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/landing/lading.jsx";
import LoginPage from "./pages/login/login.jsx";
import DashboardPage from "./pages/dashboard/dashboard.jsx";
import NotFoundPage from "./pages/not-found/not-found.jsx";
import CustomerPage from "./pages/customer/customer.jsx";
import NewCustomerPage from "./pages/new-customer/new-customer.jsx";
import CarPage from "./pages/car/car.jsx";
import NewCarPage from "./pages/new-car/new-car.jsx";
import ProfilePage from "./pages/profile/profile.jsx";
import Url from "./assets/fake-data/url.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path={`${Url}/`} index element={<LandingPage/>}/>
                    <Route path={`${Url}/login`} element={<LoginPage/>}/>
                    <Route path={`${Url}/dashboard`} element={<DashboardPage/>}/>
                    <Route path={`${Url}/dashboard/customer`} element={<CustomerPage/>}/>
                    <Route path={`${Url}/dashboard/customer/new`} element={<NewCustomerPage/>}/>
                    <Route path={`${Url}/dashboard/car`} element={<CarPage/>}/>
                    <Route path={`${Url}/dashboard/car/new`} element={<NewCarPage/>}/>
                    <Route path={`${Url}/dashboard/profile`} element={<ProfilePage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;