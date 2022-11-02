import React from "react";
import AccountsNavbar from "../../components/AccountsNavbar";
import AccountCard from "../../components/AccountCard";

const Accounts = () => {
  return (
    <div className="accounts">
      <h4 style={{display:"inline-block"}}>Accounts</h4>
      <br />
      <h6 style={{display:"inline-block"}}>Accounts</h6>

      <div className="buttons">
        <button>
          <i className="fa fa-plus"></i> Add Account
        </button>
        <button href="#Analytics">
          <i className="fa fa-refresh"></i> Exchange
        </button>
        <button href="#Payments">
          <i className="fa fa-arrow-right"></i> Send
        </button>
      </div>
      <AccountsNavbar />
      <AccountCard />
    </div>
  );
};

export default Accounts;
