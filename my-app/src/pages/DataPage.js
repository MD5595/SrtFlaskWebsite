import React, {useEffect} from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,PieChart, Pie } from 'recharts';
import axios from "axios";
import {LandingPage, UserProvider} from "./pages/LandingPage";

function DataPage() {
    const [score, setScore] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/getUserScore?username=${username}`).then(response => {
      console.log("SUCCESS", response);
      setScore(response.data.scores);
    }).catch(error => {
      console.log(error);
    });
  }, []);

    const data = score;

  const data2 = [
    { name: 'Category 1', value: 10 },
    { name: 'Category 2', value: 15 },
    { name: 'Category 3', value: 8 },

  ];
    const datatime = [
    { name: 'Article 1.3', value: 10 },
    { name: 'Flashcards', value: 15 },
    { name: 'Article 4.1', value: 8 },

  ];

  return (
    <div className="container">
      <h1>Data</h1>
      <p>Scores</p>
      <ResponsiveContainer width="50%" height={150}>
        <BarChart data={data}>
          <XAxis dataKey="Test" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Test Score" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      
      <h1>Time</h1>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie dataKey="value" data={datatime} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DataPage;