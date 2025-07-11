import { createContext, useState, useContext } from "react";


export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const itemInCart = cart.find(prod => prod.id === item.id);
    if (itemInCart) {
      setCart(cart.map(prod =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(prod => prod.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, prod) => acc + prod.quantity, 0);

const total = () => {
  return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
}