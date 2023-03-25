import "./App.css";
import RegistrationForm from "./Component/RegistrationForm/RegistrationForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Institute from "./Component/Institute/Institute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="institute" element={<Institute />} />
                <Route path="register" element={<RegistrationForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
