import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import NotFound from "./pages/_404";
import Home from "./pages/beranda";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;