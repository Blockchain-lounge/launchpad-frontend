import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CaretDown from "../vectors/caret-down";
import CaretUp from "../vectors/caret-up";

import "./aside-drop-down.scss";

const AsideDropDown = ({
  icon,
  label,
  link,
  tag,
  subLinks,
  index,
  isActive,
  activeIndex,
  handleActive,
  value,
}) => {
  const navigate = useNavigate();
  const [activeState, setActiveState] = useState({ state: false, index: -1 });
  const handleisActive = (value) => {
    if (value.hasOwnProperty("subLinks")) {
      if (activeState.state && activeState.index == index) {
        setActiveState({ ...activeState, state: false });
      } else {
        setActiveState({ state: true, index: index });
        localStorage.setItem("activeSubNav", index);
      }
      return;
    } else {
      localStorage.removeItem("activeSubNav");
      navigate(`${value.link}`);
    }
  };
  const activeSubIndex = localStorage.getItem("activeSubNav");
  const currentPath = window.location.pathname;
  console.log(activeSubIndex);
  return (
    <>
      <div className="mb-[0.5rem]" onClick={() => handleisActive(value)}>
        <div
          className={clsx(
            "aside-dropdown-wrapper",
            currentPath == value.link && "bg-[#212346]"
          )}
        >
          <div className="aside-label-icon-wrapper">
            {icon}
            <span className="aside-label">{label}</span>
          </div>
          {link !== undefined ? null : subLinks.length > 0 &&
            activeIndex === 0 &&
            isActive === activeState ? (
            <CaretUp />
          ) : (
            <CaretDown />
          )}
          {tag && <span className="aside-dropdown-tag">{tag}</span>}
        </div>
      </div>
      {activeState.state && activeSubIndex == index && (
        <div className={clsx("flex flex-col gap-y-3")}>
          {subLinks.map((value) => (
            <div
              key={value.label}
              className={clsx("grid grid-cols-[0.25fr_1fr]")}
              onClick={() => navigate(value.link)}
            >
              <div></div>
              <span
                className={`text-[0.9375rem] text-[#B9B9C0] hover:text-white select-none cursor-pointer`}
              >
                {value.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AsideDropDown;
