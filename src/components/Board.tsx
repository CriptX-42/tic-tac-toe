import { BoardState } from "../types/types";
import Square from "./Square";

type BoardProps = {
  board: BoardState;
  onClick: (index: number) => void;
};

function Board({ board, onClick }: BoardProps) {
  return (
    <div className="grid max-w-[28rem] grid-cols-3 gap-4">
      {board.map((square, index) => (
        <Square key={index} value={square} onClick={() => onClick(index)} />
      ))}
    </div>
  );
}

export default Board;
