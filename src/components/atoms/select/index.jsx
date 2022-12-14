import React from "react";
import clsx from "clsx";
import CaretDown from "../vectors/caret-down";
import "./select-styles.scss";

const Select = ({ title, twClasses }) => {
  return (
    <div className={clsx("select", twClasses)}>
      <span>{title}</span> <CaretDown />
    </div>
  );
};

export default Select;
