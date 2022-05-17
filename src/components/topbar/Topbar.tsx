import { logout } from "context/authContext/AuthActions";
import { AuthContext } from "context/authContext";
import { Settings } from "@material-ui/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import { User } from "models/user.model";

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  const user: User = JSON.parse(localStorage.getItem("user"));

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
                  <Link
                    to="/login"
                    onClick={() => dispatch(logout())}
                    className="link"
                  >
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
