import React, {useEffect, useState,createContext,useContext} from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,PieChart, Pie,CartesianGrid } from 'recharts';
import axios from "axios";
import { baseURL } from '../config';

export default function DataPage() {
    const [score, setScore] = useState([]);
    const username = localStorage.getItem('username');

    useEffect(() => {
    axios.get(baseURL +'/getQuizScores', {params: {username: username}}).then(response => {
      console.log("SUCCESS", response);
      setScore(response.data);
    }).catch(error => {
      console.log(error);
    })}, [])
    const data = score.scores;

      return (
        <div className="container">
      <h1>Data</h1>
      <p>{score.scores}</p>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={score.scores}>
        <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="test" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Test Score" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      </div>

      );
}
