import React from 'react'

function PlayersPage({players}) {
  return (
    <div>
        {players && players.map(player => (
            <div key = {player._id}>
            <h1>Player Name: {player.name}</h1>
            <h2>Team: {player.team}</h2>
            <h2>Rating: {player.rating}</h2>
            <h2>Salary: {player.salary}</h2>
            <h2>Years Active: {player.active}</h2>
            <h2>Comments: {player.comment}</h2>    
            </div>
        ))}
    </div>
  )
}

export default PlayersPage