import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/nbcLogo.png";

const Navbar: FC = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <nav className="nav__bar">
      <div className="company__logo">
        <img className="nav__logo" src={Logo} alt="" />
        <NavLink to="/" className="company__logo--link">
          New Beginnings Construction
        </NavLink>
      </div>
      <div className="burger__menu" onClick={updateMenu}>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
      </div>
      <div className={menu_class}>
        <NavLink onClick={updateMenu} className="nav__link--component" to="">
          Home
        </NavLink>
        <NavLink
          onClick={updateMenu}
          className="nav__link--component"
          to="/Services"
        >
          SERVICES
        </NavLink>
        <NavLink
          onClick={updateMenu}
          className="nav__link--component"
          to="/Gallery"
        >
          GALLERY
        </NavLink>
        <NavLink
          onClick={updateMenu}
          className="nav__link--component"
          to="/Quote"
        >
          REQUEST QUOTE
        </NavLink>
      </div>
      <div className="nav__links">
        <NavLink className="nav__link--component" to="/">
          Home
        </NavLink>

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
