import {Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Navbar from "./components/layout/navbar";

function App() {
    <Routes>
        <Route path="/" element={Layout}>
            <Route index path="debug" element={Navbar}></Route>
        </Route>
    </Routes>
}

export default App;