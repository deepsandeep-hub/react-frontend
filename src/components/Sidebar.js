import { Avatar } from "@mui/material";
import React from "react";
import { Link,useLocation } from "react-router-dom";
import './Sidebar.css'
const icon = 'https://png.pngtree.com/element_our/sm/20180517/sm_5afd6324dcce2.png'
function Sidebar() {
  const location = useLocation()
  console.log(location)
  return (
    <div className="side-bar">
      <div class="sidebar">
        <Avatar src={icon} size="small"/>
        <Link className={location.pathname != '/AdminDashboard' ? "active": ""} to="/"> Home</Link>
        <Link className={location.pathname == '/AdminDashboard' ? "active": ""} to="/AdminDashboard">Admin Dashboard</Link>
      </div>
    </div>
  );
}

export default Sidebar;
