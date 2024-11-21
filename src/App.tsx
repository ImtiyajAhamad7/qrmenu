import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MenuPage from "./component/MenuPage";
import ReactQRCode from "react-qr-code";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </Router>
    </div>
  );
};

function Home() {
  const menuUrl = `${window.location.origin}/menu`;
  return (
    <div>
      <h1>Welcome to Our Food Court</h1>
      <p>Scan the QR code to see our menu!</p>

      <ReactQRCode value={menuUrl} size={256} />

      <p>
        Or visit the menu <Link to={"/menu"}>here</Link>
      </p>
    </div>
  );
}

export default App;
