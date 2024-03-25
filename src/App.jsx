import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/login.jsx";
import NotFoundPage from "./pages/not-found/not-found.jsx";
import './App.scss';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
