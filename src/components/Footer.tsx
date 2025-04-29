import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <NavLink className="footer__logo" to="/">
        New Begginings Construction
      </NavLink>
      <div className="footer__links">
        <NavLink className="footer__link--component" to="/">
          Home
        </NavLink>
        <NavLink className="footer__link--component" to="/Services">
          Services
        </NavLink>
        <NavLink className="button footer__quote" to="/Quote">
          Request Quote
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
