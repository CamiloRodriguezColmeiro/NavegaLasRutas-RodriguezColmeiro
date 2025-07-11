import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useCart } from "../context/CartContext";

function CheckoutForm() {
  const { cart, total, clearCart } = useCart();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "telefono" && !/^\d*$/.test(value)) return;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { nombre, apellido, telefono, email } = formData;
    if (!nombre || !apellido || !telefono || !email) {
      setError("Todos los campos son obligatorios");
      return false;
    }
    if (!/^\d{6,}$/.test(telefono)) {
      setError("El teléfono debe tener solo números y al menos 6 dígitos");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("El email no tiene un formato válido");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    const order = {
      comprador: formData,
      items: cart.map(item => ({
        id: item.id,
        nombre: item.name,
        precio: item.price,
        cantidad: item.quantity,
      })),
      total: total(),
      fecha: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "ordenes"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (err) {
      console.error("Error al crear orden:", err);
      setError("Error al guardar la orden. Intente más tarde.");
    }
  };

  if (orderId) {
    return (
      <div>
        <h2>✅ Orden generada con éxito</h2>
        <p><strong>ID de la orden:</strong> {orderId}</p>
        <h3>Resumen</h3>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} x {item.quantity} = ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p><strong>Total:</strong> ${total()}</p>
        <p><strong>Comprador:</strong> {formData.nombre} {formData.apellido}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Teléfono:</strong> {formData.telefono}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Finalizar Compra</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
        />
        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
}

export default CheckoutForm;