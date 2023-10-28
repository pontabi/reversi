import "./GameBoard.css";

const initial_baord = Array.from({ length: 8 }, () => Array(8).fill(""));

export default function GameBoard() {
  let GameBaord = initial_baord;
  return (
    <ol id="game-board">
      {initial_baord.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}></li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
