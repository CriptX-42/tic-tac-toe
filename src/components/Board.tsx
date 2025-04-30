import { WINNING_COMBINATIONS } from "../helpers/game-logic";
import { BoardState, Player } from "../types/types";
import Square from "./Square";

type BoardProps = {
  board: BoardState;
  onClick: (index: number) => void;
  winner: Player | null;
};

function Board({ board, winner, onClick }: BoardProps) {
  const isWinner = (index: number): boolean => {
    if (!winner) return false;

    return WINNING_COMBINATIONS.some(
      (combo) =>
        combo.includes(index) && combo.every((i) => board[i] === winner),
    );
  };

  return (
    <div className="grid max-w-[28rem] grid-cols-3 gap-4">
      {board.map((square, index) => (
        <Square
          isWinner={isWinner(index)}
          key={index}
          value={square}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
}

export default Board;
