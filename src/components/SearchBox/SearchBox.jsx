import { useId } from "react";
import css from "./SearchBox.module.css";

const maxLength = 60;

function SearchBox({ value, onFilter }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className={css.label}>
        Find contacts by name
      </label>
      <input
        id={id}
        value={value}
        onChange={(event) => onFilter(event.target.value)}
        size={maxLength}
        maxLength={maxLength}
      />
    </div>
  );
}

export default SearchBox;
