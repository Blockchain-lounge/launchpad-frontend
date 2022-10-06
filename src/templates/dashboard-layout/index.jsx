import clsx from "clsx";
import NavBar from "../../components/organisms/nav-bar";
import AsideBar from "../../components/molecules/aside";
import "./layout-1.scss";
const DashboardLayout = ({ children, active }) => {
  return (
    <div>
      <NavBar />
      <div className="layout-wrapper">
        {active && <div className="layout-overlay"></div>}
        <aside
          className={clsx("aside", active ? "-left-[-2rem]" : "-left-[40rem]")}
        >
          <AsideBar />
        </aside>
        <div className="aside-2 text-white">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
