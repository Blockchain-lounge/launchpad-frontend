import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import CaretDown from "../vectors/caret-down";

import "./sidebar-menu.scss";

const SidebarMenu = ({ item }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const handleOpenSubmenu = () => setOpenSubmenu(!openSubmenu);

  // const [activeState, setActiveState] = useState({ state: false, index: -1 });
  // const handleisActive = (value) => {
  //   if (value.hasOwnProperty("subLinks")) {
  //     if (activeState.state && activeState.index == index) {
  //       setActiveState({ ...activeState, state: false });
  //     } else {
  //       setActiveState({ state: true, index: index });
  //       localStorage.setItem("activeSubNav", index);
  //     }
  //     return;
  //   } else {
  //     localStorage.removeItem("activeSubNav");
  //     navigate(`${value.link}`);
  //   }
  // };
  // const activeSubIndex = localStorage.getItem("activeSubNav");
  const currentPath = window.location.pathname;

  return item.subLinks ? (
    <div
      className={clsx(
        "sidebar-menu",
        item.link === currentPath && "bg-[#212346]"
      )}
      to={item.link}
    >
      <div className="sidebar-title-wrapper">
        <div className="sidebar-title">
          <span className="sidebar-icon">{item.icon}</span>
          <span className="sidebar-label">{item.label}</span>
        </div>
        <span
          className={clsx(
            "sidebar-toggle-btn",
            openSubmenu && "sidebar-open",
            !item.subLinks ? "hidden" : "block"
          )}
          onClick={handleOpenSubmenu}
        >
          <CaretDown />
        </span>
        {item.tag && <span className="sidebar-tag">{item.tag}</span>}
      </div>
      <div className={clsx("sidebar-submenu", openSubmenu && "sidebar-open")}>
        {item.subLinks &&
          item.subLinks.map((value) => (
            <Link
              key={value.label}
              className="sidebar-submenu-wrapper"
              to={value.link}
            >
              <div></div>
              <span>{value.label}</span>
            </Link>
          ))}
      </div>
    </div>
  ) : (
    <Link
      className={clsx(
        "sidebar-menu",
        item.link === currentPath && "bg-[#212346]"
      )}
      to={item.link}
    >
      <div className="sidebar-title-wrapper">
        <div className="sidebar-title">
          <span className="sidebar-icon">{item.icon}</span>
          <span className="sidebar-label">{item.label}</span>
        </div>
        <span
          className={clsx(
            "sidebar-toggle-btn",
            openSubmenu && "sidebar-open",
            !item.subLinks ? "hidden" : "block"
          )}
          onClick={handleOpenSubmenu}
        >
          <CaretDown />
        </span>
        {item.tag && <span className="sidebar-tag">{item.tag}</span>}
      </div>
    </Link>
  );
};

export default SidebarMenu;
