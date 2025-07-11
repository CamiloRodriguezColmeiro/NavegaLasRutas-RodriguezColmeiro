import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div>
        <h2>Carrito vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Tu Carrito</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
}

export default Cart;