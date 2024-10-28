import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeamsPage from "./pages/TeamsPage";


function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch('http://localhost:4000/teams');
      const teamData = await res.json();
      // console.log(teamData);
      setTeams(teamData)
      
    }
    fetchStats();
  }, []);
  
  return (
    <Routes>
      <Route path="/" element={<HomePage teams={teams}/>}/>
      <Route path="/teams" element={<TeamsPage teams={teams}/>}/>
    </Routes>
      

  )
}

export default App
