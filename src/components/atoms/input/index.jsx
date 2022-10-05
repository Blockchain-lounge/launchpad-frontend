import clsx from "clsx";
import SearchIcon from "../vectors/search-icon";
import "./input-style.scss";

const InputField = ({ placeholder = "Search Collections", twClasses }) => {
  return (
    <div className={clsx("input-wrapper", twClasses)}>
      <SearchIcon />
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default InputField;
