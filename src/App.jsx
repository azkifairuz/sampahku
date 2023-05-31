import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import NotFound from "./pages/_404";
import Home from "./pages/beranda";
import OnBoarding from "./pages/onboarding";
import Login from "./pages/login";
import Singup from "./pages/signup";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="onboarding" element={<OnBoarding />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Singup />} />
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;