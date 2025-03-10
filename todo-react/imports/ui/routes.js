import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {WelcomePage} from "../ui/pages/welcome/welcome";
import {App} from "./App";


export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/welcome" element={<WelcomePage/>}/>
            </Routes>
        </Router>
    );
}