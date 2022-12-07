import { Avatar } from "@mui/material";
import React from "react";
import "./Header.css";

const icon = 'https://png.pngtree.com/element_our/sm/20180517/sm_5afd6324dcce2.png'
export default function Header(props) {
  const { countCartItems } = props;
  return (
    <header className="row block center">
      <div className="header-div">
        <a className="header-content" href="/">
          <Avatar src={icon} />
            <h1>OWN GROW CHERISH</h1>
        </a>
      </div>
      {/* <div className="header-div">
        <a href="mailto:sales@hosachiguru.com">Contact Us</a> */}
        {/* <a href="/AdminDashboard">
          AdminPage{" "}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ""
          )}
        </a>{" "}
        <a href="#/signin">SignIn</a> */}
      {/* </div> */}
    </header>
  );
}
