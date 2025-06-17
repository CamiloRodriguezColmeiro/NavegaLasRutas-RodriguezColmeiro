import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  return (
    <div>
      <button onClick={() => setCount(Math.max(1, count - 1))}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(Math.min(stock, count + 1))}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;