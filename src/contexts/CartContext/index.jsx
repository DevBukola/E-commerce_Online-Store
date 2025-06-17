// CartContext.jsx
import { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(cartState, cartAction) {
  if (cartAction.type === "ADD-PRODUCT") {
    const indexOfExistingCartItem = cartState.items.findIndex(
      (item) => item.id === cartAction.item.id
    );

    const updatedItems = [...cartState.items];

    if (indexOfExistingCartItem > -1) {
      const existingItem = updatedItems[indexOfExistingCartItem];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[indexOfExistingCartItem] = updatedItem;
    } else {
      updatedItems.push({ ...cartAction.item, quantity: 1 });
    }

    return { ...cartState, items: updatedItems };
  }

  if (cartAction.type === "REMOVE-PRODUCT") {
    const indexOfExistingCartItem = cartState.items.findIndex(
      (item) => item.id === cartAction.id
    );

    const existingItem = cartState.items[indexOfExistingCartItem];
    const updatedItems = [...cartState.items];

    if (existingItem.quantity === 1) {
      updatedItems.splice(indexOfExistingCartItem, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems[indexOfExistingCartItem] = updatedItem;
    }

    return { ...cartState, items: updatedItems };
  }

    if (cartAction.type === "CLEAR") {
    return { items: [] };
  }


  return cartState;
}

function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD-PRODUCT", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE-PRODUCT", id });
  }

  function clearCart() {
    dispatchCartAction({ type: "CLEAR" });
  }

  useEffect(() => {
    console.log("✅ Cart updated:", cart.items);
  }, [cart.items]);

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContextProvider;
