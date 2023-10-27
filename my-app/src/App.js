import "./App.css";
import Home from "./pages/HomePage";
import NavBar from "./components/Navbar"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Syllabus from "./pages/Syllabus";
import ArticleHome from"./pages/Articles/ArticleHome"

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/Syllabus" element={<Syllabus />} />
        <Route index path="/ArticleHome" element={<ArticleHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;