import React from "react";
import clsx from "clsx";
import "./heading-style.scss";

const Heading = ({ title, twClasses }) => {
  return <h1 className={clsx("hd", twClasses)}>{title}</h1>;
};

export default Heading;
