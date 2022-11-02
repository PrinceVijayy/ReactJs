import React from "react";
import logo from "../images/logo.png";
import bell from "../images/bell.png";
import profile from "../images/profile.png";
const HorizontalNavbar = () => {
  return (
    <div className="horizontalNavbar">
      <div className="logo mb-4">
        <img src={logo} alt="payvoo" />
      </div>
      <div className="floated">
        {" "}
        <div className="bell">
          <img src={bell} alt="bell" />
        </div>
        <div className="profile">
          <img src={profile} alt="profile" />
        </div>
        <div className="userName">Laura Johnson</div>
        <div className="dropDown"></div>
      </div>
    </div>
  );
};

export default HorizontalNavbar;
