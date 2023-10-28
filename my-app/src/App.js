import "./App.css";
import Home from "./pages/HomePage";
import NavBar from "./components/Navbar"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Syllabus from "./pages/Syllabus";
import ArticleHome from "./pages/Articles/ArticleHome";
import Unit11 from "./pages/Articles/Unit1/u1_1";
import u1_2 from "./pages/Articles/Unit1/u1_2";
import u1_3 from "./pages/Articles/Unit1/u1_3";
import u1_4 from "./pages/Articles/Unit1/u1_4";
import u1_5 from "./pages/Articles/Unit1/u1_5";
function App() {

    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route index path="/Syllabus" element={<Syllabus/>}/>
                <Route index path="/ArticleHome" element={<ArticleHome/>}/>
                <Route index path="/u1_1" element={<Unit11/>}/>
                <Route index path="/u1_2" element={<u1_2/>}/>
                <Route index path="/u1_3" element={<u1_3/>}/>
                <Route index path="/u1_4" element={<u1_4/>}/>
                <Route index path="/u1_5" element={<u1_5/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;