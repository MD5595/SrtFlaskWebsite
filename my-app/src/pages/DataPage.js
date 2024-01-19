import React, {useEffect, useState,createContext,useContext} from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,PieChart, Pie } from 'recharts';
import axios from "axios";
function DataPage() {
    const [score, setScore] = useState([]);
    const username = localStorage.getItem('username');

  useEffect(() => {
    axios.get(`http://localhost:5000/getUserScore?username=${username}`).then(response => {
      console.log("SUCCESS", response);
      setScore(response.data.score);
    }).catch(error => {
      console.log(error);
    });
  }, [username]);

    const data = score;

  return (
    <div className="container">
      <h1>Data</h1>
      <p>{score}</p>
      <ResponsiveContainer width="50%" height={150}>
        <BarChart data={score}>
          <XAxis dataKey="Test" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Test Score" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

<ul>
        {score.map((item, index) => (
          <li key={index}>{`Test: ${item.test}, Score: ${item.score}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataPage;