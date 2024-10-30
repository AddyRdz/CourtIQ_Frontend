import React from 'react'


function TeamsPage({teams}) {
  return (
    <div>
        {teams && teams.map(team => (
            <div key = {team._id}>
            <h1>NBA TEAM: {team.name}</h1>
            <h2>Location: {team.city}</h2>   
            </div>
        ))}
    </div>
  )
}

export default TeamsPage