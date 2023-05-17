import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/Navbar/";
import ItemListContainer from "./componentes/itemListContainer";
import ItemDetalle from "./componentes/ItemDetailContainer";
import caterogyMock from "./componentes/itemListContainer/speciesNav.json";
// import NextPage from "./componentes/nextPage";

const App = () => {
  return (
    <div className="app">
      <header className="app__header">
        <BrowserRouter>
          <NavBar category={caterogyMock.category} />
          <div className="container__principal--titulo"></div>

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/items" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetalle />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>

          {/* <NextPage /> */}
        </BrowserRouter>
      </header>
      <body className="app__body"></body>

      <footer></footer>
    </div>
  );
};

export default App;
