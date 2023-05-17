import { Link } from "react-router-dom";
import CartWidget from "../cartWidget";
import "./style.css";

import("https://fonts.googleapis.com/css2?family=Castoro+Titling&display=swap");

const NavBar = ({ category }) => {
  return (
    <div className="navbar__container">
      <CartWidget />

      <div className="navbar__container-gral ">
        <Link to="/" className="navbar__titulo">
          The Citadel
        </Link>
        <div className="navbar__container--secciones">
          {category.map((cat) => {
            return (
              <Link to={`/category/${cat.nombre}`} className="navbar__seccion">
                {cat.nombre}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
