import { Button, Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function PlayerCard({ player }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/player/${player._id}`);
  };
  return (
    <Card className="max-w-sm border-2">
      <div className="flex flex-col items-center space-y-4">
        <h5 className="text-2xl font-bold tracking-tight font-mono text-gray-900 dark:text-white">
          {player.name}
        </h5>

        <p className="font-mono text-gray-700 dark:text-gray-400">
          {player.team}
        </p>

        <Button onClick={handleClick} color="gray" className="w-fit hover:bg-blue-600">
          Read more
        </Button>
      </div>
    </Card>
  );
}
export default PlayerCard;
