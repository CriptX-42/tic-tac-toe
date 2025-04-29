import { Player } from "../types/types";

type SquareProps = {
  value: Player | null;
  onClick: () => void;
};

const getTextColor = (value: Player | null) =>
  value === "X" ? "text-pink" : "text-white";

function Square({ value, onClick }: SquareProps) {
  return (
    <button
      onClick={onClick}
      className={`mx-auto h-32 w-32 rounded-xl border-4 border-gray-200 text-4xl font-bold ${getTextColor(value)}`}
    >
      {value}
    </button>
  );
}

export default Square;
