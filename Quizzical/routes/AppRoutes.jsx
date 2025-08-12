import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Quizzes from "../pages/quizzes";
export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quizzes" element={<Quizzes />} />
        </Routes>
    )
}