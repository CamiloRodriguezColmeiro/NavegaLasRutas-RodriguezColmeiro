import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../data/products";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = categoryId ? getProductsByCategory : getProducts;
    fetchData(categoryId).then(setItems);
  }, [categoryId]);

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Catálogo de Productos"}</h2>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;