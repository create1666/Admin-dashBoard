import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import React from "react";
import "./User.css";
import {Link } from "react-router-dom";


const User = () => {
  return (
    <div className="userSection">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to='/newUser' className='link'>
        <div className="userCreateButtn">Create</div>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              className="UserShowTop__img"
              src="https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?cs=srgb&dl=pexels-shan-patel-2876486.jpg&fm=jpg"
              alt=""
            />
            <div className="UserShowTop__Title">
              <span className="userShowTop__username">AceHack</span>
              <span className="userShowTop__userTitle">Frontend Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <div className="userShowBottom__Title">Account Details</div>
            <div className="userShowBottom__Info">
              <PermIdentity className="userShowBottom__icon" />
              <span className="userShowBottom__infoTitle">AceHack</span>
            </div>
            <div className="userShowBottom__Info">
              <CalendarToday className="userShowBottom__icon" />
              <span className="userShowBottom__infoTitle">19/07/2021</span>
            </div>
            <div className="userShowBottom__Title">Contact Details</div>
            <div className="userShowBottom__Info">
              <PhoneAndroid className="userShowBottom__icon" />
              <span className="userShowBottom__infoTitle">+234 8143 1675</span>
            </div>
            <div className="userShowBottom__Info">
              <LocationSearching className="userShowBottom__icon" />
              <span className="userShowBottom__infoTitle">Nigeria | Lagos</span>
            </div>
            <div className="userShowBottom__Info">
              <MailOutline className="userShowBottom__icon" />
              <span className="userShowBottom__infoTitle">
                Create1666@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <div className="userUpdateTitle"> Edit </div>
          <form className="userUpdateForm">
            <div className="userUpdateLeftinfo">
              <div className="userUpdateItem">
                <label htmlFor="" className="userUpdateLeftLabel">
                  Username
                </label>
                <input
                    type="text"
                    className="userUpdateLeft"
                    placeholder="create1666"
                  />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="" className="userUpdateLeftLabel">
                  Full Name
                </label>
                <input
                  type="text"
                  className="userUpdateLeft"
                  placeholder="Bolu John"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="" className="userUpdateLeftLabel">
                  Email
                </label>
                <input
                  type="text"
                  className="userUpdateLeft"
                  placeholder="create1666@gmail.com"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="" className="userUpdateLeftLabel">
                  Phone
                </label>
                <input
                  type="text"
                  className="userUpdateLeft"
                  placeholder="+234 8143 1675"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="" className="userUpdateLeftLabel">
                  Address
                </label>
                <input
                  type="text"
                  className="userUpdateLeft"
                  placeholder="Nigeria | Lagos"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?cs=srgb&dl=pexels-shan-patel-2876486.jpg&fm=jpg"
                  alt=""
                />
                <label htmlFor="file" className="userUpdateLbelIcon">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateRight__btn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default User;
