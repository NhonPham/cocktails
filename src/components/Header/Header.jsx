import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="https://i.imgur.com/y9iYyZV.png" alt="" />
        Cocktail
      </div>
      <ul className="header-link">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
