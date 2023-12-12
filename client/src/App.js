import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mobile from "./components/Mobile";
import Otp from "./components/Otp";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Mobile />} />
                <Route path="otp" element={<Otp />} />
            </Routes>
        </Router>
    );
}

export default App;
