import React, {useEffect, useState,createContext,useContext} from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,PieChart, Pie,CartesianGrid } from 'recharts';
import axios from "axios";
import { baseURL } from '../config';

export default function DataPage() {
    const [score, setScore] = useState([]);
    const username = localStorage.getItem('username');
    // const data = score.scores;
    const data = [
      { name: "Geeksforgeeks", students: 400 },
      { name: "Technical scripter", students: 700 },
      { name: "Geek-i-knack", students: 200 },
      { name: "Geek-o-mania", students: 1000 },
  ];

    useEffect(() => {
    axios.get(baseURL +'/getQuizScores', {params: {username: username}}).then(response => {
      console.log("SUCCESS", response);
      setScore(response.data);
    }).catch(error => {
      console.log(error);
    })}, [])

      return (
        <div className="container">
      <h1>Data</h1>
      <ResponsiveContainer width="100%" height={150}>
        <h2>Quiz Scores</h2>
      <BarChart width={600} height={600} data={score}>
            <Bar dataKey="score" fill="green" />
            <XAxis dataKey="test" />
            <YAxis />
        </BarChart>
      </ResponsiveContainer>
      </div>

      );
}
