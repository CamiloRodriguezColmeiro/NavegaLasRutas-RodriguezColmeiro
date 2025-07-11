import { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

function ItemDetail({ id, name, description, price, image }) {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = (quantity) => {
    addToCart({ id, name, price, image }, quantity);
    setAdded(true);
  };

  return (
    <div className="item-detail">
      <img src={image} alt={name} width={300} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Precio: ${price}</p>
      {!added ? (
        <ItemCount stock={5} initial={1} onAdd={handleAdd} />
      ) : (
        <p>Producto agregado al carrito</p>
      )}
    </div>
  );
}

export default ItemDetail;