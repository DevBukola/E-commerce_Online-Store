// import React, { useEffect, useState } from "react";
// import styles from "./index.module.css";
// import ProductItem from "../ProductItem";
// import Sidebar from "../../Sidebar";

// function Products() {
//   const [loadedProducts, setLoadedProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All products");
//   useEffect(() => {
//     async function fetchProducts() {
//       const response = await fetch("/products.json");

//       if (!response.ok) {
//         on;
//       }

//       const products = await response.json();
//       setLoadedProducts(products);
//     }

//     fetchProducts();
//   }, []);

//   const filteredProducts =
//     selectedCategory === "All products"
//       ? loadedProducts
//       : loadedProducts.filter(
//           (product) =>
//             product.category.toUpperCase() === selectedCategory.toUpperCase()
//         );

//   return (
//     <div id={styles.productsWrapper}>
//       <Sidebar onCategorySelect={setSelectedCategory} />
//       <div className={styles.productsGrid}>
//         {filteredProducts.map((product) => (
//           <ProductItem key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;

import ProductItem from "../ProductItem";
import styles from "./index.module.css";

function Products({ products }) {
  return (
    <div id={styles.products}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
