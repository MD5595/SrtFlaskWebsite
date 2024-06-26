
import "./App.css";
import FlashcardPage from './pages/FlashcardPage';
import Home from "./pages/HomePage";
import NavBar from "./components/Navbar"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Syllabus from "./pages/Syllabus";
import ArticleHome from "./pages/Articles/ArticleHome";
import LandingPage, { username } from './pages/LandingPage';

import Unit11 from "./pages/Articles/Unit1/u1_1";
import Unit12 from "./pages/Articles/Unit1/u1_2";
import Unit13 from "./pages/Articles/Unit1/u1_3";
import Unit14 from "./pages/Articles/Unit1/u1_4";
import Unit15 from "./pages/Articles/Unit1/u1_5";
import Unit21 from "./pages/Articles/Unit2/u2_1";
import Unit22 from "./pages/Articles/Unit2/u2_2";
import Unit23 from "./pages/Articles/Unit2/u2_3";
import Unit31 from "./pages/Articles/Unit3/u3_1";
import Unit32 from "./pages/Articles/Unit3/u3_2";
import Unit41 from "./pages/Articles/Unit4/u4_1";
import Unit42 from "./pages/Articles/Unit4/u4_2";
import Unit51 from "./pages/Articles/Unit5/u5_1";
import Unit52 from "./pages/Articles/Unit5/u5_2";
import Unit61 from "./pages/Articles/Unit6/u6_1";
import Unit62 from "./pages/Articles/Unit6/u6_2";
import Quiz1 from "./pages/Quizzes/quiz1";
import Quiz2 from "./pages/Quizzes/quiz2";
import Quiz3 from "./pages/Quizzes/quiz3";
import Quiz4 from "./pages/Quizzes/quiz4";
import Quiz5 from "./pages/Quizzes/quiz5";
import Quiz6 from "./pages/Quizzes/quiz6";
import KeyPage from "./pages/KeyPage";
import PracticeCoding from "./pages/PracticeCoding";


import DataPage from "./pages/DataPage";
import PostTest from "./pages/PostTest";
import PreTest from "./pages/PreTest";

import Timer from "./components/Timer";
function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route index path="/" element={<LandingPage/>}/>
                <Route index path="/HomePage" element={<Home/>}/>
                <Route index path="/Syllabus" element={<Syllabus/>}/>
                <Route index path="/ArticleHome" element={<ArticleHome/>}/>
                <Route index path="/u1_1" element={<Unit11/>}/>
                <Route index path="/u1_2" element={<Unit12/>}/>
                <Route index path="/u1_3" element={<Unit13/>}/>
                <Route index path="/u1_4" element={<Unit14/>}/>
                <Route index path="/u1_5" element={<Unit15/>}/>
                <Route index path="/u2_1" element={<Unit21/>}/>
                <Route index path="/u2_2" element={<Unit22/>}/>
                <Route index path="/u2_3" element={<Unit23/>}/>
                <Route index path="/u3_1" element={<Unit31/>}/>
                <Route index path="/u3_2" element={<Unit32/>}/>
                <Route index path="/u4_1" element={<Unit41/>}/>
                <Route index path="/u4_2" element={<Unit42/>}/>
                <Route index path="/u5_1" element={<Unit51/>}/>
                <Route index path="/u5_2" element={<Unit52/>}/>
                <Route index path="/u6_1" element={<Unit61/>}/>
                <Route index path="/u6_2" element={<Unit62/>}/>
                <Route index path="/quiz1" element={<Quiz1/>}/>
                <Route index path="/quiz2" element={<Quiz2/>}/>
                <Route index path="/quiz3" element={<Quiz3/>}/>
                <Route index path="/quiz4" element={<Quiz4/>}/>
                <Route index path="/quiz5" element={<Quiz5/>}/>
                <Route index path="/quiz6" element={<Quiz6/>}/>
                <Route index path="/Flashcards" element={<FlashcardPage/>}/>
                <Route index path="/DataPage" element={<DataPage/>}/>
                <Route index path="/PreTest" element={<PreTest/>}/>
                <Route index path="/ABCDEFG" element={<PostTest/>}/>
                <Route index path="/KeyPage" element={<KeyPage/>}/>
                <Route index path="/PracticeCoding" element={<PracticeCoding/>}/>


            </Routes>
        </BrowserRouter>
    );
}
export default App;