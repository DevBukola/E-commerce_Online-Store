import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import ProductItem from "../../../ProductsPage/_partials/ProductItem";
4;

function BestSelling() {
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/products.json");

      if (!response.ok) {
      }
      const products = await response.json();

      const selected = products.slice(0, 4);
      setBestProducts(selected);
    }
    fetchProducts();
  }, []);
  return (
    <div>
      <div className={styles.bestSelling}>
        <p className={styles.bestSellingParag}>Shop Now</p>
        <h1 className={styles.bestSellingHeader}>Best Selling</h1>
      </div>
      <div className={styles.productsGrid}>
        {bestProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default BestSelling;
