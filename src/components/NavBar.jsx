import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav>
      <h1 className="title">Loco's Burguers</h1>
      <ul className="nav-list">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/categoria/Burgas">Burgas</Link></li>
        <li><Link to="/categoria/Papas">Papas Fritas</Link></li>
        <li><Link to="/categoria/Bebidas">Bebidas</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;