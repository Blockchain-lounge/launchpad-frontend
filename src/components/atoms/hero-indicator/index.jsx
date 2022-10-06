import React from "react";
import NextIndicator from "../vectors/next-icon";
import clsx from "clsx";
import "./hero-indicator-styles.scss";

const HeroIndicator = ({ arr, active, setActiveData }) => {
  const sizes = [
    "h-[1.125rem] w-[1.125rem]",
    "h-[0.8125rem] w-[0.8125rem]",
    "h-[0.6875rem] w-[0.6875rem]",
    "h-[0.5625rem] w-[0.5625rem]",
    "h-[0.5rem] w-[0.5rem]",
  ];
  return (
    <div className="hero-indicator">
      {arr.map((data) => (
        <div
          key={data.title}
          className={clsx(
            "rounded-[50%]",
            data.title === active.title
              ? "h-[1.125rem] w-[1.125rem] bg-white"
              : "h-[0.6875rem] w-[0.6875rem] bg-[#5c5c6c]"
          )}
          onClick={() => setActiveData(data)}
        ></div>
      ))}
      <span className="hidden lg:block">
        <NextIndicator />
      </span>
    </div>
  );
};

export default HeroIndicator;
