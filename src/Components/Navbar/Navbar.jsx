import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{ color: "#eeeeee", textDecoration: "none" }}>
          Hardware TECH
        </Link>

        <ul className={styles.containerList}>
          <Link to="/" className={styles.navbarItem}>
            Todas
          </Link>
          <Link to="/category/oficina" className={styles.navbarItem}>
            Compus de Oficina
          </Link>
          <Link to="/category/gamer" className={styles.navbarItem}>
            Compus Gamer
          </Link>
        </ul>
        <CartWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
