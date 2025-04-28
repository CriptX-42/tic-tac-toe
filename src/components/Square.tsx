import { Player } from "../types/types";

type SquareProps = {
  value: Player | null;
};

function Square({ value }: SquareProps) {
  return (
    <button className="mx-auto h-32 w-32 rounded-xl border-4 border-gray-200 text-4xl font-bold">
      {value}
    </button>
  );
}

export default Square;
