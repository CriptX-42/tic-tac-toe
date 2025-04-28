import Square from "./Square";

function Board() {
  return (
    <div className="grid max-w-[28rem] grid-cols-3 gap-4">
      <Square />
      <Square />
      <Square />

      <Square />
      <Square />
      <Square />

      <Square />
      <Square />
      <Square />
    </div>
  );
}

export default Board;
