import PlayerCard from "../components/PlayerCard";

function PlayersPage({ players }) {
  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-center gap-4">
        {players &&
          players.map((player) => (
            <PlayerCard key={player._id} player={player} />
          ))}
      </div>
    </div>
  );
}

export default PlayersPage;
