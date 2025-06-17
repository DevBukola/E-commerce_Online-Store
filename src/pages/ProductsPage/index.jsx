// import React from "react";
// import Products from "./_partials/Product";
// import styles from "./index.module.css";

// function ProductPage() {
//   return (
//     <div className={styles.productsPageWrapper}>
//       <Products />
//     </div>
//   );
// }

// export default ProductPage;

import React, { useEffect, useState } from "react";
import Sidebar from "./_partials/Sidebar";
import Products from "./_partials/Product";
import styles from "./index.module.css";

function ProductPage() {
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All products");

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/products.json");
      const products = await response.json();
      setLoadedProducts(products);
    }

    fetchProducts();
  }, []);

  const filteredProducts =
    selectedCategory === "All products"
      ? loadedProducts
      : loadedProducts.filter(
          (product) =>
            product.category.toUpperCase() === selectedCategory.toUpperCase()
        );

  return (
    <div className={styles.productsPageWrapper}>
      <Sidebar
        onCategorySelect={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <Products products={filteredProducts} />
    </div>
  );
}

export default ProductPage;
