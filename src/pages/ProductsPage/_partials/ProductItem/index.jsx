import React from "react";
import styles from "./index.module.css";
import formatCurrency from "../../../../utilities/formatting";
import Button from "../../../../components/customs/Button";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <li className={styles.productItems}>
        <article className={styles.productItem}>
          <img
            className={styles.productImage}
            src={product.image}
            alt={product.title}
          />
          <div className={styles.productDetail}>
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.productItemPrice}>
              {formatCurrency.format(product.price)}
            </p>
            {/* <p className={styles.productItemDescription}>
              {product.description}
            </p> */}
          </div>
          {/* <div className={styles.productItemCta}>
            <Button>Add to Cart</Button>
          </div> */}
        </article>
      </li>
    </Link>
  );
}

export default ProductItem;
