import { useContext } from "react";

import Modal from "../customs/Modal";
import { CartContext } from "../../contexts/CartContext";
import styles from "./index.module.css";
import formatCurrency from "../../utilities/formatting";
import Button from "../customs/Button";
import ProgressContext from "../../contexts/ProgressContext";
import CartItem from "../CartItem";

export default function Cart() {
  const cartCntx = useContext(CartContext);
  const ProgressCntx = useContext(ProgressContext);

  const cartTotal = cartCntx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    ProgressCntx.hideCart();
  }

  function handleProceedToCheckout() {
    ProgressCntx.showCheckout();
  }

  return (
    <Modal
      className={styles.cartModal}
      show={ProgressCntx.progress === "cart"}
      onClose={ProgressCntx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart:</h2>
      <ul>
        {cartCntx.items.map((item) => (
          <CartItem
            key={item.id}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
            onAdd={() => cartCntx.addItem(item)}
            onRemove={() => cartCntx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className={styles.cartTotal}>{formatCurrency.format(cartTotal)}</p>
      <p className={styles.modalActions}>
        <Button onlyText onClick={handleCloseCart}>
          Close
        </Button>
        {/* {cartCntx.items.length > 0 ? (
          <Button onClick={handleCloseCart}>Checkout</Button>
        ) : null} */}
        {cartCntx.items.length > 0 && (
          <Button onClick={handleProceedToCheckout}>Proceed to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
