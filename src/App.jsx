import "./App.css";
import { Cell } from "./components/Cell/Cell";
import { ResetButton } from "./components/ResetButton/ResetButton";
import { GoBackButton } from "./components/GoBackButton/GoBackButton";
import { useState } from "react";

// In App.js

export default function App() {
  const [nextSymbol, setNextSymbol] = useState("❌");
  const [cells, setCells] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [history, setHistory] = useState([]);
  const [currentMove, setCurrentMove] = useState(0);

  const handleResetBoard = () => {
    setNextSymbol("❌");
    setWinner(null);
    setCells(Array(9).fill(null));
  };
  const winningCombinations = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (cells) => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
  };

  const handleCellToggle = (index) => {
    const newCells = [...cells];
    if (newCells[index] === null && winner === null) {
      // only allow moves if there is no winner
      newCells[index] = nextSymbol;
      const newHistory = [...history, newCells]; // add the new state to the history
      setCells(newCells);
      setHistory(newHistory);
      setCurrentMove(newHistory.length - 1);
      setNextSymbol(nextSymbol === "❌" ? "🇴" : "❌");
      setWinner(calculateWinner(newCells));
    }
  };

  const handleGoBack = () => {
    if (currentMove > 0) {
      const newHistory = history.slice(0, currentMove); // remove the last state from the history
      const prevBoard = newHistory[newHistory.length - 1]; // get the previous state
      setCells(prevBoard);
      setHistory(newHistory);
      setCurrentMove(currentMove - 1); // set the current move to the previous state
      setNextSymbol(nextSymbol === "❌" ? "🇴" : "❌");
      setWinner(calculateWinner(prevBoard));
    } else {
      handleResetBoard();
      setHistory([]);
      setCurrentMove(0);
      setNextSymbol("❌");
    }
  };

  return (
    <div className="container">
      <div className="button-container">
        <ResetButton onClick={handleResetBoard}></ResetButton>
        <GoBackButton onClick={handleGoBack}></GoBackButton>
      </div>
      <div className="board">
        {" "}
        <div className="cell-row">
          <Cell handleClick={() => handleCellToggle(0)} symbol={cells[0]} />
          <Cell handleClick={() => handleCellToggle(1)} symbol={cells[1]} />
          <Cell handleClick={() => handleCellToggle(2)} symbol={cells[2]} />
        </div>
        <div className="cell-row">
          <Cell handleClick={() => handleCellToggle(3)} symbol={cells[3]} />
          <Cell handleClick={() => handleCellToggle(4)} symbol={cells[4]} />
          <Cell handleClick={() => handleCellToggle(5)} symbol={cells[5]} />
        </div>
        <div className="cell-row">
          <Cell handleClick={() => handleCellToggle(6)} symbol={cells[6]} />
          <Cell handleClick={() => handleCellToggle(7)} symbol={cells[7]} />
          <Cell handleClick={() => handleCellToggle(8)} symbol={cells[8]} />
        </div>
      </div>
      {winner ? <div className="winner">{winner} WINS!</div> : null}
    </div>
  );
}
