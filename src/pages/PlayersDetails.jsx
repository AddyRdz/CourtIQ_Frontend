import React from "react";
import { useParams } from "react-router-dom";

function PlayersDetails({ players }) {
  const { id } = useParams();
  const player = players.find((player) => player._id === id);
  return (
    <div className="playerDetails flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {player.name}
      <h2>Team: {player.team}</h2>
      <h2>Rating: {player.rating}</h2>
      <h2>Salary: ${player.salary}</h2>
      <h2>Years Active: {player.yearsActive}</h2>
      <h2>Comments: {player.comment}</h2>{" "}
    </div>
  );
}

export default PlayersDetails;
