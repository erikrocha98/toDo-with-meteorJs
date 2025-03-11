import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {WelcomePage} from "../ui/pages/welcome/welcome";
import {App} from "./App";
import {TaskList} from "./pages/tasklist/taskList";
import {Login} from "./pages/login/login";


export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/welcome" element={<WelcomePage/>}/>
                <Route path ="/tasks" element={<TaskList/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    );
}