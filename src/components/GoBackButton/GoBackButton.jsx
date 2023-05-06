import css from "./GoBackButton.module.css";

export const GoBackButton = ({ onClick }) => (
  <button className={css["go-back-button"]} type="button" onClick={onClick}>
    ⬅️
  </button>
);
