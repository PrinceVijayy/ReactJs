import React from "react";
import SubAccounts from "./SubAccounts";

const AccountsNavbar = () => {
  return (
    <div className="accountsNavbar">
      <nav class="slidemenu">
        <input
          type="radio"
          name="slideItem"
          id="slide-item-1"
          class="slide-toggle"
          checked
        />
        <label for="slide-item-1">
          <span>Accounts</span>
        </label>

        <input
          type="radio"
          name="slideItem"
          id="slide-item-2"
          class="slide-toggle"
        />
        <label for="slide-item-2">
          <span>Transactions</span>
        </label>

        <div class="clear"></div>

        <div class="slider">
          <div class="bar"></div>
        </div>
      </nav>
      <SubAccounts />
    </div>
  );
};

export default AccountsNavbar;
