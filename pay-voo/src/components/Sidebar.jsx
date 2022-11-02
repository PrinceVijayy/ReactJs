import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Accounts from "../pages/vertical navbar/Accounts";
import Analytics from "../pages/vertical navbar/Analytics";
import Cards from "../pages/vertical navbar/Cards";
import Payments from "../pages/vertical navbar/Payments";
import Settings from "../pages/vertical navbar/Settings";

function Dashboard() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="sideBar">
      <Row>
        <Col sm={2} className="sideBar-col" style={{padding:"0px"}}>
          <Nav className="flex-column" style={{ height: "400px" }}>
            <Nav.Item className="button">
              <Nav.Link eventKey="first">
                <i className="fas fa-wallet me-2"></i>Accounts
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="button">
              <Nav.Link eventKey="second">
                {" "}
                <i className="fas fa-chart-bar me-2"></i>Analytics
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="button">
              <Nav.Link eventKey="third">
                {" "}
                <i className="fas fa-coins me-2"></i> Cards
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="button">
              <Nav.Link eventKey="fourth">
                {" "}
                <i className="far fa-credit-card me-2"></i> Payments
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="button">
              <Nav.Link eventKey="fifth">
                <i className="fas fa-cogs me-2"></i> Settings
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content className="dashHeight">
            <Tab.Pane eventKey="first">
              <Accounts />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Analytics />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Cards />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <Payments />
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
              <Settings />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Dashboard;
