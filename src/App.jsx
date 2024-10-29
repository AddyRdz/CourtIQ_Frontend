/* cSpell:disable */
import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeamsPage from "./pages/TeamsPage";


function App() {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState();

  useEffect(() => {
    const fetchPlayers = async () => {
      const res = await fetch('http://localhost:4000/players');
      const playerData = await res.json();
      setPlayers(playerData)
      
    }
    fetchPlayers();
  }, []);

  useEffect(() => {
    const fetchTeams = async () => {
      const res = await fetch('https://v2.nba.api-sports.io/teams?id=14', {
        headers: {
          'x-rapidapi-host': 'v2.nba.api-sports.io',
          'x-rapidapi-key': import.meta.env.VITE_API_KEY
        }
      });
      const teamData = await res.json();
      setTeams(teamData.response)
    }
    fetchTeams();
  }, []);

  
  return (
    <Routes>
      <Route path="/" element={<HomePage teams={teams} players={players}/>} />
      <Route path="/teams" element={<TeamsPage teams={teams}/>}/>
      <Route path="/players" element={<TeamsPage players={players}/>}/>
    </Routes>

  )
}

export default App
