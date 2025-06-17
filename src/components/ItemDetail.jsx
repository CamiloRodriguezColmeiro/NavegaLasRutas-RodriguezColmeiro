import ItemCount from "./ItemCount";

function ItemDetail({ name, description, price, image }) {
  return (
    <div className="item-detail">
      <img src={image} alt={name} width={300} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Precio: ${price}</p>
      <ItemCount stock={5} initial={1} onAdd={(qty) => alert(`Agregaste ${qty}`)} />
    </div>
  );
}

export default ItemDetail;