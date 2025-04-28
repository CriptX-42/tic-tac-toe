import { BoardState } from "../types/types";
import Square from "./Square";

type BoardProps = {
  board: BoardState;
};

function Board({ board }: BoardProps) {
  return (
    <div className="grid max-w-[28rem] grid-cols-3 gap-4">
      {board.map((square, index) => (
        <Square key={index} value={square} />
      ))}
    </div>
  );
}

export default Board;
