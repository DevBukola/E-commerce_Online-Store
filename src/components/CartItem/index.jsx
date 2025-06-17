import { formatCurrency } from "../../utilities/formatting";
import styles from "./index.module.css";

function CartItem({ title, quantity, price, onAdd, onRemove }) {
  return (
    <div id={styles.cartItem}>
      <span className={styles.props}>
        {title} - {quantity} x {formatCurrency.format(price)}
      </span>
      <div className={styles.cartItemCta}>
        <button onClick={onRemove}>-</button>
        <span>{quantity}</span>
        <button onClick={onAdd}>+</button>
      </div>
    </div>
  );
}

export default CartItem;
