import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "flowbite-react";

function PlayersDetails({ players }) {
  const { id } = useParams();
  const player = players.find((player) => player._id === id);
  if (!player) {
    return (
      <div className="playerDetails flex justify-center items-center min-h-screen bg-gray-100 p-4">
        Player not found
      </div>
    );
  }

  return (
    <div className="playerDetails flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="max-w-md w-full border-4">
        <h2 className="playerDetails text-2xl font-bold text-center mb-4">{player.name}</h2>
        <div className="space-y-2">
          <h3 className="playerDetails text-lg font-mono">
            Team: <span className="font-mono">{player.team}</span>
          </h3>
          <h3 className="playerDetails text-lg font-semibold">
            Rating: <span className="font-mono">{player.rating}</span>
          </h3>
          <h3 className="playerDetails text-lg font-semibold">
            Salary: <span className="font-mono">${player.salary}</span>
          </h3>
          <h3 className="playerDetails text-lg font-semibold">
            Years Active:
            <span className="font-mono">{player.yearsActive}</span>
          </h3>
          <h3 className="playerDetails text-lg font-semibold">
            Comments: <span className="font-mono">{player.comment}</span>
          </h3>
        </div>
      </Card>
    </div>
  );
}

export default PlayersDetails;
