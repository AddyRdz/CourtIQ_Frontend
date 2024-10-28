import React from 'react'


export default function TeamsPage({teams}) {
  return (
    <div>
        {teams && teams.map(team => (
            <div key = {team._id}>
            <h1>NBA TEAM: {team.name}</h1>
            <h2>Location: {team.location}</h2>
            <h2>Championships: {team.championships}</h2>
            <h2>Comments: {team.comment}</h2>    
            </div>
        ))}
    </div>
  )
}
