import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/customs/Button";
import styles from "./index.module.css";
import { ReviewButton } from "../../components/customs/ReviewButton";
import { CiHeart } from "react-icons/ci";
import DescriptionBox from "./_partials/DescriptionBox";
import { CartContext } from "../../contexts/CartContext";
import formatCurrency from "../../utilities/formatting";

function ProductDetail() {
  const { pId } = useParams();
  const [product, setProduct] = useState(null);
  const cartCntx = useContext(CartContext);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/products.json");
      const value = await response.json();
      const individualProduct = value.find((item) => item.id === parseInt(pId));
      setProduct(individualProduct);
    }
    fetchProducts();
  }, [pId]);

  if (!product) return <p>Loading Product...</p>;

  function handleAddProductToCart() {
    cartCntx.addItem(product);
  }

  return (
    <div>
      <div id={styles.individualProductDetail}>
        <div className={styles.itemWrapper}>
          <div className={styles.imageContainer}>
            <img className={styles.img} src={product.image} alt="" />
          </div>
          <div className={styles.itemProperties}>
            <h3 className={styles.itemName}>{product.title}</h3>
            <div>
              <div className={styles.rating}>
                <div className={styles.itemaRating}>
                  <ReviewButton
                    label={
                      product.review ? (
                        <span>
                          <span className="review-one">
                            {product.review.review1 || "N/A"}
                          </span>{" "}
                          -
                          <span className="review-two">
                            {product.review.review2 || "N/A"}
                          </span>
                        </span>
                      ) : (
                        "Not yet rated."
                      )
                    }
                    className={styles.itemReview}
                  />
                </div>
              </div>
            </div>
            <h4 className={styles.itemPrice}>
              {formatCurrency.format(product.price)}
            </h4>

            <h3 className={styles.description}>{product.description}</h3>

            <div className={styles.itemAddToCart}>
              <Button
                onClick={handleAddProductToCart}
                className={styles.cartButton}
              >
                ADD TO CART
              </Button>
              <CiHeart className={styles.heart} />
            </div>
            <div className={styles.shipping}>
              - FREE SHIPPING ON ORDERS $100+
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
