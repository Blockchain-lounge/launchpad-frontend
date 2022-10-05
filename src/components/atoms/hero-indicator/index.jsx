import React from "react";
import NextIndicator from "../vectors/next-icon";
import clsx from "clsx";
import "./hero-indicator-styles.scss";

const HeroIndicator = () => {
  const sizes = [
    "h-[1.125rem] w-[1.125rem]",
    "h-[0.8125rem] w-[0.8125rem]",
    "h-[0.6875rem] w-[0.6875rem]",
    "h-[0.5625rem] w-[0.5625rem]",
    "h-[0.5rem] w-[0.5rem]",
  ];
  return (
    <div className="hero-indicator">
      {sizes.map((size, i) => (
        <div
          key={size}
          className={clsx(
            `rounded-[50%]`,
            size,
            i === 0 ? "bg-white" : "bg-[#5c5c6c]"
          )}
        ></div>
      ))}
      <NextIndicator />
    </div>
  );
};

export default HeroIndicator;
