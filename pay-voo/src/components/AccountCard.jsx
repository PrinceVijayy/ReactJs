import React from "react";
import Flag_Europe from "../images/Flag_Europe.png";
import Flag_UK from "../images/Flag_UK.png";
const AccountCard = () => {
  return (
    <div className="accountCard">
      <div class=" mt-3">
        <div class="card" style={{  width: "70%"}}>
          <div class="card-body account_card clearfix">
            <img src={Flag_Europe} alt="flag" />
            <span>Euro</span>
            <div className="float_details">
              <span className="status">Active</span>
              <span style={{ marginLeft: "124px", marginRight: "10px" }}>
                Euro 0.00
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class=" mt-3">
        <div class="card" style={{  width: "70%"}}>
          <div class="card-body account_card clearfix">
            <img src={Flag_UK} alt="flag" />
            <span>Pound Sterling</span>
            <div className="float_details">
              <span className="status">Active</span>
              <span style={{ marginLeft: "124px", marginRight: "10px" }}>
                GBP 0.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
