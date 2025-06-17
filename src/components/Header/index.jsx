import styles from "./index.module.css";
import { Link } from "react-router-dom";
import Button from "../customs/Button";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import ProgressContext from "../../contexts/ProgressContext";

function Header() {
  const cartCntx = useContext(CartContext);
  const ProgressCntx = useContext(ProgressContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const totalCartItems = cartCntx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    ProgressCntx.showCart();
  }

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <header id={styles.headerContainer}>
      <div id={styles.headerTitle}>
        <h1 className={styles.storeName}><Link to='/'>Lustré</Link></h1>
      </div>

      <ul className={`${styles.routeLinks} ${menuOpen ? styles.show : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products " onClick={() => setMenuOpen(false)}>
            Products
          </Link>
        </li>
        <li><Link to='/'>About</Link></li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
      <div className={styles.cartWrapper}>
        <nav>
          <Button onlyText className={styles.cart} onClick={handleShowCart}>
            Cart ({totalCartItems})
          </Button>
        </nav>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {/* <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
    </header>
  );
}

export default Header;
