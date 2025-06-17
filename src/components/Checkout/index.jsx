import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import Modal from "../customs/Modal";
import styles from "./index.module.css";
import formatCurrency from "../../utilities/formatting";
import Input from "../customs/Input";
import Button from "../customs/Button";
import ProgressContext from "../../contexts/ProgressContext";

function Checkout() {
  const cartCntx = useContext(CartContext);
  const ProgressCntx = useContext(ProgressContext);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [customerEmail, setCustomerEmail] = useState("");

  const cartTotal = cartCntx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCheckout() {
    ProgressCntx.hideCheckout();
    setOrderSuccess(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const customer = Object.fromEntries(formData.entries());

    setCustomerEmail(customer.Email || customer.email);
    setOrderSuccess(true);

    cartCntx.clearCart();
  }

  return (
    <Modal
      show={ProgressCntx.progress === "checkout"}
      onClose={handleCloseCheckout}
    >
      {orderSuccess ? (
        <div className={styles.successMessage}>
          <h3>Order Received</h3>
          <span className={styles.orderMsg}>
            Thank you for your purchase! We'll reach out to you at{" "}
            <strong>{customerEmail}</strong>.
          </span>
          <Button onClick={handleCloseCheckout}>Close</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3>Checkout</h3>
          <p className={styles.total}>Total Amount: {formatCurrency.format(cartTotal)}</p>

          <Input
            className={styles.input}
            label="Full Name"
            type="text"
            name="fullName"
            required
          />
          <Input
            className={styles.input}
            label="Email"
            type="email"
            name="email"
            required
          />
          <Input
            className={styles.input}
            label="Address"
            type="text"
            name="address"
            required
          />
          <div>
            <Input
              className={styles.input}
              label="Postal Code"
              type="text"
              name="postalCode"
              required
            />
            <Input
              className={styles.input}
              label="State"
              type="text"
              name="state"
              required
            />
            <Input
              className={styles.input}
              label="City"
              type="text"
              name="city"
              required
            />
          </div>

          <div className={styles.actions}>
            <Button onlyText type="button" onClick={handleCloseCheckout}>
              Close
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      )}
    </Modal>
  );
}

export default Checkout;
