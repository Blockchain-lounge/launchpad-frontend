import React from "react";
import clsx from "clsx";
import "./button-styles.scss";
const Button = ({ title, outline, twClasses, onClick, prefix, suffix }) => {
  return (
    <div className={clsx("btn-wrapper", twClasses)} onClick={onClick}>
      <button className={clsx("btn", outline ? "btn-outline" : "btn-primary")}>
        {prefix && <span>{prefix}</span>}
        <span>{title}</span>
        {suffix && <span>{suffix}</span>}
      </button>
    </div>
  );
};

export default Button;
