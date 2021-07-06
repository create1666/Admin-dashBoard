import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar__body">
        <div className="navBar__left">
          <span className="logo">Create1666</span>
        </div>
        <div className="navBar__right">
          <div className="navBar__rightIconContainer">
            <NotificationsNone />
            <span className="navBar__rightBadgeNumber">5</span>
          </div>

          <div className="navBar__rightIconContainer">
            <Language />
            <span className="navBar__rightBadgeNumber">5</span>
          </div>

          <div className="navBar__rightIconContainer">
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
