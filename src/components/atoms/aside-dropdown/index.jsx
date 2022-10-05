import clsx from "clsx";
import { useCallback, useState } from "react";
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
}) => {
  const [activeState, setActiveState] = useState(false);
  const handleisActive = useCallback(() => {
    handleActive(index);
    setActiveState(!activeState);
  }, [isActive]);
  return (
    <div className="mb-[0.5rem]" onClick={handleisActive}>
      <div
        className={clsx("aside-dropdown-wrapper", isActive && "bg-[#212346]")}
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
      {subLinks !== undefined && (
        <div
          className={clsx(
            "flex flex-col gap-y-3",
            activeIndex === 0 && isActive === activeState ? "my-4" : "hidden"
          )}
        >
          {subLinks.map((value) => (
            <div
              key={value.label}
              className={clsx("grid grid-cols-[0.25fr_1fr]")}
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
    </div>
  );
};

export default AsideDropDown;
