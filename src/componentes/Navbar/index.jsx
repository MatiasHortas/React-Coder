import { Link } from "react-router-dom";
import CartWidget from "../cartWidget";
import "./style.css";

import("https://fonts.googleapis.com/css2?family=Castoro+Titling&display=swap");

const NavBar = ({ category }) => {
  console.log(category);
  return (
    <div className="navbar__container">
      <Link to="/tienda">
        <CartWidget />
      </Link>

      <div className="navbar__container-gral ">
        <Link to="/" className="navbar__titulo">
          The Citadel
        </Link>
        <div className="navbar__container--secciones">
          {category.map((cat) => {
            return (
              <Link
                to={`/category/${cat.categoria}`}
                className="navbar__seccion"
              >
                {cat.categoria}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
