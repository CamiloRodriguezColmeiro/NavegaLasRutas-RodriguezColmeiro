import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { totalItems } = useContext(CartContext);

  return (
    <div className="container">
      <span className="icon">🛒</span>
      <span className="badge">{totalItems}</span>
    </div>
  );
}

export default CartWidget;