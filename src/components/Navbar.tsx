import { FC } from "react";
import { NavLink } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <nav className="nav__bar">
      <div className="company__logo">
        <NavLink to="/" className="company__logo--link">
          New Beginnings Construction
        </NavLink>
      </div>
      <div className="nav__links">
        <NavLink className="nav__link--component" to="/">
          Home
        </NavLink>
        <NavLink className="nav__link--component" to="/Services">
          Services
        </NavLink>
        <NavLink className="button" to="/Quote">
          Request Quote
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
