import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <Link
              to="/write"
              state={{ data: { title: "", content: "", isEditing: false } }}
            >
              Create New Post
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
