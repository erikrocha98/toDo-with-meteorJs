import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { WelcomePage } from "./pages/welcome";
import { App } from "./App";


export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage/>} />
                <Route path="/aplicacao" element={<App/>}/>
            </Routes>
        </Router>
    );
}