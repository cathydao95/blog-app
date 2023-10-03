import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/create">Create Post</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
