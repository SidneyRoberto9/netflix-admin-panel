import {
  LineStyle,
  PermIdentity,
  PlayCircleOutline,
  List,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./sidebar.css";

export default function Sidebar() {
  let initial_state = new Array(13).fill(false);

  const [active, setActive] = useState(initial_state);

  const handleActive = (index) => {
    let new_state = new Array(13).fill(false);
    new_state[index] = true;
    setActive(new_state);
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li
                className={
                  active[0] ? "sidebarListItem active" : "sidebarListItem"
                }
                onClick={() => handleActive(0)}
              >
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li
                className={
                  active[1] ? "sidebarListItem active" : "sidebarListItem"
                }
                onClick={() => handleActive(1)}
              >
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/movies" className="link">
              <li
                className={
                  active[2] ? "sidebarListItem active" : "sidebarListItem"
                }
                onClick={() => handleActive(2)}
              >
                <PlayCircleOutline className="sidebarIcon" />
                Movies
              </li>
            </Link>
            <Link to="/lists" className="link">
              <li
                className={
                  active[3] ? "sidebarListItem active" : "sidebarListItem"
                }
                onClick={() => handleActive(3)}
              >
                <List className="sidebarIcon" />
                Lists
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
