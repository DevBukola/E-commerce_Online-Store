import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import Button from "../../../../components/customs/Button";
import Format from "../../../../components/customs/Format";

const Hero = () => {
  const navigation = useNavigate();
  const viewCollection = () => {
    navigation("/products");
  };
  return (
    <div className={styles.heroBg}>
      <Format>
        <div className={styles.heroWrapper}>
          <div className={styles.heroMessage}>
            <h1 className={styles.head}>Fresh Arrivals Online</h1>
            <p>Discover Our Newest Collection Today.</p>
            <Button onClick={viewCollection} className={styles.heroBtn}>
              View Collection
            </Button>
          </div>
          <div className={styles.heroImgWrapper}>
            {/* <span className="ellipse"></span> */}
            <img
              className={styles.heroImage}
              src="/product-images/clothe3.jpg"
              alt=""
            />
          </div>
        </div>
      </Format>
    </div>
  );
};

export default Hero;
