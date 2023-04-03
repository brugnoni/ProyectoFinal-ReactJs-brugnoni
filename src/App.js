import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import Form from "./Components/Form/Form";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:id" element={<ItemListContainer />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route path="/formulario" element={<Form />} />

        <Route path="*" element={<h1> Ingrese un URL válido </h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
