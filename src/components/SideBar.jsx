import { LineStyle, Money, Report, Timeline, TrendingUp } from "@material-ui/icons";
import React from "react";
import "./SideBar.css";
import "../../src/App.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div className="sideBar">
        <div className="sideBar__body">
          <div className="sideBar__bodyMenu">
            <h4 className="sideBar__MenuTitle">Dashboard</h4>
            <ul className="sideBar__lists ">
            <Link to='/'>
            <li className="sideBar__listItems active">
                <LineStyle className='sideBar__ListIcon'/>
                Home{" "}
              </li>
            </Link>

              <li className="sideBar__listItems">
                <Timeline className='sideBar__ListIcon'/>
                Analytics
              </li>
              <li className="sideBar__listItems">
                <TrendingUp className='sideBar__ListIcon'/>
                Sales
              </li>
            </ul>
          </div>
          <div className="sideBar__bodyMenu">
            <h4 className="sideBar__MenuTitle"> Quick Menu</h4>
            <ul className="sideBar__lists">
             <Link to='/users'>
             <li className="sideBar__listItems">
                <LineStyle className='sideBar__ListIcon'/>
                Users{" "}
              </li>
             </Link>
             <Link to='/products'>
             <li className="sideBar__listItems">
                <Timeline className='sideBar__ListIcon'/>
                Products
              </li>
             </Link>
              <li className="sideBar__listItems">
                <Money className='sideBar__ListIcon'/>
                Transactions
              </li>
              <li className="sideBar__listItems">
                <Report className='sideBar__ListIcon'/>
                Reports
              </li>
            </ul>
          </div>

          <div className="sideBar__bodyMenu">
            <h4 className="sideBar__MenuTitle">Notifications</h4>
            <ul className="sideBar__lists">
              <li className="sideBar__listItems">
                <LineStyle className='sideBar__ListIcon'/>
                Mail{" "}
              </li>
              <li className="sideBar__listItems">
                <Timeline className='sideBar__ListIcon'/>
                Feedback
              </li>
              <li className="sideBar__listItems">
                <TrendingUp className='sideBar__ListIcon'/>
                Messages
              </li>
            </ul>
          </div>

          <div className="sideBar__bodyMenu">
            <h4 className="sideBar__MenuTitle">Staffs</h4>
            <ul className="sideBar__lists">
              <li className="sideBar__listItems">
                <LineStyle className='sideBar__ListIcon'/>
                Manage{" "}
              </li>
              <li className="sideBar__listItems">
                <Timeline className='sideBar__ListIcon'/>
                Analytics
              </li>
              <li className="sideBar__listItems">
                <TrendingUp className='sideBar__ListIcon'/>
                Reports
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
