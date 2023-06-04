import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import NavBar from "./componentes/Navbar/";
import ItemListContainer from "./componentes/itemListContainer";
import ItemDetalle from "./componentes/ItemDetailContainer";
import CartView from "./componentes/Cart";
import { useEffect, useState } from "react";
import { getCollection } from "./utils/getFirestore";
import FormClient from "./componentes/Form";

const App = () => {
  const [categoria, setCategoria] = useState();

  useEffect(() => {
    getCollection("categorias").then((result) => {
      console.log(result);
      setCategoria(result);
    });
  }, []);

  return (
    <div className="app">
      <header className="app__header">
        <BrowserRouter>
          {categoria ? <NavBar category={categoria} /> : null}

          <div className="container__principal--titulo"></div>
          <Routes>
            <Route path="/tienda" element={<CartView />} />
            <Route path="/form" element={<FormClient />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/items" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetalle />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </header>
      <body className="app__body"></body>

      <footer></footer>
    </div>
  );
};

export default App;
