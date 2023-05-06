import css from "./ResetButton.module.css";
export const ResetButton = ({ onClick }) => (
  <button className={css["clear-board-button"]} type="button" onClick={onClick}>
    🧹
  </button>
);
