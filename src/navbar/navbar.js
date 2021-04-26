import { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

const Navbar = (props) => {
  const [num, setNum] = useState(3);
  const notifHandler = () => {
    setNum(0);
  };
  return (
    <div className="navbar">
      <div className="logo-and-name">
        <Link to="underdev">
          <i className="material-icons">menu</i>
        </Link>
        <span className="logoname">e-Library</span>
      </div>

      <div className="notifi-and-logout">
        <div className="notification">
          <Link to="/Notification" onClick={notifHandler}>
            <i className="material-icons notif-icon">notifications</i>
            <span className="notif-num">{num}</span>
          </Link>
        </div>
        <Link to="underdev">
          <label className="search material-icons">search</label>
        </Link>

        <Link to="/" className="logout-a">
          <span className="logout material-icons">account_circle</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
