import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

import './Header.css'
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: '#333',
  cursor: "pointer",
  textDecoration: "none",
};
const Header = () => {
  const itemList = useSelector(store => store.cart.items);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="menu" style={{"marginTop": "2rem"}}>
          <Link to="/" className="px-6" style={linkStyle}>Home</Link>
          <Link to="/about" className="px-6" style={linkStyle}>About</Link>
          <Link to="/contact-us" className="px-6" style={linkStyle}>Contact Us</Link>
          <Link to="/cart" className="px-6" style={linkStyle}>Cart ({itemList.length} items)</Link>
          <Link to="/practice" className="px-6" style={linkStyle}>Practice</Link>
      </div>
    </div>
  );
};
export default Header;
