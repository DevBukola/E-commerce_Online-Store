import styles from "./index.module.css";

function Sidebar({ onCategorySelect, selectedCategory = () => {} }) {
  const categories = ["All products", "Shoe", "Clothing", "Perfume", "Watch"];

  return (
    <aside id={styles.asideBar}>
      <ul className={styles.tabLists}>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onCategorySelect(category)}
            className={selectedCategory === category ? styles.activeTab : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
