import { Button, Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function PlayerCard({player}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/player/${player._id}`);
    }
  return (
    <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {player.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      {player.team}
      </p>
      <Button onClick={handleClick} className="text-gray-700 px-4 rounded=true hover:bg-blue-600">
        Read more
      </Button>
    </Card>

  );
}
