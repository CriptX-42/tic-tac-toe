import { Player } from "../types/types";

type SquareProps = {
  value: Player | null;
  onClick: () => void;
  isWinner: boolean;
};

const getTextColor = (value: Player | null) =>
  value === "X" ? "text-pink" : "text-white";

const getBorderColor = (value: Player | null, isWinner: boolean) => {
  if (!isWinner) return "border-gray-200";

  return value === "X" ? "border-pink" : "border-white";
};

function Square({ value, onClick, isWinner }: SquareProps) {
  return (
    <button
      onClick={onClick}
      className={`mx-auto h-32 w-32 rounded-xl border-4 border-gray-200 text-4xl font-bold ${getTextColor(value)} ${getBorderColor(value, isWinner)}`}
    >
      {value}
    </button>
  );
}

export default Square;
