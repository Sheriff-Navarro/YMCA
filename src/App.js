import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import Register from "./components/Register/Register"
import QuestionsPage from "./Pages/QuestionsPage/QuestionsPage";

function App() {
    const user = false;
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="register" element={user ? <Navigate to='/'/> : <Register />} />
                <Route path="questions" element={<QuestionsPage />} />
                <Route path="profile" element={<DashboardPage />} />
            </Routes>
        </div>
    );
}

export default App;
