import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {WelcomePage} from "../ui/pages/welcome/welcome";
import {App} from "./App";
import {Login} from "./pages/login/login";
import { NotFound } from "./pages/notFound";
import { EditPage } from "./pages/edit";
import {Header} from "./components/header";
import { UserProfile } from "./pages/userProfile";

export default function AppRoutes() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/welcome" element={<WelcomePage/>}/>
                <Route path="/app" element={<App/>}/>
                <Route path="/edit/:id" element={<EditPage/>}/>
                <Route path="/profile" element={<UserProfile/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    );
}