import "./App.css";
import { Route, Routes } from "react-router-dom";
import PFHome from "./pages/PFHome";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import { ToastContainer } from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<PFHome />} />
                <Route path="/Login" element={<Auth />} />
                <Route path="/Register" element={<Auth register />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Projects" element={<Projects />} />
            </Routes>
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default App;
