import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import HorizontalNavbar from "./components/HorizontalNavbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <HorizontalNavbar />
      <Sidebar />
      
    </div>
  );
}

export default App;
