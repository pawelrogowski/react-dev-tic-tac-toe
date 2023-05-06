import "./App.css";
import { Cell } from "./components/Cell/Cell";
import { ResetButton } from "./components/ResetButton/ResetButton";
import { useState } from "react";

// In App.js

export default function App() {
  const [nextSymbol, setNextSymbol] = useState("❌");
  const [cells, setCells] = useState(Array(9).fill(null));

  const resetBoard = () => setCells(Array(9).fill(null));

  const handleCellToggle = (index) => {
    const newCells = [...cells];
    if (newCells[index] === null) {
      newCells[index] = nextSymbol;
      setCells(newCells);
      setNextSymbol(nextSymbol === "❌" ? "🇴" : "❌");
    }
  };

  return (
    <div className="container">
      <div className="">
        <ResetButton onClick={resetBoard}></ResetButton>
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
    </div>
  );
}
