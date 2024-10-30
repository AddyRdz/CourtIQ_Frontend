import PlayerCard from '../components/PlayerCard'

function PlayersPage({players}) {
  return (
    <div>
    {players && players.map((player) => (
      <PlayerCard key={player._id} player={player}/>
    ))}  
    </div>
    
  )
}

export default PlayersPage