import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import AddNewAccount from "../pages/sub accounts options/AddNewAccount";
const SubAccounts = () => {
  return (
    <div className="subAccounts">
      <h5>All Accounts</h5>
      <Tab.Container className="nav">
        <Nav className="flex-row justify-content-end ">
          <Nav.Item className="button">
            <Nav.Link eventKey="first">Add new account</Nav.Link>
          </Nav.Item>
          <Nav.Item className="button">
            <Nav.Link eventKey="second">
              <i class="material-icons">widgets</i>{" "}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="button">
            <Nav.Link eventKey="third">
              <i class="material-icons">&#xe8ee;</i>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="button">
            <Nav.Link eventKey="fourth">
              <i class="fa fa-search"></i>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="dashHeight">
          <Tab.Pane eventKey="first">
            <AddNewAccount />
          </Tab.Pane>
          <Tab.Pane eventKey="second"></Tab.Pane>
          <Tab.Pane eventKey="third"></Tab.Pane>
          <Tab.Pane eventKey="fourth"></Tab.Pane>
          <Tab.Pane eventKey="fifth"></Tab.Pane>
        </Tab.Content>
      </Tab.Container>

     
    </div>
  );
};

export default SubAccounts;
