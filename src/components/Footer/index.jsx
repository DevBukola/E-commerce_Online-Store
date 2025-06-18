import styles from "./index.module.css";
import Format from "../customs/Format";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footerBg}>
      <Format>
        <footer className={styles.footer}>
          <div className={styles.footerItems}>
            <div className={styles.footerLogoWrapper}>
              <div className={styles.logo}>
                {/* <img src="null" alt="" /> */}
                <h3>Lustré</h3>
              </div>
              <div className={styles.text}>
                This is an online store where you can shop for clothing,
                perfume, shoes and other related products.
              </div>
              <div className={styles.socials}>
                <img src="null" alt="" />
                <img src="null" alt="" />
                <img src="null" alt="" />
              </div>
            </div>
            <div className={styles.footerLinksWrapper}>
              <div className={styles.links}>
                <h3>Supports</h3>
                <Link to="#">FAQ</Link>
                <Link to="#">Terms of USe</Link>
                <Link to="#">Privacy Policy</Link>
              </div>
              <div className={styles.links}>
                <h3>Company</h3>
                <Link to="#">About Us</Link>
                <Link to="#">Contact</Link>
                <Link to="#">Careers</Link>
              </div>
              <div className={styles.links}>
                <h3>Shop</h3>
                <Link to="#">My Account</Link>
                <Link to="#">Checkout</Link>
                <Link to="#">Cart</Link>
              </div>
            </div>
            {/* <div className={styles.footerPaymentOptions}>
              <h3>Accepted Payments</h3>
              <div>
                <img src="null" alt="" />
                <img src="null" alt="" />
                <img src="null" alt="" />
              </div>
            </div> */}
          </div>
        </footer>
      </Format>
    </div>
  );
};

export default Footer;
