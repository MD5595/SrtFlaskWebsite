import "./App.css";
import Home from "./pages/HomePage";
import NavBar from "./components/Navbar"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Syllabus from "./pages/Syllabus";
import ArticleHome from "./pages/Articles/ArticleHome";
import Unit11 from "./pages/Articles/Unit1/u1_1";
import Unit12 from "./pages/Articles/Unit1/u1_2";
import Unit13 from "./pages/Articles/Unit1/u1_3";
import Unit14 from "./pages/Articles/Unit1/u1_4";
import Unit15 from "./pages/Articles/Unit1/u1_5";

function App() {

    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route index path="/Syllabus" element={<Syllabus/>}/>
                <Route index path="/ArticleHome" element={<ArticleHome/>}/>
                <Route index path="/u1_1" element={<Unit11/>}/>
                <Route index path="/u1_2" element={<Unit12/>}/>
                <Route index path="/u1_3" element={<Unit13/>}/>
                <Route index path="/u1_4" element={<Unit14/>}/>
                <Route index path="/u1_5" element={<Unit15/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;