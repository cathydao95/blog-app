import { Link, Outlet } from "react-router-dom";
import { VscDiffAdded } from "react-icons/vsc";

const DashboardLayout = () => {
  return (
    <div>
      <nav className="navBar">
        <Link className="blogTitle" to="/">
          Cathy's Blog
        </Link>
        <Link to="/write">
          <VscDiffAdded className="addBtn" />
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
