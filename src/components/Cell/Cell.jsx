import css from "./Cell.module.css";

export const Cell = ({ handleClick, symbol }) => {
  return (
    <button type="button" className={css.cell} onClick={handleClick}>
      {symbol}
    </button>
  );
};
