import { FC } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/nbcLogo.png";

const Navbar: FC = () => {
  return (
    <nav className="nav__bar">
      <div className="company__logo">
        <img className="nav__logo" src={Logo} alt="" />
        <NavLink to="/" className="company__logo--link">
          New Beginnings Construction
        </NavLink>
      </div>
      <div className="nav__links">
        <NavLink className="nav__link--component" to="/">
          Home
        </NavLink>
        {/* <NavLink className="nav__link--component" to="/">
          About
        </NavLink> */}
        <NavLink className="nav__link--component" to="/Services">
          Services
        </NavLink>
        <NavLink className="nav__link--component" to="/Gallery">
          Gallery
        </NavLink>
        <NavLink className="button nav__quote" to="/Quote">
          Request Quote
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
