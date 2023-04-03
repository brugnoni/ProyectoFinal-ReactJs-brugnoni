import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" className={styles.logo}>
          Hardware TECH
        </Link>

        <ul className={styles.containerList}>
          <li>
            <Link to="/" className={styles.navbarItem}>
              Todas
            </Link>
          </li>
          <li>
            <Link to="/category/oficina" className={styles.navbarItem}>
              Compus de Oficina
            </Link>
          </li>
          <li>
            <Link to="/category/gamer" className={styles.navbarItem}>
              Compus Gamer
            </Link>
          </li>
        </ul>

        <div className={styles.cartWidget}>
          <CartWidget />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Navbar;
