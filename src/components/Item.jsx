import { Link } from "react-router-dom";

function Item({ id, name, price, image }) {
  return (
    <div className="item-card">
      <img src={image} alt={name} width={200} />
      <h3>{name}</h3>
      <p>${price}</p>
      <Link to={`/producto/${id}`}>Ver Detalle</Link>
    </div>
  );
}

export default Item;