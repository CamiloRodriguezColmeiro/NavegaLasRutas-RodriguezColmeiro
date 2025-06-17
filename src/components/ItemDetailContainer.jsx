import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId).then(setProduct);
  }, [productId]);

  return (
    <div className="item-detail-container">
      {product ? <ItemDetail {...product} /> : <p>Cargando producto...</p>}
    </div>
  );
}

export default ItemDetailContainer;