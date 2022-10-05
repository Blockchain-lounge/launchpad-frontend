import NavBar from "../../components/organisms/nav-bar";
import AsideBar from "../../components/molecules/aside";
import "./layout-1.scss";
const DashboardLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="layout-wrapper">
        <aside className="aside">
          <AsideBar />
        </aside>
        <div className="aside-2">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
