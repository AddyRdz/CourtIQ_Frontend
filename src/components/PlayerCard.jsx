import { Button, Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function PlayerCard({ player }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/player/${player._id}`);
  };
  return (
    <Card className="cards max-w-sm rounded-2xl shadow-lg p-6">
      <h5 className="cards text-2xl font-bold tracking-tight text-gray-900 text-center dark:text-white">
        {player.name}
      </h5>
      <p className="cards font-normal text-gray-700 dark:text-gray-400 text-center">
        {player.team}
      </p>
      <div className="cards flex justify-center mt-4">
      <Button
        onClick={handleClick}
        className="cards text-gray-700 px-4 mt-2 w-fit rounded-lg hover:bg-blue-600"
      >
        Read more
      </Button>  
      </div>
      
    </Card>
  );
}
