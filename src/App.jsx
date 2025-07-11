import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import NotFound from "./pages/NotFound";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
        <Route path="/producto/:productId" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;