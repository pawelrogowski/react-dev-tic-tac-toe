import css from "./Cell.module.css";

export const Cell = ({ handleClick, symbol }) => {
  const hoverColorClass = symbol === null ? css["cell-green"] : css["cell-red"];

  return (
    <button
      type="button"
      className={`${hoverColorClass} ${css.cell}`}
      onClick={handleClick}>
      {symbol}
    </button>
  );
};
