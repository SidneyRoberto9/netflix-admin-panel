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
            <div className="dropdown">
              <button className="dropbtn">
                <Settings />
              </button>
              <div className="dropdown-content">
                <span>
                  <Link to="/login" onClick={() => dispatch(logout())}>
                    logout
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <img src={user.profilePic} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
