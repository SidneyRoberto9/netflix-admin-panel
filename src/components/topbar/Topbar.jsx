import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";
import { Settings } from "@material-ui/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Netflix-API Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <div class="dropdown">
              <button class="dropbtn">
                <Settings />
              </button>
              <div class="dropdown-content">
                <a href="/login">
                  <Link to="/login" onClick={() => dispatch(logout())}>
                    <span>logout</span>
                  </Link>
                </a>
              </div>
            </div>
          </div>
          <img src={user.profilePic} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
