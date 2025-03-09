import { useId } from "react";
import css from "./SearchBlock.module.css";

const maxLength = 60;

function SearchBlock({ value, onFilter }) {
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

export default SearchBlock;
